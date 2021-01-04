FROM node:12

COPY . .

RUN npm install && npm run build

CMD ["npm","run", "start:prod"]
