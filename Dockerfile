FROM docker.io/node:12.22.2

RUN  mkdir -p /home/egg-api

COPY . /home/egg-api

WORKDIR /home/egg-api

COPY package.json /home/egg-api/

RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org \
    &&   cnpm install  

ENV HOST 0.0.0.0 &&  PORT 7001
EXPOSE 7001
CMD [ "npm", "start" ]

