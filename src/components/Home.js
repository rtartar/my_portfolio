import React from 'react';
import gc from '../gc.jpeg';
import BTN  from './Aboutbtn';
import Intro from './Intro';

export default function Home() {
    return (
        <main className="bg-white">
            <section
            className="container relative flex mx-auto min-h-screen pt-12 lg:pt-64 px-8">
                <div className="grid grid-rows-2 md:grid-cols-4 gap-20 flex justfy-center">
                <img src={gc} alt="Me"
            className="col-span-2 border-4 border-green-500 border-opacity-100 rounded"
            />
            <article className="col-span-2 relative rounded-lg border-4 border-green-500 border-opacity-100 shadow-xl bg-white-300 p-20">
                    <h3 
                className="text-2xl border-green text-black-100 font-bold cursive leading-none lg:leading-snug home-name ">
                    Hey there. Welcome to my page! I am a full-stack developer with experience in HTML, Javascript, and CSS.
    My framework of choice is React. On the back-end of things I have used Node.js and Express. I love learning and am always 
    aiming to get better at everything. 
                    </h3>
                    </article>
                    <article className="relative col-start-2 col-span-2 rounded-lg border-4 border-green-500 border-opacity-100 shadow-xl bg-white-300 p-20">
                        <BTN></BTN>
                        </article>
                    </div>
            </section>
        </main>
    )
}