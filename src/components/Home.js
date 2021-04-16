import React from 'react';
import BTN  from './Aboutbtn';


export default function Home() {
    return (
        <main className="bg-white overflow-auto pb-32">
            <section
            className="overflow-auto relative flex-initial xs:flex-wrap md:mx-auto sm:my-20 min-h-20px pt-12 lg:pt-10 px-8 overscroll-contain">
                
                <div className="overflow-auto grid w-auto grid-rows-1 grid-cols-6 flex-initial justify-center space-between">
                    <article className="col-start-1 col-span-2 min-height-50 min-width-50 relative bg-white-300 p-20">
                    <BTN className=""></BTN>
            </article>
            <article className="flex flex-none flex wrap col-start-4 col-span-3 relative bg-white-300 p-20">
                    <h1 className="font-bold cursive leading-none lg:leading-snug md:text-l lg:text-6xl">
                   Hello, I'm Ryan. A full-stack web developer using React. 
                    </h1>
                    </article>
                    </div>
            </section>
           </main>
    )
}