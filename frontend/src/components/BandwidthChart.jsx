import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'; // Assurez-vous d'avoir axios installé pour faire des requêtes API

const BandwidthChart = () => {
    const [data, setData] = useState([]);

    // Fonction pour récupérer les données de la base de données
    const fetchData = async () => {
        try {
            axios.get('/api/bandwidth',{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res)=>{
                if (res.status === 200){
                    setData(res.data);
                }
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 5000); // Récupérer les données toutes les 5 secondes

        fetchData(); // Appel initial

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    // Récupération des clients uniques pour créer des lignes distinctes
    // const clients = [...new Set(data.map(entry => entry.client_id))];

    return (
        <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="interface_speed" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </ResponsiveContainer>
    );
};

export default BandwidthChart;
