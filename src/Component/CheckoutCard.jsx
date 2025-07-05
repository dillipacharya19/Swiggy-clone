import { IncrementItems,DecrementItems } from "../Stored/CartSlicer";
import { useDispatch } from "react-redux";

export default function CheckOutCard({card}){
    const dispatch = useDispatch();

    function Increment(){
        dispatch(IncrementItems(card))
    }

    function Decrement(){
        dispatch(DecrementItems(card))
    }
    
    return (
        <div className="w-full flex gap-5 mt-10 justify-between">
            <p className="w-[60%] text-2xl">{card?.name}</p>
            <div className="flex gap-5">
                <div className="flex gap-5 border p-2 text-xl">
                    <button onClick={()=>Decrement()} className="cursor-pointer">-</button>
                    <p className="w-[20px] text-center">{card?.quantity}</p>
                    <button className="cursor-pointer" onClick={()=>Increment()}>+</button>
                </div>
                <p>{`₹${card?.defaultPrice?card.defaultPrice/100 * card.quantity:card.price/100*card?.quantity}`}</p>
            </div>
        </div>
    )
}