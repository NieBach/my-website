export default async function decorate(block) {
    function ExcelDateToJSDate(serial) {
        var utc_days  = Math.floor(serial - 25569);
        var utc_value = utc_days * 86400;                                        
        var date_info = new Date(utc_value * 1000);
     
        var fractional_day = serial - Math.floor(serial) + 0.0000001;
     
        var total_seconds = Math.floor(86400 * fractional_day);
     
        var seconds = total_seconds % 60;
     
        total_seconds -= seconds;
     
        var hours = Math.floor(total_seconds / (60 * 60));
        var minutes = Math.floor(total_seconds / 60) % 60;
     
        return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
     }

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