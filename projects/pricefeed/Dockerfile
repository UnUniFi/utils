FROM node:14 as build-stage

COPY . .

RUN npm i
RUN npm run build

FROM node:14

COPY --from=build-stage ./dist .

CMD ["node", "."]
