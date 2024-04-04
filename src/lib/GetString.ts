// @ts-check
"use strict";

import * as en from '../locales/en.json';
import * as ja from '../locales/ja.json';
import * as zh from '../locales/zh.json';

interface LangData {
    [Page: string]: {
        [Key: string]: string
    }
}

export default function GetString(page: string, key: string, langReq: string | undefined) : string {

    const lang:string = langReq ?? "en-US";
    const defaultLang : LangData = en;
    let langData : LangData = en;
    
    switch(lang) {
        case 'en-US': 
            langData = en;
            break;
        case 'ja-JP': 
            langData = ja;
            break;
        case 'zh-CN': 
            langData = zh;
            break; 
    }

    const returnString : string = langData[page][key] ?? defaultLang[page][key];

    return returnString;

};