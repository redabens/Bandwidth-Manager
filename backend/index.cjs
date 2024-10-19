const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Client } = require('ssh2');
const { io } = require('socket.io-client');
const  Metric = require('./models/metrics.cjs'); // Adjust the path as necessary
const axios = require('axios');
const userRoute = require('./routes/userRoute.cjs'); // Adjust the path as necessary
const metricsRoute = require('./routes/metrics.cjs'); 

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use('/auth', userRoute);
app.use('/metrics',metricsRoute);


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

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});