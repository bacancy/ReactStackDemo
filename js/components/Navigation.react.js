var React = require('react');
var AssemblyActions = require('../actions/AssemblyActions');
var Navigation = React.createClass({

  getInitialState: function () {
    return {step:0};
  },

  componentDidMount: function () {
    this.setState({step:this.state.step});
  },

  componentWillUnmount: function () {
    this.setState({step:0});
  },

  nextStep: function () {
    this.props.data.steps=this.props.data.steps+1;
    this.setState({step:this.state.step+1});
  },

  prevStep: function () {
    this.props.data.steps=this.props.data.steps-1;
    this.setState({step:this.state.step-1});
  },
  addData: function (event) {
    this.nextStep();
    AssemblyActions.selectData(this.state.step);
    var update = {
      name: this.props.data.name,
    };
    AssemblyActions.addData(this.state.step, update);
  },
  removeData: function (event) {
    this.prevStep();
    AssemblyActions.selectData(this.state.step);
    AssemblyActions.removeData(this.state.step);
  },

  render: function () {
    return (
      <div className="NavigateSection">
      <div className="">
        <div className="NavigationBtn">

          <button type="button" onClick={this.removeData} disabled={this.state.step > 0 ? '' : 'disabled'}>
            {this.state.step > 0 ? 'Prew' : 'Prew'}
          </button>

          <button  type="button" onClick={this.addData} disabled={this.state.step >2  ? 'disabled' : ''}>
            {this.state.step > 0 ? 'Next' : 'Start'}
          </button>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Navigation;
