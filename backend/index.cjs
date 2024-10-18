const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
// Fonction pour collecter les métriques
const collectMetrics = (clientName) => {
    const conn = new Client();
    const sshConfig = {
        host: '192.168.1.66', // Remplacez par l'IP de votre VM Ubuntu
        port: 22,
        username: 'mininet', // Remplacez par votre nom d'utilisateur sur la VM
        privateKey: require('fs').readFileSync('C:\\Users\\redab\\.ssh\\id_rsa') // Chemin vers votre clé privée
    };
    let nb = 0;
    if(clientName === 'client1'){
        nb = '2';
    }
    else if(clientName === 'client2'){
        nb = '3';
    }else{
        nb = '1';
    }
    const command = `tc -s qdisc show dev s1-eth${nb}`; // Commande pour récupérer les métriques

    conn.on('ready', () => {
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                conn.end();
            }).on('data', (data) => {
                // Extraction des octets envoyés pour chaque client
                const regex = /Sent\s+(\d+)\s+bytes/g;
                let match;
                const metrics = {};
                let bytesSent = 0

                while ((match = regex.exec(data)) !== null) {
                    // Le nombre d'octets envoyés est dans le premier groupe de capture
                    bytesSent = match[1];
                }
                console.log(`Métriques collectées pour ${clientName}: ${bytesSent}`);
                
                // Enregistrer les métriques dans la base de données
                // const newMetric = new Metric({ clientName, metrics: data });
                // newMetric.save()
                //     .then(() => console.log('Métriques sauvegardées!'))
                //     .catch(err => console.error('Erreur lors de la sauvegarde des métriques:', err));
            }).stderr.on('data', (data) => {
                console.error(`Erreur: ${data}`);
            });
        });
    }).connect(sshConfig);
};

const adjustBandwidth = (clientName, newBandwidth) => {
    const conn = new Client();
    const sshConfig = {
        host: '192.168.1.66', // Remplacez par l'IP de votre VM Ubuntu
        port: 22,
        username: 'mininet', // Remplacez par votre nom d'utilisateur sur la VM
        privateKey: require('fs').readFileSync('C:\\Users\\redab\\.ssh\\id_rsa') // Chemin vers votre clé privée
    };
    let nb = 0;
    if(clientName === 'client1'){
        nb = '2';
    }
    else if(clientName === 'client2'){
        nb = '3';
    }else{
        nb = '1';
    }
    const command = `sudo tc class change dev s1-eth${nb} parent 1: classid 1:1 htb rate 1mbit ceil ${newBandwidth}mbit`;

    conn.on('ready', () => {
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                conn.end();
                console.log(`Bande passante ajustée pour ${clientName} à ${newBandwidth}kbit`);
            }).stderr.on('data', (data) => {
                console.error(`Erreur lors de l'ajustement de la bande passante: ${data}`);
            });
        });
    }).connect(sshConfig);
};
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