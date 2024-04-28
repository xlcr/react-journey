import 'server-only'
 
const dictionaries = {
  "en-us": () => import('@/locales/en.json').then((module) => module.default),
  "ja-jp": () => import('@/locales/ja.json').then((module) => module.default),
  "zh-cn": () => import('@/locales/zh.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => { 
  return dictionaries[locale]();
}