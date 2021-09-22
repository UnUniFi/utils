FROM node:14 as build-stage

WORKDIR /root/app
COPY ./ /root/app/
RUN npm ci
RUN npm run build:telescope -- --prod --base-href=/jpyx/

FROM lcnem/telescope

COPY --from=build-stage /root/app/dist/telescope-extension/ /usr/share/nginx/html/jpyx/
