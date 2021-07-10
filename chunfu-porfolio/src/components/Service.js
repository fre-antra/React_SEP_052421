import React from 'react';
import './Service.css';
import Card from './Card';

const Service = () => {
    const services = [
        {
            id: 1,
            icon: "/images/developerdesign.png",
            title: "Development and Design",
            content: "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.",
        },
        {
            id: 2,
            icon: "/images/responsivedesign.png",
            title: "Responsive Layouts",
            content: "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations."
        },
        {
            id: 3,
            icon: "/images/innovativesolutions.png",
            title: "Ideas and Solutions",
            content: "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products."
        },
        {
            id: 4,
            icon: "/images/passion.png",
            title: "Passion and Dedication",
            content: "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved."
        }
    ];

    //const renderCards = services.map( service => {
    //    return (
    //        <Card id={service.id} icon={service.icon} title={service.title} content={service.content} />
    //    )
    //})

    return (
        <div className="service-container">
            {/*{renderCards}*/}
            <div className="service-upper">
                <Card id={services[0].id} icon={services[0].icon} title={services[0].title} content={services[0].content} />
                <Card id={services[1].id} icon={services[1].icon} title={services[1].title} content={services[1].content} />
            </div>
            <div className="service-lower">
                <Card id={services[2].id} icon={services[2].icon} title={services[2].title} content={services[2].content} />
                <Card id={services[3].id} icon={services[3].icon} title={services[3].title} content={services[3].content} />
            </div>
        </div>
    );
}

export default Service;