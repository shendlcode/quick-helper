# Introduction
quick-helper project.

This is a npm module.There are some useful functions for javascript development.I write it by typescript.

Read this in other languages: English | [简体中文](README_zh-CN.md)

# API

## Date helper functions

### export function numberToFixNumber(val:number,length:number){


### export function dateToIsoformat(date:Date){
convert Date to Iso Format String by date. 

ISO 8601 Format: YYYY-MM-DD

### export function datetimeToIsoformat(date:Date){

convert Date to Iso Format String by datetime. 

ISO 8601 Format: YYYY-MM-DDT

YYYY-MM-DDTHH:MM:SS.ffffff，if microsecond > 0

YYYY-MM-DDTHH:MM:SS，if microsecond == 0
