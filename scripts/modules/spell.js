const spellContainer = document.querySelector('.spells')
const spellContainerTwo = document.querySelector('.spells-2')

const championSpell = document.querySelector('.champion-spell')
let spellOne = document.querySelector('.spell-1')
let spellTwo = document.querySelector('.spell-2')


const getSpell = () => {
    return fetch(`../assets/spell.json`)
}

const getSpellImg = (spell) => {
    return `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${spell}.png`
}


getSpell()
    .then(r => r.json())
    .then(r => {
        for (spell in r.data) {
            const spellImg = document.createElement('img')
            spellImg.src = getSpellImg(spell)
            spellContainer.appendChild(spellImg)
            spellContainerTwo.appendChild(spellImg)
        }
        for (spell in r.data) {
            if (spellOne.src) {
                const spellImg = document.createElement('img')
                spellImg.src = getSpellImg(spell)
                spellContainer.appendChild(spellImg)
            }
        }
    })
spellOne.src = championSpell.getElementsByTagName('img')[0].src
spellTwo.src = championSpell.getElementsByTagName('img')[1].src


spellContainer.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target != spellContainer && event.target != spellContainerTwo) {
        if (event.target.src != spellTwo.src) {
            spellOne.src = event.target.src
            spellContainer.classList.remove('active')
            championSpell.getElementsByTagName('img')[0].src = event.target.src
        } else {
            let guardaSpell = spellOne.src;
            spellOne.src = event.target.src;
            spellTwo.src = guardaSpell;
            spellContainer.classList.remove('active')
            championSpell.getElementsByTagName('img')[0].src = event.target.src
            championSpell.getElementsByTagName('img')[1].src = guardaSpell
        }
    } else {
        spellOne.src = spellOne.src
        spellContainer.classList.remove('active')
    }
})
spellContainerTwo.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target != spellContainer && event.target != spellContainerTwo) {
        if (event.target.src != spellOne.src) {
            spellTwo.src = event.target.src
            spellContainerTwo.classList.remove('active')
            championSpell.getElementsByTagName('img')[1].src = event.target.src
        } else {
            let guardaSpell = spellTwo.src;
            spellTwo.src = event.target.src;
            spellOne.src = guardaSpell;
            spellContainerTwo.classList.remove('active')
            championSpell.getElementsByTagName('img')[1].src = event.target.src
            championSpell.getElementsByTagName('img')[0].src = guardaSpell
        }
    } else {
        spellTwo.src = spellTwo.src
        spellContainerTwo.classList.remove('active')
    }
})

spellOne.addEventListener('click', () => {
    spellContainer.classList.toggle('active')
})
spellTwo.addEventListener('click', () => {
    spellContainerTwo.classList.toggle('active')
})