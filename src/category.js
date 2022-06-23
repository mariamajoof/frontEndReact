import './index.css';
import { Link } from 'react-router-dom';


export default function Categorypage() {

  return (
    <div className="category">
      <h1>Category</h1>
      <p>Select film from the dropdown menu</p>
      <div>
        <select className="dropDownMenu" name="cars" id="categoryMenu">
          <option>Action</option>
          <option>Animation</option>
          <option>Children</option>
          <option>Classics</option>
          <option>Comedy</option>
          <option>Documentary</option>
          <option>Drama</option>
          <option>Family</option>
          <option>Foreign</option>
          <option>Games</option>
          <option>Horror</option>
          <option>Music</option>
          <option>New</option>
          <option>Sci-Fi</option>
          <option >Sports</option>
          <option>Travel</option>
        </select>
        <Link to="/" ><button id='backBtn' className="backButton" type="button">Back</button></Link>
      </div>
      <div>

      </div>
      <button id='catBtn' onClick={loadCategoryApi}>Go</button>
      <ul id='catListDisplay' className='ulList'>

      </ul>


    </div>
  );

}

function loadCategoryApi() {
  let CategoryName = document.getElementById('categoryMenu').value;
  let ulCat = document.getElementById('catListDisplay');
  fetch(`http://127.0.0.1:8080/home/category/${CategoryName}`)
    .then(response => response.json())
    .then(category => {
      category.forEach(category => {
        //creating a new li
        let listCat = document.createElement('li');
        //get  title from json string and set it to title
        let Catname = category.title;
        //adding item to the variable call list
        listCat.appendChild(document.createTextNode(Catname));
        console.log(Catname);
        // adding the list variable to the film ul to display it
        ulCat.appendChild(listCat);
      });
    })

}



