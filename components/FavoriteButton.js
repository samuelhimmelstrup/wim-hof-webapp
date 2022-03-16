import styles from './FavoriteButton.module.css'
import { SaveFavorite } from '../firebase/SaveFavorite';
import { Context } from '../firebase/FavoritesContext'
import { useContext } from 'react'

function FavoriteButton({id, onPromptLogin}) {
    const context = useContext(Context);
    const { user, favArray, setFavArray } = context;
 
    const addToFavoritesHandler = (event) => {
        event.stopPropagation();
        if (user == null) {
            onPromptLogin();
        }
        else if (user !== null) {
            SaveFavorite(user, id)
            if (favArray.includes(id)) {
                setFavArray(favArray.filter(item => item !== id))
            }
            else {
                setFavArray([...favArray, id]);
            }
            
        }
    }

    const favOrNot = favArray.includes(id);
    
    return ( 
        <div 
            className={styles.favContainer}
            onClick={event => addToFavoritesHandler(event)}
        >
            <div className={favOrNot ? styles.favBtn : styles.notFavBtn}/>
        </div>
     );
}

export default FavoriteButton;