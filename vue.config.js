const path = require("path")
const projectRoot = path.resolve(__dirname, './');
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    productionSourceMap: false,
    devServer: {
        // 设置代理
        // open: true,
        proxy: {
            "/api": {
                target: "http://localhost:8095/", // 域名
                ws: true, // 是否启用websockets
                changOrigin: true, //
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    }
};
