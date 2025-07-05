import React from 'react'
import { APP_LOGO, BANNER, PLAY_LOGO } from '../Utils/FooterData'

const Footer = () => {
    return (
        <div>
            <div className='mt-16'>
                <img className='h-80 w-full object-cover mb-16' src={BANNER} alt="Banner" />
            </div>

            <div className="mx-4 md:mx-20 border-t-4 border-black"></div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-4">
                <h1 className='text-xl md:text-2xl font-bold text-gray-800 text-center md:text-left'>
                    For better experience, download the Swiggy app now
                </h1>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target='_blank'>
                        <img src={APP_LOGO} alt="APP_LOGO" className='w-32 md:w-40' />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target='_blank'>
                        <img src={PLAY_LOGO} alt="PLAY_LOGO" className='w-32 md:w-40' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
