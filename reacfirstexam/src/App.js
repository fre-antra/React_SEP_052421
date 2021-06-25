import { useRef } from 'react'

function App() {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const block3 = useRef(null);
  const block4 = useRef(null);
  const title = useRef(null);

  function button1_Click() {
    block1.current.className = "news-block blue_block";
    block2.current.className = "news-block";
    block3.current.className = "news-block";
    block4.current.className = "news-block";
    title.current.className = "header blue";
  }

  function button2_Click() {
    block2.current.className = "news-block black_block";
    block1.current.className = "news-block";
    block3.current.className = "news-block";
    block4.current.className = "news-block";
    title.current.className = "header black";
  }

  function button3_Click() {
    block3.current.className = "news-block red_block";
    block2.current.className = "news-block";
    block1.current.className = "news-block";
    block4.current.className = "news-block";
    title.current.className = "header red";
  }

  function button4_Click() {
    block4.current.className = "news-block green_block";
    block2.current.className = "news-block";
    block3.current.className = "news-block";
    block1.current.className = "news-block";
    title.current.className = "header green";
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="header" ref={title}>Antra react exam 1</h2>
      </header>
      <div className="news">
        <div className="news-block" ref={block1}>
          <h3 className="news-block__title">John McAfee was not suicidal, says widow of antivirus software magnate</h3>
          <div className="news-block__content">Speaking to reporters outside the prison on Friday, Janice McAfee demanded a thorough investigation, saying she wanted "answers of how this was able to happen."

            The cause of McAfee's death is under investigation, a spokeswoman for the Superior Court of Catalonia told CNN this week.

            Janice McAfee's lawyer, Javier Villalba, told reporters Friday his client is waiting for the official autopsy to be done adding that the family has requested a second and independent one.

            "I blame the US authorities for this tragedy. Because of these politically motivated charges against him. My husband is now dead," Janice said during a statement.</div>
            <button className="news-block__button1" onClick={() => button1_Click()}>CHANGE</button>
        </div>
        <div className="news-block" ref={block2}>
          <h3 className="news-block__title">John McAfee was not suicidal, says widow of antivirus software magnate</h3>
          <div className="news-block__content">Speaking to reporters outside the prison on Friday, Janice McAfee demanded a thorough investigation, saying she wanted "answers of how this was able to happen."

            The cause of McAfee's death is under investigation, a spokeswoman for the Superior Court of Catalonia told CNN this week.

            Janice McAfee's lawyer, Javier Villalba, told reporters Friday his client is waiting for the official autopsy to be done adding that the family has requested a second and independent one.

            "I blame the US authorities for this tragedy. Because of these politically motivated charges against him. My husband is now dead," Janice said during a statement.</div>
            <button className="news-block__button2" onClick={() => button2_Click()}>CHANGE</button>
        </div>
        <div className="news-block" ref={block3}>
          <h3 className="news-block__title">John McAfee was not suicidal, says widow of antivirus software magnate</h3>
          <div className="news-block__content">Speaking to reporters outside the prison on Friday, Janice McAfee demanded a thorough investigation, saying she wanted "answers of how this was able to happen."

            The cause of McAfee's death is under investigation, a spokeswoman for the Superior Court of Catalonia told CNN this week.

            Janice McAfee's lawyer, Javier Villalba, told reporters Friday his client is waiting for the official autopsy to be done adding that the family has requested a second and independent one.

            "I blame the US authorities for this tragedy. Because of these politically motivated charges against him. My husband is now dead," Janice said during a statement.</div>
            <button className="news-block__button3" onClick={() => button3_Click()}>CHANGE</button>
        </div>
        <div className="news-block" ref={block4}>
          <h3 className="news-block__title">John McAfee was not suicidal, says widow of antivirus software magnate</h3>
          <div className="news-block__content">Speaking to reporters outside the prison on Friday, Janice McAfee demanded a thorough investigation, saying she wanted "answers of how this was able to happen."

            The cause of McAfee's death is under investigation, a spokeswoman for the Superior Court of Catalonia told CNN this week.

            Janice McAfee's lawyer, Javier Villalba, told reporters Friday his client is waiting for the official autopsy to be done adding that the family has requested a second and independent one.

            "I blame the US authorities for this tragedy. Because of these politically motivated charges against him. My husband is now dead," Janice said during a statement.</div>
            <button className="news-block__button4" onClick={() => button4_Click()}>CHANGE</button>
        </div>
      </div>

    </div>
  );
}

export default App;
