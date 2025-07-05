import { GroceryGridCards } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){

    return ( 
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-[24px] font-bold p-4">Shop Groceries on Instamart </h1>
            <div className="flex overflow-x-auto mt-10 whitespace-nowrap px-4">
                {
                    GroceryGridCards.map((foodData) =><GroceryCard key={foodData.id} foodData={foodData}/>)
                }
            </div>
        </div>
    )
}