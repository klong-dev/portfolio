import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import vi from './vi.json';
import en from './en.json';

i18n
    .use(HttpBackend) // Load file dịch từ backend hoặc local
    .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
    .use(initReactI18next) // Kết nối với React
    .init({
        fallbackLng: 'vn', // Ngôn ngữ mặc định
        debug: true, // Bật debug trong development
        interpolation: {
            escapeValue: false, // React đã xử lý việc escape
        },
        resources: {
            en: {
                translation: vi,
            },
            vn: {
                translation: en,
            },
        },
    });

export default i18n;