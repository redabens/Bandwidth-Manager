import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BandwidthChart = () => {
  const [metrics, setMetrics] = useState([]);
  
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get("http://localhost:3000/metrics");
        console.log(response.data);
        setMetrics(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMetrics();
    setInterval(()=>{
      fetchMetrics();
    },30000);
  }, []);

  // const transformedData = metrics
  // .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)) // Tri du moins récent au plus récent
  // .reduce((acc, metric) => {
  //   const timestamp = new Date(metric.timestamp).toLocaleTimeString(); // Format le timestamp

  //   // Cherche si un objet avec ce timestamp existe déjà
  //   let existingEntry = acc.find(entry => entry.time === timestamp);

  //   if (existingEntry) {
  //     // Si oui, ajoute le bw_requested pour ce client
  //     existingEntry[`${metric.clientID}`] = metric.bw_requested;
  //   } else {
  //     // Sinon, crée un nouvel objet pour ce timestamp
  //     acc.push({ time: timestamp, [`${metric.clientID}`]: metric.bw_requested });
  //   }
    
  //   return acc;
  // }, []);
  // Regrouper les métriques par timestamp en ignorant ceux qui sont à moins de 5 secondes
  const transformedData = metrics
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)) // Tri du moins récent au plus récent
    .reduce((acc, metric) => {
      const currentTimestamp = new Date(metric.timestamp);
      const formattedTime = currentTimestamp.toLocaleTimeString(); // Format le timestamp
      
      // Vérifie si le dernier élément dans acc est à moins de 5 secondes
      const lastEntry = acc[acc.length - 1];
      if (lastEntry) {
        const lastTimestamp = new Date(lastEntry.time).getTime();
        const timeDifference = (currentTimestamp.getTime() - lastTimestamp) / 1000; // Différence en secondes

        // Ignore si la différence est inférieure à 5 secondes
        if (timeDifference < 5) {
          return acc; // Retourne l'accumulateur sans ajouter la nouvelle entrée
        }
      }

      // Cherche si un objet avec ce timestamp existe déjà
      let existingEntry = acc.find(entry => entry.time === formattedTime);

      if (existingEntry) {
        // Si oui, ajoute le bw_requested pour ce client
        existingEntry[`${metric.clientID}`] = metric.bw_requested;
      } else {
        // Sinon, crée un nouvel objet pour ce timestamp
        acc.push({ time: formattedTime, [`${metric.clientID}`]: metric.bw_requested });
      }
      
      return acc;
    }, []);

  // Obtenir des clients uniques pour les lignes
  const uniqueClients = [...new Set(metrics.map(metric => metric.clientID))];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={transformedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            key='server'
            type="monotone"
            dataKey='server'
            stroke='#2a9d8f'
            dot={false} // Désactiver les points
          />
        <Line
            key='client1'
            type="monotone"
            dataKey='client1'
            stroke='#e9c46a'
            dot={false} // Désactiver les points
          />
          <Line
            key='client2'
            type="monotone"
            dataKey='client2'
            stroke='#7D4FFE'
            dot={false} // Désactiver les points
          />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BandwidthChart;
