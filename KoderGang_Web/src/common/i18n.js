import i18n from "i18next";
//import Backend from "i18next-xhr-backend";
//import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";
import vi from '../translation/vi/vi'
import en from '../translation/en/en'

const resources = {
    en: {
        translation: en
    },
    vi: {
        translation: vi,
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "vi",
        lng: "vi",
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
