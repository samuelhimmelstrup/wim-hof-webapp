function CustomSession() {
    
    // fetch data (hvordan man så end gør det)

    return ( 
    <>
        <div className={styles.outerContainer}>
            <h1>Are you ready?</h1>
            <section className={styles.infoBox}>
                <p>Rounds: {}</p>
            </section>
        </div> 
    </>
    )
}

export async function getStaticProps() {
    
}

export default CustomSession

