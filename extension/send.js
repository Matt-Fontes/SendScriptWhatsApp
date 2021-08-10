function send(scriptText) {
    window.InputEvent = window.Event || window.InputEvent;
    const event = new InputEvent('input', { bubbles: true });
    const TIME_SEND = 500
    const CONFIG_SELECTOR = {
        header_button: "[role='button']._24-Ff",
        textbox: "#main div._13NKt",
        button_send: "#main span[data-testid=send]",
        participant_container: "div._3uIPm.WYyr1",
    }
    const VIEW_ELEMENTS = {
        header: document.querySelector(CONFIG_SELECTOR["header_button"]),
        textbox:  document.querySelector(CONFIG_SELECTOR["textbox"]),
        button_send: () => {
            return document.querySelector(CONFIG_SELECTOR["button_send"])
        },
        participant_container: () => {
            return document.querySelector(CONFIG_SELECTOR["participant_container"])
        }
    }

    function sendMessage (messagem) {
        VIEW_ELEMENTS['textbox'].textContent = messagem;
        VIEW_ELEMENTS['textbox'].dispatchEvent(event);
        const buttton_send = VIEW_ELEMENTS['button_send']();
        buttton_send.click();
    }

    const lines = scriptText.split("\n");
    let  i = 0;
    const id = setInterval(frame, TIME_SEND);
    function frame () {
        if (i >= lines.length) {
            clearInterval(id);
        }

        const line = lines[i];
        if(line.trim() != '') {
            sendMessage(line);
        }

        i++;
    }
}