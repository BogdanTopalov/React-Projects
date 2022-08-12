import styles from './About.module.css'

const About = () => {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
    
    return (
        <div className={styles.about}>
            <p>Beautiful place.</p>
            <p>Good music.</p>
            <p>Exelent food.</p>
            <p>Cold drinks.</p>
            <p>Come and Enjoy.</p>
        </div>
    )
}

export default About