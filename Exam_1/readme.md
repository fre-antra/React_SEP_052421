## Build an albums search app using pure HTML, CSS, JavaScript, without any library.

### Basic requirement:

1. Create a Search Bar Component for User to input an Artist Name to search alums
2. Create an iTunes API Service to fetch the information about the artist’s Alums
3. When the user press ‘enter’ in the Search Bar, make an iTunes API Service call to fetch the information about the artist’s albums.
4. API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200
5. Create an Albums List to display the list of albums, including the album name and cover.
6. Style the page to the best of the ability to make the UI look clean and presentable

- demo link: https://csb-0r0bv.netlify.app/

### Some specific:

- make the cards' grid as auto overflow, so we can look through all content
- Make a search button, which also works on trigger search
- make header as fixed position and high z-index to show at the top of webpage

### Solve cors issue

- ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch-jsonp/1.0.6/fetch-jsonp.min.js"></script>
  ```

- ```javascript
  fetchJsonp("http://localhost:3000")
    .then((res) => res.json())
    .then((json) => console.log(json));
  ```

- https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e
