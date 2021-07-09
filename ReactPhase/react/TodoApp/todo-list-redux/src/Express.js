import React from "react"


function Express() {

    const [name, setName] = React.useState('Tonny')

    React.useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(res => res.json())
            .then(data => console.log(data))
    })

    return (
        <h1>
            Hello my name is {name}
        </h1>
    )
}

export default Express