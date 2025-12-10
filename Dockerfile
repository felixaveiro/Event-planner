# 1) Build Stage
FROM node:25 AS build

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the project
RUN npm run build

# 2) Production Stage
FROM node:25 AS production

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Expose port
EXPOSE 3000

# Run serve to serve the built files
CMD ["serve", "-s", "dist", "-l", "3000"]
