const getData = (ARTIST_NAME) => {
    const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;
    const data = fetchJsonp(url).then(res => res.json());
    return data;
  }

const searchEventListeners = () => {
    const searchbar = document.querySelector('.nav-search-input');
    const form = document.querySelector('.nav-form');
    let state = {
        text: ''
}

searchbar.addEventListener('keyup', e => {
    state.text = e.target.value;
})

const addList = (data, query) => {
    const grid = document.querySelector('.grid');
    const info = document.querySelector('.searchList-info');

    let listArr = data.map(data => {
        return (
        `
            <div class="card">
            <img class="card-img" src="${data.artworkUrl100}">
            <div class="card-content">${data.collectionCensoredName}</div>
            </div>
        `
        )
})

    info.innerHTML = `${data.length} results for "${query}"`;
    grid.innerHTML = listArr.join('');
}

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(state.text)
    getData(state.text)
    .then(data => {
        console.log(data.results)
        addList(data.results, state.text);
    })

})

}
  
searchEventListeners();