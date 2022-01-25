/* eslint-disable @typescript-eslint/indent */
const Subscription = require('egg').Subscription;
const request = require('request');
const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=92f82d96-86b7-4af4-8394-a5c1efd35d70';
const key = 'c854802ac330abef23a003bc699e8f0f';
const reqUrl = 'http://api.tianapi.com/dialogue/index';
export default class AncientPoetry extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            cron: '0 0 11 ? * MON-FRI',
            type: 'worker', // all指定所有的 worker 都需要执行
        };
    }
    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        request.get({
            url: reqUrl + '?key=' + key,
        }, (err, res) => {
            if (!err) {
                const content = JSON.parse(res.body);
                const params = {
                    msgtype: 'markdown',
                    markdown: {
                        content: `### 经典台词 \n来自影片：${content?.newslist[0].source}（${content?.newslist[0].type === 1 ? '华语' : '外语'}） \n>${content?.newslist[0].dialogue}`,
                    },
                };
                request.post({
                    url: webhook,
                    body: JSON.stringify(params),
                });
            }
        });

    }
}

