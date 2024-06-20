module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
  ],
  framework: '@storybook/react',
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
