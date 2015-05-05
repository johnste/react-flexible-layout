import React from 'react'
import Layout from './react-flex-layout.jsx'
import domready from 'domready'
import LocationBar from 'location-bar'
var locationBar = new LocationBar();

class Horizontal extends React.Component {
  constructor(props) {
    super(props)
  }


}

class Example extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    locationBar.route(/#horizontal/, () => {
      this.setState({page: <Horizontal />})
    })
    locationBar.start()
  }

  render() {
    var example = this.state ? this.state : <div>Select an example</div>
    return <Layout fill='window'>
      <Layout layoutHeight={100}><a href='#horizontal'>Horizontal</a></Layout>
      <Layout layoutHeight='flex'>
        {example}
      </Layout>
    </Layout>
  }
}

domready(() => {
  var container = document.createElement('div')
  document.body.appendChild(container)
  React.render(<Example />, container)
})
