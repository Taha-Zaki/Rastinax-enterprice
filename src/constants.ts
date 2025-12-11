
import { Translation, Language } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
    fa: {
        dir: 'rtl',
        nav: { home: 'صفحه اصلی', services: 'راهکارها', projects: 'پروژه‌ها', about: 'درباره ما', cta: 'درخواست دمو' },
        hero: {
            label: 'نسل جدید هوشمندی تجاری',
            title1: 'تحول دیجیتال سازمان با',
            title2: 'قدرت هوش مصنوعی',
            desc: 'راستینکس با بهره‌گیری از پیشرفته‌ترین الگوریتم‌های یادگیری عمیق و کلان‌داده، سازمان شما را به یک اکوسیستم هوشمند، چابک و پیشرو در عصر دیجیتال تبدیل می‌کند.',
            cta: 'دریافت مشاوره راهبردی',
            stats: ['+۵۰ پروژه موفق ملی', 'کاهش ۴۰ درصدی هزینه‌ها', 'دقت ۹۹ درصدی مدل‌ها']
        },
        partners: {
            title: 'مورد اعتماد پیشروترین شرکت‌ها و سازمان‌ها',
        },
        features: {
            title: 'چرا راستینکس؟',
            sub: 'تمایز ما در فناوری و تعهد به نتیجه',
            items: [
                { title: 'امنیت در سطح بانکی', desc: 'حفاظت از داده‌های حساس سازمانی با پروتکل‌های رمزنگاری پیشرفته و استقرار در سرورهای داخلی.' },
                { title: 'مدل‌های هوش مصنوعی اختصاصی', desc: 'توسعه و آموزش مدل‌های زبانی (LLM) دقیقاً منطبق بر نیازها و ادبیات سازمان شما.' },
                { title: 'مقیاس‌پذیری بالا', desc: 'زیرساخت ابری قدرتمند که همگام با رشد کسب‌وکار شما توسعه می‌یابد.' },
                { title: 'پشتیبانی فنی ۲۴/۷', desc: 'تیم متخصصین هوش مصنوعی ما در تمام مراحل پیاده‌سازی و نگهداری همراه شماست.' }
            ]
        },
        process: {
            title: 'مسیر هوشمندسازی',
            sub: 'سه گام ساده تا تحول دیجیتال سازمان شما',
            steps: [
                { title: 'مشاوره و نیازسنجی', desc: 'تحلیل دقیق فرآیندهای فعلی و شناسایی فرصت‌های هوشمندسازی.' },
                { title: 'توسعه و آموزش مدل', desc: 'طراحی راهکار اختصاصی و آموزش مدل‌ها با داده‌های شما.' },
                { title: 'استقرار و یکپارچه‌سازی', desc: 'پیاده‌سازی نهایی و اتصال به سیستم‌های موجود سازمان.' }
            ]
        },
        services: {
            title: 'محصولات و راهکارهای هوشمند',
            sub: 'ابزارهایی قدرتمند برای اتوماسیون و رشد کسب‌وکار شما',
            items: [
                { title: 'ادمین هوشمند شبکه‌های اجتماعی', desc: 'مدیریت خودکار دایرکت، نظرات و ثبت سفارش در اینستاگرام، تلگرام و واتساپ به‌صورت ۲۴ ساعته.' },
                { title: 'جریان‌کار تلفنی هوشمند (AI Telephony)', desc: 'پاسخگویی صوتی هوشمند به تماس‌ها، نوبت‌دهی خودکار و پیگیری مشتریان با صدای طبیعی انسانی.' },
                { title: 'اتوماسیون رباتیک (Enterprise RPA)', desc: 'حذف کارهای تکراری اداری و مالی با ربات‌های نرم‌افزاری دقیق و کاهش خطای انسانی به صفر.' },
                { title: 'دستیارهای تعاملی سازمانی', desc: 'چت‌بات‌های اختصاصی آموزش‌دیده بر روی داده‌های سازمان شما برای پشتیبانی فنی و داخلی.' },
                { title: 'بینایی ماشین و نظارت هوشمند', desc: 'کنترل کیفیت خط تولید و احراز هویت بیومتریک با استفاده از پردازش تصویر پیشرفته.' },
                { title: 'هوش تجاری (BI) و تحلیل داده', desc: 'داشبوردهای مدیریتی هوشمند برای رصد لحظه‌ای KPIها و پیش‌بینی روند بازار.' }
            ]
        },
        projects: {
            title: 'پروژه‌های شاخص',
            sub: 'نمونه‌هایی از ارزش‌آفرینی در صنایع مختلف',
            items: [
                { title: 'سامانه هوشمند بانکی', cat: 'FinTech', desc: 'پیاده‌سازی سیستم کشف تقلب آنی با دقت ۹۹.۸٪ برای یکی از بانک‌های خصوصی کشور.' },
                { title: 'بینایی ماشین در خرده‌فروشی', cat: 'Retail', desc: 'تحلیل رفتار مشتریان در فروشگاه‌های زنجیره‌ای و بهینه‌سازی چیدمان قفسه‌ها.' },
                { title: 'تحلیل اسناد پزشکی', cat: 'HealthTech', desc: 'استخراج خودکار اطلاعات از پرونده‌های پزشکی و دسته‌بندی هوشمند بیماران.' }
            ]
        },
        about: {
            title: 'درباره راستینکس',
            sub: 'تعهد ما: نوآوری، امنیت و نتیجه‌گرایی',
            desc: 'ما در راستینکس کد نمی‌نویسیم، ما آینده را مهندسی می‌کنیم. ماموریت ما توانمندسازی سازمان‌های ایرانی با لبه تکنولوژی جهانی است تا در اقتصاد دیجیتال پیشرو باشند.',
            values: ['طراحی راهکارهای مقیاس‌پذیر', 'امنیت داده در سطح سازمانی', 'پشتیبانی و نگهداری اختصاصی']
        },
        roadmap: {
            title: 'دستیار تدوین استراتژی هوشمند',
            desc: 'با وارد کردن حوزه فعالیت خود، هوش مصنوعی سه راهکار کلیدی و اثرگذار را برای هوشمندسازی کسب‌وکار شما پیشنهاد می‌دهد.',
            placeholder: 'مثال: صنعت پتروشیمی، بانکداری، خرده‌فروشی...',
            btn: 'تحلیل استراتژیک',
            result: 'پیشنهادهای راهبردی هوش مصنوعی:'
        },
        demoModal: {
            title: 'درخواست دمو و مشاوره',
            desc: 'لطفاً فرم زیر را تکمیل کنید. کارشناسان ما در کوتاه‌ترین زمان با شما تماس خواهند گرفت.',
            fields: {
                name: 'نام و نام خانوادگی',
                email: 'آدرس ایمیل',
                company: 'نام شرکت / سازمان',
                province: 'استان محل فعالیت',
                mobile: 'شماره موبایل'
            },
            submit: 'ارسال درخواست',
            cancel: 'انصراف'
        },
        footer: {
            desc: 'راستینکس؛ پیشرو در توسعه زیرساخت‌های هوش مصنوعی سازمانی و شریک قابل اعتماد برندهای برتر در مسیر تعالی دیجیتال.',
            contact: 'پل‌های ارتباطی',
            links: 'دسترسی سریع',
            copy: '© ۱۴۰۴ کلیه حقوق مادی و معنوی متعلق به rastinax.com است.',
            addr_tehran_label: 'دفتر مرکزی - تهران:',
            addr_tehran: 'جردن، خیابان گلفام، پلاک ۵۰، طبقه ۱',
            addr_karaj_label: 'مرکز نوآوری و توسعه - کرج:',
            addr_karaj: 'میدان والفجر، بلوار سرداران، ساختمان مروارید، طبقه ۲',
            phone_karaj_label: 'تلفن ثابت کرج',
            consult_label: 'مشاوره تخصصی',
            whatsapp_label: 'ارتباط در واتساپ'
        },
        chat: {
            welcome: 'با سلام. من دستیار هوشمند راستینکس هستم. در مورد محصولات جدید (ادمین اینستاگرام، تلفن هوشمند) سوالی دارید؟',
            placeholder: 'پرسش خود را مطرح نمایید...',
            thinking: 'در حال پردازش...',
            title: 'مشاور هوشمند',
            online: 'آنلاین | Gemini Pro',
            role_prompt: 'You are a senior enterprise AI consultant for Rastinax. Rastinax offers Smart Social Media Admins (Insta/Telegram/WhatsApp), AI Telephony, and RPA. Answer in formal Persian.'
        }
    },
    en: {
        dir: 'ltr',
        nav: { home: 'Home', services: 'Solutions', projects: 'Case Studies', about: 'Company', cta: 'Request Demo' },
        hero: {
            label: 'Pioneering Next-Gen Business Intelligence',
            title1: 'Digital Transformation via',
            title2: 'Advanced AI Power',
            desc: 'Rastinax leverages state-of-the-art Deep Learning and Big Data strategies to transform your organization into an agile, intelligent, and market-leading ecosystem.',
            cta: 'Get Strategic Consultation',
            stats: ['+50 Successful Projects', '40% Cost Reduction', '99% Model Accuracy']
        },
        partners: {
            title: 'Trusted by Leading Enterprises',
        },
        features: {
            title: 'Why Rastinax?',
            sub: 'Our distinction in technology and commitment to results',
            items: [
                { title: 'Bank-Grade Security', desc: 'Protecting sensitive enterprise data with advanced encryption and on-premise deployment options.' },
                { title: 'Custom AI Models', desc: 'Developing and fine-tuning Large Language Models (LLMs) specifically for your organization needs.' },
                { title: 'High Scalability', desc: 'Robust cloud infrastructure that scales seamlessly with your business growth.' },
                { title: '24/7 Technical Support', desc: 'Our team of AI experts accompanies you through every step of implementation and maintenance.' }
            ]
        },
        process: {
            title: 'Transformation Journey',
            sub: 'Three simple steps to your digital evolution',
            steps: [
                { title: 'Consultation & Discovery', desc: 'Deep analysis of current workflows to identify high-impact automation opportunities.' },
                { title: 'Model Development', desc: 'Designing custom solutions and training models with your proprietary data.' },
                { title: 'Deployment & Integration', desc: 'Final implementation and seamless integration with existing enterprise systems.' }
            ]
        },
        services: {
            title: 'Smart Products & Solutions',
            sub: 'Powerful tools for automation and business growth',
            items: [
                { title: 'Smart Social Media Admin', desc: 'Automated handling of DMs, comments, and orders on Instagram, Telegram, and WhatsApp 24/7.' },
                { title: 'AI Telephony Workflows', desc: 'Intelligent voice response, automated appointment scheduling, and customer follow-ups with natural human voice.' },
                { title: 'Enterprise RPA', desc: 'Eliminate repetitive administrative tasks with precise software robots, reducing human error to zero.' },
                { title: 'Enterprise Conversational AI', desc: 'Custom chatbots trained on your organization data for internal and technical support.' },
                { title: 'Computer Vision', desc: 'Quality control and biometric authentication using advanced image processing.' },
                { title: 'Business Intelligence (BI)', desc: 'Smart dashboards for real-time KPI monitoring and market trend prediction.' }
            ]
        },
        projects: {
            title: 'Featured Projects',
            sub: 'Case studies of value creation across industries',
            items: [
                { title: 'Smart Banking System', cat: 'FinTech', desc: 'Implemented real-time fraud detection with 99.8% accuracy for a major private bank.' },
                { title: 'Retail Computer Vision', cat: 'Retail', desc: 'Customer behavior analysis in chain stores for layout optimization.' },
                { title: 'Medical Doc Analysis', cat: 'HealthTech', desc: 'Automated information extraction from medical records and smart patient categorization.' }
            ]
        },
        about: {
            title: 'About Rastinax',
            sub: 'Our Commitment: Innovation, Security, and Results',
            desc: 'At Rastinax, we do not just write code; we engineer the future. Our mission is to empower organizations with global-tier technology to lead in the digital economy.',
            values: ['Scalable Solution Design', 'Enterprise-Grade Data Security', 'Dedicated Support & Maintenance']
        },
        roadmap: {
            title: 'AI Strategic Strategy Assistant',
            desc: 'Enter your industry sector to receive three key, high-impact AI implementation strategies for your business.',
            placeholder: 'E.g., Petrochemical, Banking, Retail...',
            btn: 'Strategic Analysis',
            result: 'Strategic AI Recommendations:'
        },
        demoModal: {
            title: 'Request Demo & Consultation',
            desc: 'Please fill out the form below. Our experts will contact you shortly.',
            fields: {
                name: 'Full Name',
                email: 'Email Address',
                company: 'Company / Organization',
                province: 'Province / State',
                mobile: 'Mobile Number'
            },
            submit: 'Submit Request',
            cancel: 'Cancel'
        },
        footer: {
            desc: 'Rastinax; A leader in developing enterprise AI infrastructure and a trusted partner for top brands in digital excellence.',
            contact: 'Contact Information',
            links: 'Quick Links',
            copy: '© 2025 All rights reserved by rastinax.com.',
            addr_tehran_label: 'HQ - Tehran:',
            addr_tehran: 'Floor 1, No 50, Golfam St, Jordan',
            addr_karaj_label: 'Innovation Center - Karaj:',
            addr_karaj: 'Floor 2, Morvarid Bldg, Sardaran Blvd, Valfajr Sq',
            phone_karaj_label: 'Karaj Office',
            consult_label: 'Expert Consultation',
            whatsapp_label: 'WhatsApp Support'
        },
        chat: {
            welcome: 'Greetings. I am the Rastinax intelligent assistant. Ask me about our Smart Social Media Admins or AI Telephony solutions.',
            placeholder: 'Type your inquiry...',
            thinking: 'Processing...',
            title: 'AI Consultant',
            online: 'Online | Gemini Pro',
            role_prompt: 'You are a senior enterprise AI consultant for Rastinax. Rastinax offers Smart Social Media Admins (Insta/Telegram/WhatsApp), AI Telephony, and RPA. Answer in formal English.'
        }
    }
};
