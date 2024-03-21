import React, { useState, useEffect } from 'react';
import backtotop from '../assets/image/back-to-top.webp'
const BacktoTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Add scroll event listener to show/hide the button
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <d>
            <button
                className={`${isVisible ? 'opacity-100' : 'opacity-0'
                    } backTotop animate-bounce`}
                onClick={scrollToTop}
            >
                <img src={backtotop} alt="backtotop" className='circle1' />
            </button>
        </d>
    )
}

export default BacktoTop
