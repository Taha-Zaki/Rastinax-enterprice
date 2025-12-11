
export type Language = 'fa' | 'en';
export type Theme = 'light' | 'dark';

export interface Translation {
    dir: 'rtl' | 'ltr';
    nav: {
        home: string;
        services: string;
        projects: string;
        about: string;
        cta: string;
    };
    hero: {
        label: string;
        title1: string;
        title2: string;
        desc: string;
        cta: string;
        stats: string[];
    };
    partners: {
        title: string;
    };
    features: {
        title: string;
        sub: string;
        items: Array<{
            title: string;
            desc: string;
        }>;
    };
    process: {
        title: string;
        sub: string;
        steps: Array<{
            title: string;
            desc: string;
        }>;
    };
    services: {
        title: string;
        sub: string;
        items: Array<{
            title: string;
            desc: string;
        }>;
    };
    projects: {
        title: string;
        sub: string;
        items: Array<{
            title: string;
            cat: string;
            desc: string;
        }>;
    };
    about: {
        title: string;
        sub: string;
        desc: string;
        values: string[];
    };
    roadmap: {
        title: string;
        desc: string;
        placeholder: string;
        btn: string;
        result: string;
    };
    demoModal: {
        title: string;
        desc: string;
        fields: {
            name: string;
            email: string;
            company: string;
            province: string;
            mobile: string;
        };
        submit: string;
        cancel: string;
    };
    footer: {
        desc: string;
        contact: string;
        links: string;
        copy: string;
        addr_tehran_label: string;
        addr_tehran: string;
        addr_karaj_label: string;
        addr_karaj: string;
        phone_karaj_label: string;
        consult_label: string;
        whatsapp_label: string;
    };
    chat: {
        welcome: string;
        placeholder: string;
        thinking: string;
        title: string;
        online: string;
        role_prompt: string;
    };
}

export interface AppContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    theme: Theme;
    t: Translation;
    toggleLang: () => void;
    toggleTheme: () => void;
    openDemoModal: () => void;
}
