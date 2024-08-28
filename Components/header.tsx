import React from "react";
import "../app/globals.css";

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center fixed z-50 top-0 left-0 right-0 mx-auto max-w-screen-xl w-full py-8">
            <p className="m-0 p-0 font-poppins font-medium text-4xl slide delay">
                <span className="heroText2">&lt;</span>
                Marmik Patel /
                <span className="heroText2">&gt;</span>
            </p>
            <div className="flex justify-between text-2xl font-medium">
                <div className="px-8 slide delay">Projects</div>
                <div className="px-8 slide delay">About</div>
                <div className="px-8 slide delay">Resume</div>
            </div>
        </div>
    );
};

export default Header;