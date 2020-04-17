
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  ssr: true,
  proxy: {
    '/api': {
      'target': 'http://go-charr-drupal.c60795b656a25414792b17fae115d4da1.cn-hangzhou.alicontainer.com/jsonapi/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      // dynamicImport: { webpackChunkName: true },
      title: 'pet-food-home',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      targets: {ie:9},
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
