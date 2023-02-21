export default async function decorate(block) {
    // Get text
    const text = block.querySelector(':scope > div > div');
  debugger;
    block.textContent = '';
    const markup = document.createRange().createContextualFragment(`
    <div class="content-wrapper">
      <div class="content"></div>
    </div>
    <div class="email-wrapper">
      <div class="email">
        <input name="email" type="email" placeholder="Email Address" />
        <button title="Sign Up">Sign Up</button>
        <button title="Sign Up">Login</button>
      </div>
    </div>
  `);
    markup.querySelector('.content').append(text);
    block.appendChild(markup);
  }