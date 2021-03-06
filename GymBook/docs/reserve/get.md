### 场馆介绍详情

**简要描述：**
- 预定系统接口，获得场馆预定情况

**请求URL：**
- /reserve&id=?

**请求方式：**
- GET

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |Number |场馆id   |
返回这个场馆所有的场地订单
 **返回示例**

 ```js
 
{
    "code":1,
    "msg":"get reserve",
    "data":
        {
            "gym":{
                "title":"北校区乒乓球室",
                "description":"中山大学英东体育馆羽毛球场位于英东体育馆内，共有8片球场，与排球共用。英东羽毛球场开放时间从8：00至22：00时，非排球训练和体育教学时段均可定场，全天收费。",
                "siteNumber":5,
                "addr":"地址：乒乓球室",
                "rank":4,
                "open_time":"0:2018-04-23 07:00 ~  21:00"},
                "price":11
            "list":[
                {
                    "id":1,
                    "reserveTime":"2018-06-03 14:00 ~ 15:00，2018-06-03 15:00 ~ 16:00"
                },
                {
                    "id":2,
                    "reserveTime":null
                },
                {
                    "id":3,
                    "reserveTime":null
                },
                {
                    "id":4,
                    "reserveTime":null
                },
                {
                    "id":5,
                    "reserveTime":null
                }
            ]
        }
}
// 根据gym的id 判断time_type若为1即按天预约时返回示例
{
    "code":1,
    "msg":"get reserve",
    "data":{
        "gym":{
            "title":"东校区游泳馆",
            "description":"东校园游泳池暑期开放时间：6：30-8：00，16：30-18：00，19：30-21：00。 可以网上预订和现场扣预订，网上可提前一天预订。 建议先网上预订，现场验证可节省入场时间。如现场预订需输入校园卡密码，会增加入场时间。","siteNumber":0,
            "addr":"场地地址： 综合训练馆",
            "rank":4,"open_time":"0:2018-04-23 12:00 ~  14:00, 1:2018-04-24 15:00 ~ 17:00",
            "time_type":1,"status":"0:0 1:0"
        },
        "list":{
            "status":"0:0 1:0",
            "open_time":"0:2018-04-23 12:00 ~  14:00, 1:2018-04-24 15:00 ~ 17:00"
        }
    }
}
 ```

  **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|status |number   |是否对外开放 0:开放 1:维修不对外开放  |
|limit_time |string   |限制预约时间|
|open_time |string   |开放时间|

#### 根据gym的id 判断time_type若为0即按时间预约时返回示例

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|count |number   |场馆内场地总数  |
|gym |object   |场馆信息  |
|list |array   |场馆内场地已预约时间  |

#### 根据gym的id 判断time_type若为1即按天预约时返回示例

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|data |object   |场馆信息  |
