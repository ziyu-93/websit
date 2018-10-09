---
layout:     post
title:      "ssh-client-no-password"
subtitle:   "ssh 免密"
date:       2018-10-03
author:     "ZiYu"
header-img: "img/post-bg-nextgen-web-pwa.jpg"
navcolor:   "invert"
# permalink: "asda"
tags:
    - ssh
    - 服务器
---

> Mac os __ ssh

`一般情况下` 
``` shell
ssh -p port username@host
password
```

`免密登陆`<br />就是在本地链接服务器 ssh 的时候，不需要填写密码<br />
在本地和服务端，都输入 
```ssh
ssh-keygen -t rsa 
```
一直回车执行，执行成功后会有如下情况
![image](/img/in-post/ssh2018-10-10.png)
这是我本地显示的内容<br />
服务器上也是类似显示，会将.ssh文件 **`路径写明`**。

因为每个人的路径不同，所以这里就不写明了。<br />
cd  到本地所给路径<br />
```shell
vim  id_rsa.pub  
```
将本地内容复制到服务器 `.ssh` 对应文件夹下的 `authorized_keys` 文件中 <br />
`exit` 退出，之后登录服务器就是免密状态了