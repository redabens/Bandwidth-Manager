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
  }, []);

  const transformedData = metrics
  .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)) // Tri du moins récent au plus récent
  .reduce((acc, metric) => {
    const timestamp = new Date(metric.timestamp).toLocaleTimeString(); // Format le timestamp

    // Cherche si un objet avec ce timestamp existe déjà
    let existingEntry = acc.find(entry => entry.time === timestamp);

    if (existingEntry) {
      // Si oui, ajoute le bw_requested pour ce client
      existingEntry[`${metric.clientID}`] = metric.bw_requested;
    } else {
      // Sinon, crée un nouvel objet pour ce timestamp
      acc.push({ time: timestamp, [`${metric.clientID}`]: metric.bw_requested });
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
        {uniqueClients.map(clientID => (
          <Line
            key={clientID}
            type="monotone"
            dataKey={clientID}
            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            dot={false} // Désactiver les points
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BandwidthChart;
