var React = require('react');
var AssemblyActions = require('../actions/AssemblyActions');

var StackMemory = React.createClass({
  getInitialState: function () {
    return {data:this.props.data};
  },
  render: function () {
    return (
    <div className="stackstaticbox">
      {this.state.data}
    </div>
    );
  }
});
var Stack = React.createClass({
  render: function () {
    var currstep=this.props.data.steps;
    var variants=this.props.data.variants;
    return (
    <div className="StackSection">
      <h2 className="sectionheader">Stack</h2>
      <div className="StackTop">
        <ul>
          {Object.keys(variants).map(function (variant) {
            if(variant<=currstep && variant!=0){
              var color='stackbox '+variants[variant].color;
              return (
                <li className="stackcontainer" key={variants[variant].sku}>
                  <p className="stackheader">[{variants[variant].stack.tag}]</p>
                  <p className={color}>{variants[variant].stack.execution}</p>
                </li>
              )
            }
          })}
      </ul>
      </div>
      <div className="StackMiddle">
        <StackMemory data="0xbffff6c8"/>
        <StackMemory data="0xbffff6c8"/>
        <StackMemory data="0xbffff6cc"/>
        <StackMemory data="0xbffff6d0"/>
        <StackMemory data="0xbffff6d4"/>
        <StackMemory data="0xbffff6d8"/>
      </div>
      <div className="StackBottom">

      </div>
    </div>
    );
  }
});

module.exports = Stack;
