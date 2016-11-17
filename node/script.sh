#!/bin/sh
PORT="$1"
sudo docker build -t vaibhav/new /home/vagrant/DevOps-Hw4/node/
sudo docker run -d -p $PORT:3000 vaibhav/new

