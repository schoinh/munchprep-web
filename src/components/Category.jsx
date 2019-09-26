import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

function Category(props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.name}
      </div>
      <div className="card-body">
        <Form>
          {Object.keys(props.items)
            .map(itemId =>
              <Form.Check
                key={itemId}
                label={props.items[itemId].name} />
            )
          }
        </Form>
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
  items: PropTypes.object
};

export default Category;