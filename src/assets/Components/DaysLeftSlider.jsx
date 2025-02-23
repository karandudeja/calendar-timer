import CalcDaysLeftThisYear from "../Data/CalcDaysLeftThisYear";

export default function DaysLeftSlider(){

    const {daysPassed, daysLeft } = CalcDaysLeftThisYear();
    let sliderWidth = (daysPassed/365) * 100;
    let sliderRemainsWidth = (daysLeft/365) * 100;

    const styleTimeSliderContainer = {
        width: "100%",
        height: "2rem",
        padding: '0.4rem',
        borderRadius: '25px',
        border: '1px solid #ddd',
        backgroundColor: "#eee",
        display: 'flex'
    };

    const styleTimeSliderDaysPassed = {
        width: sliderWidth + "%",
        height: "100%",
        borderRadius: '25px 0 0 25px',
        backgroundColor: "#aaa"
    };

    const styleTimeSliderDaysLeft = {
        width: sliderRemainsWidth + "%",
        height: "100%",
        borderRadius: '0 25px 25px 0',
        backgroundColor: "#228855"
    };

    return(
       
        <div style={styleTimeSliderContainer}>
            <div style={styleTimeSliderDaysPassed}></div>
            <div style={styleTimeSliderDaysLeft}></div>
        </div>
        
    );

}