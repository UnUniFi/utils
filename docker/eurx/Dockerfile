FROM node:12.14.1 as build-stage-outside

WORKDIR /root/app
COPY ./cosmoscan/ /root/app/
COPY ./botany/projects/cosmoscan-extension/src/config-eurx.json /root/app/src/config.json
RUN npm install

RUN npm run build --prod

FROM node:12.14.1 as build-stage

WORKDIR /root/app
COPY ./botany /root/app/
COPY ./botany/projects/cosmoscan-extension/src/config-eurx.json /root/app/projects/botany/src/config.json
RUN npm install

RUN npm run build:cosmoscan --prod

FROM nginx:1.15

COPY --from=build-stage-outside /root/app/dist/cosmoscan/ /usr/share/nginx/html
COPY --from=build-stage /root/app/dist/cosmoscan-extension/ /usr/share/nginx/html/botany

COPY ./botany/nginx.conf /etc/nginx/nginx.conf
