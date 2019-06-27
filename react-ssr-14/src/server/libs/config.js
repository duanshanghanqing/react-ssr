const config = {
  dev: {
    proxyUrl: 'http://47.95.113.63',
  },
  test: {
    proxyUrl: 'http://47.95.113.63',
  },
  sime: {
    proxyUrl: 'http://47.95.113.63',
  },
  prod: {
    proxyUrl: 'http://47.95.113.63',
  },
};

export default config[process.env.STAGE_ENV];
