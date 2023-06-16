import { createI18n } from 'vue-i18n'
import en from './en'
import pt from './pt'

const i18n = createI18n({
    locale: localStorage.getItem('lang'),
    messages: {
        en: en,
        pt: pt
    }
});

export default i18n;