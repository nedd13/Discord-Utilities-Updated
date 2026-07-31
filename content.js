// Discord Utilities Sidebar: Timestamp, Color, & Text Formatting

let sidebarCreated = false;

function createSidebar() {
  if (document.getElementById('discord-ts-sidebar-container')) return;

  const container = document.createElement('div');
  container.id = 'discord-ts-sidebar-container';
  container.className = 'ts-sidebar-collapsed';

  container.innerHTML = `
    <!-- Toggle Button Pin -->
    <button id="ts-sidebar-toggle" title="Toggle Utilities Sidebar">
      <svg id="ts-toggle-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <!-- Sidebar Main Panel -->
    <div class="ts-sidebar-content">
      <!-- Nav Tabs -->
      <div class="ts-nav-tabs">
        <button class="ts-tab-btn active" data-tab="timestamp-tab">Timestamp</button>
        <button class="ts-tab-btn" data-tab="color-tab">Color</button>
        <button class="ts-tab-btn" data-tab="text-tab">Text</button>
      </div>

      <!-- Tab 1: Timestamp Generator -->
      <div class="ts-tab-content active" id="timestamp-tab">
        <div class="ts-header">
          <div class="ts-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5865F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Timestamp Generator</span>
          </div>
        </div>

        <div class="ts-body">
          <div class="ts-field">
            <label>Date & Time</label>
            <input type="datetime-local" id="ts-datetime-input" />
          </div>

          <div class="ts-field">
            <label>Display Format</label>
            <select id="ts-format-select">
              <option value="R">Relative Time (e.g., 2 hours ago)</option>
              <option value="t">Short Time (e.g., 14:30)</option>
              <option value="T">Long Time (e.g., 14:30:45)</option>
              <option value="d">Short Date (e.g., 31/07/2026)</option>
              <option value="D">Long Date (e.g., 31 July 2026)</option>
              <option value="f">Short Date/Time (e.g., 31 July 2026 14:30)</option>
              <option value="F">Long Date/Time (e.g., Friday, 31 July 2026 14:30)</option>
            </select>
          </div>

          <div class="ts-field">
            <label>Generated Code</label>
            <input type="text" id="ts-output-preview" readonly placeholder="<t:123456789:R>" />
          </div>

          <div class="ts-actions">
            <button class="ts-btn primary" id="ts-btn-insert">Insert into Chat</button>
            <button class="ts-btn secondary" id="ts-btn-copy">Copy Code</button>
          </div>
        </div>
      </div>

      <!-- Tab 2: Color Generator / Picker -->
      <div class="ts-tab-content" id="color-tab">
        <div class="ts-header">
          <div class="ts-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5865F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
            <span>Color Generator</span>
          </div>
        </div>

        <div class="ts-body">
          <div class="ts-field">
            <label>Pick Color</label>
            <div class="color-picker-wrapper">
              <input type="color" id="color-picker-input" value="#5865f2" />
              <div id="color-preview-box" style="background-color: #5865f2;"></div>
            </div>
          </div>

          <div class="ts-field">
            <label>HEX Code</label>
            <input type="text" id="color-hex-output" value="#5865f2" readonly />
          </div>

          <div class="ts-field">
            <label>RGB Format</label>
            <input type="text" id="color-rgb-output" value="rgb(88, 101, 242)" readonly />
          </div>

          <div class="ts-actions">
            <button class="ts-btn primary" id="color-btn-insert">Insert HEX into Chat</button>
            <button class="ts-btn secondary" id="color-btn-random">Random Color</button>
          </div>
        </div>
      </div>

      <!-- Tab 3: Text Generator -->
      <div class="ts-tab-content" id="text-tab">
        <div class="ts-header">
          <div class="ts-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5865F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 7 4 4 20 4 20 7"></polyline>
              <line x1="9" y1="20" x2="15" y2="20"></line>
              <line x1="12" y1="4" x2="12" y2="20"></line>
            </svg>
            <span>Text Generator</span>
          </div>
        </div>

        <div class="ts-body">
          <div class="ts-field">
            <label>Your Text</label>
            <input type="text" id="text-input" placeholder="Type title or message..." />
          </div>

          <div class="ts-field">
            <label>Format Style</label>
            <select id="text-style-select">
              <option value="h1">Header 1 (# Bold Title)</option>
              <option value="h2">Header 2 (## Title)</option>
              <option value="h3">Header 3 (### Small Title)</option>
              <option value="bold">**Bold Text**</option>
              <option value="bold-italic">***Bold Italic***</option>
              <option value="quote">> Blockquote</option>
              <option value="code">&#96;Code Block&#96;</option>
              <option value="spoiler">||Spoiler Text||</option>
              <option value="bullet">- Bullet Point</option>
            </select>
          </div>

          <div class="ts-field">
            <label>Formatted Preview</label>
            <input type="text" id="text-output-preview" readonly placeholder="# Your Title" />
          </div>

          <div class="ts-actions">
            <button class="ts-btn primary" id="text-btn-insert">Insert into Chat</button>
            <button class="ts-btn secondary" id="text-btn-copy">Copy Text</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  // Set default datetime to right now
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const dateInput = document.getElementById('ts-datetime-input');
  if (dateInput) {
    dateInput.value = now.toISOString().slice(0, 16);
  }

  // General Elements
  const toggleBtn = document.getElementById('ts-sidebar-toggle');
  const toggleIcon = document.getElementById('ts-toggle-icon');

  // Timestamp Elements
  const formatSelect = document.getElementById('ts-format-select');
  const outputPreview = document.getElementById('ts-output-preview');
  const btnInsert = document.getElementById('ts-btn-insert');
  const btnCopy = document.getElementById('ts-btn-copy');

  // Color Elements
  const colorInput = document.getElementById('color-picker-input');
  const colorBox = document.getElementById('color-preview-box');
  const colorHex = document.getElementById('color-hex-output');
  const colorRgb = document.getElementById('color-rgb-output');
  const colorBtnInsert = document.getElementById('color-btn-insert');
  const colorBtnRandom = document.getElementById('color-btn-random');

  // Text Elements
  const textInput = document.getElementById('text-input');
  const textStyleSelect = document.getElementById('text-style-select');
  const textOutputPreview = document.getElementById('text-output-preview');
  const textBtnInsert = document.getElementById('text-btn-insert');
  const textBtnCopy = document.getElementById('text-btn-copy');

  // Tab switching logic
  const tabBtns = container.querySelectorAll('.ts-tab-btn');
  const tabContents = container.querySelectorAll('.ts-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = document.getElementById(btn.dataset.tab);
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // Toggle Sidebar Open / Close
  toggleBtn.addEventListener('click', () => {
    const isCollapsed = container.classList.contains('ts-sidebar-collapsed');
    if (isCollapsed) {
      container.classList.remove('ts-sidebar-collapsed');
      container.classList.add('ts-sidebar-expanded');
      toggleIcon.style.transform = 'rotate(180deg)';
    } else {
      container.classList.remove('ts-sidebar-expanded');
      container.classList.add('ts-sidebar-collapsed');
      toggleIcon.style.transform = 'rotate(0deg)';
    }
  });

  // Helper: Insert text into Discord Slate.js input safely
  function insertTextToDiscord(textTag, buttonElement) {
    const chatInput = document.querySelector('[class*="slateTextArea"]') || 
                      document.querySelector('[role="textbox"]') || 
                      document.querySelector('textarea');

    if (!chatInput) {
      alert('Could not find an active chat textbox. Please click into a chat channel first.');
      return;
    }

    chatInput.focus();

    try {
      const dataTransfer = new DataTransfer();
      dataTransfer.setData('text/plain', textTag + ' ');
      const event = new ClipboardEvent('paste', {
        clipboardData: dataTransfer,
        bubbles: true,
        cancelable: true
      });
      chatInput.dispatchEvent(event);
    } catch (err) {
      document.execCommand('insertText', false, textTag + ' ');
    }

    const originalText = buttonElement.innerText;
    buttonElement.innerText = 'Inserted!';
    setTimeout(() => {
      buttonElement.innerText = originalText;
    }, 1500);
  }

  // --- Timestamp Logic ---
  function updateTimestampPreview() {
    if (!dateInput || !outputPreview || !formatSelect) return;
    const val = dateInput.value;
    if (!val) return;

    const dateObj = new Date(val);
    const unixSeconds = Math.floor(dateObj.getTime() / 1000);
    const style = formatSelect.value;

    outputPreview.value = `<t:${unixSeconds}:${style}>`;
  }

  if (dateInput) dateInput.addEventListener('input', updateTimestampPreview);
  if (formatSelect) formatSelect.addEventListener('change', updateTimestampPreview);
  updateTimestampPreview();

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      outputPreview.select();
      navigator.clipboard.writeText(outputPreview.value);
      const originalText = btnCopy.innerText;
      btnCopy.innerText = 'Copied!';
      setTimeout(() => { btnCopy.innerText = originalText; }, 1500);
    });
  }

  if (btnInsert) {
    btnInsert.addEventListener('click', () => {
      insertTextToDiscord(outputPreview.value, btnInsert);
    });
  }

  // --- Color Generator Logic ---
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  function updateColorValues(hex) {
    if (!colorInput || !colorBox || !colorHex || !colorRgb) return;
    colorInput.value = hex;
    colorBox.style.backgroundColor = hex;
    colorHex.value = hex.toUpperCase();
    colorRgb.value = hexToRgb(hex);
  }

  if (colorInput) {
    colorInput.addEventListener('input', (e) => {
      updateColorValues(e.target.value);
    });
  }

  if (colorBtnRandom) {
    colorBtnRandom.addEventListener('click', () => {
      const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      updateColorValues(randomHex);
    });
  }

  if (colorBtnInsert) {
    colorBtnInsert.addEventListener('click', () => {
      insertTextToDiscord(colorHex.value, colorBtnInsert);
    });
  }

  // --- Text Generator Logic ---
  function updateTextPreview() {
    if (!textInput || !textStyleSelect || !textOutputPreview) return;
    const rawText = textInput.value.trim() || 'Your Text Here';
    const style = textStyleSelect.value;
    let formatted = rawText;

    switch (style) {
      case 'h1':
        formatted = `# ${rawText}`;
        break;
      case 'h2':
        formatted = `## ${rawText}`;
        break;
      case 'h3':
        formatted = `### ${rawText}`;
        break;
      case 'bold':
        formatted = `**${rawText}**`;
        break;
      case 'bold-italic':
        formatted = `***${rawText}***`;
        break;
      case 'quote':
        formatted = `> ${rawText}`;
        break;
      case 'code':
        formatted = `\`${rawText}\``;
        break;
      case 'spoiler':
        formatted = `||${rawText}||`;
        break;
      case 'bullet':
        formatted = `- ${rawText}`;
        break;
    }

    textOutputPreview.value = formatted;
  }

  if (textInput) textInput.addEventListener('input', updateTextPreview);
  if (textStyleSelect) textStyleSelect.addEventListener('change', updateTextPreview);
  updateTextPreview();

  if (textBtnCopy) {
    textBtnCopy.addEventListener('click', () => {
      textOutputPreview.select();
      navigator.clipboard.writeText(textOutputPreview.value);
      const originalText = textBtnCopy.innerText;
      textBtnCopy.innerText = 'Copied!';
      setTimeout(() => { textBtnCopy.innerText = originalText; }, 1500);
    });
  }

  if (textBtnInsert) {
    textBtnInsert.addEventListener('click', () => {
      insertTextToDiscord(textOutputPreview.value, textBtnInsert);
    });
  }

  sidebarCreated = true;
}

// Observe page load and initialize sidebar
const observer = new MutationObserver(() => {
  if (document.body && !sidebarCreated) {
    createSidebar();
  }
});

observer.observe(document.body, { childList: true, subtree: true });