

export default function DineCard({RestData}){
    return (
        <div className="max-w-sm flex-none min-w-82 bg-white rounded-[16px]  drop-shadow-[0px_0px_7.905px_rgba(27,30,36,0.08)] mb-20">
            <a a href={RestData?.cta?.link} target="_blank">
                <div>       
                    <div className="relative w-[100%] h-[100%]">
                        <img className="w-full h-50 rounded-t-[16px] object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.info?.mediaFiles[0]?.url}`}></img>
                        <p className="absolute left-2 bottom-2 text-white text-xl z-10 w-[70%] truncate font-bold">{RestData?.info?.name}</p>
                        <p className="absolute right-2 bottom-2 text-white text-xl z-10 font-bold">{RestData?.info?.rating?.value}</p>
                        <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
                    </div>
                    <div className="m-3">
                        <div className="flex justify-between text-[#02060C99] text-sm mb-1">
                            <span>{RestData?.info?.cuisines.join(" - ")}</span>
                            <span>{RestData?.info?.costForTwo}</span>
                        </div>
                        <div className="flex justify-between text-[#02060C99] text-sm">
                            <span>{RestData?.info?.locationInfo?.formattedAddress}</span>
                            <span>{RestData?.info?.locationInfo?.distanceString}</span>
                        </div>
                        <div className="flex items-center justify-center rounded-xl gap-1 text-[14px] mt-[10px] bg-gray-200 w-30 h-7">
                            <img className="w-4 h-4" src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.info?.vendorOffer?.offerHighlights[0]?.logoCtx?.logo}`}></img>
                            <span>{RestData?.info?.vendorOffer?.offerHighlights[0]?.logoCtx?.text}</span>
                        </div>
                        <div className="flex items-center bg-[#1BA672] rounded-lg h-9 text-white justify-between font-bold text-[14px] px-2 mt-[12px]">
                            <div className="flex items-center gap-1">
                                <img className="w-5 h-5" src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.info?.offerInfoV3?.offerLogo?.logo}`}></img>
                                <span>{`${RestData?.info?.offerInfoV3?.vendorOffer?.title} ${RestData?.info?.offerInfoV3?.vendorOffer?.subtitle}`}</span>
                            </div>
                            <div>{RestData?.info?.offerInfoV3?.vendorOffer?.subtext}</div>
                        </div>
                        <div className="bg-[#C8F9E5] text-[#1BA672] text-[15px] font-semibold pl-[12px] mt-[12px] rounded-lg h-9 flex items-center">{RestData?.info?.customerOffer?.infos[0].description}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}