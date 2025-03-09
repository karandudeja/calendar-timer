import CalcDaysLeftThisYear from "../Data/CalcDaysLeftThisYear";

//https://www.npmjs.com/package/weeknumber#weeknumbersun
import { weekNumberSun } from 'weeknumber';

export default function WeekNumber(){
    
    var today = new Date();
    var thisYear = today.getFullYear();
    var startYearDate = new Date(thisYear, 0, 1);
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var startYearDay = dayOfWeek[startYearDate.getDay()];

    const weeknum = weekNumberSun(new Date(today.getFullYear(), today.getMonth(), today.getDate()))

    return(
        <div>
            <p>Week number: {weeknum}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 52 }, (_, index) => {

                    let bgColor;
                    let condWidth = '2px';
                    if (index + 1 === weeknum) {
                        bgColor = 'red';
                        condWidth = '5px';
                    } else if (index + 1 < weeknum) {
                        bgColor = 'lightgray';
                    } else {
                        bgColor = 'black';
                    }

                    return(
                        <div key={index} style={{ margin: '2px' }}>
                            <div
                                style={{
                                    width: condWidth,
                                    height: '15px',
                                    backgroundColor: bgColor,
                                }}
                            ></div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
}