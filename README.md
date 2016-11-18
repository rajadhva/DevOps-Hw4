# DevOps-Hw4

#### Docker Compose

1. The repo consists of the docker files and the docker-compose file that is needed to build the images.
2. Install docker and docker compose 
3. run the following commands to create and run the containers
Start the docker daemon on the machine
sudo docker-compose up.

4. Inside node folder run npm install for the dependencies and the run node infrastructure.js, that will help spawn new containers.

5. run sudo docker ps -a to check the created container.

#### Docker-Deploy

1. Create a digital ocean droplet and ssh into it.
2. Install git ,docker and nodejs.
3. Clone the node.js app from the advance docker workshop
4. Use the Deployment workshop to create a infrastructure for blue node.
5. Add a the post-commit hook present in the Deploy folder of the repo and giveit execute permissions using chmod 777 post-commit command
6. Go to Deployment/deploy/blue.git/hooks folder and add the post receive hook present in the Deploy folder and give it execute permissions.
7. As specified in the advanced docker workshop use the follwoing command to create a registry for images docker run -d -p 5000:5000 --restart=always --name registry registry:2
8. Add a remote using the follwoing command of the deployment workshop git remote add blue file://$ROOT/blue.git here $Root is the path till blue.git.
8. Make some changes to the main.js file and then commit . A new docker container will be built and pushed to the registry.
8. On doing a git push , the post-receive hook will be invoked and the container would be pulled and deployed.
9. run curl ipaddress:port to check the output.

#### FILE IO

1.  Install vagrant and run the commands vagrant up and vagrant ssh to run and ssh into the image.
2. Install docker on it.
3. Create 2 folders container1 and container2 in it. Paste the docker files present in each of the folders in the bonus folders ni the repo.
3. run cd container. Now run the below commands:

sudo docker build -t container1 .
sudo docker run -d --name container1 container1

4. Now cd into container 2 and run the below commands:

sudo docker build -t container2 .
sudo docker run --link container1:container1 --rm -it --name container2 container2 curl container1:9001

5. The above commands create a link between container and container2 and we can see the output from the legacy file in the second container.

#### ScreenCast

https://youtu.be/uLDh0TZNlRg

https://youtu.be/mY1baCK7QgU

https://youtu.be/JvoeRq_aB-o
