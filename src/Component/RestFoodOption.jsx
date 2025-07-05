import RestFoodCard from "./RestFoodCard";
export default function RestFoodOption({foodData}){
    return (
        <div className="w-[80%] container mx-auto mt-5">
            <h2 className="text-[24px] font-bold p-4">What's on your mind?</h2>
            <div className="flex overflow-x-auto mt-0 whitespace-nowrap px-4">
                {
                    foodData.map((foodInfo)=> <RestFoodCard key={foodInfo?.id} foodInfo={foodInfo}/>)
                }
            </div>
        </div>
    )
}