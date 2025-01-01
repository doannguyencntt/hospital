import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
    name: 'timeFormatForHopDongPipe'
})
@Injectable()
export class TimeFormatForHopDongPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(value == null || value == "null")
    {
      return " ";
    }
    else
    {
      //return super.transform(value, "HH:mm");
      return this.sec2time(value)
    }
    
  }
   sec2time(totalSeconds:number) {
     var result="";
    let k:number=0;
    var hours   = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    var hoursStr=hours.toString();
    var minutesStr=minutes.toString();
    var secondsStr=seconds.toString();
    if(hours>12){
      hours=hours-12;
      hoursStr=hours.toString();
      k=1; 
     }
    if (hours   < 10) {hoursStr   = "0"+hours;}
    if (minutes < 10) {minutesStr = "0"+minutes;}
    if (seconds < 10) {secondsStr = "0"+seconds;}
    
    if(k==1)
    {
      result= hoursStr+':'+minutesStr +' CH'
    }else{
      result= hoursStr+':'+minutesStr +' SA'
    }
    return result;
}
}