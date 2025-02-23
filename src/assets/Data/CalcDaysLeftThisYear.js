import { yearDays } from "../Data/YearlyDays";

export default function CalcDaysLeftThisYear(){

    const today = new Date();
    const currentYear = today.getFullYear();
    const totalDaysOfYear = yearDays[currentYear];
    const daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    const daysPerMonthLeap = [31,29,31,30,31,30,31,31,30,31,30,31];
    let daysPassed = daysPassedFn(today.getMonth());
    let daysLeft = totalDaysOfYear - daysPassed;

    function daysPassedFn(monthNum){
        let daysTotalCount = 0;
        let daysPassedExcludingToday = 0;

        if(monthNum > 0){
            if(totalDaysOfYear == 365){
                for(let i=0; i < monthNum; i++){
                    daysTotalCount += daysPerMonth[i];
                }
            }
            else{
                for(let i=0; i < monthNum; i++){
                    daysTotalCount += daysPerMonthLeap[i];
                }
            }
            daysPassedExcludingToday = today.getDate() + daysTotalCount;
        }
        else{
            daysPassedExcludingToday = today.getDate();
        }

        return daysPassedExcludingToday - 1;
    }
    
    return({daysPassed, daysLeft});
}