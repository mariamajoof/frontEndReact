import './index.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Keywordpage() {


    return (
        <div className="Keyword">
            <h1>Word Search</h1>
            <p>Search by  keyword</p>
            <form>
                <label>
                    <input id='searchKeyword' type="text" placeholder='Search film...' />
                    <button id="keySearch" onClick={loadKeywordApi} className="searchButton" input="onclick" type="button">Search</button>

                </label>
                <Link to="/" ><button className="backButton" type="button">Back</button></Link>
            </form>

            <div>
                <ul id="keywordDisplay" className='ulList'>
                    {/* Search by keyword */}
                </ul>
            </div>
            <div>

            </div>
        </div>
    );

}

function loadKeywordApi() {
    let word = document.getElementById('searchKeyword').value
    let filmUl = document.getElementById('keywordDisplay')
    fetch(`http://127.0.0.1:8080/home/film/WordSearch/${word}`)
        .then(response => response.json())
        .then(film => {
            film.forEach(film => {
                //creating a new li
                let list = document.createElement('li')
                //get  title from json string and set it to title
                let title = film.title
                //adding item to the variable call list
                list.appendChild(document.createTextNode(title))
                console.log(film);
                // adding the list variable to the film ul to display it
                filmUl.appendChild(list);
            });

        })
}


    // function loadKeywordApi() {

    //     fetch('http://127.0.0.1:8080/home/film/WordSearch')
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // }
    // useEffect(() => { loadKeywordApi() });