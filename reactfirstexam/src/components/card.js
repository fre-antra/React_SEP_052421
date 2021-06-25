import { Fragment } from 'react';

const Card = (props) => {

    const changeColor = () => {
        props.setColor();
    }

    return (
        <Fragment>
            <div
                className={`${props.selected ? "card--focus" : ""}`}
                style={props.selected ? {
                    border: `2px solid ${props.color}`,
                    boxShadow: `10px 5px 5px ${props.color}`
                } : {}
                }
            >
                <div className="padding">
                    <div
                        className="card--title innerPadding"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis.
                    </div>
                    <div className="card--content innerPadding">
                        Duis varius magna sem, nec molestie nunc dictum egestas. Donec faucibus
                        sit amet purus vitae vehicula. Sed vel commodo urna, sit amet placerat neque.
                        Vivamus iaculis ligula vitae vehicula elementum. Nulla facilisis ante erat, a
                        ultricies eros hendrerit vitae. Suspendisse eros massa, bibendum nec tellus elementum,
                        maximus dapibus urna. Curabitur cursus molestie elit vitae condimentum. Nunc id vestibulum velit.
                        Vestibulum mattis risus nec molestie maximus. Quisque pharetra rhoncus eleifend. Curabitur eu commodo dui.
                    </div>
                    <button
                        style={{ backgroundColor: `${props.color}` }}
                        className="card--button"
                        onClick={() => changeColor()}
                    >
                        Set {props.color}
                    </button>
                </div>
            </div>
        </Fragment>
    )
}


export default Card;