# Dockerfile pour les clients
FROM alpine:latest

# Installer iproute2
RUN apk add --no-cache iproute2 iperf3

# Exécuter une commande par défaut
CMD ["tail", "-f", "/dev/null"]
