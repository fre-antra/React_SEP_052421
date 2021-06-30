import React from "react";

export const data = {
  messages: [
    {
      text: "I love pepperoni pizza 🍕",
      sentBy: "Billy",
    },
    {
      text: "Hello World! 🌏",
      sentBy: "Chris",
    },
    {
      text: "Hi there 🙋 how are you?",
      sentBy: "Courtney",
    },
  ],
};

// Functional component
const MessageTemplate = (props) => {
  return (
    <div className="message-container">
      <p>"{props.text}"</p>
      <div className="details-container">
        <small>
          Sent by <b>{props.sentBy}</b>
        </small>
        {props.button}
      </div>
    </div>
  );
};

// // Higher Order Component
// /*------------- 模版 */
// const childComponent = () =>{console.log('I ma Wrapped Component');}

// const highOrderComponent = (WrappedComponent) => {
//   return class childComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         tmp: "sample state",
//       };
//     }

//     onChangeFunction() {
//       console.log("here will be operations");
//     }

//     rander() {
//       const newPropsForCurrentChildfn = () => {};
//       const newPropsForCurrentChildvaribale = 10;

//       return (
//         <WrappedComponent
//           newfnProp={newPropsForCurrentChildfn}
//           newVarProps={newPropsForCurrentChildvaribale}
//           {...this.props}
//         />
//       );
//     }
//   };
// };

// // 使用HOC
// const App = (props) => {
//     const OuterContainer = highOrderComponent(childComponent);
//     return (
//         <OuterContainer value={props}/>
//     )
// }

// /*----------------*/
const likeButtonHOC = (WrappedComponent) => {
  return class likeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        like: false,
      };
    }

    changeLike() {
      this.setState({
        like: !this.state.like,
      });
    }

    render() {
      const buttonText = (
        <button className="likeBtn" onClick={this.changeLike.bind(this)}>
          {this.state.like ? "Liked ✔" : " 👍 "}
        </button>
      );

      return <WrappedComponent button={buttonText} {...this.props} />;
    }
  };
};

// Main App component
// renders a list of Messages using data from messages.json
export const HOCprac = (props) => {
  const MessageContainer = likeButtonHOC(MessageTemplate);
  return (
    <div>
      <h2>Message List</h2>
      {props.messages.map((message, i) => (
        <MessageContainer
          key={`message-${i}`}
          text={message.text}
          sentBy={message.sentBy}
        />
      ))}
    </div>
  );
};

// export default HOCprac
// render(<App messages={data.messages} />, document.getElementById("root"));
