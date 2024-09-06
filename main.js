(function () {
    const ConversationType = window.unblu.floating.ConversationType;
    window.unblu.floating.api.initialize().then(api => {
        const chatBtn = document.getElementById('start-conversation');
        chatBtn.addEventListener('click', () => api.startConversation(ConversationType.OFFLINE_CHAT_REQUEST));
    });
})();