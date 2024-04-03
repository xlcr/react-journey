import React from 'react';

export default function Navbar(){
    return (
        <div className="flex justify-between">
            <div>
                <a>React Journey</a>
            </div>
            <div>
                <a>User Profile</a>
                <a>And Stuff</a>
            </div>
        </div>
    );
}