
function load () {
    return new Promise((resolve) => {
        const fr = setInterval(() => {
            console.log("Buscando...")

            const navActions = document.querySelector("div._3HQNh._1un-p")
            if (navActions) {
                clearInterval(fr)
                // console.log("ACHO..")
                // console.log('minha extensao.......',navActions)
                resolve(true)
            }

        },500)
    })
}

function getRoadmap () {
    const objMovies = {}
    const movies = Object.keys(roadmap)

    let str = "Qual roteiro deseja deseja enviar ?\n"
    let i = 1;
    for (const movie of movies) {
        str += i +" - "+ movie +"\n"
        objMovies[i] = movie
        i++;
    }
    const op = prompt(str)
    return roadmap[objMovies[op]]
}

function start() {
    console.log('Start..')
    const header = document.querySelector("._1QVfy._3UaCz")
    const btn = document.createElement("button")

    btn.id = "buttonSend"
    btn.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="gray"><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>`

    btn.addEventListener('click',() => {
        const roadmap = getRoadmap()
        send(roadmap)
    })
    header.appendChild(btn)
}

load().then(start)



