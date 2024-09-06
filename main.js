(function () {
    const ConversationType = window.unblu.floating.ConversationType;
    window.unblu.floating.api.initialize().then(api => {
        const chatBtn = document.getElementById('start-conversation');
        chatBtn.addEventListener('click', () => api.startConversation(ConversationType.OFFLINE_CHAT_REQUEST));

        const pinBtn = document.getElementById('join');
        const pinInput = document.getElementById('pin-input');
        pinBtn.addEventListener('click', () => {
            api.joinConversation(pinInput.value).then(conversation => {
                console.log('Joined the conversation: ', conversation.getConversationId());
    });
});
});
})();