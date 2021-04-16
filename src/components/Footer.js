import React from 'react';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {


    return (
        <div>
        <div className="w-screen justify-center inline-flex py-3 px-3 my-10 md:gap-32">
                    <SocialIcon 
                    url="https://www.linkedin.com/in/ryan-tartar-2b2a96158/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                    <SocialIcon 
                    url="https://www.facebook.com/ryan.tartar/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                    <SocialIcon url="https://www.github.com/rtartar" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                    </div>
                    <div className="text-sm flex justify-end">
                        Built with React and Sanity.io
                    </div>
                </div>
    )
}