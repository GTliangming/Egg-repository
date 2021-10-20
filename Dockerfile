FROM docker.io/node:12.22.2

COPY . /home/egg-api

WORKDIR /home/egg-api

RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org \
    &&   cnpm install  \
    &&  cnpm audit fix

EXPOSE 7001

CMD [ "npm", "start" ]