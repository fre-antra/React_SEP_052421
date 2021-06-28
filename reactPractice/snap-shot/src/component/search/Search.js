import './SearchStyle.css'
import { FaSearch } from "react-icons/fa";

// import logo from '/public/search_icon.png'

const Search = () => {
    return (
        <div className='search'>
        <input type="text" className='search__input' placeholder='Search...'/>
            <button className='search__icon'>
                <FaSearch />
            </button>
        </div>
    )
}
export default Search
