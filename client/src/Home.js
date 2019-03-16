import React from 'react';
import   {Link} from 'react-router-dom';


 class Home extends React.Component{

    render() {
        return(
            <div>
                This is the home page.<br/>
                <Link to="/installation">Liste des Installations</Link><br/>
                <Link to="/activite">Liste des Activités</Link><br/>
                <Link to="/equipement">Liste des Equipements</Link><br/>
            </div>
        );
    }
}
export default Home