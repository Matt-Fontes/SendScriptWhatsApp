function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('div._1awRl[data-tab="6"]');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("button._2Ujuu").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`SHREK

Written by

William Steig & Ted Elliott

Pão
Leite 
Nata
Manteiga
Queijo
Queijo de Cabra
Açucar Refinado
Açucar Mascavo
Pão de Milho
Pão de Batata 
Pipoca 
Biscoito
Panqueca
Bacon
Bacon com ovos
Torta de cenoura
Torta de abóbora
Lã
Pipoca amanteigada
Torta de maça 
Xarope
