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
