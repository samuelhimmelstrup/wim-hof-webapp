import styles from '../styles/MyPage.module.css'
import Wrapper from '../layout/Wrapper'

import { useCollectionData } from 'react-firebase-hooks/firestore'

function MyPage() {

    // const [] = useCollectionData()

    return ( 
        <Wrapper>
            <h1>My Personal Page</h1>
            <p>Favorites</p>
        </Wrapper>
    
    );
}

export default MyPage;