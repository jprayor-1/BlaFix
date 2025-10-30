'use client';

import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation"


//

const Navbar = () => {
    const router = useRouter();
    // State to handle scroll effects
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
              } else {
                setIsScrolled(false);
              }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleNavClick = (path) => {
        router.push(path)
    }

    return (
        <nav className="fixed w-full z-50 bg-black">
            <div className="flex items-center justify-between px-8 py-4">
            <div className="text-2xl text-red-600">NETFLIX</div>
            <ul className="flex space-x-6">
                <li onClick={()=> handleNavClick('/')}>Home</li>
                <li onClick={()=> handleNavClick('/shows')}>Shows</li>
                <li onClick={()=> handleNavClick('/movies')}>Movies</li>
                <li onClick={()=> handleNavClick('/new&popular')}>New & Popular</li>
            </ul>
            </div>
        </nav>
    )


}

export default Navbar