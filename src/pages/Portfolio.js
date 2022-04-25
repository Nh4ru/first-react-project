import { useEffect, useState } from "react"

const Portfolio = () => {
    //On déclare la variable Joke ET sa fonction /méthode setJoke
    // les deux en même temps grâce au HOOK useState()
    let [joke, setJoke] = useState('');

    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => {
                setJoke(data.value);
                console.log(data);
            })
    }

    //useEffect est une hook
    // qui permet d'accéder ici à l'état 'componentDidMount' 
    useEffect(() => loadJoke(), []);

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Portfolio</h1>
                        <button className="btn btn-dark" onClick={loadJoke}>Another Joke Norris ?</button>
                        <p>{joke}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et autem perferendis dolorum ipsa veritatis animi eveniet aspernatur, asperiores, odio sunt nihil numquam facere nisi quibusdam quaerat distinctio molestias voluptatem magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et autem perferendis dolorum ipsa veritatis animi eveniet aspernatur, asperiores, odio sunt nihil numquam facere nisi quibusdam quaerat distinctio molestias voluptatem magnam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio