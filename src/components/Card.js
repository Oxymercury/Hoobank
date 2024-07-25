import React from 'react'
import Quotes from '../assets/quotes.svg'



const Card = (props) =>{
    return (
        <div className='my-10 md:w-1/3 w-2/3 xl:mx-16 bg-gradient-to-r from-[#151515] to-[#36363b] mx-auto bg-slate-600 p-6 rounded-2xl' data-aos="fade-up" data-aos-delay="70">
            <img src={Quotes} className='h-4 my-7 mx-auto'/>
            <p className='text-slate-500 my-7 mx-auto'>{props.review}</p>
            <div className='flex justify-center my-7 '>
                <img src={props.People} className='h-8 my-auto mx-4' />
                <div>
                    <p className='text-white font-medium'>Python</p>
                    <p className='text-slate-500'>Founder & Leader</p>
                </div>
            </div>
        </div>
    );
}

export default Card;