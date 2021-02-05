//import * as process  from "process"
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
// export  function transSpecialChar(pageStr) {
//     if (pageStr != undefined && pageStr != "" && pageStr != 'null') {
//         pageStr = pageStr.replace(/\r/g, "\\r");
//         pageStr = pageStr.replace(/\n/g, "\\n");
//         pageStr = pageStr.replace(/\t/g, "\\t");
//         pageStr = pageStr.replace(/\\/g, "\\\\");
//         pageStr = pageStr.replace(/"\[{/g, "[{");
//         pageStr = pageStr.replace(/}]"/g, "}]");
//         // pageStr = pageStr.replace(/("")+/g, '"');
//         pageStr = pageStr.replace(/"{"/g, "{\"");
//         pageStr = pageStr.replace(/"}"/g, "\"}");
//         pageStr = pageStr.replace(/}}"/g, "}}");
//         pageStr = pageStr.replace(/\'/g, "&#39;");
//         pageStr = pageStr.replace(/ /g, "&nbsp;");
//         pageStr = pageStr.replace(/</g, "$lt;");
//         pageStr = pageStr.replace(/>/g, "$gt;");
//     }
//     return pageStr;
// }
// export  function fixForJSONstringify(pageStr:string) {
//     if (pageStr != undefined && pageStr != "" && pageStr != 'null') {
//         pageStr = pageStr.replace(/"{/g, "{");
//         pageStr = pageStr.replace(/}"/g, "}");
//         pageStr = pageStr.replace(/\\"/g, `"`);
       
       
//     }
//     return pageStr;
// }
//let myLog=jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:{"name":"shendl",'age':42}})
export function jsonLog({logApp,logName,logMsg,logVersion='1.0.0',logLevel='info'}:{
    logApp:string,logName:string,logMsg:any,logVersion?:string,logLevel?:string
}){
    let userAgent=''
    let  browserLanguage=''
    let referrer= '' 
    // if(process.browser){
    //     userAgent=navigator.userAgent
    //        browserLanguage=navigator.language
    //        referrer= document.referrer
    // }else{
        
    // }
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


    }
    const logStr=JSON.stringify(logObj)
    console.log(logStr)
    return logStr;

}

//test
jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:123})
jsonLog({logApp:"myApp",logName:"structLog-End",logMsg:'Hello world!'})
let myLog=jsonLog({logApp:"myApp",logName:"structLog-start",logMsg:{"name":"shendl",'age':42}})
console.log(`1:${myLog}`)
//  myLog=fixForJSONstringify(myLog)
//  console.log(`2:${myLog}`)
 let myObj=JSON.parse(myLog)
 console.log(`3:${myObj}`)
 console.log(`4:${JSON.stringify(myObj)}`)



// let myStr=numberToFixNumber(123456,6)
// console.log(myStr)
// let myDate=new Date()
// let myDateStr=dateToIsoformat(myDate)
// console.log(myDateStr)
// myDateStr=datetimeToIsoformat(myDate)
// console.log(myDateStr)




