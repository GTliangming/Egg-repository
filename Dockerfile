FROM node:12-alpine

RUN  mkdir -p /home/egg-api

COPY . /home/egg-api

WORKDIR /home/egg-api

COPY package.json /home/egg-api/

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install 
EXPOSE 7001
CMD [ "npm", "start" ]

