var form = document.getElementById('pickBreed')
var dogPic = document.getElementsByClassName('dogPic')[0]


form.addEventListener('submit', function(event) {
  dogPic.innerHTML = ''
  event.preventDefault()
  var div = document.createElement('div')
  // clearData()
  var breed = event.target.elements.breed.value
  fetch('https://dog.ceo/api/breed/' + breed + "/images")
    .then(function(response) {
      return response.json()

        .then(function(dogImages) {
          // console.log(dogImages.message[0])
          var dogLength = dogImages.message.length
            var randomDog = Math.floor(Math.random() * dogLength)
            var randomImg = dogImages.message[randomDog]
            div.style.backgroundImage = 'url(' + randomImg + ')'
            // div.style.backgroundRepeat = 'no-repeat'
            div.style.backgroundSize = 'cover'
            div.setAttribute('class', 'puppyPic')
            // img.setAttribute('class', 'puppyPic')
            dogPic.append(div)
        })
    })
    fetch("https://talaikis.com/api/quotes/random/")
    .then(function(response) {
      return response.json()
      .then(function(quotes) {
        var quote = quotes.quote
        var author = quotes.author
        var p = document.createElement('p')
        var authorChange = author.replace(' ', ' \"' + breed + '\" ')
        p.innerText = quote + '\n\n' + "-" + authorChange
        div.append(p)
      })
    })
})
