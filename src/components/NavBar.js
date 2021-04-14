import React from 'react';
import { NavLink} from 'react-router-dom';

export default function NavBar() {

    return (
        <header className="bg-inherit w-screen">
            <div className="container mx-auto flex justify-between w-screen">
                <nav className="flex lg:gap-40 sm:gap-10">
                    <NavLink to='/' 
                    exact 
                    activeClassName="text-green"
                    className="inflex-flex items-center py-7 px-3 mr-4 text-green-600 hover:text-purple-800 text-6xl font-bold cursive tracking-widest"
                    >
                        RT
                    </NavLink>
                    <NavLink to='/about' 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-purple-800 text-2xl"
                    activeClassName="text-purple-100 bg-purple-700"
                    >
                        About Me!
                    </NavLink>
                    <NavLink to='/projects' 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-purple-800 text-2xl"
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
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-purple-800 text-2xl"
                    activeClassName="text-purple-100 bg-purple-700"
                    >
                        Get In Touch!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}