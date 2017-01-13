import React, {PropTypes, Component} from 'react';

export default class Table extends Component  {
    constructor(props, context) {
        super(props, context)
        this.state = {
            name: 'name'
        }
    }

    componentDidMount(){
        this.props.getRows();
    }

    render() {
      const style={
          width: '95%',
          marginTop: '20px',
          border: 'none'
      }
      return (
          <div className={"table-responsive center-block"} style={style}>
              <table className={"table table-condensed table-striped"}>
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Distance</th>
                      <th>Checked-in</th>
                  </tr>
                  </thead>
                  <tbody>
                     {this.props.rows}
                  </tbody>
              </table>
          </div>
      );
    }
}