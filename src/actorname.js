import './index.css';
import { Link } from 'react-router-dom';


export default function Actorname() {

    return (
        <div className="actorName">
            <h1>Actor Name</h1>
            <p>Search by type in the Actor Name  </p>
            <div>
                <button id="clickToDisplay" onClick={loadActorApi}>Click to display all actors</button>
                <Link to="/" ><button className="backButton" type="button">Back</button></Link>

            </div>

            <div>

                <ul id="actorNameList" className='ulList'>
                </ul>
            </div>
            <div>

            </div>
        </div>
    );
}

// api
function loadActorApi() {
    //let actorDiv = document.getElementById('clickToDisplay').click();
    let actorUl = document.getElementById('actorNameList')
    fetch('http://127.0.0.1:8080/home/allActors')
        .then(response => response.json())
        .then(actor => {
            actor.forEach(actor => {
                //creating a new li
                let listOfActors = document.createElement('li')
                //get  first name from json string and set it to title
                let firstName = actor.first_name
                let lastName = actor.last_name
                let fullName = firstName + " " + lastName;
                //adding item to the variable call listOfActors
                listOfActors.appendChild(document.createTextNode(fullName))
                // console.log(film);
                // adding the list variable to the film ul to display it
                actorUl.appendChild(listOfActors);

            });
        });
}
