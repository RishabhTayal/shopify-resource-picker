import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { CustomInput, ListGroupItem } from 'reactstrap';

export default class ResourcePickerListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <ListGroupItem>
        {/* <div className="todo-indicator bg-info" /> */}
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left mr-2">
              <CustomInput type="checkbox" id={data.id} label="&nbsp;" />
            </div>
            <div htmlFor={data.id} className="widget-content-left mr-3">
              <div className="widget-content-left">
                <img
                  htmlFor={data.id}
                  width={42}
                  className="rounded"
                  src={data.imageUrl}
                  alt=""
                />
              </div>
            </div>
            <div htmlFor={data.id} className="widget-content-left">
              <div htmlFor={data.id}>{data.title}</div>
              {/* <div className="widget-subheading">A short description for this todo item</div> */}
            </div>
            <div className="widget-content-right">
              <label className="mr-4">0 available</label>
              <label>{data.price}</label>
              {/* <Button className="border-0 btn-transition" outline color="success">
                <FontAwesomeIcon icon={faCheck} />
              </Button> */}
              {/* <Button className="border-0 btn-transition" outline color="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button> */}
            </div>
          </div>
        </div>
      </ListGroupItem>

      //   <div>
      //     <Row className="ml-2 mb-2">
      //       <CustomInput type="checkbox" id="exampleCustomCheckbox" onChange={this.toggleSelectAll} />
      //       {data.title}
      //     </Row>
      //     <div className="divider" />
      //   </div>
    );
  }
}
