let quotes = [
    "You miss 100% of the shots you don’t take. - Wayne Gretzky” - Michael Scott",
    "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need to be like my need to be praised.",
    "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information.",
    "I’m an early bird and I’m a night owl so I’m wise and I have worms.",
    "It is St. Patrick's Day. And here in Scranton, that is a huge deal. It is the closest that the Irish will ever get to Christmas.",
    "You don't know me, you've just seen my penis.",
    "The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they'd come down and they'd suck the soul out of your body and it hurt!",
    "I feel like all my kids grew up and then they married each other. It’s every parent’s dream.",
    "I love inside jokes. I hope to be a part of one someday.",
    "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
    "You know what they say. 'Fool me once, strike one, but fool me twice...strike three.",
    "You cheated on me?....When I specifically asked you not to?",
    "I'm not superstitious, but I am a little stitious."
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}