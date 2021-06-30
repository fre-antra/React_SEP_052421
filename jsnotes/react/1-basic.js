class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "aaa" };
  }

  hc = (e) => {
    this.setState((a) => {
      console.log(e);
    });

    // setState can take func as parameter, and that func takes state as parameter
    // it sets STATE according that function's return
    console.log(this.state);
  };

  test() {
    return class a {};
    // func can return class, hoc
  }
  render() {
    let obj = { a1: 1, a2: 2 };
    let { a1 } = obj; // destruction more like  extraction

    if (this.state.name === "aaa") {
      let key = "name";
      this.setState({ [key]: "bbb" });
      // es6 obj key can use [vars]
    }

    console.log(a1, this.test(), new (this.test())());
    return <div></div>;
  }
}
