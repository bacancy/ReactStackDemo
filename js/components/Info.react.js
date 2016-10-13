var React = require('react');
var Info = React.createClass({
  render: function () {
    var self = this, datas = this.props.datas;
      var currstep=this.props.datas.steps;
    return (
        <div className="InfoSection">
          <ul className="infodata">
            <li className="Name">{datas.name}</li>
            <li className="Title">{datas.title}</li>
            <li className="Description">{datas.variants[currstep].description}</li>
          </ul>
        </div>
    );
  }
});
module.exports = Info;
