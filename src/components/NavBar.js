import React from 'react';
import { NavLink} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {

    return (
        <header className="bg-inherit">
            <div className="container mx-auto flex justify-between">
                <nav className="flex gap-20">
                    <NavLink to='/' 
                    exact 
                    activeClassName="text-green"
                    className="inflex-flex items-center py-7 px-3 mr-4 text-green-500 hover:text-purple-800 text-6xl font-bold cursive tracking-widest"
                    >
                        RT
                    </NavLink>
                    <NavLink to='/about' 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-purple-800 text-2xl"
                    activeClassName="text-purple-100 bg-purple-700"
                    >
                        About Me!
                    </NavLink>
                    <NavLink to='/projects' 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-purple-800 text-2xl"
                    activeClassName="text-purple-100 bg-purple-700"
                    >
                        Projects
                    </NavLink>
                    {/* <NavLink to='/post'
                     className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-purple-800 text-2xl"
                     activeClassName="text-purple-100 bg-purple-700"
                     >
                        Blog Posts
    </NavLink> */}
                    <NavLink to='/Contact'
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-purple-800 text-2xl"
                    activeClassName="text-purple-100 bg-purple-700"
                    >
                        Get In Touch
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-10 gap-20">
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
            </div>
        </header>
    )
}