/* eslint-disable @typescript-eslint/semi */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
import { Controller } from 'egg';

export default class CommonController extends Controller {
  public async Test() {
    const { ctx } = this;
    await ctx.render('index.html', { title: '测试页面' });
  }
  public async Time() {
    const { ctx } = this;
    await ctx.render('time.html');
  }
  public async sendEmail() {
    const { ctx } = this;
    const { email } = ctx.request.body;
    if (!email) {
      ctx.body = {
        code: 400,
        msg: '参数错误',
      };
    }
    try {
      const result = await ctx.service.common.sendEmail(email);
      if (result) {
        ctx.body = {
          code: 200,
          msg: '验证码发送成功！请在邮箱中查看',
        };
      }
      ctx.body = {
        code: 500,
        msg: '系统错误',
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '系统错误',
      };
    }
  }
  public async getIcon() {
    const { key } = this.ctx.request.query;
    const iconName = key ? key : Math.random().toString(36).substr(3);
    const result = await this.ctx.curl('https://api.multiavatar.com/' + JSON.stringify(iconName));
    const img = new Buffer(result.data).toString();
    this.ctx.body = {
      code: 200,
      msg: 'hhh',
      date: {
        img,
        url: `https://api.multiavatar.com/${iconName}.png`,
      },
    };
  }

  /* 获取七牛云的Token */
  public async Qiniu() {
    const { ctx } = this;
    const token = await ctx.service.upload.getQiniuToken();
    if (token) {
      ctx.body = {
        code: 200,
        message: 'success',
        token,
      };
      return;
    }
    ctx.body = {
      code: 400,
      message: 'error',
    };
  }

  public async GetSa() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: 'success',
      status: true,
      data: {
        conditionId: 'HrmContactMainSa',
        "groups": [
          {
            "id": "commonGroup",
            "title": "常用条件",
            "visible": true,
            "custom": false
          },
          {
            "id": "otherGroup",
            "title": "其它条件",
            "visible": true,
            "custom": true
          }
        ],
        "layout": [
          [
            {
              "id": "username",
              "label": "姓名",
              "labelSpan": 8,
              "groupId": "commonGroup",
              "needQuickSearch": true,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "username_condition",
                "username"
              ]
            },
            {
              "id": "job_num",
              "label": "工号",
              "labelSpan": 8,
              "groupId": "commonGroup",
              "needQuickSearch": true,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "job_num_condition",
                "job_num"
              ]
            }
          ],
          [
            {
              "id": "sex",
              "label": "性别",
              "labelSpan": 8,
              "groupId": "commonGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "sex"
              ]
            },
            {
              "id": "personnel_status",
              "label": "状态",
              "labelSpan": 8,
              "groupId": "commonGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "personnel_status"
              ]
            }
          ],
          [
            {
              "id": "range",
              "label": "人员范围",
              "labelSpan": 8,
              "groupId": "commonGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "range"
              ]
            }
          ],
          [
            {
              "id": "alias",
              "label": "别名",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "alias_condition",
                "alias"
              ]
            }
          ],
          [
            {
              "id": "hiredate",
              "label": "入职时间",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "hiredate"
              ]
            }
          ],
          [
            {
              "id": "department",
              "label": "部门",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "department"
              ]
            }
          ],
          [
            {
              "id": "subcompany",
              "label": "分部",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "subcompany"
              ]
            }
          ],
          [
            {
              "id": "position",
              "label": "岗位",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "position"
              ]
            }
          ],
          [
            {
              "id": "location",
              "label": "办公地点",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "location"
              ]
            }
          ],
          [
            {
              "id": "email",
              "label": "邮箱11",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": true,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "email_condition",
                "email"
              ]
            }
          ],
          [
            {
              "id": "mobile",
              "label": "手机11",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": true,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "mobile_condition",
                "mobile"
              ]
            }
          ],
          [
            {
              "id": "telephone",
              "label": "电话11",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": true,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "telephone_condition",
                "telephone"
              ]
            }
          ],
          [
            {
              "id": "superior",
              "label": "上级11",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "superior"
              ]
            }
          ],
          [
            {
              "id": "jobsetid",
              "label": "职务",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "jobsetid"
              ]
            }
          ],
          [
            {
              "id": "job_call",
              "label": "职称",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "job_call"
              ]
            }
          ],
          [
            {
              "id": "resp_desc",
              "label": "职责描述",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "resp_desc_condition",
                "resp_desc"
              ]
            }
          ],
          [
            {
              "id": "other_telephone",
              "label": "其他电话",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "other_telephone_condition",
                "other_telephone"
              ]
            }
          ],
          [
            {
              "id": "fax",
              "label": "传真",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "fax_condition",
                "fax"
              ]
            }
          ],
          [
            {
              "id": "office",
              "label": "办公室",
              "labelSpan": 8,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": false,
              "delete": false,
              "custom": false,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "office_condition",
                "office"
              ]
            }
          ],
          [
            {
              "id": "799196463609675776",
              "label": "单选框",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196463609675776_item",
                "799196463609675776Content"
              ],
              "cascadeRules": {
                "799196463609675776_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196463609675776Content"
                  ],
                  "eq": [
                    "799196463609675776Content"
                  ]
                },
                "799196463609675776_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196536741560325",
              "label": "记账本费用",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196536741560325_item",
                "799196536741560325Content"
              ],
              "cascadeRules": {
                "799196536741560325_operatorType": {},
                "799196536741560325_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196536741560325Content"
                  ],
                  "eq": [
                    "799196536741560325Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196502208167936",
              "label": "关联表单数据",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196502208167936_item",
                "799196502208167936Content"
              ],
              "cascadeRules": {
                "799196502208167936_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196502208167936Content"
                  ],
                  "eq": [
                    "799196502208167936Content"
                  ]
                },
                "799196502208167936_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196476427468803",
              "label": "日期区间(开始时间)",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196476427468803_item",
                "799196476427468803Content"
              ],
              "cascadeRules": {
                "799196476427468803_operatorType": {},
                "799196476427468803_item": {
                  "null": [],
                  "like": [
                    "799196476427468803Content"
                  ],
                  "notnull": []
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196476427468804",
              "label": "日期区间(结束时间)",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196476427468804_item",
                "799196476427468804Content"
              ],
              "cascadeRules": {
                "799196476427468804_operatorType": {},
                "799196476427468804_item": {
                  "null": [],
                  "like": [
                    "799196476427468804Content"
                  ],
                  "notnull": []
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196562343591938",
              "label": "进度条",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196562343591938_item",
                "799196562343591938Content"
              ],
              "cascadeRules": {
                "799196562343591938_item": {
                  "null": [],
                  "like": [
                    "799196562343591938Content"
                  ],
                  "notnull": []
                },
                "799196562343591938_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196493624115202",
              "label": "收发文单位",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196493624115202_item",
                "799196493624115202Content"
              ],
              "cascadeRules": {
                "799196493624115202_operatorType": {},
                "799196493624115202_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196493624115202Content"
                  ],
                  "eq": [
                    "799196493624115202Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196442053459970",
              "label": "手机",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196442053459970_item",
                "799196442053459970Content"
              ],
              "cascadeRules": {
                "799196442053459970_item": {
                  "null": [],
                  "like": [
                    "799196442053459970Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196442053459970Content"
                  ],
                  "eq": [
                    "799196442053459970Content"
                  ]
                },
                "799196442053459970_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196442053459971",
              "label": "身份证",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196442053459971_item",
                "799196442053459971Content"
              ],
              "cascadeRules": {
                "799196442053459971_operatorType": {},
                "799196442053459971_item": {
                  "null": [],
                  "like": [
                    "799196442053459971Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196442053459971Content"
                  ],
                  "eq": [
                    "799196442053459971Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196510764548101",
              "label": "关联合同",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196510764548101_item",
                "799196510764548101Content"
              ],
              "cascadeRules": {
                "799196510764548101_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196510764548101Content"
                  ],
                  "eq": [
                    "799196510764548101Content"
                  ]
                },
                "799196510764548101_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196463609675778",
              "label": "下拉菜单",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196463609675778_item",
                "799196463609675778Content"
              ],
              "cascadeRules": {
                "799196463609675778_operatorType": {},
                "799196463609675778_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196463609675778Content"
                  ],
                  "eq": [
                    "799196463609675778Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196510764548099",
              "label": "关联商机",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196510764548099_item",
                "799196510764548099Content"
              ],
              "cascadeRules": {
                "799196510764548099_operatorType": {},
                "799196510764548099_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196510764548099Content"
                  ],
                  "eq": [
                    "799196510764548099Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196510764548097",
              "label": "关联订单",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196510764548097_item",
                "799196510764548097Content"
              ],
              "cascadeRules": {
                "799196510764548097_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196510764548097Content"
                  ],
                  "eq": [
                    "799196510764548097Content"
                  ]
                },
                "799196510764548097_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196416392708101",
              "label": "邮箱",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196416392708101_item",
                "799196416392708101Content"
              ],
              "cascadeRules": {
                "799196416392708101_item": {
                  "null": [],
                  "like": [
                    "799196416392708101Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196416392708101Content"
                  ],
                  "eq": [
                    "799196416392708101Content"
                  ]
                },
                "799196416392708101_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196442053459969",
              "label": "电话",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196442053459969_item",
                "799196442053459969Content"
              ],
              "cascadeRules": {
                "799196442053459969_item": {
                  "null": [],
                  "like": [
                    "799196442053459969Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196442053459969Content"
                  ],
                  "eq": [
                    "799196442053459969Content"
                  ]
                },
                "799196442053459969_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196493624115204",
              "label": "关联任务",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196493624115204_item",
                "799196493624115204Content"
              ],
              "cascadeRules": {
                "799196493624115204_operatorType": {},
                "799196493624115204_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196493624115204Content"
                  ],
                  "eq": [
                    "799196493624115204Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196485145739266",
              "label": "人员选择",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196485145739266_item",
                "799196485145739266_operatorType",
                "799196485145739266Content"
              ],
              "cascadeRules": {
                "799196485145739266_item": {
                  "null": [],
                  "notnull": [],
                  "neq": {
                    "datas": {
                      "799196485145739266_operatorType": "targetUser"
                    },
                    "items": [
                      "799196485145739266_operatorType"
                    ]
                  },
                  "eq": {
                    "datas": {
                      "799196485145739266_operatorType": "targetUser"
                    },
                    "items": [
                      "799196485145739266_operatorType"
                    ]
                  }
                },
                "799196485145739266_operatorType": {
                  "currentUser": [],
                  "targetUser": [
                    "799196485145739266Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196416392708097",
              "label": "基本信息自定义字段测试",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196416392708097_item",
                "799196416392708097Content"
              ],
              "cascadeRules": {
                "799196416392708097_operatorType": {},
                "799196416392708097_item": {
                  "null": [],
                  "like": [
                    "799196416392708097Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196416392708097Content"
                  ],
                  "eq": [
                    "799196416392708097Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196416392708098",
              "label": "多行文本",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196416392708098_item",
                "799196416392708098Content"
              ],
              "cascadeRules": {
                "799196416392708098_operatorType": {},
                "799196416392708098_item": {
                  "null": [],
                  "like": [
                    "799196416392708098Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196416392708098Content"
                  ],
                  "eq": [
                    "799196416392708098Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196463609675777",
              "label": "复选框",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196463609675777_item",
                "799196463609675777Content"
              ],
              "cascadeRules": {
                "799196463609675777_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196463609675777Content"
                  ],
                  "eq": [
                    "799196463609675777Content"
                  ]
                },
                "799196463609675777_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196472286003202",
              "label": "类别1",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196472286003202_item",
                "799196472286003202Content"
              ],
              "cascadeRules": {
                "799196472286003202_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196472286003202Content"
                  ],
                  "eq": [
                    "799196472286003202Content"
                  ]
                },
                "799196472286003202_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196472286003203",
              "label": "类别2",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196472286003203_item",
                "799196472286003203Content"
              ],
              "cascadeRules": {
                "799196472286003203_operatorType": {},
                "799196472286003203_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196472286003203Content"
                  ],
                  "eq": [
                    "799196472286003203Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196472286003204",
              "label": "类别3",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196472286003204_item",
                "799196472286003204Content"
              ],
              "cascadeRules": {
                "799196472286003204_operatorType": {},
                "799196472286003204_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196472286003204Content"
                  ],
                  "eq": [
                    "799196472286003204Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196493624115201",
              "label": "人员范围选择",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196493624115201_item",
                "799196493624115201Content"
              ],
              "cascadeRules": {
                "799196493624115201_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196493624115201Content"
                  ],
                  "eq": [
                    "799196493624115201Content"
                  ]
                },
                "799196493624115201_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196476427468800",
              "label": "树形选择",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196476427468800_item",
                "799196476427468800Content"
              ],
              "cascadeRules": {
                "799196476427468800_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196476427468800Content"
                  ],
                  "eq": [
                    "799196476427468800Content"
                  ]
                },
                "799196476427468800_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196485145739268",
              "label": "分部选择",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196485145739268_item",
                "799196485145739268Content"
              ],
              "cascadeRules": {
                "799196485145739268_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196485145739268Content"
                  ],
                  "eq": [
                    "799196485145739268Content"
                  ]
                },
                "799196485145739268_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196493624115205",
              "label": "关联文档",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196493624115205_item",
                "799196493624115205Content"
              ],
              "cascadeRules": {
                "799196493624115205_operatorType": {},
                "799196493624115205_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196493624115205Content"
                  ],
                  "eq": [
                    "799196493624115205Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196493624115203",
              "label": "关联项目",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196493624115203_item",
                "799196493624115203Content"
              ],
              "cascadeRules": {
                "799196493624115203_operatorType": {},
                "799196493624115203_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196493624115203Content"
                  ],
                  "eq": [
                    "799196493624115203Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196510764548098",
              "label": "关联产品",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196510764548098_item",
                "799196510764548098Content"
              ],
              "cascadeRules": {
                "799196510764548098_operatorType": {},
                "799196510764548098_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196510764548098Content"
                  ],
                  "eq": [
                    "799196510764548098Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196553913040899",
              "label": "运算",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196553913040899_item",
                "799196553913040899Content"
              ],
              "cascadeRules": {
                "799196553913040899_item": {
                  "null": [],
                  "like": [
                    "799196553913040899Content"
                  ],
                  "notnull": []
                },
                "799196553913040899_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196416392708100",
              "label": "金额",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196416392708100_item",
                "799196416392708100Content"
              ],
              "cascadeRules": {
                "799196416392708100_item": {
                  "null": [],
                  "like": [
                    "799196416392708100Content"
                  ],
                  "notnull": []
                },
                "799196416392708100_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196502208167938",
              "label": "关联流程",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196502208167938_item",
                "799196502208167938Content"
              ],
              "cascadeRules": {
                "799196502208167938_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196502208167938Content"
                  ],
                  "eq": [
                    "799196502208167938Content"
                  ]
                },
                "799196502208167938_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196536741560323",
              "label": "职级浏览阿狂",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196536741560323_item",
                "799196536741560323Content"
              ],
              "cascadeRules": {
                "799196536741560323_operatorType": {},
                "799196536741560323_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196536741560323Content"
                  ],
                  "eq": [
                    "799196536741560323Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196553913040901",
              "label": "编号",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196553913040901_item",
                "799196553913040901Content"
              ],
              "cascadeRules": {
                "799196553913040901_item": {
                  "null": [],
                  "like": [
                    "799196553913040901Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196553913040901Content"
                  ],
                  "eq": [
                    "799196553913040901Content"
                  ]
                },
                "799196553913040901_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196463609675780",
              "label": "图片单选",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196463609675780_item",
                "799196463609675780Content"
              ],
              "cascadeRules": {
                "799196463609675780_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196463609675780Content"
                  ],
                  "eq": [
                    "799196463609675780Content"
                  ]
                },
                "799196463609675780_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196485145739265",
              "label": "日期",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196485145739265_item",
                "799196485145739265Content"
              ],
              "cascadeRules": {
                "799196485145739265_item": {
                  "null": [],
                  "like": [
                    "799196485145739265Content"
                  ],
                  "notnull": []
                },
                "799196485145739265_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196502208167940",
              "label": "关联线索",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196502208167940_item",
                "799196502208167940Content"
              ],
              "cascadeRules": {
                "799196502208167940_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196502208167940Content"
                  ],
                  "eq": [
                    "799196502208167940Content"
                  ]
                },
                "799196502208167940_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196463609675779",
              "label": "图片多选",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196463609675779_item",
                "799196463609675779Content"
              ],
              "cascadeRules": {
                "799196463609675779_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196463609675779Content"
                  ],
                  "eq": [
                    "799196463609675779Content"
                  ]
                },
                "799196463609675779_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196519396425732",
              "label": "关联绩效",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196519396425732_item",
                "799196519396425732Content"
              ],
              "cascadeRules": {
                "799196519396425732_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196519396425732Content"
                  ],
                  "eq": [
                    "799196519396425732Content"
                  ]
                },
                "799196519396425732_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196519396425730",
              "label": "关联报价",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196519396425730_item",
                "799196519396425730Content"
              ],
              "cascadeRules": {
                "799196519396425730_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196519396425730Content"
                  ],
                  "eq": [
                    "799196519396425730Content"
                  ]
                },
                "799196519396425730_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196519396425733",
              "label": "关联对手",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196519396425733_item",
                "799196519396425733Content"
              ],
              "cascadeRules": {
                "799196519396425733_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196519396425733Content"
                  ],
                  "eq": [
                    "799196519396425733Content"
                  ]
                },
                "799196519396425733_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196485145739269",
              "label": "人员组织多选",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196485145739269_item",
                "799196485145739269Content"
              ],
              "cascadeRules": {
                "799196485145739269_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196485145739269Content"
                  ],
                  "eq": [
                    "799196485145739269Content"
                  ]
                },
                "799196485145739269_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196519396425731",
              "label": "关联e-Builder",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196519396425731_item",
                "799196519396425731Content"
              ],
              "cascadeRules": {
                "799196519396425731_operatorType": {},
                "799196519396425731_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196519396425731Content"
                  ],
                  "eq": [
                    "799196519396425731Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196553913040900",
              "label": "评分",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196553913040900_item",
                "799196553913040900Content"
              ],
              "cascadeRules": {
                "799196553913040900_item": {
                  "null": [],
                  "like": [
                    "799196553913040900Content"
                  ],
                  "notnull": []
                },
                "799196553913040900_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196510764548100",
              "label": "关联联系人",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196510764548100_item",
                "799196510764548100Content"
              ],
              "cascadeRules": {
                "799196510764548100_operatorType": {},
                "799196510764548100_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196510764548100Content"
                  ],
                  "eq": [
                    "799196510764548100Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196485145739267",
              "label": "部门选择",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196485145739267_item",
                "799196485145739267Content"
              ],
              "cascadeRules": {
                "799196485145739267_operatorType": {},
                "799196485145739267_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196485145739267Content"
                  ],
                  "eq": [
                    "799196485145739267Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196502208167939",
              "label": "关联客户",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196502208167939_item",
                "799196502208167939Content"
              ],
              "cascadeRules": {
                "799196502208167939_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196502208167939Content"
                  ],
                  "eq": [
                    "799196502208167939Content"
                  ]
                },
                "799196502208167939_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196562343591939",
              "label": "地理位置",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196562343591939_item",
                "799196562343591939Content"
              ],
              "cascadeRules": {
                "799196562343591939_operatorType": {},
                "799196562343591939_item": {
                  "null": [],
                  "like": [
                    "799196562343591939Content"
                  ],
                  "notnull": [],
                  "neq": [
                    "799196562343591939Content"
                  ],
                  "eq": [
                    "799196562343591939Content"
                  ]
                }
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196416392708099",
              "label": "数字",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196416392708099_item",
                "799196416392708099Content"
              ],
              "cascadeRules": {
                "799196416392708099_item": {
                  "null": [],
                  "like": [
                    "799196416392708099Content"
                  ],
                  "notnull": []
                },
                "799196416392708099_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196502208167937",
              "label": "关联日程",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196502208167937_item",
                "799196502208167937Content"
              ],
              "cascadeRules": {
                "799196502208167937_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196502208167937Content"
                  ],
                  "eq": [
                    "799196502208167937Content"
                  ]
                },
                "799196502208167937_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196536741560324",
              "label": "电子发票",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196536741560324_item",
                "799196536741560324Content"
              ],
              "cascadeRules": {
                "799196536741560324_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196536741560324Content"
                  ],
                  "eq": [
                    "799196536741560324Content"
                  ]
                },
                "799196536741560324_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196519396425729",
              "label": "关联活动",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196519396425729_item",
                "799196519396425729Content"
              ],
              "cascadeRules": {
                "799196519396425729_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196519396425729Content"
                  ],
                  "eq": [
                    "799196519396425729Content"
                  ]
                },
                "799196519396425729_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196536741560321",
              "label": "关联报告",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196536741560321_item",
                "799196536741560321Content"
              ],
              "cascadeRules": {
                "799196536741560321_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196536741560321Content"
                  ],
                  "eq": [
                    "799196536741560321Content"
                  ]
                },
                "799196536741560321_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ],
          [
            {
              "id": "799196536741560322",
              "label": "关联考勤",
              "labelSpan": 6,
              "groupId": "otherGroup",
              "needQuickSearch": false,
              "hide": true,
              "delete": false,
              "custom": true,
              "disableCustomConditions": false,
              "selected": false,
              "items": [
                "799196536741560322_item",
                "799196536741560322Content"
              ],
              "cascadeRules": {
                "799196536741560322_item": {
                  "null": [],
                  "notnull": [],
                  "neq": [
                    "799196536741560322Content"
                  ],
                  "eq": [
                    "799196536741560322Content"
                  ]
                },
                "799196536741560322_operatorType": {}
              },
              "customParameterName": "filterFormDatas"
            }
          ]
        ],
        "items": {
          "799196472286003204Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "complexFieldId": "799196472286003201",
                "module": "hrm",
                "fieldId": "799196472286003204"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675780_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ImageRadioBox",
              "fieldId": "799196463609675780"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739268_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Subcompany",
              "fieldId": "799196485145739268"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196472286003203Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "complexFieldId": "799196472286003201",
                "module": "hrm",
                "fieldId": "799196472286003203"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "username_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708101_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "Email",
              "fieldId": "799196416392708101"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "job_num_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425732_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "KpiFlowComponent",
              "fieldId": "799196519396425732"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548101_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ContractComponent",
              "fieldId": "799196510764548101"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115204_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Task",
              "fieldId": "799196493624115204"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425733_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "CompetitorComponent",
              "fieldId": "799196519396425733"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167939Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196502208167939}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "customer",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "job_call": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "hrmJobcall",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739269_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "EmployeeOrganization",
              "fieldId": "799196485145739269"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708097Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "Text",
              "fieldId": "799196416392708097"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196553913040901_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "SerialNumber",
              "fieldId": "799196553913040901"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560325_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "CashBook",
              "fieldId": "799196536741560325"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196562343591938_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "ProgressBar",
              "fieldId": "799196562343591938"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115205_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Document",
              "fieldId": "799196493624115205"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675778_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Select",
              "fieldId": "799196463609675778"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "fax": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708100_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "Money",
              "fieldId": "799196416392708100"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560325Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196536741560325}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "incbook",
              "type": "cashbook",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "subcompany": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "subcompany",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560324_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "EinvoiceComponent",
              "fieldId": "799196536741560324"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115205Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196493624115205}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "doc",
              "type": "document",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708099Content": {
            "itemType": "SCOPE",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "numberContent",
            "customParameters": {
              "componentKey": "NumberComponent",
              "fieldId": "799196416392708099"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167936Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196502208167936}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "formdatareport",
              "type": "frpt_component",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115203Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196493624115203}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "project",
              "type": "mainlineBrowser",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708101Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "Email",
              "fieldId": "799196416392708101"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167938Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196502208167938}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "workflow/core",
              "type": "wfcRequest",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196562343591939_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "PositionComponent",
              "fieldId": "799196562343591939"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "other_telephone": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196476427468804_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "format": "yyyy-MM-dd",
              "componentKey": "DateComponent",
              "fieldId": "799196476427468804"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675777_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "CheckBox",
              "fieldId": "799196463609675777"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115201Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196493624115201}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "hrmcombination",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196553913040900_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "Raty",
              "fieldId": "799196553913040900"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196442053459970Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "Mobile",
              "fieldId": "799196442053459970"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196442053459969Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "Phone",
              "fieldId": "799196442053459969"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548100_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ContactComponent",
              "fieldId": "799196510764548100"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "mobile_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115202_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ODocReceiveComponent",
              "fieldId": "799196493624115202"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675779Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "module": "hrm",
                "fieldId": "799196463609675779"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "range": {
            "itemType": "CHECKBOX",
            "visible": true,
            "options": [
              {
                "id": "containUnavailable",
                "content": "含非在职",
                "disabled": false
              },
              {
                "id": "containExtra",
                "content": "含兼职",
                "disabled": false
              },
              {
                "id": "onlyAdmin",
                "content": "仅管理员",
                "disabled": false
              },
              {
                "id": "noneSuperior",
                "content": "无上级",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": true,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560322_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "AttendComponent",
              "fieldId": "799196536741560322"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "resp_desc_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425733Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196519396425733}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "competitor",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196472286003203_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "RadioBox",
              "fieldId": "799196472286003203"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115201_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "EmployeeScope",
              "fieldId": "799196493624115201"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425730Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196519396425730}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "quote",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548099Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196510764548099}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "saleChance",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "job_num": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675778Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "module": "hrm",
                "fieldId": "799196463609675778"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196472286003202_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "RadioBox",
              "fieldId": "799196472286003202"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560321Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196536741560321}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "plan",
              "type": "planBrowser",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548098Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196510764548098}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "production",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560324Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196536741560324}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "incbiz",
              "type": "invoice",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "email": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675779_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ImageCheckBox",
              "fieldId": "799196463609675779"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675776_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "RadioBox",
              "fieldId": "799196463609675776"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "sex": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "all",
                "content": "全部",
                "disabled": false
              },
              {
                "id": "male",
                "content": "男",
                "disabled": false
              },
              {
                "id": "female",
                "content": "女",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167937_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "AgendaComponent",
              "fieldId": "799196502208167937"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708098Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "TextArea",
              "fieldId": "799196416392708098"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739267_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Department",
              "fieldId": "799196485145739267"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708100Content": {
            "itemType": "SCOPE",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "numberContent",
            "customParameters": {
              "componentKey": "Money",
              "fieldId": "799196416392708100"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196562343591939Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "PositionComponent",
              "fieldId": "799196562343591939"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115202Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196493624115202}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "odoc",
              "type": "odocReceiveUnit",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196442053459969_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "Phone",
              "fieldId": "799196442053459969"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425731_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Ebuilder",
              "fieldId": "799196519396425731"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196442053459971Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "IDCard",
              "fieldId": "799196442053459971"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739266_operatorType": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "targetUser",
                "content": "指定人员",
                "disabled": false
              },
              {
                "id": "currentUser",
                "content": "当前登录人",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "operatorType",
            "value": "targetUser",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548098_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ProductionComponent",
              "fieldId": "799196510764548098"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "alias_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548100Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196510764548100}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "contact",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196442053459971_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "IDCard",
              "fieldId": "799196442053459971"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "office": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708099_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "NumberComponent",
              "fieldId": "799196416392708099"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "hiredate": {
            "itemType": "DATEPICKER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "otherParams": {
              "isRange": true
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548099_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ChanceComponent",
              "fieldId": "799196510764548099"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425729Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196519396425729}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "marketactivity",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196553913040899_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "Monitor",
              "fieldId": "799196553913040899"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739266Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196485145739266}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "resource",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675780Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "module": "hrm",
                "fieldId": "799196463609675780"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548101Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196510764548101}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "contract",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167936_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "FormComponent",
              "fieldId": "799196502208167936"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739268Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196485145739268}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "subcompany",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708098_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "TextArea",
              "fieldId": "799196416392708098"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739269Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196485145739269}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "combinationResource",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739267Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196485145739267}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "department",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739265Content": {
            "itemType": "DATEPICKER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "dateContent",
            "customParameters": {
              "format": "yyyy-MM-dd",
              "componentKey": "DateComponent",
              "fieldId": "799196485145739265"
            },
            "otherParams": {
              "format": "YYYY-MM-DD",
              "type": "day",
              "realDateValue": "true",
              "isRange": "true"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560321_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "WorkreportComponent",
              "fieldId": "799196536741560321"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548097_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "OrderComponent",
              "fieldId": "799196510764548097"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196553913040900Content": {
            "itemType": "SCOPE",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "numberContent",
            "customParameters": {
              "componentKey": "Raty",
              "fieldId": "799196553913040900"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196416392708097_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "Text",
              "fieldId": "799196416392708097"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "telephone": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196562343591938Content": {
            "itemType": "SCOPE",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "numberContent",
            "customParameters": {
              "componentKey": "ProgressBar",
              "fieldId": "799196562343591938"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167940_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ClueComponent",
              "fieldId": "799196502208167940"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "jobsetid": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "hrmjobset_table",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196442053459970_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "componentKey": "Mobile",
              "fieldId": "799196442053459970"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167938_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Workflow",
              "fieldId": "799196502208167938"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "position": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "position",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196476427468803Content": {
            "itemType": "DATEPICKER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "dateContent",
            "customParameters": {
              "format": "yyyy-MM-dd",
              "componentKey": "DateComponent",
              "fieldId": "799196476427468803"
            },
            "otherParams": {
              "format": "YYYY-MM-DD",
              "type": "day",
              "realDateValue": "true",
              "isRange": "true"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739265_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "format": "yyyy-MM-dd",
              "componentKey": "DateComponent",
              "fieldId": "799196485145739265"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "office_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425731Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196519396425731}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "ebuilder/form",
              "type": "ebuilder",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675776Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "module": "hrm",
                "fieldId": "799196463609675776"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425732Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196519396425732}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "performance",
              "type": "performanceBrowser",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196463609675777Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "module": "hrm",
                "fieldId": "799196463609675777"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425730_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "QuoteComponent",
              "fieldId": "799196519396425730"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167939_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "CustomerComponent",
              "fieldId": "799196502208167939"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560322Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196536741560322}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "attend/web",
              "type": "attendPermissionEmpsBrowser",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "alias": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196510764548097Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196510764548097}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "orderform",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560323Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196536741560323}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "grade",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "fax_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "department": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "department",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196485145739266_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Employee",
              "fieldId": "799196485145739266"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "email_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "other_telephone_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "resp_desc": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196553913040901Content": {
            "itemType": "INPUT",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "content",
            "customParameters": {
              "componentKey": "SerialNumber",
              "fieldId": "799196553913040901"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115204Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196493624115204}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "task",
              "type": "taskBrowser",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167940Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196502208167940}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "crm",
              "type": "clue",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "mobile": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "personnel_status": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "1",
                "content": "试用",
                "disabled": false,
                "type": "normal"
              },
              {
                "id": "2",
                "content": "试用延期",
                "disabled": false,
                "type": "normal"
              },
              {
                "id": "3",
                "content": "正式",
                "disabled": false,
                "type": "normal"
              },
              {
                "id": "4",
                "content": "临时",
                "disabled": false,
                "type": "normal"
              },
              {
                "id": "5",
                "content": "实习",
                "disabled": false,
                "type": "normal"
              },
              {
                "id": "6",
                "content": "离职",
                "disabled": false,
                "type": "unavailable"
              },
              {
                "id": "7",
                "content": "退休",
                "disabled": false,
                "type": "unavailable"
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": true,
            "otherParams": {
              "allowSelectAll": true
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196502208167937Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196502208167937}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "calendar",
              "type": "calendarBrowser",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "superior": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "resource",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196519396425729_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "ActivityComponent",
              "fieldId": "799196519396425729"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196476427468800_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "TreeSelect",
              "fieldId": "799196476427468800"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196476427468803_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "like",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "like",
            "customParameters": {
              "format": "yyyy-MM-dd",
              "componentKey": "DateComponent",
              "fieldId": "799196476427468803"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "location": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "hrm",
              "type": "hrmlocation",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "telephone_condition": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "in",
                "content": "包含",
                "disabled": false
              },
              {
                "id": "notIn",
                "content": "不包含",
                "disabled": false
              },
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "notEq",
                "content": "不等于",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196472286003202Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "complexFieldId": "799196472286003201",
                "module": "hrm",
                "fieldId": "799196472286003202"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "field_option",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196536741560323_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "RelateBrowser",
              "fieldId": "799196536741560323"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196493624115203_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "Mainline",
              "fieldId": "799196493624115203"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196472286003204_item": {
            "itemType": "SELECT",
            "visible": true,
            "options": [
              {
                "id": "eq",
                "content": "等于",
                "disabled": false
              },
              {
                "id": "neq",
                "content": "不等于",
                "disabled": false
              },
              {
                "id": "null",
                "content": "为空",
                "disabled": false
              },
              {
                "id": "notnull",
                "content": "不为空",
                "disabled": false
              }
            ],
            "required": false,
            "readOnly": false,
            "condition": true,
            "multiple": false,
            "customParameterName": "term",
            "value": "eq",
            "customParameters": {
              "componentKey": "RadioBox",
              "fieldId": "799196472286003204"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196476427468800Content": {
            "itemType": "BROWSER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "browserBean": {
              "hasAdvanceSearch": true,
              "disableQuickSearchSetting": false,
              "hasLeftData": false,
              "disabledTabCache": false,
              "showCheckStrictly": true,
              "canSelectAllUser": false,
              "commonParams": {
                "needArchive": true,
                "formParam": "{\"formId\":799196300286836737,\"dataFilter\":false,\"module\":\"hrm\",\"source\":\"advSearch\",\"fieldId\":799196476427468800}"
              },
              "defaultCheckStrictly": true,
              "defaultAccount": false,
              "enableAddData": false,
              "enableExtendButton": false,
              "defaultStopDept": false,
              "module": "form",
              "type": "treeSelect",
              "multiple": true,
              "defaultOpen": false,
              "multCheckbox": false,
              "multType": false
            },
            "customParameterName": "relateContent",
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "username": {
            "itemType": "INPUT",
            "visible": true,
            "maxLength": "100",
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196476427468804Content": {
            "itemType": "DATEPICKER",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "dateContent",
            "customParameters": {
              "format": "yyyy-MM-dd",
              "componentKey": "DateComponent",
              "fieldId": "799196476427468804"
            },
            "otherParams": {
              "format": "YYYY-MM-DD",
              "type": "day",
              "realDateValue": "true",
              "isRange": "true"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          },
          "799196553913040899Content": {
            "itemType": "SCOPE",
            "visible": true,
            "required": false,
            "readOnly": false,
            "condition": false,
            "multiple": false,
            "customParameterName": "numberContent",
            "customParameters": {
              "componentKey": "Monitor",
              "fieldId": "799196553913040899"
            },
            "isVariableFields": false,
            "ismain": false,
            "isThirdColumn": false
          }
        },
        "data": {
          "799196463609675780_item": "eq",
          "799196485145739268_item": "eq",
          "alias_condition": "in",
          "username_condition": "in",
          "799196442053459971_item": "like",
          "799196416392708101_item": "like",
          "job_num_condition": "in",
          "799196416392708099_item": "like",
          "799196510764548099_item": "eq",
          "799196519396425732_item": "eq",
          "799196510764548101_item": "eq",
          "799196493624115204_item": "eq",
          "799196519396425733_item": "eq",
          "799196485145739269_item": "eq",
          "799196553913040899_item": "like",
          "799196553913040901_item": "like",
          "799196536741560325_item": "eq",
          "799196562343591938_item": "like",
          "799196493624115205_item": "eq",
          "799196463609675778_item": "eq",
          "799196502208167936_item": "eq",
          "799196416392708098_item": "like",
          "799196416392708100_item": "like",
          "799196536741560321_item": "eq",
          "799196510764548097_item": "eq",
          "799196536741560324_item": "eq",
          "799196416392708097_item": "like",
          "799196502208167940_item": "eq",
          "799196562343591939_item": "like",
          "799196442053459970_item": "like",
          "799196502208167938_item": "eq",
          "799196476427468804_item": "like",
          "799196463609675777_item": "eq",
          "799196553913040900_item": "like",
          "799196510764548100_item": "eq",
          "799196485145739265_item": "like",
          "mobile_condition": "in",
          "799196493624115202_item": "eq",
          "office_condition": "in",
          "range": [
            "containExtra"
          ],
          "799196536741560322_item": "eq",
          "resp_desc_condition": "in",
          "799196472286003203_item": "eq",
          "799196493624115201_item": "eq",
          "799196519396425730_item": "eq",
          "799196502208167939_item": "eq",
          "799196472286003202_item": "eq",
          "fax_condition": "in",
          "799196485145739266_item": "eq",
          "email_condition": "in",
          "799196463609675779_item": "eq",
          "799196463609675776_item": "eq",
          "other_telephone_condition": "in",
          "sex": "all",
          "799196502208167937_item": "eq",
          "799196485145739267_item": "eq",
          "799196519396425729_item": "eq",
          "799196476427468800_item": "eq",
          "799196476427468803_item": "like",
          "799196442053459969_item": "like",
          "telephone_condition": "in",
          "799196519396425731_item": "eq",
          "799196536741560323_item": "eq",
          "799196493624115203_item": "eq",
          "799196510764548098_item": "eq",
          "799196472286003204_item": "eq"
        },
        "needRange": false,
        "module": "hrm"
      }
    };

  }
  public async GetTree() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: 'success',
      status: true,
      data: {
        companySupport: true,
        orgInfo: [
          {
            content: "中国",
            id: "860001",
            leaf: false,
            personCount: 1300,
            type: "subcompany",
            childCount: 22,
            children: [
              {
                content: "北京市",
                id: "860010",
                leaf: false,
                personCount: 200,
                childCount: 2,
                type: "subcompany",
                children: [
                  {
                    content: "朝阳区",
                    id: "860011",
                    leaf: true,
                    personCount: 5,
                    type: "department",
                    allPersonCount: 10,
                    children: []
                  },
                  {
                    content: "海淀区",
                    id: "860012",
                    leaf: true,
                    personCount: 5,
                    type: "department",
                    allPersonCount: 10,
                    children: []
                  },
                ]
              },
              {
                content: "上海市",
                id: "860020",
                leaf: false,
                personCount: 100,
                type: "subcompany",
                childCount: 4,
                children: [
                  {
                    content: "闵行区",
                    id: "860021",
                    leaf: true,
                    personCount: 5,
                    type: "department",
                    allPersonCount: 10,
                    children: []
                  },
                  {
                    content: "浦东新区",
                    id: "860022",
                    leaf: true,
                    personCount: 20,
                    type: "department",
                    allPersonCount: 42,
                    children: []
                  },
                  {
                    content: "徐汇区",
                    id: "860023",
                    leaf: true,
                    personCount: 15,
                    type: "department",
                    allPersonCount: 23,
                    children: []
                  }, {
                    content: "黄埔区",
                    id: "860024",
                    leaf: true,
                    personCount: 12,
                    type: "department",
                    allPersonCount: 25,
                    children: []
                  }

                ]
              },
              {
                content: "重庆市",
                id: "860030",
                leaf: true,
                personCount: 10,
                type: "department",
                children: []
              },
              {
                content: "陕西省",
                id: "860040",
                leaf: false,
                personCount: 130,
                type: "subcompany",
                childCount: 4,
                children: [
                  {
                    content: "西安市",
                    id: "860041",
                    leaf: true,
                    personCount: 5,
                    type: "department",
                    allPersonCount: 10,
                    children: []
                  },
                  {
                    content: "渭南市",
                    id: "860042",
                    leaf: true,
                    personCount: 20,
                    type: "department",
                    allPersonCount: 42,
                    children: []
                  },
                  {
                    content: "汉中市",
                    id: "860043",
                    leaf: true,
                    personCount: 15,
                    type: "department",
                    allPersonCount: 23,
                    children: []
                  }, {
                    content: "延安市",
                    id: "860044",
                    leaf: true,
                    personCount: 12,
                    type: "department",
                    allPersonCount: 25,
                    children: []
                  }

                ]
              },
            ]
          }
        ]
      }
    }
  }
  public async GetVirtual() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: 'success',
      status: true,
      data: [
        {
          "id": "1",
          "content": "行政组织"
        },
        {
          "id": "3085665393168610857",
          "content": "虚拟维度"
        }
      ]
    }
  }
}
