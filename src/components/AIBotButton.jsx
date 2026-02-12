import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AIBotButton(){
    const { lang } = useParams();
    const { t } = useTranslation();
    const isEnglish = lang === 'en';

    useEffect(() => {
        const aiToggleBtn = document.getElementById('aiToggleBtn');
        const aiChatContainer = document.getElementById('aiChatContainer');
        const aiCloseBtn = document.getElementById('aiCloseBtn');
        const aiSendBtn = document.getElementById('aiSendBtn');
        const aiChatInput = document.getElementById('aiChatInput');
        const aiChatMessages = document.getElementById('aiChatMessages');
        const aiQuickBtns = document.querySelectorAll('.ai-quick-btn');

        const toggleChat = () => {
            aiChatContainer.classList.toggle('hidden');
        };

        const closeChat = () => {
            aiChatContainer.classList.add('hidden');
        };

        const sendMessage = () => {
            const message = aiChatInput.value.trim();
            if (!message) return;
        
            // Create user message
            const userMessageDiv = document.createElement('div');
            userMessageDiv.className = 'flex gap-3 mb-4 justify-end';
            userMessageDiv.innerHTML = `
                <div class="bg-gradient-to-r from-[#202c5b] via-[#226796] via-[#23a0d0] via-[#30afc1] to-[#3cbeb3] text-white p-3 rounded-2xl max-w-[80%] shadow-sm">
                    <p class="text-sm leading-relaxed m-0">${message}</p>
                </div>
            `;
        
            // Clear input immediately
            aiChatInput.value = '';
        
            // Append user message and scroll in next animation frame
            aiChatMessages.appendChild(userMessageDiv);
            requestAnimationFrame(() => {
                userMessageDiv.scrollIntoView({ behavior: 'smooth' });
            });
        
            // Simulate bot response after delay
            setTimeout(() => {
                const botMessageDiv = document.createElement('div');
                botMessageDiv.className = 'flex gap-3 mb-4';
                botMessageDiv.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-gradient-to-r from-[#202c5b] via-[#226796] via-[#23a0d0] via-[#30afc1] to-[#3cbeb3] flex items-center justify-center text-white text-sm flex-shrink-0">
                        <i class="fas fa-robot text-xs"></i>
                    </div>
                    <div class="bg-white p-3 rounded-2xl max-w-[80%] shadow-sm">
                        <p class="text-sm leading-relaxed m-0">${t('aiBot.responseMessage')}</p>
                    </div>
                `;
        
                // Append bot message and scroll efficiently
                aiChatMessages.appendChild(botMessageDiv);
                requestAnimationFrame(() => {
                    botMessageDiv.scrollIntoView({ behavior: 'smooth' });
                });
            }, 1000);
        };
        

        const handleQuickAction = (e) => {
            const question = e.target.getAttribute('data-question');
            aiChatInput.value = question;
            sendMessage();
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        };

        // Event listeners
        aiToggleBtn.addEventListener('click', toggleChat);
        aiCloseBtn.addEventListener('click', closeChat);
        aiSendBtn.addEventListener('click', sendMessage);
        aiChatInput.addEventListener('keypress', handleKeyPress);
        aiQuickBtns.forEach(btn => btn.addEventListener('click', handleQuickAction));

        // Cleanup
        return () => {
            aiToggleBtn.removeEventListener('click', toggleChat);
            aiCloseBtn.removeEventListener('click', closeChat);
            aiSendBtn.removeEventListener('click', sendMessage);
            aiChatInput.removeEventListener('keypress', handleKeyPress);
            aiQuickBtns.forEach(btn => btn.removeEventListener('click', handleQuickAction));
        };
    }, [t]);

    return(
        <>
            <div className={`fixed bottom-10 ${isEnglish ? 'left-5' : 'right-5'} z-[1000]`} id="aiAssistant">
                <div className={`hidden absolute bottom-16 ${isEnglish ? 'left-0' : 'right-0'} w-[350px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden`} id="aiChatContainer">
                    <div className="bg-gradient-to-r from-[#202c5b] via-[#226796] via-[#23a0d0] via-[#30afc1] to-[#3cbeb3] text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <i className="fas fa-robot text-lg"></i>
                            </div>
                            <div>
                                <h4 className="m-0 text-base">{t('aiBot.title')}</h4>
                            </div>
                        </div>
                        <button className="bg-none border-none text-white text-lg cursor-pointer p-1" id="aiCloseBtn" aria-label="Close chat">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 max-h-[320px]" id="aiChatMessages">
                        <div className="flex gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#202c5b] via-[#226796] via-[#23a0d0] via-[#30afc1] to-[#3cbeb3] flex items-center justify-center text-white text-sm flex-shrink-0">
                                <i className="fas fa-robot text-xs"></i>
                            </div>
                            <div className="bg-white p-3 rounded-2xl max-w-[80%] shadow-sm">
                                <p className="text-sm leading-relaxed m-0">{t('aiBot.welcomeMessage')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-200 flex gap-3">
                        <input type="text" id="aiChatInput" placeholder={t('aiBot.inputPlaceholder')} autoComplete="off" className="flex-1 p-3 border border-gray-300 rounded-full outline-none text-sm"/>
                        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-[#202c5b] via-[#226796] via-[#23a0d0] via-[#30afc1] to-[#3cbeb3] border-none text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110" id="aiSendBtn" aria-label="Send message">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div className="p-4 border-t border-gray-200 flex gap-3 flex-wrap">
                        <button className="ai-quick-btn p-2 px-4 border border-gray-300 rounded-full bg-white text-xs cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#202c5b] hover:via-[#226796] hover:via-[#23a0d0] hover:via-[#30afc1] hover:to-[#3cbeb3] hover:text-white hover:border-transparent" data-question={t('aiBot.quickQuestions.courses')}>{t('aiBot.quickActions.courses')}</button>
                        <button className="ai-quick-btn p-2 px-4 border border-gray-300 rounded-full bg-white text-xs cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#202c5b] hover:via-[#226796] hover:via-[#23a0d0] hover:via-[#30afc1] hover:to-[#3cbeb3] hover:text-white hover:border-transparent" data-question={t('aiBot.quickQuestions.registration')}>{t('aiBot.quickActions.registration')}</button>
                        <button className="ai-quick-btn p-2 px-4 border border-gray-300 rounded-full bg-white text-xs cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#202c5b] hover:via-[#226796] hover:via-[#23a0d0] hover:via-[#30afc1] hover:to-[#3cbeb3] hover:text-white hover:border-transparent" data-question={t('aiBot.quickQuestions.certifications')}>{t('aiBot.quickActions.certifications')}</button>
                    </div>
                </div>
                <button className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[#202c5b] via-[#226796] via-[#23a0d0] via-[#30afc1] to-[#3cbeb3] border-none text-white text-xl cursor-pointer shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center" id="aiToggleBtn" aria-label="Open AI assistant">
                    <i className="fas fa-comments"></i>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">1</span>
                </button>
            </div>   
        </>
    )
}