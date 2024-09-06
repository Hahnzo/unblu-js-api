/// <reference path="typings/floating-api.d.ts" />

(function () {
    const ConversationType = window.unblu.ConversationType;
    window.unblu.api.initialize().then(api => {
        // chat
        const chatBtn = document.getElementById('start-chat');
        chatBtn.addEventListener('click', () => api.startConversation(ConversationType.CHAT_REQUEST));
    });
})();