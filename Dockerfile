# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the Vite application will run on
EXPOSE 5173

# Build the Vite application
RUN npm run build

# Specify the command to run the application
CMD ["npm", "run", "dev"]

# Optional: You can set environment variables if needed
 ENV NODE_ENV=production

# Optional: You can use a non-root user for better security
# USER node
