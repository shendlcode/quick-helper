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

//test
let myStr=numberToFixNumber(123,6)
console.log(myStr)
let myDate=new Date()
let myDateStr=dateToIsoformat(myDate)
console.log(myDateStr)
myDateStr=datetimeToIsoformat(myDate)
console.log(myDateStr)




