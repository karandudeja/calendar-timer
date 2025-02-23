import CalcDaysLeftThisYear from "../Data/CalcDaysLeftThisYear";

export default function DaysLeftThisYear(){

    const { daysPassed, daysLeft } = CalcDaysLeftThisYear();

    const today = new Date();
    const currentYear = today.getFullYear();
    
    return(
        <div>
            <h4>Days passed <br/>in this year {currentYear},<br/>excluding today</h4>
            <h1>{daysPassed}</h1>
            <h4>Days left in the year {currentYear}</h4>
            <h1>{daysLeft}</h1>
        </div>
    );
}