/* Using concatination to obtain the full website, using the method described on the API */
function searchJokeById(){
  // this contains the id of the joke.
  var element = document.getElementById('myText').value
  var link = 'https://icanhazdadjoke.com/j/'
  link = link.concat(element)
  // assign the link as a link to the joke based on id
  document.getElementById('webLink').innerHTML = link

  // send the link above to the API and display the response.
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function (){
    if (this.status === 200) {
      console.log(this.responseText)
      document.getElementById('jokeData').innerHTML = JSON.parse(this.responseText).joke
      // resize the element to the css style
      document.getElementsByTagName('aside')[0].setAttribute('class', 'DOMFontResize')
      document.getElementById('webLink').innerHTML = link.link(link)
    } else {
      console.log('error' + this.status)
    }
  }
  xhttp.open('GET', link, true)
  xhttp.setRequestHeader('Accept', 'application/json')
  xhttp.send()
}

/* send the request for a random joke and display it */
function getRandomJoke(){
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function (){
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText)
      document.getElementById('jokeId').innerHTML = JSON.parse(this.responseText).id
      document.getElementById('jokeData').innerHTML = JSON.parse(this.responseText).joke
      var tempJoke = JSON.parse(this.responseText).joke
      document.getElementsByTagName('aside')[0].setAttribute('class', 'DOMFontResize')

      /* This creates a list node, apply the joke to the node and append it to the myList html list */
      var node = document.createElement('li')
      var textnode = document.createTextNode(tempJoke)
      node.appendChild(textnode)
      document.getElementById('myList').appendChild(node)
      tempJoke = 'Nothing to append'
    }
  }
  xhttp.open('GET', 'https://icanhazdadjoke.com/', true)
  xhttp.setRequestHeader('Accept', 'application/json')
  xhttp.send()
}


