export const View = (() => {

    const domString = {
        todolist: 'todolist__content',
        removebtn: 'btn-remove',
        input: 'todolist__input'
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createTodoTmp = (todoArray) => {
        let htmlString = '';
        todoArray.forEach(ele => {
            htmlString += `
                <li>
                    <span>
                        ${ele.title}
                    </span>
                    <button 
                        class="btn-remove" 
                        id="${ele.id}"
                    >
                        X
                    </button>
                </li>
            `;
        });
        return htmlString;
    }

    return {
        domString,
        render,
        createTodoTmp
    }
})();