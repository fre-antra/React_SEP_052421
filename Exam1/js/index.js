const getData = (ARTIST_NAME) => {
  const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;
  const data = fetchJsonp(url).then(res => res.json());
  return data;
}

const addList = (data, query) => {
  const grid = document.querySelector('.cards_container');
  const info = document.querySelector('.esult_information');

  let listArr = data.map(i => {
    return (
      `
        <div class="card">
          <img class="card-img" src="${i.artworkUrl100}">
          <div class="card-content">${i.collectionCensoredName}</div>
        </div>
      `
    )
  })

  info.innerHTML = `${data.length} results for "${query}"`
  grid.innerHTML = listArr.join('');
}

const searchEventListeners = () => {
  const searchbar = document.querySelector('.search__input');
  const form = document.querySelector('.search__button');
  let state = {
    text: ''
  }

  searchbar.addEventListener('keyup', e => {
    state.text = e.target.value
  })

  form.addEventListener('click', e => {
    // e.preventDefault()
    // console.log(state.text)
    getData(state.text)
      .then(data => {
        console.log(data.results)
        addList(data.results, state.text)
      })

  })

}

searchEventListeners();
// addList();