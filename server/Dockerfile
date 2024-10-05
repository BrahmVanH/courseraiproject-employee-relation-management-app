FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js ./

EXPOSE 4545

CMD ["npm", "run", "start"]