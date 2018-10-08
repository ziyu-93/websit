---
layout:     post
title:      "github pages and jekyll step"
subtitle:   "environment --> Mac OS"
date:       2018-09-19
author:     "ZiYu"
header-img: "img/post-bg-nextgen-web-pwa.jpg"
navcolor:   "invert"
# permalink: "asda"
tags:
    - 前端开发
    - JavaScript
    - github
---

> 由于长时间片段式的学习，对知识点的记忆会出现偏差
<br />
> 为巩固技术点，留下经历的痕迹，仅以此篇作为开始

## create a step

**创建 github 项目**

- Yourname.github.io 
- 创建成功后，即访问 https://Yourname.github.io ( 不修改项目名字 )
- 如果修改了项目名字，就访问 https://Yourname.github.io/changeName

**github.io** 是用 **jekyll** 

- 下载 `ruby` ( 有HomeBrew ) brew install ruby  /  ruby -v 测试是否成功
    <br /> 需要安装 `HomeBrew`<br />
    - xcode-select --install ( 没有安装 xcode )
    - ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install
- 更新 `gem`  ( Mac 自带ruby , gem) gem update --system
- 下载 `jekyll` 和 `github-pages` 
    - gem install jekyll
    - gem install github-pages
    - 如果下载失败( 很大可能是链接国外地址失败 )
    - 删除原地址 gem sources --remove https://rubygems.org/ 
    - 添加国内地址 gem source --add https://gems.ruby-china.com

**jekyll**

官方有提供多种 **jekyll** 模板, 官网下载<br />
或者直接找 **大神的模板**，直接修改
- cd到文件夹中
- jekyll serve ( 默认端口4000 )

**jekyll**本身就可以，启动项目
- jekyll new project_name
- cd project_name
- jekyll serve

**上传至 github**
```javascript
git add . 
git commit -m ''
git pull --rebase origin master
git push
```

感谢 [**黄轩**][1] 的博客模板


[1]: https://huangxuan.me/ "Hux"