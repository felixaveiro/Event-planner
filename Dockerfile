# -----------------------------
# 1) Build Stage
# -----------------------------
FROM node:25-alpine AS build

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the production bundle
RUN npm run build

# -----------------------------
# 2) Run Stage
# -----------------------------
FROM node:25-alpine AS production

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy production build from previous stage
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Serve the built files
CMD ["serve", "-s", "dist", "-l", "3000"]
