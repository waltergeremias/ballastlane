FROM nginx:latest
MAINTAINER "Ballastlane"

RUN mkdir -p /var/www/ballastane && chmod 750 /var/www/ballastane 

ADD api/server.js /var/www/ballastane/server.js

EXPOSE 80


ENTRYPOINT nginx
