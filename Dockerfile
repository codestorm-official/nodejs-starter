# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Start
CMD ["node", "server.js"]