#!/bin/bash

sudo apt-get update

sudo apt-get install -y default-jdk maven tmux emacs

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo npm install -g npm

printf "\n\nAdd\niptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to 8080\nto /etc/rc.local\n"
