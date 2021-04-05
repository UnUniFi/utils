FROM node:14 as build-stage

COPY . .

RUN npm ci
RUN npm run build

FROM node:14

COPY --from=build-stage ./dist .
RUN npm ci

CMD ["node", "."]
