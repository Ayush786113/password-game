#Dockerfile

# Use this image as the platform to build the app
FROM node:18-alpine

# The WORKDIR instruction sets the working directory for everything that will happen next
WORKDIR /app

# Copy all local files into the image
COPY . .

# Clean install all node modules
RUN npm ci

# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["npm","run", "dev"]