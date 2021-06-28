import { Fragment } from 'react';

const Card = (props) => {

    return (
        <Fragment>
            <div
                className={`${props.selected ? "card--focus" : ""}`}
                style={props.selected ? {
                    border: `2px solid ${props.data.cardColor}`,
                    boxShadow: `10px 5px 5px ${props.data.cardColor}`
                } : {}
                }
            >
                <article className="padding">
                    <article
                        className="innerPadding"
                    >
                        <h4>
                            {props.data.cardTitle}
                        </h4>
                    </article>
                    <article className="innerPadding">
                        {props.data.cardContent}
                    </article>
                    <button
                        style={{ backgroundColor: `${props.data.cardColor}` }}
                        className="card--button"
                        onClick={() => props.setColor()}
                    >
                        Set {props.data.cardColor}
                    </button>
                </article>
            </div>
        </Fragment>
    )
}


export default Card;