#!/bin/bash

sudo apt-get install -y default-jdk maven tmux emacs

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install -y nodejs

printf "\n\nAdd\niptables -t nat -A OUTPUT -o lo -p tcp --dport 80 -j REDIRECT --to-port 8080\nto /etc/rc.local\n"
