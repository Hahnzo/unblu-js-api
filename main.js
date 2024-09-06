(function () {
    window.unblu.floating.api.initialize().then(api => {
        // chat
        const chatBtn = document.getElementById('conversation');
        chatBtn.addEventListener('click', () => api.isInitialized());
    });
})();