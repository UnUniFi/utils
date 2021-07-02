FROM node:14 as build-stage-base

WORKDIR /root/app
COPY ./cosmoscan/ /root/app/
COPY ./botany/projects/cosmoscan-extension/editions/jpyx/config-jpyx.json /root/app/projects/cosmoscan/src/config.json
RUN npm ci
RUN npm run build -- --prod

FROM node:14 as build-stage

WORKDIR /root/app
COPY ./botany /root/app/
COPY ./botany/projects/cosmoscan-extension/editions/jpyx/config-jpyx.json /root/app/projects/botany/src/config.json
RUN npm ci
RUN npm run build:cosmoscan -- --prod --base-href=/jpyx/

FROM nginx:1.15

COPY --from=build-stage-base /root/app/dist/cosmoscan/ /usr/share/nginx/html/
COPY --from=build-stage /root/app/dist/cosmoscan-extension/ /usr/share/nginx/html/jpyx/
