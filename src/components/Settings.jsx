import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewItemForm from "./NewItemForm";
import Category from "./Category";

function Settings(props) {
  console.log(props)
  return (
    <Modal show={props.isVisible} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>&#129668; Auto-add</h5>
        <p>Automatically add these items to my grocery list when I start a new list.</p>
        <NewItemForm autoAdd/>
        <CardGroup>
          {/* TODO: Currently, I can write new autoAdd items to the database but the items overwrite so there's only
          one item in autoAdd at any given point, instead of adding to the list of autoadd itmes. Also, I need to
          use the category ID to cross-reference the user's category names and fetch that, so it displays here. Currently the category name is missing. */}
          {Object.keys(props.settings.autoAdd).map(categoryId => {
            let category = props.settings.autoAdd[categoryId];
            return <Category
              name={category.name}
              items={category.items}
              id={categoryId}
              key={categoryId} 
              autoAdd
            />;
          })}
        </CardGroup>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

Settings.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func,
  settings: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  };
};

export default connect(mapStateToProps)(Settings);