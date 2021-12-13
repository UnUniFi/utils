FROM node:14 as build-stage

WORKDIR /root/app
COPY ./ /root/app/
RUN npm i -g npm
RUN npm ci
RUN npm run build:telescope:jpyx

FROM ghcr.io/CauchyE/telescope

COPY --from=build-stage /root/app/dist/telescope-extension/ /usr/share/nginx/html/jpyx/
