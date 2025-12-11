import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a message to the chatbot.
 * Uses gemini-2.5-flash for speed and efficiency in a chat context.
 */
export const createChatSession = (systemInstruction: string): Chat => {
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topK: 40,
        },
    });
};

/**
 * Generates a roadmap based on the business type.
 * Uses gemini-2.5-flash for fast text generation.
 */
export const generateRoadmap = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.8,
                topK: 40,
            }
        });
        
        return response.text || "No response generated.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
};
