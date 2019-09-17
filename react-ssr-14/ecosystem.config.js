module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        {
            name: "react-ssr_dev",
            script: "server/bundle.js",
            env: {
                STAGE_ENV: "dev",
                PORT: 9020
            },
            cwd: ".",
            instances: 2,
            exec_mode: "cluster"
        },
        {
            name: "react-ssr_test",
            script: "server/bundle.js",
            env: {
                STAGE_ENV: "test",
                PORT: 9021
            },
            cwd: ".",
            instances: 2,
            exec_mode: "cluster"
        },
        {
            name: "react-ssr_sim",
            script: "server/bundle.js",
            env: {
                STAGE_ENV: "sim",
                PORT: 9022
            },
            cwd: ".",
            instances: "max",
            exec_mode: "cluster"
        },
        {
            name: "react-ssr_prod",
            script: "server/bundle.js",
            env: {
                STAGE_ENV: "prod",
                PORT: 9023
            },
            cwd: ".",
            instances: "max",
            exec_mode: "cluster"
        }
    ]
}