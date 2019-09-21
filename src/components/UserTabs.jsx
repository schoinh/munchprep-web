import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function UserTabs() {
  var tabsStyle = {
    marginTop: "50px"
  };

  return (
    <Tabs style={tabsStyle} defaultActiveKey="menu" id="uncontrolled-tab-example">
      <Tab eventKey="menu" title="Menu">
        <p>sample</p>
      </Tab>
      <Tab eventKey="shoppingList" title="Shopping List">
        <p>sample</p>
      </Tab>
    </Tabs>
  );
}

export default UserTabs;