// 构建静态资源到指定目录 $0代表**.js匹配路径 $1代表**/*.js匹配路径
fis.match('*.{png,js,css,scss}', {
  release: '/static/$1'
});