window.addEventListener('DOMContentLoaded', () => {
  const chatForm = document.getElementById('chat-form');
  const usernameInput = document.getElementById('username-input');
  const chatInput = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');

  // Load stored messages
  const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

  storedMessages.forEach(({ username, message }) => {
    appendMessage(username, message);
  });

  // Load and lock in stored username
  const storedUsername = localStorage.getItem('chatUsername');
  if (storedUsername) {
    usernameInput.value = storedUsername;
    usernameInput.readOnly = true;
    usernameInput.classList.add('locked'); // Turn name green
  }

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const message = chatInput.value.trim();

    if (username === '' || message === '') return;

    // Lock in username if not already stored
    if (!storedUsername) {
      localStorage.setItem('chatUsername', username);
      usernameInput.readOnly = true;
      usernameInput.classList.add('locked'); // Turn name green
    }

    appendMessage(username, message);

    // Save to localStorage
    storedMessages.push({ username, message });
    localStorage.setItem('chatMessages', JSON.stringify(storedMessages));

    chatInput.value = '';
  });

  function appendMessage(username, message) {
    const msgElement = document.createElement('div');
    msgElement.classList.add('chat-message');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('username');
    nameSpan.textContent = username + ':';

    msgElement.appendChild(nameSpan);
    msgElement.appendChild(document.createTextNode(' ' + message));

    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
