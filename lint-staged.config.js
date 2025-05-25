module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx,json,css,md}': ['prettier --write'],
}
