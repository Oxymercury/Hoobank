import React from 'react'
import People1 from '../assets/people01.png'
import People2 from '../assets/people02.png'
import People3 from '../assets/people03.png'

import Card from './Card'
import Button  from './Button'


const Review = () =>{
    return (
         <div>
            <div className='md:flex xl:justify-between mx-7 md:mx-16 my-20 xl:mx-52'>
                <p className='text-4xl font-bold text-white my-4 xl:w-1/3 ' >What people are saying about us</p>
                <p className='text-slate-500 my-6 md:w-4/6 xl:w-1/3'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='xl:flex  xl:mx-52'>
            <Card review="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." People = {People1} />
            <Card review="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." People = {People2} />
            <Card review="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." People = {People3} />
            </div>
            <div className="xl:flex p-5 mx-7 md:mx-16 xl:mx-52 rounded-3xl bg-gradient-to-r from-[#151515] to-[#36363b] my-20">
                <div>
                    <p className='text-3xl text-white text-center font-bold  my-5'>Let’s try our service now!</p>
                    <p className='text-slate-500 my-5 mx-auto text-center xl:text-left md:w-1/2'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div className='text-center xl:my-auto'>
                <Button value="Get Started"/>
                </div>
            </div>

         </div>
    );
}

export default Review;