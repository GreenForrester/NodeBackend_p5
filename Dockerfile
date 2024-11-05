# official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory, test
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install typescript @types/node @types/express
RUN npm install --save-dev tsc-watch

# Create the log directory
RUN mkdir -p /var/log/app 

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

RUN npx prisma generate --schema=./src/ca_infrastructure/database/prisma/mongodb/schema.mongodb.prisma


#COPY ./src/ca_infrastructure/database/generated ./dist/ca_infrastructure/database/generated

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/bin/www.js"]
