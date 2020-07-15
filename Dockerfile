FROM keymetrics/pm2:latest-alpine

RUN mkdir -p /home/server
WORKDIR /home/server
COPY ./server /home/server


ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

EXPOSE 3000
CMD [ "pm2-runtime", "start", "bin/www" ]