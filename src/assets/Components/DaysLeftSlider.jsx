import CalcDaysLeftThisYear from "../Data/CalcDaysLeftThisYear";

export default function DaysLeftSlider(){

    const {daysPassed, daysLeft } = CalcDaysLeftThisYear();
    let sliderWidth = (daysPassed/365) * 100;
    let sliderRemainsWidth = (daysLeft/365) * 100;

    const styleTimeSliderContainer = {
        width: "100%",
        height: "2rem",
        padding: '0.5rem',
        borderRadius: '8px',
        border: '1px solid #555',
        backgroundColor: "#222",
        display: 'flex'
    };

    const styleTimeSliderDaysPassed = {
        width: sliderWidth + "%",
        height: "100%",
        borderRadius: '4px 0 0 4px',
        backgroundColor: "#444"
    };

    const styleTimeSliderDaysLeft = {
        width: sliderRemainsWidth + "%",
        height: "100%",
        borderRadius: '0 4px 4px 0',
        backgroundColor: "#449966"
    };

    return(
        <div>
            <div style={styleTimeSliderContainer}>
                <div style={styleTimeSliderDaysPassed}></div>
                <div style={styleTimeSliderDaysLeft}></div>
            </div>
        </div>
    );

}