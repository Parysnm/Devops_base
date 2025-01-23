#!/usr/bin/env bash
# Script User Data - Installation de Node.js et exécution d'une app
yum update -y
curl -sL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs

# Télécharger l'application depuis votre dépôt GitHub
curl -o /home/ec2-user/app.js \
  https://raw.githubusercontent.com/Parysnm/Devops_base/main/ch1/sample-app/app.js

# Lancer l'application Node.js
nohup node /home/ec2-user/app.js &

