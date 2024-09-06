import { api } from "@unblu/floating-js-api";

(function () {
    const ConversationType = window.unblu.ConversationType;
    api.initialize().then(api => {
        // chat
        const chatBtn = document.getElementById('start-chat');
        chatBtn.addEventListener('click', () => api.startConversation(ConversationType.CHAT_REQUEST));
    });
})();