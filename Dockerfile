# -----------------------------
# 1) Build Stage
# -----------------------------
FROM node:25 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -----------------------------
# 2) Production Stage
# -----------------------------
FROM node:25 AS production

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
