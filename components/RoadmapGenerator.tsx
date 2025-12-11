import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { Icons } from './Icons';
import { generateRoadmap } from '../services/geminiService';

const RoadmapGenerator: React.FC = () => {
    const { t } = useContext(AppContext);
    const [businessType, setBusinessType] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!businessType.trim()) return;
        setLoading(true); 
        setResult('');
        try {
            const prompt = t.dir === 'rtl' 
                ? `Act as a senior AI Consultant for business: "${businessType}". Provide 3 high-impact AI strategies in Persian. Format: Bullet points.` 
                : `Act as a senior AI Consultant for business: "${businessType}". Provide 3 high-impact AI strategies in English. Format: Bullet points.`;
            
            const text = await generateRoadmap(prompt);
            setResult(text);
        } catch {
            setResult("An error occurred while generating the roadmap.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-12 bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-[#050505] border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 rounded-3xl relative overflow-hidden group shadow-xl dark:shadow-2xl hover:border-blue-500/30 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 animate-shimmer"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-blue-100 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                            <Icons.Lightbulb size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{t.roadmap.title}</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">{t.roadmap.desc}</p>
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={businessType} 
                            onChange={(e) => setBusinessType(e.target.value)} 
                            placeholder={t.roadmap.placeholder} 
                            className="flex-1 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-400 text-sm"
                        />
                        <button 
                            onClick={handleGenerate} 
                            disabled={loading} 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl font-bold text-sm transition-all disabled:opacity-70 flex items-center gap-2 shadow-lg shadow-blue-500/20"
                        >
                            {loading ? <Icons.Sparkles className="animate-spin-slow" /> : t.roadmap.btn}
                        </button>
                    </div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 min-h-[180px] flex items-center justify-center relative">
                    {result ? (
                        <div className="w-full animate-fade-in-up">
                            <h4 className="text-blue-600 dark:text-blue-400 font-bold mb-3 text-sm flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                                <Icons.Sparkles size={14}/> {t.roadmap.result}
                            </h4>
                            <div className="prose text-sm leading-7 text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                                {result}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-zinc-400 dark:text-zinc-600 flex flex-col items-center gap-3">
                            <Icons.BrainCircuit size={40} className="opacity-50" />
                            <span className="text-sm">
                                {t.dir === 'rtl' ? 'منتظر ورودی شما...' : 'Waiting for input...'}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoadmapGenerator;
