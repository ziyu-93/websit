---
layout:     post
title:      "node-client-deploy"
subtitle:   "Mac Sequel Pro"
date:       2018-10-02
author:     "ZiYu"
header-img: "img/post-bg-nextgen-web-pwa.jpg"
navcolor:   "invert"
# permalink: "asda"
tags:
    - 前端开发
    - 服务器
    - nodeJs
---

> ssh 登录服务器 
```shell
ssh -p port username@host
```

> 安装 node 
```xshell
1、cd /usr/local ( 默认安装位置 )
2、wget https://nodejs.org/dist/v10.6.0/node-v10.6.0.tar.gz 
3、tar xvf node-v10.6.0.tar.gz
4、cd node-v10.6.0/
5、./configure
6、make (时间会比较久)
7、make install
```

> 配置环境变量
```xshell
vim /etc/profile
export PATH=/usr/local/node-v10.6.0/bin:$PATH
```

> 将启动文件或文件夹，放到服务器上
```xshell
ftp 上传
scp -r 本地文件路径 username@host
```

如果我们直接在启动文件下 start, 那么 exit 后启动的服务也就关闭了。<br />
所以为了在退出服务器连接，也让启动的服务正常开启，那么就需要 **`守护进程`**
> 安装守护进程_pm2
```javascript
npm install pm2 -g
cd 到启动文件下
pm2 start 需要启动的js文件
```

> 安装守护进程_forever
```javascript
npm install forever -g
cd 到启动文件下
forever start 需要启动的js文件
```
