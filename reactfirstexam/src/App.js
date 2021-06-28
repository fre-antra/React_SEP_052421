import './App.css';
import { useEffect, useState } from 'react';

import Card from './components/card';

const cards = [{ cardTitle: "title1", cardContent: "content1", cardColor: "blue" }, { cardTitle: "title2", cardContent: "conetent2", cardColor: "green" }];
function getCards() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(cards)
        }, 2000)
    })
}

function App() {
    const [cards, setCards] = useState([]);
    const [color, setColor] = useState('#000000');
    const [selected, setSelected] = useState(-1);
    const onCardSelect = (c, i) => {
        setColor(c);
        setSelected(i);
    }

    useEffect(()=>{
        async function setData() {
            let data = await getCards();
            setCards(data);
        }
        setData();
    },[])

    return (
        <div className="App">
            <div
                className="title"
                style={{ color: `${color}` }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis.
            </div>
            <div className="grid">
                {
                    cards.map((c, i) => {
                        return (
                            <Card
                                data={c}
                                setColor={() => onCardSelect(c.cardColor, i)}
                                selected={selected === i}
                                key={i}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
