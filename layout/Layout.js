function Layout(props) {
    return ( 
        <div className={styles.layout}>
            {props.children}
        </div>
     );
}

export default Layout;