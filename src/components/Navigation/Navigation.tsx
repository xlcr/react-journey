import React from 'react';
import GetString from '@/lib/GetString';

export default function Navigation({ lang }: { lang: string }) {
    return (
        <div className="flex justify-between">
            <div>
                <a>{GetString("Common", "ProjectTitle", lang)}</a>
            </div>
            <div>
                <a>User Profile</a>
                <a>And Stuff</a>
            </div>
        </div>
    );
}