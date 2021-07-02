import "./SearchStyle.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

const Search = () => {
  const dispatch = useDispatch();
  let searchInput;

  const onchange = (e) => {
      searchInput = e.target.value;
      if (searchInput !== "" && e.keyCode === 13) {
        dispatch({ type: "searchTarget", payload: searchInput });
      } else if(searchInput !== "") {
        searchInput = e.target.value;
      }
    }
  
  const onclick = (e) => {
      // BUG in here, CLick the button is unable to rerender Gallery
      let tmpSearchInput = document.querySelector('.search__input').value
        console.log('Button CLICKED ',tmpSearchInput)
        dispatch({ type: "searchTarget", payload: tmpSearchInput });
      document.querySelector('.search__input').value = ''
    }
  
  return (
    <div>
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          onKeyDown={onchange}
        />
        <button
          type="submit"
          className="search__icon"
          onClick={onclick}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};
export default Search;
