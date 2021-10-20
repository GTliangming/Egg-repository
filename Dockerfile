FROM docker.io/node:12.22.2

COPY . /home/egg-api

WORKDIR /home/egg-api

RUN npm install 

LABEL Descripttion="This image is build for egg-api"

EXPOSE 7001

CMD [ "npm", "start" ]