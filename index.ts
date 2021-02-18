import { isPrimitive } from "util";

export const name='quick-helper'

export function numberToFixNumber(val:number,length:number){
    let fixNumber=``
    let valStr=String(val)
    let len =valStr.length
    if(len>=length){
        fixNumber=valStr.substring(len-length);
    }else{
        fixNumber=valStr
        for(; len < length; len = fixNumber.length) {
            fixNumber = "0" + fixNumber;            
        }
    }

    
    return fixNumber;
    
}

export function dateToIsoformat(date:Date){
    const     dateStr=`${date.getFullYear()}-${numberToFixNumber(date.getMonth(),2)}-${numberToFixNumber(date.getDate(),2)}`

    return dateStr
}



export function datetimeToIsoformat(date:Date){
//     YYYY-MM-DDTHH:MM:SS.ffffff，如果 microsecond 不为 0

// YYYY-MM-DDTHH:MM:SS，如果 microsecond 为 0
    let dateStr=``
    if(date.getMilliseconds()>0){
        dateStr=`${date.getFullYear()}-${numberToFixNumber(date.getMonth(),2)}-${numberToFixNumber(date.getDate(),2)}T${numberToFixNumber(date.getHours(),2)}:${numberToFixNumber(date.getMinutes(),2)}:${numberToFixNumber(date.getSeconds(),2)}.${numberToFixNumber(date.getMilliseconds(),6)}`

    }else{
        dateStr=`${date.getFullYear()}-${numberToFixNumber(date.getMonth(),2)}-${numberToFixNumber(date.getDate(),2)}T${numberToFixNumber(date.getHours(),2)}:${numberToFixNumber(date.getMinutes(),2)}:${numberToFixNumber(date.getSeconds(),2)}`

    }
    return dateStr
}

export let logStrs:string[]=[]

//let myLog=jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:{"name":"shendl",'age':42}})
export function jsonLog({logApp,logName,logMsg,logVersion='1.0.0',logLevel='info'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
}){
    let userAgent=''
    let  browserLanguage=''
    let referrer= '' 

    if(typeof navigator !== "undefined" && navigator !== null){
          userAgent=navigator.userAgent
           browserLanguage=navigator.language
    }
    if(typeof document !== "undefined" && document !== null){
          referrer= document.referrer
 
    }
    let logObj={
        "logLevel":logLevel,

        "logTime":datetimeToIsoformat(new Date()),
        "logApp":logApp,
        "logName":logName,
        "logVersion":logVersion,
        "userAgent": userAgent,
       
       "browserLanguage": browserLanguage,
       "referrer": referrer,
        "logMsg":logMsg,
        "ip":""

    }
    const logStr=JSON.stringify(logObj)
    
    console.log(logStr)
    logStrs.push(logStr)
    return logStr;

}

//test
// jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:123})
// jsonLog({logApp:"myApp",logName:"structLog-End",logMsg:'Hello world!'})
// let myLog=jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:{"name":"shendl",'age':42}})
// console.log(`1:${myLog}`)
// //  myLog=fixForJSONstringify(myLog)
// //  console.log(`2:${myLog}`)
//  let myObj=JSON.parse(myLog)
//  console.log(`3:${myObj}`)
//  console.log(`4:${JSON.stringify(myObj)}`)



// let myStr=numberToFixNumber(123456,6)
// console.log(myStr)
// let myDate=new Date()
// let myDateStr=dateToIsoformat(myDate)
// console.log(myDateStr)
// myDateStr=datetimeToIsoformat(myDate)
// console.log(myDateStr)




