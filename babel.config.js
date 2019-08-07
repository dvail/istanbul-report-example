module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '61',
          firefox: '60',
        },
      },
    ],
  ],
};
