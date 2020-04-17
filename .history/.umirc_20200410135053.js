
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  ssr: true,
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
