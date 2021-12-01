FROM node:12-alpine

RUN  mkdir -p /home/egg-api

COPY . /home/egg-api

WORKDIR /home/egg-api

COPY package.json /home/egg-api/

RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org \
    &&   cnpm install  
EXPOSE 7001
CMD [ "npm", "start" ]

