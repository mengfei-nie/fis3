#fis3相关操作
安装 npm install -g fis3
fis3更新 npm update -g fis3
查看版本 fis3 -v

#fis3 配置文件
fis-config.js配置

#fis相关命令操作
fis3 release 默认构建到内置 Web Server 的根目录下
fis3 release -d ./output 构建到根目录下的output下

fis3 server open 打开内置的构建目录
fis3 server start 默认开启服务
fis3 server stop 关闭服务
#内置本地服务 to: 服务根目录
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: '/Users/my-name/work/htdocs'
  })
})

fis3 release -w 浏览器监听
fis3 release -L 浏览器刷新(fis3 release -wL组合)

#发布到远端服务器 http-push内置远端服务器插件 receiver远端路径
fis.match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://cq.01.p.p.baidu.com:8888/receiver.php',
    to: '/home/work/htdocs' // 注意这个是指的是测试机器的路径，而非本地机器
  })
})

#资源内嵌
#可以在资源定位的基础上，给资源加 ?__inline 参数来标记资源嵌入需求。
#<script src="index.js__inline" type="text/javascript"></script>