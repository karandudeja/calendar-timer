export default function TitleDivider({title}){
    return(
        <div className="mt-12">
            <hr className="border-gray-300 my-4" />
            <p className="font-bold">{title}</p>
        </div>
    );
}