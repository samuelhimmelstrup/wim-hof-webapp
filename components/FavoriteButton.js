import styles from './FavoriteButton.module.css'
import { SaveFavorite } from '../firebase/SaveFavorite';
import { Context } from '../firebase/FavoritesContext'
import { useContext } from 'react'

function FavoriteButton({id, onPromptLogin}) {
    const context = useContext(Context);
    const { user, favArray } = context;
 
    const addToFavoritesHandler = (event) => {
        event.stopPropagation();
        if (user == null) {
            onPromptLogin();
        }
        else if (user !== null) {
            SaveFavorite(user, id)
        }
    }

    const favOrNot = favArray.includes(id);
    
    return ( 
        <div
            type='button' 
            className={favOrNot ? styles.favBtn : styles.notFavBtn}
            onClick={event => addToFavoritesHandler(event)}
        />
     );
}

export default FavoriteButton;