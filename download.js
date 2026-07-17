// Countdown Settings
let seconds = 10;

const count = document.getElementById("count");
const bar = document.getElementById("bar");
const button = document.getElementById("downloadBtn");

const max = 10;

const timer = setInterval(() => {

    seconds--;

    count.innerHTML = seconds;

    let progress = ((max - seconds) / max) * 100;

    bar.style.width = progress + "%";

    if(seconds <= 0){

        clearInterval(timer);

        count.innerHTML = "✓";

        button.style.display = "block";

        // Auto Download
        const a = document.createElement("a");

        a.href = "https://github.com/arminaparaty/phantomhub-site/releases/download/arminaparaty_lhn5/arminaparaty_lhn5.1.rar";
        a.download = "";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

    }

},1000);
