import React from 'react';
import Subscribe from './Subscribe';
import Image from 'next/image'



export default function Hero() {
  const iphone = require('../public/phone.png')
  return (
    <div className="bg-offwhite">
      <div className="flex justify-center flex-col items-center sm:flex-row" role="main">

        <div className="m-8 sm:w-3/12 md:w-3/12 lg:w-1/5 order-last sm:order-first" role="img">
          <Image src={iphone} alt={'Phone Screenshot'}/>
        </div>

        <div className="sm:px-8 mt-8 px-4 flex-grow sm:mr-30 md:mr-20">
          <div className={"flex bg-green-300 rounded-lg justify-center p-5 items-center my-5"}>
          <h1
          onClick={() => {window.location.href = 'https://www.kickstarter.com/projects/rafeej/sewthis-by-abi/posts/3331691'}}
            className="text-4xl font-serif tracking-tight text-gray-900 leading-snug underline"
            role="heading"
            aria-level="1"
          >
            We did it! <span className="text-darkp">Sew</span><span className="text-lightp">This</span> is funded! <br/> Read about it here.
          </h1>
          </div>
        
          
          {/* <Image src={h} alt={'Kickstarter Logo'}/> */}
          <h1
            className="text-5xl font-serif tracking-tight text-gray-900 leading-snug"
            role="heading"
            aria-level="1"
          >
            <span className="text-darkp">Sew</span><span className="text-lightp">This</span> can generate custom patterns <br /> <span className="font-extrabold"> in seconds. </span>
          </h1>
          <p className="w-3/5 mt-2 text-gray-600 text-2xl font-serif" aria-level="2">
            Let SewThis do all the hard work, you just keep looking good.
          </p>
          <p className="w-3/5 mt-4 text-gray-600 text-xl font-serif" aria-level="2">
            We are almost ready to launch! Get email updates of our progress and be one of the first to try SewThis!
          </p>
          <div className="mt-2 flex" role="button">
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  )
}
