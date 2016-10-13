var React = require('react');
var Assembly = React.createClass({
  render: function () {
    var self = this, datas = this.props.data.variants;
    var currstep=this.props.data.steps;
    return (
      <div className={"AssemblySection " + (this.props.visible ? 'active' : 'active')}>
        <h2 className="sectionheader green">Assembly</h2>
        <div className="">
          <ul className="stylenone">
            {Object.keys(datas).map(function (data) {
              if(data<=currstep){
              return (
                <li  key={datas[data].sku} className={datas[data].color}>
                  <p className="type">{datas[data].type}</p>
                </li>
              )
            }
            })}
          </ul>
        </div>

      </div>
    );
  }
});
module.exports = Assembly;
