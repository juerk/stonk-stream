window.addEventListener('DOMContentLoaded', () => {
  const chatForm = document.getElementById('chat-form');
  const usernameInput = document.getElementById('username-input');
  const chatInput = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const message = chatInput.value.trim();

    if (username === '' || message === '') return;

    const msgElement = document.createElement('div');
    msgElement.classList.add('chat-message');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('username');
    nameSpan.textContent = username + ':';

    msgElement.appendChild(nameSpan);
    msgElement.appendChild(document.createTextNode(' ' + message));

    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    chatInput.value = '';
  });
});
