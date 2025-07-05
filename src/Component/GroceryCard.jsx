
export default function GroceryCard({foodData}){

    return (
        <div className="flex-shrink-0 w-45 h-60 mb-10">
            <a href={foodData?.action?.link}>
                <img className="w-36 h-45 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}></img>
            </a>
            <h2 className="text-[20px] w-36 font-bold text-center break-words whitespace-normal">{foodData?.action?.text}</h2>
        </div>
    )
}