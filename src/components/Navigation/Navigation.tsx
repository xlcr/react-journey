'use client'

import React, { SetStateAction, Dispatch } from 'react';
import GetString from '@/lib/GetString';

interface NavigationProps {
    lang: string; 
    setLang: (lang: string) => void;
}

export default function Navigation(props: NavigationProps) {

    const availableLang = ["en", "ja", "zh"];

    return (
        <div className="flex justify-between p-2 bg-black">
            <div>
                <a className="text-white">{GetString("Common", "ProjectTitle", props.lang)}</a>
            </div>
            <div className="flex self-start gap-2">
                { availableLang.filter(availableLang => availableLang != props.lang ).map(availableLang => <img 
                    key={availableLang} 
                    className={`p-1 bg-white rounded ${availableLang}-lang`}
                    src={`/icons/${availableLang}-lang.png`}
                    onClick={() => props.setLang(availableLang)}
                    alt={availableLang}
                    />) 
                }
            </div>
        </div>
    );
}