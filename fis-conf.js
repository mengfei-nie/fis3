// 构建静态资源到指定目录
fis.match('*.{png,js,css,scss}', {
  release: '/static/$0'
});