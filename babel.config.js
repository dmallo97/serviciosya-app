module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            assets: './app/assets',
            components: './app/components',
            containers: './app/containers',
            enums: './app/enums',
            models: './app/models',
            navigation: './app/navigation',
            stores: './app/stores',
            styles: './app/styles',
            services: './app/services',
            utils: './app/utils',
            mappers: './app/mappers',
            tests: './tests',
          },
        },
      ],
    ],
  };
};
