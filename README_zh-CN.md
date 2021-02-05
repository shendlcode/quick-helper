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


### export function jsonLog({logApp,logName,logMsg,logVersion='1.0.0',logLevel='info'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
}){

jsonLog是一个日志函数。输出为json格式，目的是便于对日志数据进行分析和处理。

logApp应该填写本应用的名字。

logName应该填写该日志的名字。

logVersion应该填写该日志的版本号。



logMsg是真正的日志内容。随便什么javascript对象都可以。

你可以使用logApp,logName,logMsg,logVersion这3个信息，确定日志的格式，编写代码解析logMsg。

日志有ISO格式的时间，也有等级。

如果在浏览器环境下，还会有

browserLanguage：浏览器语言
referrer: 前一个页面地址,
userAgent：浏览器的userAgent信息，可以据此得到浏览器的名字，版本，平台信息等。

调用例子：

`
let myLog=jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:{"name":"shendl",'age':22}})
`


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
