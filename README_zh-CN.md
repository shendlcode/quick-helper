# 介绍

quick-helper 项目。

这是一个npm模块。提供了一些有用的javascript函数，用于提升js/ts程序的开发效率。使用typescript开发。


其他语言的文档: [English](README.md) | 简体中文


# API

## Date helper functions 

### export function numberToFixNumber(val:number,length:number){
数值转为固定位数的字符串。位数超过则丢弃前面几位，位数不足则前面用0补足。

### export function dateToIsoformat(date:Date){

把日期转为ISO8601格式：YYYY-MM-DD 的字符串。精确到日期。

### export function datetimeToIsoformat(date:Date){


把日期转为ISO8601格式的字符串。精确到毫秒。

YYYY-MM-DDTHH:MM:SS.ffffff，如果毫秒不为0。

YYYY-MM-DDTHH:MM:SS，如果毫秒为0。

# 使用方法
1. 请运行如下命令:

`
npm install quick-helper
`

安装quick-helper模块.

2. 请运行如下命令:


`
npm update quick-helper
`
更新quick-helper模块.

3. 请运行如下命令:

`
tsc ./index.ts
`

把typescript代码编译成javascript代码。会生成index.js文件。
