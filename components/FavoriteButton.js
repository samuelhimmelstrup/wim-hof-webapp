import styles from './FavoriteButton.module.css'
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SaveFavorite } from '../firebase/SaveFavorite';


function FavoriteButton({id, onPromptLogin}) {
    
    const [user] = useAuthState(auth);
    
    const addToFavoritesHandler = (event) => {
        event.stopPropagation();
        if (user == null) {
            onPromptLogin();
        }
        else if (user !== null) {
            SaveFavorite(user, id)
        }
    }

    // CHECK IF ID IS IN USERS FAVORITE LIST. IF SO GIVE IT A CLASS WHERE THE SVG IS FILLED
    
    return ( 
        <button 
            type='button' 
            className={styles.favBtn}
            onClick={event => addToFavoritesHandler(event)}
        />
     );
}

export default FavoriteButton;