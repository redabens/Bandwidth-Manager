import React, { useEffect } from 'react';
import { DataSet, Network } from "vis-network/standalone/esm/vis-network";

const NetTopology = () => {
  useEffect(() => {
    const nodes = new DataSet([
      { id: 1, label: "Manager", group: "manager", x: 0, y: -200, fixed: true },  // Manager node (top)
      { id: 2, label: "Switch", group: "switch", x: 0, y: 0, fixed: true },      // Switch node (middle)
      { id: 3, label: "User 1", group: "user", x: -100, y: 200, fixed: true },    // User 1 node (bottom-left)
      { id: 4, label: "User 2", group: "user", x: 100, y: 200, fixed: true },     // User 2 node (bottom-right)
    ]);

    const edges = new DataSet([
      { from: 1, to: 2, arrows: "to", color: { color: '#6096BA' } }, // Manager to switch
      { from: 2, to: 3, arrows: "to", color: { color: '#6096BA' } },  // Switch to User 1
      { from: 2, to: 4, arrows: "to", color: { color: '#6096BA' } },  // Switch to User 2
    ]);

    const container = document.getElementById('network-graph');
    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: 'dot', // Default shape for nodes
        size: 25, // Smaller node size to reduce the chart size
        font: { size: 14, color: '#000' }, // Adjusted font size for labels
        margin: 8
      },
      groups: {
        manager: {
          shape: 'box', // Manager node as a circle
          color: { background: '#B1E3FF', border: 'transparent' }, // Background color
          font: { size: 16, color: 'black', align: 'top' }, // Font size for manager node
        },
        switch: {
          shape: 'ellipse', // Switch node as a box
          color: { background: '#A1E3CB', border: 'transparent' }, // Background color
          font: { size: 16, color: 'black', align: 'top' }, // Font size for switch node
        },
        user: {
          shape: 'box', // Users as ellipses
          color: { background: '#A8C5DA', border: 'transparent' }, // Background color
          font: { size: 14, color: 'black', align: 'bottom' }, // Adjusted font size for user nodes
        }
      },
      edges: {
        width: 2, // Edge thickness
        arrows: {
          to: { enabled: true, scaleFactor: 1.2 }, // Directional arrows for edges
        },
        color: { inherit: false }, // Don't inherit the color from nodes
      },
      physics: {
        enabled: false, // Disable physics to make nodes stay in place
      },
      layout: {
        hierarchical: false, // Disable hierarchical to use manual positioning
      },
      interaction: {
        zoomView: false, // Désactive le zoom
      }
    };

    new Network(container, data, options);
  }, []); // The empty array ensures this effect runs only once when the component is mounted

  return (
    <>
      <div>Visualization of network topology</div>
      <div id="network-graph" style={{ width: "100%", height: "500px", minWidth: "450px", // Taille minimale pour éviter la réduction trop importante
        minHeight: "470px" }}></div>
    </>
  );
};

export default NetTopology;
