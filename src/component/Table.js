import React, {Component} from "react";


class Table extends Component {

  render() {
    return (<div>
      hello
      {this.props.data && this.props.data.map(obj => (
        <div>

          <li>{obj.type}</li>
          <li>{obj.amount}</li>
        </div>

      ))}
    </div>);
  }
}

export default Table;
