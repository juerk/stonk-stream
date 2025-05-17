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

<!-- 1. Add the Connect button and a placeholder for the address -->
<div style="margin-bottom:1rem;">
  <button id="connectWalletBtn" disabled>Connect Wallet</button>
  <span id="walletAddress" style="margin-left:0.5rem;color:#0f0;"></span>
</div>

<script>
  // 2. Grab the button & address span
  const connectBtn = document.getElementById('connectWalletBtn');
  const addrSpan   = document.getElementById('walletAddress');
  let provider;

  window.addEventListener('load', async () => {
    // 3. Detect injected Solana provider (e.g. Phantom)
    if (window.solana && window.solana.isPhantom) {
      provider = window.solana;
      connectBtn.disabled = false;

      // 4. Handle connect / disconnect events
      provider.on('connect', () => {
        addrSpan.textContent = provider.publicKey.toString();
        connectBtn.textContent = 'Wallet Connected';
      });
      provider.on('disconnect', () => {
        addrSpan.textContent = '';
        connectBtn.textContent = 'Connect Wallet';
      });
    } else {
      connectBtn.textContent = 'Install Phantom';
      connectBtn.onclick = () => window.open('https://phantom.app/', '_blank');
    }
  });

  // 5. Wire up the click to pop the wallet dialog
  connectBtn.addEventListener('click', async () => {
    try {
      await provider.connect();   // opens Phantom for approval
      // now provider.publicKey is populated
    } catch (err) {
      console.error('Wallet connect failed:', err);
    }
  });
</script>

