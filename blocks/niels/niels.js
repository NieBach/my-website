export default async function decorate(block) {
    // Get text
    const text = block.querySelector(':scope > div > div');
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", 'helix-agenda.json', true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            var data = JSON.parse(rawFile.responseText);
            debugger;
            console.log(data);
        }
    }
    rawFile.send(null);
    block.textContent = '';
    const markup = document.createRange().createContextualFragment(`
    <div class="content-wrapper">
      <div class="content"></div>
    </div>
    <div class="email-wrapper">
      <div class="nielsemail">
        <input name="email" type="email" placeholder="Email Address" />
        <button title="Sign Up">Sign Up</button>
        <button title="Sign Up">Login</button>
      </div>
    </div>
  `);
    markup.querySelector('.content').append(text);
    block.appendChild(markup);
  }