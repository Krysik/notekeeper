FROM node:16.4.0-buster-slim as build-stage
ARG VUE_APP_BASE_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# RUN apk --update add tzdata
# RUN cp /usr/share/zoneinfo/Europe/Warsaw /etc/localtime

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]