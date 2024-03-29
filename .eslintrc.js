module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'max-len': 0,
    'new-cap': 0,
    'require-jsdoc': 0,
    'no-invalid-this': 0,
    'vue/multi-word-component-names': 0,
  },
};
