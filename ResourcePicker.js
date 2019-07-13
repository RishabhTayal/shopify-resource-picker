import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/bulma';

import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, ListGroup, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import ResourcePickerListItem from './ResourcePickerListItem';

class ResourcePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };

    this.searchProduct = this.searchProduct.bind(this);
  }

  componentDidMount() {
    this.searchProduct('a');
  }

  searchProduct(text) {
    Axios.get(
      `http://localhost:8080/api/find/product?shop=wholesale-v1.myshopify.com&title=${text}`
    ).then(res => {
      for (const prod of res.data) {
        prod.value = prod.id;
        prod.label = prod.title;
      }
      console.log(res.data);
      this.setState({ filtered: res.data });
    });
  }

  render() {
    return (
      <Modal size="lg" isOpen backdrop="static">
        <ModalHeader>Add products</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Search products"
            className="mb-2"
            onChange={e => {
              this.searchProduct(e.target.value);
            }}
          />
          <ListGroup
            style={{ maxHeight: 'calc(100vh - 250px)', overflowY: 'auto' }}
            className="todo-list-wrapper"
            flush
          >
            {this.state.filtered.map(data => {
              return <ResourcePickerListItem data={data} />;
            })}
          </ListGroup>
        </ModalBody>
        <ModalFooter>
          <div className="mr-auto">2 products selected</div>
          <Button
            color="light"
            text="Cancel"
            onClick={() => {
              this.props.onSave(this.state.themeName);
            }}
          >
            Cancel
          </Button>
          <Button
            updating={this.props.themeUpdating}
            onClick={() => {
              this.props.onSave(this.state.themeName);
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ReactDOM.render(<ResourcePicker />, document.getElementById('app'));
