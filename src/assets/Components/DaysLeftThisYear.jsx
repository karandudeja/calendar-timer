import CalcDaysLeftThisYear from "../Data/CalcDaysLeftThisYear";

export default function DaysLeftThisYear(){

    const { daysPassed, daysLeft } = CalcDaysLeftThisYear();

    const today = new Date();
    const currentYear = today.getFullYear();
    
    return(
        <div className="mt-7 mb-3">
            <div className="flex flex-row place-content-between leading-5">
                <p className="">Days passed in {currentYear} <span className="text-gray-400 text-sm"> &nbsp; excluding today</span></p>
                <p className="text-right">Days left in {currentYear}</p>
            </div>
            <div className="flex flex-row place-content-between text-2xl font-bold">
                <p>{daysPassed}</p>
                <p>{daysLeft}</p>
            </div>
        </div>
    );
}