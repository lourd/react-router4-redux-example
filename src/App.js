import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Match, Link, StaticRouter } from 'react-router'
import { push, replace } from 'lib/react-router-redux/'


function mapStateToProps(state) {
  return {
    location: state.routing.location,
    action: state.routing.action,
  }
}

const mapDispatchToProps = {
  onPush: push,
  onReplace: replace,
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired,
    onPush: PropTypes.func.isRequired,
    onReplace: PropTypes.func.isRequired,
  }

  render() {
    return (
      <StaticRouter
        location={this.props.location}
        action={this.props.action}
        onPush={this.props.onPush}
        onReplace={this.props.onReplace}
      >
        <div style={{ padding: 15, fontFamily: 'Helvetica, sans-serif' }}>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/foo">Foo</Link></div>
          <div><Link to="/bar">Bar</Link></div>
          <div>
            <Match pattern="/" exactly component={() => {
              document.title = 'Home'
              return <h1>Home!</h1>
            }} />
            <Match pattern="/foo" exactly render={() => {
              document.title = 'Foo'
              return <h1>Foo!</h1>
            }} />
            <Match pattern="/bar" exactly render={() => {
              document.title = 'Bar'
              return <h1>Bar!</h1>
            }} />
          </div>
        </div>
      </StaticRouter>
    )
  }
}

export default App
