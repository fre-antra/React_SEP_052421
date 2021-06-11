// Model View Controller

const albumAPI = (() => {

    const baseUrl1 = ' https://itunes.apple.com/search?term=${';
    const baseUrl2 = '}&media=music&entity=album&attribute=artistTerm&limit=200';
    const artist = 'todos';

    const getAlbums = () =>
        fetch([baseUrl1, artist, baseUrl2].join(''))
            .then((response) => response.json());
            console.log("fetch data");

    return {
        getAlbums,
    }
})();

const View = (() => {

    const domString = {
        searchInput: 'search__input',
        // removebtn: 'btn-remove',
        // input: 'todolist__input'
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createCardTmp = (todoArray) => {
        // let htmlString = '';
        // todoArray.forEach(ele => {
        //     htmlString += `
        //         <li>
        //             <span>
        //                 ${ele.title}
        //             </span>
        //             <button 
        //                 class="btn-remove" 
        //                 id="${ele.id}"
        //             >
        //                 X
        //             </button>
        //         </li>
        //     `;
        // });
        // return htmlString;
    }

    return {
        domString,
        render,
        createCardTmp
    }
})();

const Model = ((api, view) => {        
    const getDate = api.getAlbums;                                                                                
    class State {
        #albumlist = [];
        #count = 0;

        get count() {
            return this.#count;
        }

        set count(count) {
            this.#count = count;
        }

        get albumlist() {
            return this.#albumlist;
        }

        set albumlist(newlist) {
            this.#albumlist = newlist;

            const albumElement = document.querySelector('.' + view.domString.albumlist);
            const albumTmp = view.createAlbumTmp(this.#albumlist);
            view.render(albumElement,albumTmp);
        }
    }

    return {
        getDate,
        State,
        
    }
})(albumAPI, View);

const AppController = ((model, view) => {
    const state = new model.State();
    const input = document.querySelector('.' + view.domString.searchInput);

    const addAlbum = (event) => {
        console.log("addAlbum");
        if (event.key === 'Enter' && event.target.value) {
            console.log("event.keyCode: " + event.keyCode);
            console.log(event.target.value);

                // const newTodo = new model.Todo(state.input);
        
                // model.addTodo(newTodo).then(data => {
                //     state.todolist = [data, ...state.todolist];
                // });

            state.input = '';

                // event.target.value = '';
            }
        // )
    }

    

    const init = () => {
        addAlbum();
    }

    return {
        init
    }
})(Model, View);

AppController.init();
