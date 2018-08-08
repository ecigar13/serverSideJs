// contains header and title
const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={item.toString()}>{item}</li>)
    }
  </ul>
)

function pluralize(count, word){
  return (count === 1 ? word : word + 's')
}

const TodoHeader = ({taskCount}) => {
  return (
    <div>
      <div>
        <h3>You have {taskCount} {pluralize(taskCount, 'task')}.</h3>
      </div>
    </div>
  )
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      term: '',
      items: [],
      count: 0
    }
  }

  onChange(event){
    this.setState({term: event.target.value})
  }

  onSubmit(event){
    event.preventDefault()
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }

  render(){
    return (
      <div>
        <TodoHeader taskCount={this.state.count} />
        <form className="TodoApp1" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('todoApp1'))
