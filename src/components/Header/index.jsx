import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            &nbsp;
            <Link to="/survey/5">Questionnaire</Link>
            &nbsp;
            <Link to="/freelances">Freelances</Link>
        </nav>
    )
}

export default Header