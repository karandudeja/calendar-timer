export default function Today(){

    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return(
        <div>
            <p className="text-gray-500">Today is</p>
            <p className="text-3xl font-bold mt-2">{today.getDate()} {months[today.getMonth()]} {today.getFullYear()} </p>
            <p className="text-gray-900">{dayOfWeek[today.getDay()]}</p>
        </div>
    );
}