FROM node:18

WORKDIR /hello-app-1

COPY package*.json /hello-app-1/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]