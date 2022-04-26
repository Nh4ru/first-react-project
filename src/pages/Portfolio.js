import { useEffect, useState } from "react"
import Cards from "../components/Cards";

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

    let [gallery, setGallery] = useState([]);
    const loadPics = () => {
        fetch("https://picsum.photos/v2/list?page=2&limit=6")
            .then(response => response.json())
            .then(data => {
                setGallery(data);
                console.log(data);
            })
    }

    //useEffect est une hook
    // qui permet d'accéder ici à l'état 'componentDidMount' 
    //comme le ngOnInit ;)
    useEffect(() => {
        loadJoke();
        loadPics();
    }, []);

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
                <div className="row">

                    {
                        gallery.map(item => {
                            let source = `https://picsum.photos/id/${item.id}/300/200`;
                            let title = `Picture by : ${item.author}`;
                            let height = `Height : ${item.height}px`;
                            let width = `Width : ${item.width}px`;
                            
                            return (
                                <Cards source={source} title={title} height={height} width={width}/>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    )
}
export default Portfolio