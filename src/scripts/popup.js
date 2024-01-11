const movies = {
    shrek: {
        name: "Shrek",
        getScript: async () => {
            const shrekScript = await import('./sherekScript.js');
            return shrekScript.shrekScript;
        }
    },
    "bee-movie": {
        name: "Bee movie",
        getScript: async () => {
            const beeMovieScript = await import('./beeMovieSendScript.js');
            return beeMovieScript.script;
        }
    }
}

function initForm() {
    const form = document.querySelector('form');
    Object.keys(movies).forEach((movieKey, index) => {
        const input = document.createElement('input')
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'film');
        input.setAttribute('value', movieKey);
        if (index == 0) {
            input.setAttribute('checked', 'checked');
        }
        const text = document.createTextNode(movies[movieKey].name);
        const label = document.createElement('label');
        label.classList.add('film-label');
        
        label.append(input, text);
        form.append(label)
    });
}

async function sendScript() {
    const value = document.querySelector('input[type=radio]:checked').value;
    const script = await movies[value].getScript();

    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    await chrome.tabs.sendMessage(tab.id, {filmScript: script});
}

async function initProgress(scriptInfo) {
    document.querySelector('#contador').style.display = 'block';
    document.querySelector('#container').style.display = 'none';

    const contador = document.querySelector('p#contador-text');

    contador.innerText = `${scriptInfo.progress}/${scriptInfo.total}`;
}

async function getExistingSendingScript() {
    return (await chrome.storage.local.get(['scriptFilm'])).scriptFilm;
}

function bindActions() {
    document.querySelector('button#send-script-btn').addEventListener('click', sendScript);
}

document.addEventListener("DOMContentLoaded", async () => {
    const scriptInfo = await getExistingSendingScript();
    console.log(scriptInfo);
    if (!scriptInfo) {
        initForm();
        bindActions();
        return;
    }
    initProgress(scriptInfo);
});

chrome.storage.local.onChanged.addListener((changes) => {
    if(changes.scriptFilm) {
        initProgress(changes.scriptFilm.newValue)
    }
})