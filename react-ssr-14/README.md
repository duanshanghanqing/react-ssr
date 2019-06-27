#  安装

    npm i

# 开发环境

    npm run dev

    npm run devstart

##### 检查语法错误

    npm run lint

##### 修复语法错误

    npm run lint-fix

##### 访问：http://localhost:9010

# 编译生产环境

##### 编译开发环境，端口 9010

    npm run build:dev

##### 编译测试环境，端口 9011

    npm run build:test

##### 编译仿真环境，端口 9012

    npm run build:sim

##### 编译生产环境，端口 9013

    npm run build:prod

# 启动

##### 单核启动

    npm start

##### PM2启动

    npm run start:dev

    npm run start:test

    npm run start:sim

    npm run start:prod

##### PM2停止

    npm run stop:dev

    npm run stop:test

    npm run stop:sim

    npm run stop:prod   


# 例子中 secret 值会变，如发现接口异常，请留言，及时提供最新的值


# 比较坑的地方

    整合 ant 样式

        1. 首先开启

            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }

        2. 导入 ant.less 文件

            创建 global.less 文件，添加以下代码

                @import '../../../node_modules/antd/dist/antd.less';

        3.在  App.js   文件导入 global.less 文件
        