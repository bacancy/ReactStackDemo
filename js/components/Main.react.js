var React = require('react');
var AssemblyStore = require('../stores/AssemblyStore');
var CodeStore = require('../stores/CodeStore');
var Assembly = require('./Assembly.react.js');
var CodeMaster = require('./Code.react.js');
var Info = require('./Info.react.js');
var Navigation = require('./Navigation.react.js');
var Stack = require('./Stack.react.js');

var App = React.createClass({

  getInitialState: function () {
    return {
      data: CodeStore.getData(),
      selectedProduct: CodeStore.getSelected(),
      stepData: AssemblyStore.getData(),
    }
  },

  componentDidMount: function () {
    CodeStore.addChangeListener(this._onChange);
    AssemblyStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    CodeStore.removeChangeListener(this._onChange);
    AssemblyStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div className="reactApp">
        <Info datas={this.state.data} />
        <CodeMaster data={this.state.data} stepdata={this.state.stepData} selected={this.state.selectedProduct}/>
        <Assembly datas={this.state.stepData} data={this.state.data} />
        <Navigation data={this.state.data} stepdata={this.state.stepData} selected={this.state.selectedProduct}/>
        <Stack data={this.state.data} stepdata={this.state.stepData}  selected={this.state.selectedProduct}/>
    </div>
    );
  },
  _onChange: function () {
    this.setState({
        data: CodeStore.getData(),
        selectedProduct: CodeStore.getSelected(),
        stepData: AssemblyStore.getData()
     });
  }
});

module.exports = App;
