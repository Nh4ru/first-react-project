const Cards = ({source, title, width, height}) => (
    
    <div className="col-12 col-md-4 cards">
        <div className="card">
            <img className="img-fluid mb-2 card-img-top" src={source} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {width}<br />
                    {height}<br />

                </p>
                <a href={source} className="btn btn-primary" target="_blank">Afficher image</a>
            </div>
        </div>

    </div>
)
export default Cards