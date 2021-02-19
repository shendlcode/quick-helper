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
})

jsonLog is a log function that write out json format log.So you can parse log very easy.

Call example:

`
let myLog=jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:{"name":"shendl",'age':22}})
`

### export function jsonInfo({logApp,logName,logMsg,logVersion='1.0.0',logLevel='info'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
})

jsonInfo is  log function whose logLevel is  info.

Info is enabled on product stage.


### export function jsonDebug({logApp,logName,logMsg,logVersion='1.0.0',logLevel='debug'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
}) 

jsonDebug is  log function whose logLevel is  debug.

Debug is enabled on develop or test stage.

### export function jsonWarn({logApp,logName,logMsg,logVersion='1.0.0',logLevel='warn'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
})

jsonWarn is  log function whose logLevel is  warn.

Warn log indicate that program is on unnormal status. 


### export function jsonError({logApp,logName,logMsg,logVersion='1.0.0',logLevel='error'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
})

jsonError is  log function whose logLevel is  error.

Warn log indicate that program is on error status. 


### export let logStrs:string[]=[]

All log are filled into logStrs.This is an string array.

You can write logStrs into storage or send   logStrs to server.

Then you can parse all logs.


### export let logThreshold='info'

Default log threshold is info.

So debug log will not write out.

You can change this variant to debug,info,warn,error.




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
