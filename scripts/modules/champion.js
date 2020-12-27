const select = document.querySelector('.select')
let championImg = document.querySelector('.img-champion')
let championContainer = document.querySelector('.champion-container')
const allContainer = document.querySelectorAll('.champion-container')
const mapa = document.querySelector('.mapa')


const getBackground = (campeao) => {
    return `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${campeao}.png`
}

const getSplash = (campeao) => {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeao}_0.jpg`
}
const getChampion = () => {
    return fetch(`https://ddragon.leagueoflegends.com/cdn/10.25.1/data/pt_BR/champion.json`)
}

const getSkins = (champion) => {
    return fetch(`https://ddragon.leagueoflegends.com/cdn/10.25.1/data/pt_BR/champion/${champion}.json`)
}
getChampion()
    .then(r => r.json())
    .then(r => {
        for (champion in r.data) {
            getSkins(champion).then(r => r.json()).then(r => {
                for (champion in r.data) {
                    const champ = document.createElement('div')
                    const img = document.createElement('img')
                    const name = document.createElement('span')

                    img.classList.add('champ-icon')
                    champ.classList.add('champ')
                    name.classList.add('name')

                    name.innerText = champion
                    img.src = getBackground(champion)


                    champ.appendChild(img)
                    champ.appendChild(name)
                    select.appendChild(champ)
                    if (img.src == 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Jhin.png' || img.src == 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Yasuo.png' || img.src == 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Gragas.png' || img.src == 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Zilean.png') {
                        img.classList.add('gray')
                        img.style.cursor = 'not-allowed'
                    }

                    img.addEventListener('click', (event) => {

                        document.body.style.backgroundImage
                        if (event.target.src != 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Jhin.png' && event.target.src != 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Yasuo.png' && event.target.src != 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Gragas.png' && event.target.src != 'https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Zilean.png') {
                            championContainer.style.backgroundImage = `url(${getSplash(name.innerText)})`
                            championImg.src = event.target.src
                            document.querySelector('.choosing').innerText = name.innerText
                            mapa.src = getSplash(name.innerText)
                            mapa.style.width = '100%'
                            mapa.style.filter = 'blur(4px)'
                            mapa.style.top = 0
                            mapa.style.right = 0
                            mapa.style.opacity = '.5'
                            document.querySelector('.ok').style.background = 'rgba(73, 73, 73. 5)';
                            document.querySelector('.ok').style.border = '1px solid rgba(255, 255, 255, 0.4)';
                        }
                    })
                }
            })
        }
    })