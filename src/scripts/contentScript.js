chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    
    if (request.filmScript) {
        try {
            enviarScript(request.filmScript);
            sendResponse({worker: "start"});
        } catch (error) {
            sendResponse({error});
        }
    }
});

async function sendWorker(scriptText) {
    const main = document.querySelector("#main"), textarea = main.querySelector(`div[contenteditable="true"]`);
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    const total = lines.length;
    let progress = 0;
    for(const line of lines){
        const index = lines.indexOf(line)
        progress++;
        console.log('Progresso: ', progress, '/', lines.length);
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(async () => {
            await chrome.storage.local.set({scriptFilm: {progress, total}});
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(index !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
}

function enviarScript(scriptText){
    const main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
    
	sendWorker(scriptText)
	return lines.length;
}

chrome.storage.local.clear();