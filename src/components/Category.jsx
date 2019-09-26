import React from "react";
import PropTypes from "prop-types";

function Category(props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.name}
      </div>
      <div className="card-body">
        {Object.keys(props.items)
          .map(itemId =>
            <p key={itemId}>
              {props.items[itemId].name}
            </p>
          )
        }
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
  items: PropTypes.object
};

export default Category;