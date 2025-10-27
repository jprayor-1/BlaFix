'use client';

import React, {useState, useEffect} from "react";
import { useRouter } from "next/router"

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
        <nav>
            <div>Logo</div>
            <ul>
                <li>Home</li>
                <li>Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
            </ul>
        </nav>
    )


}

export default Navbar