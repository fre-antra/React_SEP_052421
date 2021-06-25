import "./HeaderStyle.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  // get into detail page
  const getDetailPage = () => {
    history.push("/detail");
  };

  return (
    <>
      <h1> Welcome to my TODO List </h1>
      <button className="btn-detail" onClick={getDetailPage}>
        TODO Details
      </button>
    </>
  );
};

export default Header;
