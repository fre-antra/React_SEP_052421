import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (event) => {
  //     console.log('click');
  // }

  // onAdd is a function from App.js
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

// const headerStyle = {
//     backgroundColor: 'blue'
// }

export default Header;
