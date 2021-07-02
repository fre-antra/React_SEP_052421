import React from "react";
import "./tabsStyle.css";
import { Link } from "react-router-dom";
// import PhotoData from "../../data/PhotoData";
import { useDispatch } from "react-redux";

// HOC
const LinkNav = (props) => {
  const tabName = props.to.charAt(1).toUpperCase() + props.to.substring(2);
  const dispatch = useDispatch();
  const changeTab = () => {
    dispatch({ type: "searchTarget", payload: props.searchTarget });
  };
  return (
    <Link className="tabs__btn" to={props.to} onClick={changeTab}>
      <span className="btn-text">{tabName}</span>
    </Link>
  );
};

const Tabs = () => {
  return (
    <nav className="tabs">
      <LinkNav to="/mountain" />
      <LinkNav to="/beaches" searchTarget={"beaches"} />
      <LinkNav to="/birds" searchTarget={"birds"} />
      <LinkNav to="/food" searchTarget={"food"} />
    </nav>
  );
};

export default Tabs;
