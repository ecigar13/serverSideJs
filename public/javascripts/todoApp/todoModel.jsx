// contains header and title

default class TodoHeader extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      numberOfTask: this.props.count
    }
  }

  render(){
    return (
      <div>
        You have {this.state.numberOfTask} tasks.
      </div>
    )
  }
}

default class TodoFooter extends React.Component{
  constructor(props){
    super(props)
    this.clearButton = null
    this.updateCompletedCount = this.updateCompletedCount.bind(this)
    this.state = {
      'count': 0,
      'completedCount': 0,
      'clearButton': ''
    }
  }

  pluralize(count, word){
    return (count === 1 ? word : word + 's')
  }

  updateCompletedCount(){
    if (this.state.completedCount > 0) {
      this.clearButton = (
        <button className="clear-completed" onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      )
    }
  }

  render(){
    this.updateCompletedCount()
    var nowShowing = this.props.nowShowing
    return (
      <div>
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.count}</strong> {this.pluralize(this.props.count, 'item')} left
          </span>
          <ul className="filters">
            <li>
              <a
                href="#/"
                className={classNames({selected: nowShowing === app.ALL_TODOS})}>
									All
              </a>
            </li>
            {' '}
            <li>
              <a
                href="#/active"
                className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>
									Active
              </a>
            </li>
            {' '}
            <li>
              <a
                href="#/completed"
                className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>
									Completed
              </a>
            </li>
          </ul>
          {clearButton}
        </footer>
      </div>
    )
  }
}


class TodoModel extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      'taskCount': this.props.count
    }
  }

  render(){
    return (
      <div>
        <p>This app works</p>
        <TodoHeader count={this.state.taskCount} />
        <TodoFooter />
      </div>
    )
  }
}

ReactDOM.render(<TodoModel />, document.getElementById('todoApp'))
