(function() {
  'use strict';

  const CHAT_API = 'https://rkcizziq.gensparkclaw.com/chat';
  const BRAND_BLUE = '#1E3A8A';
  const BRAND_ORANGE = '#EA580C';

  // Don't load twice
  if (window.__gsdChatLoaded) return;
  window.__gsdChatLoaded = true;

  const css = `
    #gsd-chat-btn {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 60px; height: 60px; border-radius: 50%;
      background: linear-gradient(135deg, ${BRAND_BLUE}, #2563eb);
      box-shadow: 0 4px 20px rgba(30,58,138,0.4);
      border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    #gsd-chat-btn:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(30,58,138,0.5); }
    #gsd-chat-btn svg { width: 28px; height: 28px; fill: white; }
    #gsd-chat-badge {
      position: absolute; top: -3px; right: -3px;
      background: ${BRAND_ORANGE}; color: white; border-radius: 50%;
      width: 20px; height: 20px; font-size: 11px; font-weight: 800;
      display: flex; align-items: center; justify-content: center;
      font-family: Inter, sans-serif; border: 2px solid white;
    }
    #gsd-chat-window {
      position: fixed; bottom: 96px; right: 24px; z-index: 9998;
      width: 360px; max-width: calc(100vw - 48px);
      background: white; border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18);
      display: flex; flex-direction: column; overflow: hidden;
      transform: scale(0.9) translateY(20px); opacity: 0; pointer-events: none;
      transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), opacity 0.2s;
      font-family: Inter, -apple-system, sans-serif;
      max-height: calc(100vh - 140px);
    }
    #gsd-chat-window.open {
      transform: scale(1) translateY(0); opacity: 1; pointer-events: all;
    }
    #gsd-chat-header {
      background: linear-gradient(135deg, ${BRAND_BLUE}, #1d4ed8);
      padding: 16px 18px; display: flex; align-items: center; gap: 12px;
      flex-shrink: 0;
    }
    #gsd-chat-avatar {
      width: 42px; height: 42px; border-radius: 50%; object-fit: cover; object-position: top;
      border: 2px solid rgba(255,255,255,0.4); flex-shrink: 0;
    }
    #gsd-chat-header-info { flex: 1; }
    #gsd-chat-header-name { color: white; font-weight: 800; font-size: 15px; line-height: 1.2; }
    #gsd-chat-header-sub { color: rgba(255,255,255,0.75); font-size: 12px; }
    #gsd-chat-close {
      background: none; border: none; color: rgba(255,255,255,0.7);
      cursor: pointer; font-size: 22px; line-height: 1; padding: 0;
      transition: color 0.15s;
    }
    #gsd-chat-close:hover { color: white; }
    #gsd-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px; display: flex;
      flex-direction: column; gap: 10px; min-height: 200px;
      max-height: 320px;
    }
    .gsd-msg {
      max-width: 85%; padding: 10px 14px; border-radius: 16px;
      font-size: 14px; line-height: 1.5; animation: gsdFadeIn 0.2s ease;
    }
    @keyframes gsdFadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
    .gsd-msg.bot {
      background: #f3f4f6; color: #1f2937;
      border-bottom-left-radius: 4px; align-self: flex-start;
    }
    .gsd-msg.bot a { color: ${BRAND_BLUE}; text-decoration: underline; }
    .gsd-msg.user {
      background: linear-gradient(135deg, ${BRAND_BLUE}, #2563eb);
      color: white; border-bottom-right-radius: 4px; align-self: flex-end;
    }
    .gsd-msg.typing { color: #9ca3af; font-style: italic; }
    #gsd-chat-suggestions {
      padding: 0 16px 10px; display: flex; flex-wrap: wrap; gap: 6px; flex-shrink: 0;
    }
    .gsd-suggestion {
      background: #eff6ff; border: 1px solid #bfdbfe; color: ${BRAND_BLUE};
      border-radius: 20px; padding: 5px 11px; font-size: 11.5px; font-weight: 600;
      cursor: pointer; transition: all 0.15s; white-space: nowrap;
    }
    .gsd-suggestion:hover { background: ${BRAND_BLUE}; color: white; border-color: ${BRAND_BLUE}; }
    #gsd-chat-input-row {
      padding: 12px 16px; border-top: 1px solid #e5e7eb;
      display: flex; gap: 8px; align-items: center; flex-shrink: 0;
    }
    #gsd-chat-input {
      flex: 1; border: 1.5px solid #e5e7eb; border-radius: 24px;
      padding: 10px 16px; font-size: 14px; outline: none;
      font-family: inherit; transition: border-color 0.15s; resize: none;
      max-height: 80px; overflow-y: auto;
    }
    #gsd-chat-input:focus { border-color: ${BRAND_BLUE}; }
    #gsd-chat-send {
      width: 38px; height: 38px; border-radius: 50%;
      background: ${BRAND_ORANGE}; border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: background 0.15s;
    }
    #gsd-chat-send:hover { background: #c2410c; }
    #gsd-chat-send svg { width: 16px; height: 16px; fill: white; }
    #gsd-chat-footer {
      text-align: center; padding: 6px; font-size: 10px; color: #d1d5db;
      border-top: 1px solid #f3f4f6; flex-shrink: 0;
    }
  `;

  // Disable entirely on mobile
  if (window.innerWidth < 768 || /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Build HTML
  const html = `
    <button id="gsd-chat-btn" aria-label="Chat with us">
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
      <div id="gsd-chat-badge">1</div>
    </button>
    <div id="gsd-chat-window" role="dialog" aria-label="Chat with GSD Associates">
      <div id="gsd-chat-header">
        <img id="gsd-chat-avatar" src="/michael-flournoy.jpg" alt="Michael Flournoy">
        <div id="gsd-chat-header-info">
          <div id="gsd-chat-header-name">GSD Associates</div>
          <div id="gsd-chat-header-sub">⚡ Typically replies in seconds</div>
        </div>
        <button id="gsd-chat-close" aria-label="Close chat">×</button>
      </div>
      <div id="gsd-chat-messages"></div>
      <div id="gsd-chat-suggestions">
        <button class="gsd-suggestion">💰 How much does it cost?</button>
        <button class="gsd-suggestion">⏱ How fast do you see results?</button>
        <button class="gsd-suggestion">🎯 Is this right for us?</button>
        <button class="gsd-suggestion">📋 What happens in month 1?</button>
      </div>
      <div id="gsd-chat-input-row">
        <textarea id="gsd-chat-input" placeholder="Ask anything…" rows="1"></textarea>
        <button id="gsd-chat-send" aria-label="Send">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
      <div id="gsd-chat-footer">Powered by GSD Associates AI</div>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

  // State
  const messages = [];
  let isOpen = false;
  let isLoading = false;
  let emailCaptured = false;

  const win = document.getElementById('gsd-chat-window');
  const btn = document.getElementById('gsd-chat-btn');
  const badge = document.getElementById('gsd-chat-badge');
  const msgContainer = document.getElementById('gsd-chat-messages');
  const input = document.getElementById('gsd-chat-input');
  const sendBtn = document.getElementById('gsd-chat-send');
  const suggestions = document.getElementById('gsd-chat-suggestions');

  function gaEvent(name, params) {
    if (window.gtag) window.gtag('event', name, params || {});
  }

  function toggleChat() {
    isOpen = !isOpen;
    win.classList.toggle('open', isOpen);
    badge.style.display = 'none';
    if (isOpen && messages.length === 0) {
      gaEvent('chat_opened', { event_category: 'engagement' });
      setTimeout(() => addBotMessage("Hey there 👋 I'm the GSD Associates assistant. Quick question — what's the biggest sales challenge you're dealing with right now?"), 400);
    }
    if (isOpen) input.focus();
  }

  function addBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'gsd-msg bot';
    // Convert URLs to links
    div.innerHTML = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return div;
  }

  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'gsd-msg user';
    div.textContent = text;
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'gsd-msg bot typing';
    div.id = 'gsd-typing';
    div.textContent = 'Typing…';
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return div;
  }

  function removeTyping() {
    const t = document.getElementById('gsd-typing');
    if (t) t.remove();
  }

  // Check for email in message
  function extractEmail(text) {
    const m = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return m ? m[0] : null;
  }

  async function sendMessage(text) {
    if (!text.trim() || isLoading) return;
    isLoading = true;
    sendBtn.disabled = true;

    // Hide suggestions while loading, show a compact "More questions" bar after
    suggestions.style.display = 'none';

    addUserMessage(text);
    messages.push({ role: 'user', content: text });

    const typing = showTyping();

    // Check for email capture
    const email = extractEmail(text);

    try {
      const res = await fetch(CHAT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.slice(-10),
          email: (!emailCaptured && email) ? email : null,
          summary: email ? `User shared email during chat. Last message: ${text}` : null
        })
      });
      const data = await res.json();
      removeTyping();
      addBotMessage(data.reply);
      messages.push({ role: 'assistant', content: data.reply });

      if (email && !emailCaptured) {
        emailCaptured = true;
        gaEvent('chat_lead_captured', { event_category: 'conversion', event_label: email, value: 1 });
      }
      // Fire chat_message_sent on every exchange
      if (messages.length === 2) gaEvent('chat_started', { event_category: 'engagement' });
    } catch(e) {
      removeTyping();
      addBotMessage("Quick connection hiccup — book directly with Michael at https://calendly.com/gsdassociatesllc/30min");
    }

    // Always show suggestions again after reply, as a compact row
    suggestions.style.display = 'flex';

    isLoading = false;
    sendBtn.disabled = false;
    input.focus();
  }

  // Event listeners
  btn.addEventListener('click', toggleChat);
  document.getElementById('gsd-chat-close').addEventListener('click', toggleChat);

  sendBtn.addEventListener('click', () => {
    sendMessage(input.value);
    input.value = '';
    input.style.height = 'auto';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
      input.value = '';
      input.style.height = 'auto';
    }
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
  });

  document.querySelectorAll('.gsd-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      sendMessage(btn.textContent.replace(/^[^\w]+/, '').trim());
    });
  });

  // Show badge after 8 seconds if not opened
  setTimeout(() => {
    if (!isOpen) badge.style.display = 'flex';
  }, 8000);

  // Do not auto-open chat - let user click to open
  // setTimeout removed to avoid covering page content

})();
