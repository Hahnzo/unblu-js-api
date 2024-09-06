(function () {
    window.unblu.floating.api.initialize().then(api => {
        console.log(api.isInitialized())
        const chatBtn = document.getElementById('conversation');
        chatBtn.addEventListener('click', () => api.startConversation());
    });
})();