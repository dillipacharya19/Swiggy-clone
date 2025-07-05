

export default function RestFoodCard({foodInfo}){
    return (
        <div className="flex-shrink-0 w-45 h-60 mb-10 transform transition duration-200 hover:scale-95">
            <a href={foodInfo?.action.link}>
                <img className="w-40 h-50 object-cover rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodInfo?.imageId}`}></img>
            </a>
        </div>
    )
}