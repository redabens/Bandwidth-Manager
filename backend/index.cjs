const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const  Metric = require('./models/metrics.cjs'); // Adjust the path as necessary
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User= require('./models/User.cjs'); // Adjust the path as necessary
const axios = require('axios');
const bodyParser = require("body-parser");
const userRoute = require('./routes/userRoute.cjs'); // Adjust the path as necessary
const metricsRoute = require('./routes/metrics.cjs');
const app = express();
const port = 3000;
const secret = 'MARNSTACK'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// MongoDB connection with error handling
mongoose.connect(
    'mongodb+srv://redabens:Redabens2004..@cluster-rs.iwvq9.mongodb.net/bandwidth'
)
.then(() => {
    console.log('MongoDB connected successfully....');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use('/auth', userRoute);
app.use('/metrics',metricsRoute);
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier si l'utilisateur existe
        const userExist = await User.findOne({ email: email });
        
        console.log(userExist);
        if (!userExist) {
            return res.status(404).json({ error: "User doesn't exist!" });
        }

        // Vérifier si le mot de passe est valide
        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password!" });
        }

        // Générer un token JWT
        const token = jwt.sign({ _id: userExist._id }, secret, { expiresIn: 86400 });
        return res.status(200).send({ token });
    } catch (error) {
        // Gestion des erreurs
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
const collectMetrics = async () => {
    try {
        const response = await axios.get('http://192.168.1.66:5000/emit_metrics');
        if (response.status === 200) {
            const metrics = response.data.metrics;  // Accédez à l'objet metrics
            for (const node in metrics) {
                const metric = metrics[node];  // Obtenez les détails du nœud
                // Vous pouvez maintenant enregistrer vos métriques dans la base de données ici
                const metricToSave = new Metric({
                    clientID: metric.client_id,
                    bw_requested: parseInt(metric.bytes_received),
                    IP: metric.ip,
                    bytes_requested: parseInt(metric.bytes_received),
                    bytes_send: parseInt(metric.bytes_sent)
                });
                await metricToSave.save();
            }
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi des paramètres:', error.message);
    }    
}

// Fonction pour envoyer la bande passante à Flask
async function setBandwidth(host, rate) {
  try {
    const response = await axios.post('http://<IP_VM>:5000/set_bandwidth', {
      host: host,
      rate: rate
    });
    console.log('Réponse du serveur Flask:', response.data);
  } catch (error) {
    console.error('Erreur lors de l\'envoi des paramètres:', error.message);
  }
}
setInterval(()=>{
    collectMetrics();
},5000)
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});