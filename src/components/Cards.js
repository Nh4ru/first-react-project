const Cards = ({source, title, dim, download}) => (
    
    <div className="col-12 col-md-4 cards">
        <div className="card">
            <img className="img-fluid mb-2 card-img-top" src={source} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Width : {dim.Width}px</p>
                <p className="card-text">Height : {dim.Height}px</p>
                <a href={download} className="btn btn-dark" target="_blank">Afficher image</a>
            </div>
        </div>

    </div>
)
export default Cards