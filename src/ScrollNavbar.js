import React, { useEffect, useState } from 'react'
import useScrollListener from "./hooks/useScrollListener";
const ScrollNavbar = () => {

    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 250 && scroll.y - scroll.lastY > 0)
            _classList.push("nav-bar--show");

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return (
        <div className={`scroll_nav ${navClassList.join(" ")}`}>
            <a href='#booking' className='link'>Booking</a>
            <a href='#services' className='link'>Services</a>
            <a href='#policys' className='link'>Policy</a>
            <a href='#contact' className='link'>Contact</a>
        </div>
    )
}

export default ScrollNavbar