window.addEventListener('DOMContentLoaded', () => {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = chatInput.value.trim();
    if (msg === '') return;

    const msgElement = document.createElement('div');
    msgElement.classList.add('chat-message');
    msgElement.textContent = msg;

    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    chatInput.value = '';
  });
});
