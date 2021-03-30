import React from 'react';
import gc from '../gc.jpeg';

export default function Home() {
    return (
        <main className="bg-white">
            <section
            className="container relative flex auto min-h-screen pt-12 lg:pt-64 px-8">
                <div className="grid grid-rows-2 md:grid-cols-2 gap-20">
                <img src={gc} alt="Green" 
            className="col-span-1 border-4 border-green-500 border-opacity-100 rounded"
            />
            <article className="relative rounded-lg border-4 border-green-500 border-opacity-100 shadow-xl bg-white-300 p-20">
                    <h3 
                className="text-2xl border-green text-black-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello, I'm Ryan. I am a full-stack developer living in Colorado. 
                    </h3>
                    </article>
                    </div>
            </section>
        </main>
    )
}