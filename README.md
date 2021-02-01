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
