console.log('app.js loaded');
console.log('React',React);
var Todo = React.createClass({
  displayName:'TODO',
  render:function(){
    console.log('Todo render');
    return(
      <div>Todo</div>
    );
  }
});

ReactDOM.render(<Todo />,document.querySelector('#app'));
