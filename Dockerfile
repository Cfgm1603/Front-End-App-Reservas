# Specify the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY public/ /app/public
COPY src/ /app/src
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
