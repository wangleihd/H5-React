var React = require('react');
var MainLayout = require('./layouts/main');

class HelloMessage extends React.Component {
  render() {
      return (
          <MainLayout title={this.props.title}>
              <div>Hello {this.props.name}</div>
          </MainLayout>
      )
  }
}

module.exports = HelloMessage;
