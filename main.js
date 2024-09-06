import { api } from "@unblu/floating-js-api";

const unbluApi = await api.initialize();

const chatBtn = document.getElementById('start-chat');
chatBtn.addEventListener('click', () => unbluApi.getActiveConversation());