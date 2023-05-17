const AboutMeButton = document.querySelector(".about-me")
const Power = document.getElementById('power')
const Card1 = document.querySelector(".card-container")
const Card2 = document.querySelector(".card-container2")
const Card3 = document.querySelector(".card-container3")
const Discord = document.getElementById("discord")
const User = document.getElementById("user")
const Twitch = document.getElementById("twitch")
let counter = 0

Power.addEventListener('click', () => {
    if (counter == 0) {
        Power.classList.add('active')
        Power.classList.remove('fa-beat')
        Card1.classList.add('active')
        Card2.classList.add('active')
        Card3.classList.add('active')
        Discord.classList.add('active')
        User.classList.add('active')
        Twitch.classList.add('active')  
        Card1.classList.remove('inactive')
        Card2.classList.remove('inactive')
        Card3.classList.remove('inactive')
        counter++
    }
    else {
        Power.classList.remove('active')
        Power.classList.add('fa-beat')
        Card1.classList.remove('active')
        Card2.classList.remove('active')
        Card3.classList.remove('active')
        Discord.classList.remove('active')
        User.classList.remove('active')
        Twitch.classList.remove('active')
        Card1.classList.add('inactive')
        Card2.classList.add('inactive')
        Card3.classList.add('inactive')
        counter--
    }
})