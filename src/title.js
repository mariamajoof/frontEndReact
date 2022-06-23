
import './index.css';
import { Link } from 'react-router-dom';


export default function Title() {



    return (
        <div className="title">
            <h1>Title</h1>
            <p>Search by type in the film title</p>
            <form>
                <label>
                    <input id='searchTitle' type="text" placeholder='Search...' />
                    <button id="keySearchTitle" onClick={loadTitleApi} className="searchButton" input="onclick" type="button">Search</button>
                </label>
            </form>
            <div id="keywordTitle"></div>
            <div>
                <Link to="/" ><button className="backButton" type="button">Back</button></Link>
            </div>
        </div>
    )

}


function loadTitleApi() {
    let name = document.getElementById('searchTitle').value
    let filmDiv = document.getElementById('keywordTitle')
    fetch(`http://127.0.0.1:8080/home/film/${name}`)
        .then(response => response.json())
        // .then(film => console.log(film));
        .then(film => {
            filmDiv.innerHTML = `<p>${film.title}</p>`
        })
}
