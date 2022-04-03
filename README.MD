# 法拉(Farad)的小说站

## 写在前面

### 此仓库的LICENCE文件已删除 The LICENCE file of this repository has been removed

为保护作品著作权，此仓库的LICENCE文件已删除，除非网页内额外声明，否则此仓库的所有内容保留完整著作权。

未来可能会把不包括作品在内的部分网站源码作为独立分支开源。

The LICENCE file of this repository has been removed to protect the copyright of the novels, and ww reserved full copyright of all contents of this repository retain unless otherwise stated within the page.

Some of the website source code that does not include the novels may be open sourced as a separate branch in the future.

### 有关 Issues 和 Discussions

代码库的Issues区仅用于报告网页渲染和脚本的bug，

如果聊小说请到Discussions区。

## 声明

这份README只是为了自己备忘使用，网站维护的范围不包括此README。也就是说，我不会在Issues区或Discussions区对README内容做解释。

这里只包括网站维护信息，所有信息仅限于字面，不包含任何形式的暗示，亦不表达任何立场。

## TODO表

### 此页相关

- [x] 此页内容改成表格
- [x] 收录所有信息$~~~$*待确认*

### 开发相关

- [ ] 功能
  - [ ] 推荐
  - [ ] 自动目录
  - [ ] 佳作推荐
  - [ ] 随机翻阅
  - [ ] 导航栏
  - [ ] 无障碍
    - [ ] 屏幕阅读器适配
- [x] 重构
  - [x] 变量名$~~~$*待确认*
  - [x] 文件名
  - [x] 注释

### 内容相关

- [x] 页面
  - [x] 关于法拉
  - [x] 关于本站
  - [x] 文章
    - [x] 灵感/棱镜
    - [x] 灵感/蜂巢
    - [x] 灵感/胶卷
    - [x] 未完成/上帝已死

## 元信息列表

命名方式：连字符，简称全大写

### Site元信息

|变量名|变量用途|使用范围|备注|
|:---|:---|:---|:---|
|title|网站标题|全站||
|description|网站简介|全站||
|theme|网站主题|全站||

### Page元信息

#### 页面信息

##### 内建

|变量名|变量用途|使用范围|备注|
|:---|:---|:---|:---|
|layout|版式类型|所有页面|只可填入_includes中的版式，不需要扩展名|
|title|页面标题|所有页面||
|description|页面描述|所有页面||

##### 自定义

|变量名|变量用途|使用范围|备注|
|:---|:---|:---|:---|
|no-like|禁用推荐|novel版式页面|仅布尔值|
|footer|页脚信息|novel/function版式页面||

#### 版权类

|变量名|变量用途|使用范围|备注|
|:---|:---|:---|:---|
|cc-type|版权类型|CCTemple|可用值见下|
|cc-name|版权声明名称|CCTemple||
|cc-link|版权声明链接|CCTemple||
|no-cc|隐藏声明|CCTemple|仅布尔值|

cc-type可用值列表：["by","by-sa","by-nd","by-nc","by-nc-sa","by-nc-nd","cr"]，cr代表CopyRight,其他皆为CC协议名

## 模板列表与功能简介

命名方式：小驼峰，简称全大写
|模板名|模板用途|使用范围|备注|
|:---|:---|:---|:---|
|CCTemple:|生成著作权声明或CC授权声明|各种页面的页尾||
|defaultFooter|默认底栏|页面底部||
|defaultHead|默认头信息|页面头||
|defaultHeader|默认顶栏|页面顶部||
|head-custom|自定义头信息|defaultHead|将被合并至defaultHead中|
|likeDisabled|推荐禁用提示|页尾||
|Liketemple|展示推荐功能|页尾|未完成|
|profiles/(name)|特殊页面的独立配置|MD文件末尾|应[MD033](https://github.com/DavidAnson/markdownlint/blob/v0.25.1/doc/Rules.md#md033)要求，将应用于特殊页面的HTML做成模板|

## 版式列表与功能简介

命名方式：小驼峰，简称全大写
|版式名|版式用途|使用范围|备注|
|:---|:---|:---|:---|
|default|默认排版|无||
|functional|功能性页面使用的模板|主页，关于|目前与default一致|
|novel|小说页模板，自动正文首行缩进，带推荐功能|小说页||
