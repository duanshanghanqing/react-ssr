###  安装

    npm i

### 开发环境

    npm run dev

    npm run devstart

### 编译生产环境

    npm run build

    npm start

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
        