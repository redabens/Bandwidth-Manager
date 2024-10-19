const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Client } = require('ssh2');
const { io } = require('socket.io-client');
const  Metric = require('./models/metrics.cjs'); // Adjust the path as necessary
const userRoute = require('./routes/userRoute.cjs'); // Adjust the path as necessary

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use('/auth', userRoute);


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

const collectMetrics = async ()=>{
    const socket = io('http://192.168.1.66:5000');

socket.on('connect', () => {
    console.log('Connecté au serveur Flask via WebSocket');
});

socket.on('metrics_update', (data) => {
    console.log('Métriques mises à jour:', data.metrics);
});

// Gère la déconnexion
socket.on('disconnect', () => {
    console.log('Déconnecté du serveur Flask');
});
}

app.get('/api/bandwidth', async (req,res)=>{
    try {
        const rawData = await BandwidthData.find().sort({ timestamp: -1 }).limit(50);
        const data = rawData.map(entry => ({
            timestamp: entry.timestamp.toISOString(),
            client_id: entry.clientID,
            interface_speed: entry.bw_requested,
        }));
        console.log("data",data);
        res.set('Content-Type', 'application/json'); // Définir le Content-Type manuellement
        res.json(data); // Assurez-vous que ça renvoie bien du JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }    
})
const axios = require('axios');

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

// Exemple d'utilisation
/*setBandwidth('server', 4);  // 4 Mbps pour le serveur
setBandwidth('client1', 2);  // 2 Mbps pour le client1
setBandwidth('client2', 2);  // 2 Mbps pour le client2*/
collectMetrics();
// Démarrer la collecte des métriques toutes les secondes
// collectMetrics('client1');
// adjustBandwidth('client1',8);
// setInterval(() => {
//     collectMetrics('client1');
//     collectMetrics('client2');
// }, 1000); // 1000 ms = 1 seconde

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});