FROM node:14 as build-stage

WORKDIR /root/app
COPY ./ /root/app/
RUN npm ci
RUN npm run build:cosmoscan -- --prod --base-href=/jpyx/

FROM lcnem/cosmoscan

COPY --from=build-stage /root/app/dist/cosmoscan-extension/ /usr/share/nginx/html/jpyx/
