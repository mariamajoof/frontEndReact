import { Link } from 'react-router-dom';
import './index.css';

function Home() {
    const pageTitle = 'Film Selector'
    return (
        <div className="home">
            <h1>{pageTitle}</h1>
            <p>Search a film by word, category, actor, release year or title  </p>
            <div>
                <Link id='navTitle' to="/title"><button type="button">Title</button></Link>
                <Link id='navCategory' to="/category"><button type="button">Category</button></Link>
                <Link id='navActorName' to="/actorname"><button type="button">Actor Name</button></Link>
                <Link id='navKeyword' to="/keyword"><button type="button">Keyword</button></Link>
            </div>
        </div>
    );
}
export default Home;
