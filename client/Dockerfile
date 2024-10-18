FROM ubuntu:20.04

# Installer les outils nécessaires
RUN apt-get update && apt-get install -y iproute2 iputils-ping procps

# Vérifier que tc est installé et disponible
RUN which tc || (echo "tc is not installed" && exit 1)

CMD ["bash"]