# Stage 1: build
FROM node:18 AS development

WORKDIR /chat/frontend/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@15.0.0

COPY . .

RUN npm run build

EXPOSE 4200