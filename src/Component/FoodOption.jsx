import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption(){

    return (
        <div className="w-[80%] container mx-auto mt-20">
            <h2 className="text-[24px] font-bold p-4">Order our best food options</h2>
            <div className="flex flex-wrap  gap-3">
                {
                    imageGridCards.map((foodData) =><FoodCard key={foodData.id} foodData={foodData}/>)
                }
            </div>
        </div>
    )
}