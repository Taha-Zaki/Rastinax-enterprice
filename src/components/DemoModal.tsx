
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Icons } from './Icons';
import { MinimalButton } from './ui/Button';

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
    const { t } = useContext(AppContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        province: '',
        mobile: ''
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Construct email body
        const subject = `Rastinax Demo Request: ${formData.company}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Province: ${formData.province}
Mobile: ${formData.mobile}
        `;

        // Use mailto to send email to client
        const mailtoLink = `mailto:icenet.online@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        
        // Close modal after initiating email
        setTimeout(() => {
            onClose();
            // Optional: Reset form
            setFormData({ name: '', email: '', company: '', province: '', mobile: '' });
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-[#0a0a0a] rounded-3xl w-full max-w-lg shadow-2xl border border-zinc-200 dark:border-zinc-800 p-8 animate-fade-in-up">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors"
                >
                    <Icons.X size={24} />
                </button>

                <div className="mb-8 text-center">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                        <Icons.Zap size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{t.demoModal.title}</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{t.demoModal.desc}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder={t.demoModal.fields.name}
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 text-sm"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder={t.demoModal.fields.email}
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 text-sm"
                        />
                        <div className="grid grid-cols-2 gap-4">
                             <input
                                type="text"
                                name="company"
                                required
                                placeholder={t.demoModal.fields.company}
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 text-sm"
                            />
                            <input
                                type="text"
                                name="province"
                                required
                                placeholder={t.demoModal.fields.province}
                                value={formData.province}
                                onChange={handleChange}
                                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 text-sm"
                            />
                        </div>
                        <input
                            type="tel"
                            name="mobile"
                            required
                            placeholder={t.demoModal.fields.mobile}
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 text-sm"
                        />
                    </div>
                    
                    <div className="pt-4 flex gap-3">
                         <button 
                            type="button" 
                            onClick={onClose}
                            className="flex-1 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-bold text-sm"
                        >
                            {t.demoModal.cancel}
                        </button>
                        <MinimalButton type="submit" className="flex-1 justify-center">
                            {t.demoModal.submit}
                        </MinimalButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DemoModal;
