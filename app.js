const itSkills = document.querySelector('.right__main__skills .right__main__title')
const skillsNames = document.querySelectorAll('.skills__name')
const skillsBars = document.querySelectorAll('.skills__bar')

function itSkillsInvitation() {
    if (itSkills.textContent === 'IT skills') {
        itSkills.classList.toggle('red')
        itSkills.textContent = 'Click Here!'
    } else {
        itSkills.classList.toggle('red')
        itSkills.textContent = 'IT skills'
    }
}

let skillsInterval = setInterval(itSkillsInvitation, 2000)

function itSkillsHandler() {
    clearInterval(skillsInterval)
    itSkills.textContent = 'FUTURE IT SKILLS'
    setTimeout(skillsChanging,200)
    setTimeout(skillsChanging,400)
    setTimeout(skillsChanging,600)
    setTimeout(skillsChanging,800)
    setTimeout(skillsChanging,1000)
    setTimeout(skillsChanging,1200)
}

function skillsChanging() {
    skillsNames[3].textContent = 'Angular, React, Typescript'
    for (const skillsBar of skillsBars) {
        skillsBar.value += 5
    }
    itSkills.removeEventListener('click', itSkillsHandler)
}

itSkills.addEventListener('click', itSkillsHandler)

const photos = document.querySelectorAll('.main__photo')
const button = document.querySelector('button')

function rotatePhotos()  {
    for (const photo of photos) {
        photo.classList.toggle('rotate')
    }

}


button.addEventListener('click', rotatePhotos)

const letter = document.querySelector('.letter')
const firstPar = document.querySelector('.right__main__description')

letter.style.fontSize = '10px'

function letterInvitation () {
    if (letter.style.fontSize === '10px') {
        letter.style.fontSize = '16px'
        letter.style.color = 'blue'
    } else if (letter.style.fontSize === '16px') {
        letter.style.fontSize = '10px'
        letter.style.color = 'black'
    }
}

let letterInterval = setInterval(letterInvitation, 2000);

function letterHandler () {
    clearInterval(letterInterval)
    letter.style.fontSize = '10px'
    letter.style.color = 'black'
    firstPar.textContent = 'Nice, you`ve found this secret message. This CV page is designed to work with Google Chrome.'
}

letter.addEventListener('click', letterHandler)

