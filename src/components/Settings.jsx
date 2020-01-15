import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleSettingsView } from "./../actions";

function Settings(props) {
  const { dispatch } = props;

  function handleBackButtonClick() {
    dispatch(toggleSettingsView(false));
  }

  return (
    <div>
      <p>Hello!</p>
      <p onClick={handleBackButtonClick}>Back</p>
    </div>
  );
}

Settings.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Settings);