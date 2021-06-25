import React from "react";
import Card from "./Card";

function Header() {
  //   const [color, setColor] = React.useState("blue");
  const [text, setText] = React.useState("");
  const [news, setNews] = React.useState([
    {
      title:
        "JUST IN: Derek Chauvin sentenced to 22 1/2 years in prison in the murder of George Floyd",
      content:
        "Former Minneapolis Police officer Derek Chauvin has been sentenced to 22 and a half years in prison in the 2020 murder of George Floyd.Prosecutors had asked for a 30 year sentence, and Chauvin’s attorney asked for probation and time served. Chauvin was convicted in April of second-degree murder, third-degree murder and second-degree manslaughter.",
      key: "1",
      color: "blue",
    },
    {
      title:
        "Judge says his sentence for Chauvin is 'not based on emotion or sympathy'",
      content:
        "Hennepin County District Court Judge Peter Cahill expressed his condolences for the family of George Floyd moments before handing down his sentence for Derek Chauvin.He said the sentence was 'not based on emotion or sympathy.'/n\n'But at the same time I want to acknowledge the deep and tremendous pain that all the families are feeling, especially the Floyd family. You have our sympathies,' Cahill said. 'It has been painful throughout Hennepin County, throughout the state of Minnesota, and even the country. But most importantly we need to recognize the pain of the Floyd family.'",
      key: "2",
      color: "black",
    },
    {
      title:
        "JUST IN: Derek Chauvin sentenced to 22 1/2 years in prison in the murder of George Floyd",
      content:
        "Former Minneapolis Police officer Derek Chauvin has been sentenced to 22 and a half years in prison in the 2020 murder of George Floyd.Prosecutors had asked for a 30 year sentence, and Chauvin’s attorney asked for probation and time served. Chauvin was convicted in April of second-degree murder, third-degree murder and second-degree manslaughter.",
      key: "3",
      color: "red",
    },
    {
      title:
        "Judge says his sentence for Chauvin is 'not based on emotion or sympathy'",
      content:
        "Hennepin County District Court Judge Peter Cahill expressed his condolences for the family of George Floyd moments before handing down his sentence for Derek Chauvin.He said the sentence was 'not based on emotion or sympathy.'/n\n'But at the same time I want to acknowledge the deep and tremendous pain that all the families are feeling, especially the Floyd family. You have our sympathies,' Cahill said. 'It has been painful throughout Hennepin County, throughout the state of Minnesota, and even the country. But most importantly we need to recognize the pain of the Floyd family.'",
      key: "4",
      color: "green",
    },
  ]);

  const changeColor = (color) => {
    setText(color);
  };

  return (
    <div className="title">
      {console.log(text)}
      <h1 className={text}>What's News Today.</h1>
      {/* {news.map((item) => (
        <Card info={item} key={item.key} />
      ))} */}
      <Card news={news} change={changeColor}></Card>
    </div>
  );
}

export default Header;
