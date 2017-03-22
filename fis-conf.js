// 构建静态资源到指定目录 $0代表**.js匹配路径 $1代表**/*.js匹配路径
fis.match('*.{png,js,css,scss}', {
  release: '/static/$0'
});
// useHash hash值，代表时间戳
fis.match('*.{js,css,png}', {
  useHash: true
});

// 清除其他配置，只保留如下配置
// 资源压缩 
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

// FIS3 提供了比较简易、使用方便的图片合并工具。通过配置即可调用此工具并对资源进行合并。
// FIS3 构建会对 CSS 中，路径带 ?__sprite 的图片进行合并
fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css'),
   // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 内置服务路径
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: 'C:/Users/nmf/AppData/Local/.fis3-tmp/www'
  })
})
