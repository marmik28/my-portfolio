import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../app/globals.css";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        // Disable scrolling when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMobileMenuOpen]);

    return (
        <div className="block">
        <div className="flex justify-between items-center fixed z-50 top-0 left-0 right-0 mx-auto max-w-screen-xl w-full py-4 bg-white md:py-8">
            <p className="m-0 py-0 px-4 font-poppins font-medium slide delay text-3xl">
                <span className="heroText2">&lt;</span>
                M /
                <span className="heroText2">&gt;</span>
            </p>
            <div className="hidden md:flex justify-between text-2xl font-medium">
                <div className="px-8 slide delay">Projects</div>
                <div className="px-8 slide delay">About</div>
                <div className="px-8 slide delay">Resume</div>
            </div>
            <div className="md:hidden px-4 slide delay">
                <button onClick={toggleMobileMenu} className="text-3xl">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed top-20 left-0 right-0 bottom-0 bg-white flex flex-col items-center justify-center text-4xl font-medium z-50">
                    <div className="py-4 slide delay cursor-pointer" onClick={toggleMobileMenu}>
                        Projects
                    </div>
                    <div className="py-4 slide delay cursor-pointer" onClick={toggleMobileMenu}>
                        About
                    </div>
                    <div className="py-4 slide delay cursor-pointer" onClick={toggleMobileMenu}>
                        Resume
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default Header;
