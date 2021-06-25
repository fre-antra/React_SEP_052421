import './App.css';
import { useState, useEffect } from 'react';

import Card from './components/card';

const colors = ['Blue', 'Black', 'Red', 'Green'];

function App() {

    const [color, setColor] = useState('#000000');
    const [selected, setSelected] = useState(-1);
    const onCardSelect = (c,  i) =>{
        setColor(c);
        setSelected(i);
        console.log(selected);
    }

    return (
        <div className="App">
            <div 
                className="title"
                style={{color: `${color}`}}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis.
            </div>
            <div className="grid">
            {
                colors.map((c, i) => {
                    return (
                        <Card
                            color={c}
                            setColor={() => onCardSelect(c, i)}
                            selected={selected === i}
                        />
                    )
                })
            }
            </div>
        </div>
    );
}

export default App;
