// const baseUrl = `https://itunes.apple.com/search?term=${keyword}&media=music&entity=album&attribute=artistTerm&limit=200`;
const baseUrl = `https://itunes.apple.com/search?term=jack&media=music&entity=album&attribute=artistTerm&limit=200`;

const loadResult = async () => {
  try {
    const res = await fetch(baseUrl);
    let hpResults = await res.json();
    displayResult(hpResults);
    // console.log(hpResults)
  } catch (err) {
    console.log(err);
  }
};

const displayResult = (items) => {
  console.log(items.results);
  const htmlString = items.results
    .map((item) => {
      // console.log(item.collectionCensoredName);
      return `
    <div class="search-result-item">
      <h2>${item.collectionCensoredName}</h2>
      <img src="${item.artworkUrl100}"></img>
    </div>
    `;
    })
    .join("");
  result.innerHTML = htmlString;
};


class State {
  constructor() {
    this.input = '';
  }
  handleInput(input) {
    const inputContent = document.querySelector(".search-input");
    inputContent.value = input;
    this.input = input;
  }
}

const controller = (() => {
  const state = new State();
  const handleSearch =()=> {
    const clickButton = document.querySelector(".search-button");
    clickButton.addEventListener("click", (event)=> {
      console.log('click', event)
      loadResult();
    });
  }
})();