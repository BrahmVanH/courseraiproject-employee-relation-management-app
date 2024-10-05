# Build stage
FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
EXPOSE 4545
CMD ["node", "dist/index.js"]


# FROM node:lts

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY index.js ./

# EXPOSE 4545

# CMD ["npm", "run", "dev"]