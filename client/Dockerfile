FROM node:14.14.0-alpine

ENV CI=true
ENV NODE_ENV=development

WORKDIR /app
COPY package*.json ./
RUN npm i
COPY ./ ./

CMD [ "npm", "start" ]