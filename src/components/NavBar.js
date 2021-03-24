import React from 'react';
import { NavLink} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Ryan
                    </NavLink>
                    <NavLink to='/about' 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-green-800"
                    activeClassName="text-purple-100 bg-purple-700"
                    >
                        About Me!
                    </NavLink>
                    <NavLink to='/projects' 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-green-800"
                    activeClassName="text-purple-100 bg-purple-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink to='/post'
                     className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-green-800"
                     activeClassName="text-purple-100 bg-purple-700"
                     >
                        Blog Posts
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
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