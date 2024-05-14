//START OF comment section
document.addEventListener('DOMContentLoaded', function() {
    const iphoneScreen = document.querySelector('.iphone-screen');

    // Set the default chat to Matthew, a company help bot
    loadChatWindow('mat');

    const openChatButtons = document.querySelectorAll('.open-chat');

    openChatButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chatName = button.dataset.chat;
            loadChatWindow(chatName);
        });
    });

    function loadChatWindow(chatName) {
        // Loads the chat template 
        fetch('chat-window.html')
            .then(response => response.text())
            .then(html => {
                iphoneScreen.innerHTML = html;
                const chatTitle = iphoneScreen.querySelector('.chat-title');
                chatTitle.textContent = getChatTitle(chatName);

                // Loads initial messages if available
                loadInitialMessages(chatName, iphoneScreen);

                // Sets up functionality to send and recieve messages 
                setupChatFunctionality(chatName, iphoneScreen);

                // Initialize and train the AI, not implemented full this time around, but would train AI and feed it data about the site to then help others 
                initializeAI(chatName, iphoneScreen);
            })
            .catch(error => console.error('Error loading chat window:', error));
    }

    function getChatTitle(chatName) {
        switch (chatName) {
            case 'mat':
                return 'Matthew (Sneakwise Help Team)';
            case 'solechimz':
                return 'SoleChimz';
            case 'steppingsteph':
                return 'Stepping.Steph';
            default:
                return 'Unknown Chat';
        }
    }

    function loadInitialMessages(chatName, iphoneScreen) {
        const chatMessages = iphoneScreen.querySelector('.chat-messages');
        let initialMessages;
    
        switch (chatName) {
            case 'mat':
                initialMessages = [
                    { sender: 'them', message: 'Hey sneakerhead, how can I assist you?' },
                ];
                break;
            case 'solechimz':
                initialMessages = [
                    { sender: 'them', message: 'Hey Samz!' },
                    { sender: 'you', message: 'Hi there, SoleChimz!' },
                    { sender: 'them', message: 'Have you seen the new nike supreme DNs, they look so clean.' },
                    { sender: 'you', message: 'Yeah I have, excited for the drop, need them in my collection.' },
                ];
                break;
            case 'steppingsteph':
                initialMessages = [
                    { sender: 'you', message: 'Yo Stepping Steph, the one and only!' },
                    { sender: 'them', message: 'Haha. hey there.' },
                    { sender: 'you', message: 'Did you end up getting them pink jordan 1s after all?' },
                    { sender: 'them', message: 'Yes sirrr, very happy with the purchase.' },
                ];
                break;
            default:
                initialMessages = [];
        }
    
        initialMessages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', message.sender);
            messageElement.textContent = message.message;
            chatMessages.appendChild(messageElement);
        });
    }

    function setupChatFunctionality(chatName, iphoneScreen) {
        const chatInput = iphoneScreen.querySelector('.chat-input input');
        const sendButton = iphoneScreen.querySelector('.chat-input .send-message');

        sendButton.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                //Event listener to handle sending the message and receiving a response
                sendMessage(message, chatName, iphoneScreen);
                chatInput.value = '';
            }
        });

        chatInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                sendButton.click();
            }
        });
    }

    function sendMessage(message, chatName, iphoneScreen) {
        const chatMessages = iphoneScreen.querySelector('.chat-messages');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'you');
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);
    }
});
//END OF comment section

 
//Fixed chat toggle/button, clicking it will open up message system for user, stays on the screen for whenever they need it 
const toggleChatButton = document.getElementById('toggle-chat');
const chatWindow = document.getElementById('chat-window');
const overlay = document.getElementById('overlay');

// Initially hide the iPhone and overlay until the toggle is clicked
chatWindow.style.display = 'none';
overlay.style.display = 'none';

toggleChatButton.addEventListener('click', () => {
    toggleState(chatWindow, overlay);
});

overlay.addEventListener('click', () => {
    // Hides the iPhone and overlay when you click anywhere outside the phone 
    chatWindow.style.display = 'none';
    overlay.style.display = 'none';
});

function toggleState(chatbox, overlay) {
    //Toggle function to display iphone with black overlay beneath drawing attention to just the phone 
    if (chatbox.style.display === 'none') {
        chatbox.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        chatbox.style.display = 'none';
        overlay.style.display = 'none';
    }
}