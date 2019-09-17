###  安装

    npm i

### 启动开发环境

    1.时时编译
        npm run dev
    
    2.时时重启
        npm run devstart

### 编译生产环境

    1.编译
        npm run build
    
    2.单核启动
        npm start

### pm2 启动
    
    1.编译
        npm run build

    2.pm2多核启动
        npm run start:prod

    3.停止
        npm run stop:prod

### 例子中 secret 值会变，如发现接口异常，请留言，及时提供最新的值


### 比较坑的地方

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
        