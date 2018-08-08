class SearchJokeById extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      apiResponse: ''
    }
    this.sendRequest = this.sendRequest.bind(this)
  }

  // async call to API and set state.
  sendRequest(id){
    // this contains the id of the joke.
    var jokeLink = 'https://icanhazdadjoke.com/j/' + id
    console.log('Link: ' + jokeLink)

    // save this for SearchJokeById
    var self = this

    // send the link above to the API and display the response.
    var xhttp = new XMLHttpRequest()

    // use self because this function is used in another class.
    // don't use arrow function because it will be called by another class, meaning invalid this
    xhttp.onreadystatechange = function (){
      if (this.status === 200 && this.readyState === 4) {
        console.log(this.responseText)
        self.setState({ apiResponse: JSON.parse(this.responseText).joke })
        self.forceUpdate()
      }
    }
    xhttp.open('GET', jokeLink, true)
    xhttp.setRequestHeader('Accept', 'application/json')
    xhttp.send()
  }

  render(){
    return (
      <div>
        <React.StrictMode>
          <h4>Find a joke by id</h4>
          <SearchForm onClick={this.sendRequest} />
          <p>{this.state.apiResponse}</p>
        </React.StrictMode>
      </div>)
  }
}

class SearchForm extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      value: ''
    }
  }

  handleChange(jokeId){
    this.setState({
      value: jokeId.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('Prop: ' + this.state.value)
    this.props.onClick(this.state.value)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label > Input Joke Id: </label>
          <input type="text" id="myText" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          <p> You can access the original website of this joke be going to the link below: </p>
          <p> <a id='webLink' href={
            'https://icanhazdadjoke.com/j/' + this.state.value}> {'https://icanhazdadjoke.com/j/' + this.state.value} </a></p>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<SearchJokeById />, document.getElementById('searchJokeById'))
