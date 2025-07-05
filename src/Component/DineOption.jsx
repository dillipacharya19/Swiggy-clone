import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOption(){
    return (
        <div className="w-[80%] mx-auto mt-20">
            <p className="text-[24px] font-bold mb-10">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5">
                {
                    dineoutRestaurants.map((RestData)=><DineCard key={RestData.info.id} RestData={RestData}/>)
                }
            </div>
        </div>
    )
}