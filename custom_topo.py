import subprocess
from mininet.net import Mininet
from mininet.node import OVSController, OVSBridge
from mininet.link import TCLink
from mininet.log import setLogLevel, info
from mininet.cli import CLI
from flask import Flask, request, jsonify
from flask_socketio import SocketIO
import threading
import time
from flask_cors import CORS
import traceback  # Import to capture detailed exceptions

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize SocketIO
# socketio = SocketIO(app)

# Global variables
net = None

# Flask route to set bandwidth
@app.route('/set_bandwidth', methods=['POST'])
def set_bandwidth():
    data = request.get_json()
    host_name = data.get('host')
    rate = data.get('rate')

    if not host_name or not rate:
        return {'error': 'Missing parameters'}, 400

    try:
        host = net.get(host_name)
        interface = host.intf()  # Get the interface associated with the host
        info(f"Setting bandwidth to {rate} Mbps on {host_name}\n")
        interface.config(bw=float(rate))
        info(f"Interface params after config: {interface.params}\n")  # Log params after config
        return {'result': f"Bandwidth set to {rate} Mbps on {host_name}"}, 200
    except Exception as e:
        return {'error': str(e)}, 500

@app.route('/emit_metrics', methods=['GET'])
def emit_metrics():
    """
    Route to emit metrics and return them immediately.
    """
    metrics = {}
    try:
        for host in net.hosts:
            # Utilisez ifconfig pour obtenir les octets reçus et envoyés
            ifconfig_output = host.cmd(f"ifconfig {host.intf().name}")
            info(f"ifconfig output for {host.name}: {ifconfig_output}\n")

            # Analysez le résultat pour obtenir les octets reçus et envoyés
            received_bytes, sent_bytes = parse_bytes_from_ifconfig(ifconfig_output)

            # Utilisation de `tc` pour obtenir la bande passante actuelle
            tc_output = host.cmd(f"tc class show dev {host.intf().name}")
            info(f"TC output for {host.name}: {tc_output}\n")

            # Ajoutez ici une logique supplémentaire pour extraire la valeur de bande passante (bw) du résultat de tc_output
            bw = parse_bw_from_tc_output(tc_output)  # Par exemple, vous pouvez écrire cette fonction pour analyser le résultat

            metrics[host.name] = {
                'ip': host.IP(),
                'client_id': host.name,
                'current_bandwidth': bw,
                'bytes_received': received_bytes,
                'bytes_sent': sent_bytes,
            }
            info(f"Metrics for {host.name}: {metrics[host.name]}\n")  # Log metrics

        return {'status': 'Metrics emitted', 'metrics': metrics}, 200

    except Exception as e:
        # Gérer les exceptions et imprimer les détails de l'erreur
        info(f"Error collecting metrics: {traceback.format_exc()}\n")
        return {'error': str(e)}, 500

def parse_bw_from_tc_output(tc_output):
    # Recherche et extraction du nombre avant 'Mbit'
    for line in tc_output.splitlines():
        if 'Mbit' in line:
            # Recherche du mot suivi de 'Mbit', puis récupère la valeur avant 'Mbit'
            bw_value = line.split()  # Prend la première valeur avant 'Mbit'
            return float(bw_value[7].replace('Mbit', ''))  # Retourne la valeur en float
    return 0  # Valeur par défaut si aucune bande passante trouvée


#fonction pour extraire les octets envoyer et recus
def parse_bytes_from_ifconfig(ifconfig_output):
    received_bytes = 0
    sent_bytes = 0
    for line in ifconfig_output.splitlines():
        if 'RX packets' in line:  # Ligne contenant RX packets et RX bytes
            parts = line.split()
            received_bytes = int(parts[4])  # 5e élément après 'RX packets', soit 'bytes'
        elif 'TX packets' in line:  # Ligne contenant TX packets et TX bytes
            parts = line.split()
            sent_bytes = int(parts[4])  # 5e élément après 'TX packets', soit 'bytes'
    return received_bytes, sent_bytes

# Start Flask server in a thread
def start_flask():
    app.run(host='0.0.0.0', port=5000)

# Configure and start Mininet network
def custom_topo():
    global net
    net = Mininet(controller=OVSController, switch=OVSBridge, link=TCLink)  # Use TCLink for traffic control

    # Adding hosts
    info('*** Adding server and clients\n')
    server = net.addHost('server', ip='192.168.1.100/24')
    client1 = net.addHost('client1', ip='192.168.1.101/24')
    client2 = net.addHost('client2', ip='192.168.1.102/24')

    # Add switch
    switch = net.addSwitch('s1')

    # Create links between hosts and the switch using TCLink
    info('*** Creating links\n')
    net.addLink(server, switch, cls=TCLink)
    net.addLink(client1, switch, cls=TCLink)
    net.addLink(client2, switch, cls=TCLink)

    # Start the network
    info('*** Starting network\n')
    net.start()

    # Initial bandwidth limits on interfaces
    info('*** Configuring initial bandwidth limits\n')
    server.intf().config(bw=4)   # Server bandwidth at 4 Mbps
    client1.intf().config(bw=2)  # Client1 bandwidth at 2 Mbps
    client2.intf().config(bw=2)  # Client2 bandwidth at 2 Mbps

    # Print out bandwidth parameters for debugging
    info(f"Server bandwidth: {server.intf().params.get('bw')}\n")
    info(f"Client1 bandwidth: {client1.intf().params.get('bw')}\n")
    info(f"Client2 bandwidth: {client2.intf().params.get('bw')}\n")

    # Launch a CLI interface to interact with the network
    CLI(net)

    # Stop the network after use
    net.stop()

if __name__ == '__main__':
    setLogLevel('info')

    # Start Flask server in a separate thread
    flask_thread = threading.Thread(target=start_flask)
    flask_thread.start()

    # Start the Mininet topology
    custom_topo()