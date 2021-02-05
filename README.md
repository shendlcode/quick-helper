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

convert Date to Iso 8601 Format String by datetime. 

YYYY-MM-DDTHH:MM:SS.ffffff，if microsecond > 0

YYYY-MM-DDTHH:MM:SS，if microsecond == 0


### export function jsonLog({logApp,logName,logMsg,logVersion='1.0.0',logLevel='info'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
}){

jsonLog is a log function that write out json format log.So you can parse log very easy.

Call example:

`
let myLog=jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:{"name":"shendl",'age':22}})
`

# Use
1. Please run this command:

`
npm install quick-helper
`

to install quick-helper module.

2. Please run this command:


`
npm update quick-helper
`
to update quick-helper module.

3. Please run this command:

`
tsc ./index.ts
`

to compile code from typescript to javascript.

Then you can run index.js.
