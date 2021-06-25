import './App.css';
import Article from './Article';
import articles from '../articles.json';

function App() {
  console.log(articles);
  const handleClick = () => {
    
  }

  return (
    <div className="App">
        <header className="App-header">
            <h1>More than 900 Mayo Clinic staff members diagnosed wiht Covid-19 in Midwest over two weeks</h1>
        </header>
        <main className="content-container">
            <Article handleClick={handleClick()} title={articles[0].title} content={articles[0].content} color="blue" />
            <Article title={articles[1].title} content={articles[1].content} color="black" />
            <Article title={articles[2].title} content={articles[2].content} color="red" />
            <Article title={articles[3].title} content={articles[3].content} color="green" />
        </main>
    </div>
  );
}

export default App;
