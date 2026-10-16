import {language,applyLanguage} from './i18n.mjs?v=github-25';
const select=document.getElementById('siteLanguage');select.value=language();select.onchange=()=>applyLanguage(select.value);applyLanguage(language());
