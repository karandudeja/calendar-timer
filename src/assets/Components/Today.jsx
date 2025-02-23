export default function Today(){

    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return(
        <div>
            <h4>Today is</h4>
            <h1>{today.getDate()} {months[today.getMonth()]} {today.getFullYear()} </h1>
            <h5>{dayOfWeek[today.getDay()]}</h5>
        </div>
    );
}