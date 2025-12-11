
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TRANSLATIONS } from './constants';
import { AppContextType, Language, Theme } from './types';
import { Icons, RastinaxLogo } from './components/Icons';
import { MinimalButton } from './components/ui/Button';
import ChatWidget from './components/ChatWidget';
import RoadmapGenerator from './components/RoadmapGenerator';
import DemoModal from './components/DemoModal';

// @ts-ignore - TS sometimes complains about Context defaults, handling it via explicit provider
export const AppContext = createContext<AppContextType>({} as AppContextType);

// --- Components ---

interface SectionHeadingProps {
    children: React.ReactNode;
    sub?: string;
    centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, sub, centered = false }) => (
    <div className={`mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-6 animate-fade-in-up ${centered ? 'text-center' : ''}`}>
        <div className={`flex flex-col ${centered ? 'items-center' : 'md:flex-row md:items-end justify-between'} gap-6`}>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">{children}</h2>
            {sub && <p className={`text-zinc-600 dark:text-zinc-400 text-base max-w-md leading-relaxed ${centered ? 'mx-auto' : ''}`}>{sub}</p>}
        </div>
    </div>
);

// --- Sections / Pages ---

const Navbar = () => {
    const { t, lang, toggleLang, theme, toggleTheme, openDemoModal } = useContext(AppContext);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    useEffect(() => { 
        const h = () => setScrolled(window.scrollY > 20); 
        window.addEventListener('scroll', h); 
        return () => window.removeEventListener('scroll', h); 
    }, []);

    const navItems = [
        { key: 'home', path: '/' },
        { key: 'services', path: '/services' },
        { key: 'projects', path: '/projects' },
        { key: 'about', path: '/about' }
    ];

    return (
        <header className={`fixed w-full z-50 top-0 right-0 transition-all duration-500 ${scrolled ? 'glass-nav shadow-sm' : ''}`}>
            {/* Top Bar */}
            <div className="bg-blue-600 dark:bg-blue-900/50 text-white text-xs font-medium py-2 px-6 flex justify-between items-center relative z-50">
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                    <span className="flex items-center gap-1.5"><Icons.Phone size={14} className="text-blue-200" /> <span dir="ltr">021-91322922</span></span>
                    
                    {/* Mobile Controls in Top Bar */}
                    <div className="flex items-center gap-3 md:hidden border-r border-blue-500/50 pr-3 mr-3 dark:border-blue-700">
                            <button onClick={toggleTheme} className="hover:text-blue-200 transition-colors p-1">{theme === 'dark' ? <Icons.Sun size={16}/> : <Icons.Moon size={16}/>}</button>
                            <button onClick={toggleLang} className="hover:text-blue-200 flex items-center gap-1 uppercase transition-colors p-1">{lang}</button>
                    </div>
                </div>
                <div className="hidden md:block text-blue-100/80">
                    {lang === 'fa' ? 'پیشرو در راهکارهای هوش مصنوعی سازمانی' : 'Leading Enterprise AI Solutions'}
                </div>
            </div>

            <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-3' : 'py-4 md:py-6'}`}>
                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-900 dark:text-white p-2 -mr-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                    {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
                </button>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 order-2 md:order-1 group">
                    <div className="relative group-hover:scale-105 transition-transform">
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <RastinaxLogo className="w-9 h-9 md:w-10 md:h-10 relative z-10" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">RASTINAX</span>
                        <span className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Enterprise AI</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-zinc-200/50 dark:border-white/10 order-2 shadow-sm dark:shadow-none">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link 
                                key={item.key} 
                                to={item.path} 
                                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${isActive ? 'bg-white text-blue-600 dark:bg-white/20 dark:text-white shadow-sm' : 'text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-white/10'}`}
                            >
                                {(t.nav as any)[item.key]}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Controls */}
                <div className="hidden md:flex items-center gap-4 order-3">
                        <button onClick={toggleTheme} className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white transition-colors p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5">{theme === 'dark' ? <Icons.Sun size={20}/> : <Icons.Moon size={20}/>}</button>
                        <button onClick={toggleLang} className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1.5 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5"><Icons.Languages size={18}/> {lang === 'fa' ? 'EN' : 'FA'}</button>
                        <MinimalButton onClick={openDemoModal} className="!py-2.5 !px-6 !text-xs !shadow-blue-500/20">{t.nav.cta} <Icons.ArrowRight size={14} className={t.dir === 'rtl' ? 'rotate-180' : ''} /></MinimalButton>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="fixed inset-0 top-[105px] z-40 bg-white/98 dark:bg-black/98 backdrop-blur-xl p-6 md:hidden animate-fade-in-up border-t border-zinc-100 dark:border-zinc-800 overflow-y-auto">
                    <div className="flex flex-col gap-2 text-center">
                        {navItems.map((item) => (
                            <Link 
                                key={item.key} 
                                to={item.path} 
                                onClick={() => setIsOpen(false)} 
                                className="py-4 text-lg font-medium text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 hover:text-blue-600 transition-colors"
                            >
                                {(t.nav as any)[item.key]}
                            </Link>
                        ))}
                        <div className="mt-6">
                            <MinimalButton onClick={() => { setIsOpen(false); openDemoModal(); }} className="w-full !py-3 !text-sm justify-center">{t.nav.cta}</MinimalButton>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

const Hero = () => {
    const { t } = useContext(AppContext);
    return (
        <section className="relative flex flex-col justify-center pt-32 md:pt-48 pb-12 md:pb-20 px-6 overflow-hidden min-h-[90vh]">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px] opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px] opacity-30"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>
            <div className={`container mx-auto text-center ${t.dir === 'rtl' ? 'md:text-right' : 'md:text-left'} max-w-6xl animate-fade-in-up relative z-10`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-500/30 text-blue-600 dark:text-blue-300 text-xs font-bold tracking-wide mb-6 mx-auto ${t.dir === 'rtl' ? 'md:mr-0' : 'md:ml-0'}`}>
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span> {t.hero.label}
                </div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
                    {t.hero.title1} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{t.hero.title2}</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
                    <p className={`text-zinc-600 dark:text-zinc-400 text-base md:text-xl max-w-xl leading-relaxed ${t.dir === 'rtl' ? 'md:border-r-4 md:border-blue-600 md:pr-6' : 'md:border-l-4 md:border-blue-600 md:pl-6'}`}>{t.hero.desc}</p>
                    <div className="flex flex-col gap-6 w-full md:w-auto">
                        <Link to="/services">
                            <MinimalButton variant="primary" className="py-4 px-8 text-base shadow-xl shadow-blue-600/20 w-full md:w-auto">{t.hero.cta} <Icons.ArrowUpRight size={20} /></MinimalButton>
                        </Link>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-xs font-bold text-zinc-500 dark:text-zinc-500">
                            {t.hero.stats.map((stat, i) => (<span key={i} className="flex items-center gap-1"><Icons.Zap size={12} className="text-yellow-500"/> {stat}</span>))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PartnersSection = () => {
    const { t } = useContext(AppContext);
    // Placeholder logos using icons and text for now
    const partners = [
        { name: "Cosar Pharmacy", icon: Icons.Briefcase, url: "https://www.cosar-co.com" },
        { name: "Bazar Ahan", icon: Icons.Briefcase, url: "https://www.bazareahan.com" },
        { name: "Kalachi", icon: Icons.Briefcase, url: "https://www.kalachi.ir" },
        { name: "Azimzade Holding", icon: Icons.Briefcase, url: "https://www.azimzade.com" },
        { name: "Kiamehrrayan", icon: Icons.Briefcase, url: "https://www.kiamehrrayan.com" },
    ];

    return (
        <section className="py-12 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-white/[0.02]">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8">{t.partners.title}</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60">
                    {partners.map((p, i) => (
                        <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                             <p.icon size={28} className="text-zinc-400 dark:text-zinc-600 group-hover:text-blue-500 transition-colors" />
                             <span className="text-xl font-bold text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">{p.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    const { t } = useContext(AppContext);
    const icons = [Icons.Shield, Icons.Cpu, Icons.Rocket, Icons.Headphones];
    
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto">
                <SectionHeading sub={t.features.sub} centered>{t.features.title}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {t.features.items.map((item, index) => {
                        const Icon = icons[index] || Icons.Zap;
                        return (
                            <div key={index} className="flex gap-6 p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/20 transition-all">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const ProcessSection = () => {
    const { t } = useContext(AppContext);
    const icons = [Icons.Lightbulb, Icons.Layers, Icons.Rocket];

    return (
        <section className="py-20 px-6 bg-zinc-50/50 dark:bg-white/[0.02]">
            <div className="container mx-auto">
                <SectionHeading sub={t.process.sub} centered>{t.process.title}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent z-0"></div>
                    {t.process.steps.map((step, index) => {
                        const Icon = icons[index] || Icons.Check;
                        return (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-white dark:bg-[#050505] border-4 border-zinc-100 dark:border-zinc-800 flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-500 shadow-xl">
                                    <Icon size={32} className="text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 w-full shadow-sm hover:shadow-lg transition-all">
                                    <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{step.title}</h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const HomePage = () => (
    <>
        <Hero />
        <PartnersSection />
        <FeaturesSection />
        <ProcessSection />
    </>
);

const ServicesPage = () => {
    const { t } = useContext(AppContext);
    const icons = [Icons.MessageSquare, Icons.Phone, Icons.Cpu, Icons.Bot, Icons.Eye, Icons.TrendingUp];
    const gradients = [
        'from-blue-500 to-cyan-500', 'from-indigo-500 to-purple-500', 'from-emerald-500 to-teal-500',
        'from-orange-500 to-red-500', 'from-pink-500 to-rose-500', 'from-violet-500 to-fuchsia-500'
    ];
    
    useEffect(() => { window.scrollTo(0,0); }, []);

    return (
        <section className="pt-32 pb-16 md:pb-20 px-6 relative bg-zinc-50/50 dark:bg-white/[0.02] min-h-screen">
            <div className="container mx-auto">
                <SectionHeading sub={t.services.sub}>{t.services.title}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {t.services.items.map((item, index) => {
                        const Icon = icons[index] || Icons.Cpu;
                        const gradient = gradients[index] || gradients[0];
                        return (
                            <div key={index} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] hover:border-blue-500/30 hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradient} bg-opacity-10 dark:bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/10`}>
                                    <Icon size={28} className="text-white drop-shadow-md" />
                                </div>
                                <h3 className="font-bold mb-3 text-xl text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-7">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
                <RoadmapGenerator />
            </div>
        </section>
    );
};

const ProjectsPage = () => {
    const { t } = useContext(AppContext);
    useEffect(() => { window.scrollTo(0,0); }, []);
    
    // High-quality relevant images from Unsplash
    const projectImages = [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // FinTech/Data
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800", // Retail/Payment
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"  // Health/Tech
    ];
    
    return (
        <section className="pt-32 pb-16 md:pb-20 px-6 relative min-h-screen">
            <div className="container mx-auto">
                <SectionHeading sub={t.projects.sub}>{t.projects.title}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.projects.items.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="h-48 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <img 
                                    src={projectImages[index]} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <span className="absolute bottom-4 right-4 z-20 text-white text-xs font-bold bg-blue-600 px-3 py-1 rounded-full">{item.cat}</span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutPage = () => {
    const { t } = useContext(AppContext);
    useEffect(() => { window.scrollTo(0,0); }, []);
    
    return (
        <section className="pt-32 pb-16 md:pb-20 px-6 relative bg-zinc-50/50 dark:bg-white/[0.02] min-h-screen flex items-center">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                    <SectionHeading sub={t.about.sub}>{t.about.title}</SectionHeading>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-8 mb-8 text-lg text-justify">{t.about.desc}</p>
                    <ul className="space-y-4">
                        {t.about.values.map((val, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-800 dark:text-zinc-200 font-medium">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0"><Icons.Check size={14} /></div>
                                {val}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative order-1 md:order-2">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-[2rem] aspect-square overflow-hidden border border-zinc-200 dark:border-zinc-700 flex items-center justify-center p-12 md:p-16 shadow-inner">
                        <div className="w-full h-full filter drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <RastinaxLogo className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useContext(AppContext);
    return (
        <footer className="py-12 md:py-16 px-6 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#020204]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
                    <div className="lg:col-span-5">
                        <Link to="/" className="flex items-center gap-3 mb-6"><RastinaxLogo className="w-10 h-10" /><span className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white">RASTINAX</span></Link>
                        <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed max-w-sm mb-8 text-sm">{t.footer.desc}</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-blue-600 hover:text-white transition-all"><Icons.Linkedin size={20}/></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-pink-600 hover:text-white transition-all"><Icons.Instagram size={20}/></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-sky-500 hover:text-white transition-all"><Icons.Twitter size={20}/></a>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-4">
                        <h4 className="font-bold mb-6 md:mb-8 text-sm text-zinc-900 dark:text-white uppercase tracking-wider">{t.footer.contact}</h4>
                        <ul className="space-y-6 text-sm text-zinc-600 dark:text-zinc-400">
                            <li className="flex gap-4">
                                <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0"><Icons.MapPin size={18} /></div>
                                <div>
                                    <span className="block font-bold text-zinc-900 dark:text-zinc-200 mb-1">{t.footer.addr_tehran_label}</span>
                                    <span className="leading-relaxed">{t.footer.addr_tehran}</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0"><Icons.MapPin size={18} /></div>
                                <div>
                                    <span className="block font-bold text-zinc-900 dark:text-zinc-200 mb-1">{t.footer.addr_karaj_label}</span>
                                    <span className="leading-relaxed">{t.footer.addr_karaj}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="font-bold mb-6 md:mb-8 text-sm text-zinc-900 dark:text-white uppercase tracking-wider">{t.footer.links}</h4>
                        <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                                <Icons.Phone size={18} className="text-blue-500 flex-shrink-0" /> 
                                <div className="flex flex-col"><span className="text-xs text-zinc-400">{t.footer.phone_karaj_label}</span><span dir="ltr" className="font-mono font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600">026-32761563</span></div>
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                                <Icons.Phone size={18} className="text-blue-500 flex-shrink-0" /> 
                                <div className="flex flex-col"><span className="text-xs text-zinc-400">{t.footer.consult_label}</span><span dir="ltr" className="font-mono font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600">021-91322922</span></div>
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                                <Icons.MessageCircle size={18} className="text-green-500 flex-shrink-0" /> 
                                <div className="flex flex-col"><span className="text-xs text-zinc-400">{t.footer.whatsapp_label}</span><a href="#" target="_blank" dir="ltr" className="font-mono font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600">0990 082 3122</a></div>
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                                <Icons.Mail size={18} className="text-blue-500 flex-shrink-0" /> 
                                <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 break-all">info@rastinax.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 dark:border-zinc-800 gap-4 text-center md:text-start">
                    <div className="text-xs text-zinc-500 dark:text-zinc-600 font-medium">{t.footer.copy}</div>
                    <div className="flex gap-6 text-xs font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                        <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-300">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-800 dark:hover:text-zinc-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main App ---

const App = () => {
    const [lang, setLang] = useState<Language>('fa');
    const [theme, setTheme] = useState<Theme>('dark');
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    
    const toggleLang = () => setLang(prev => prev === 'fa' ? 'en' : 'fa');
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    const openDemoModal = () => setIsDemoModalOpen(true);
    
    const t = TRANSLATIONS[lang];

    useEffect(() => { 
        document.documentElement.dir = t.dir; 
        document.documentElement.lang = lang; 
    }, [lang, t]);

    useEffect(() => { 
        if (theme === 'dark') document.documentElement.classList.add('dark'); 
        else document.documentElement.classList.remove('dark'); 
    }, [theme]);

    return (
        <AppContext.Provider value={{ lang, setLang: (l) => setLang(l as Language), toggleLang, theme, toggleTheme, t, openDemoModal }}>
            <Router>
                <div className={`min-h-screen flex flex-col ${lang === 'fa' ? 'font-sans' : 'font-sans'}`}>
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                    </main>
                    <Footer />
                    <ChatWidget />
                    <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
                </div>
            </Router>
        </AppContext.Provider>
    );
};

export default App;
