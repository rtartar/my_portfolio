import React from 'react';
import BTN  from './Aboutbtn';


export default function Home() {
    return (
        <main className="bg-white overflow-auto">
            <section
            className="overflow-auto sm:container relative flex-initial mx-auto min-h-auto pt-12 lg:pt-64 px-8 overscroll-contain">
                
                <div className="overflow-auto grid grid-rows-1 m:grid-cols-6 flex-initial justify-center">
                    <article className="flex-initial col-start-2 col-span-2 min-height-10 relative bg-white-300 p-20">
                    <BTN></BTN>
            </article>
            <article className="flex flex-none col-start-4 col-span-3 relative bg-white-300 p-20">
                    <h1 className="font-bold cursive leading-none lg:leading-snug home-name ">
                   Hello, I'm Ryan. A full-stack web developer using React. 
                    </h1>
                    </article>
                    </div>
            </section>
           </main>
    )
}