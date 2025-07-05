import { Link } from "react-router"

export default function RestCard({restInfo}){

    return (
        <Link to={"/city/delhi/" + restInfo?.info?.id}>
            <div className="max-w-[280px] mb-2 cursor-pointer transform transition duration-200 hover:scale-95">
                <div className="relative w-[100%] h-[100%]">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId} className="h-45 w-70 object-cover rounded-xl" ></img>
                    <span className="absolute left-2 bottom-2 text-white text-xl z-10 font-bold">  {restInfo?.info?.aggregatedDiscountInfoV3?.header || ""}{" "}
                    {restInfo?.info?.aggregatedDiscountInfoV3?.subHeader || ""}</span>
                    <div className="absolute bg-gradient-to-t from-black h-26 bottom-0 left-0 right-0"></div>
                </div>
                <div className="w-[95%] mx-auto mt-5">
                    <div className="font-bold text-xl w-[80%] truncate">{restInfo?.info?.name}</div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0">
                            <svg className="w-6 h-6 fill-green-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
                            </svg>
                            <span className="text-lg">{restInfo?.info?.avgRating}</span>
                        </div>
                        <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
                    </div>
                    <div className="text-gray-600 text-xl mt-1 w-[90%] truncate h-7">{restInfo?.info?.cuisines.join(", ")}</div>
                    <div className="text-gray-600 text-xl mt-1 w-[90%] truncate h-7">{restInfo?.info?.areaName}</div>
                </div>
            </div>
        </Link> 
    )   
}