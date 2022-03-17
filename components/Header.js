import styles from './Header.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../firebase/clientApp';
import SignInButton from './SignInButton';
import { Context } from '../firebase/FavoritesContext'
import { useContext } from 'react'

function Header() {

    const context = useContext(Context);
    const { user, favArray } = context;
    const router = useRouter()


    const signOutHandler = () => {
        auth.signOut();
        router.push('/');
    }

    return ( 
        <div className={styles.header}>
            <div className={styles.infoDiv}>
                <Link href='/'>
                    <h1 className={styles.title}>
                        Wim Hof Breathing
                    </h1>     
                </Link>
                <p className={styles.info}>Do this and then that and then this again. <br/>
                If you press this then this will happen. Do it.</p>  
            </div>

            <div className={styles.buttonsDiv}>
                {!user && <SignInButton />}

                {user &&
                    <>
                        <Link href='/MyPage'>
                            <h1 className={styles.myPage}>
                                My Page
                            </h1>
                        </Link>
                        <p className={styles.favoritesCount}>    
                            Favs: {favArray.length}
                        </p>

                        <button 
                            className={styles.signOutBtn}
                            onClick={signOutHandler}>
                            Sign Out
                        </button>
                    </>
                }
            </div>
        </div>
     );
}

export default Header;