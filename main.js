var form = document.getElementById('pickBreed')
var dogPic = document.getElementById('dogPic')

form.addEventListener('submit', function(event) {
  event.preventDefault()
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
            var img = document.createElement('img')
            img.src = randomImg
            dogPic.append(img)
        })
    })
})
