const View = (() => {

    const domItems = {
        input: 'topBar__input',
        indicator: 'mainBody__indicator',
        cardsDiv: 'mainbody__Cards'
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    // create card div for each album, return a album card Array
    const createCard = (albumArr) => {
        let htmlString = '';
        albumArr.forEach(ele => {
            // console.log(ele);
            htmlString += `
                <div class="card">
                    <img class="card__img" src="${ele.artworkUrl100}" alt="${ele.collectionName}">
                    <p class="card__name">${ele.collectionName}</p>
                </div>
            `;
        });
        return htmlString;
    }

    // update the indicator
    const updateIndicator = (albumArr) => {
        let htmlString = albumArr.length + ' results of ' + albumArr[0].artistName;

        return htmlString
    }

    return {
        domItems,
        render,
        createCard,
        updateIndicator
    }


})()



export { View };