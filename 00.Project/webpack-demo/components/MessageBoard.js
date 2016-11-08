var React = require('react');

var MessageBoard = React.createClass({
    render: function(){
      return  <div>
            <h1>{this.props.title}</h1>
        </div>;
    }
})
module.exports = MessageBoard;
