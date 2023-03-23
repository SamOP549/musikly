import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState('')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setShadow('shadow-md')
            } else {
                setShadow('')
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div
            style={{ backgroundColor: "white" }}
            className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${shadow}`}
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white relative'>
                <div className='relative py-4'>
                    <Link rel="preload" href='/'>
                        <div className='bg-pink-500 h-4 w-4 rounded-full opacity-60 absolute top-0 left-0' />
                        <h6 className='text-black tracking-normal font-bold text-lg absolute top-0 left-2 michroma'>MUSIKLY</h6>
                    </Link>
                </div>
                <ul className='hidden sm:flex text-gray-500 text-sm'>
                    <li className='p-4 text-lg'>
                        <Link rel="preload" href='/'><p className='cursor-pointer hover:text-black'>Discover</p></Link>
                    </li>
                    <li className='p-4 text-lg'>
                        <Link rel="preload" href='/'><p className='cursor-pointer hover:text-black'>Download</p></Link>
                    </li>
                    <li className='p-4 text-lg border-r'>
                        <Link rel="preload" href='/'><p className='cursor-pointer hover:text-black'>Premium</p></Link>
                    </li>
                    <li className='p-4 text-lg'>
                        <Link rel="preload" href='/'><p className='cursor-pointer hover:text-black'>Login</p></Link>
                    </li>
                    <li className='p-4 text-lg'>
                        <Link rel="preload" href='/'><p className='cursor-pointer hover:text-black'>Sign Up</p></Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: "#ffffff" }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: "black" }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-out duration-300'
                            : 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-2xl'>
                            <Link rel="preload" href='/'><p className='cursor-pointer'>Discover</p></Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-2xl'>
                            <Link rel="preload" href='/services'><p className='cursor-pointer'>Download</p></Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-2xl'>
                            <Link rel="preload" href='/about'><p className='cursor-pointer'>Premium</p></Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-2xl'>
                            <Link rel="preload" href='/reviews'><p className='cursor-pointer'>Login</p></Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-2xl'>
                            <Link rel="preload" href='/contact'><p className='cursor-pointer'>Sign Up</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;