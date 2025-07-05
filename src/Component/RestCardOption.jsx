
import RestCard from "./RestCard";

export default function RestCardOption({restData}){
    return (
        <div className="container w-[80%] mx-auto mt-10">
            <h2 className="text-[24px] font-bold mb-5">Restaurants with online food delivery in Delhi</h2>
            <div className="flex flex-wrap gap-5">
                {
                    restData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}/>)
                }
            </div>
        </div>
        
    )
}