import Love from "../components/Love";
import Button from "../components/Button";
const Home = () => {
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Button start={10} />
                        <Button />
                        <Button start={100}/>
                        <Love name="coding"/>
                        <Love name="JavaScript"/>
                        <Love name="React"/>
                        <Love name="FrontEnd"/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et autem perferendis dolorum ipsa veritatis animi eveniet aspernatur, asperiores, odio sunt nihil numquam facere nisi quibusdam quaerat distinctio molestias voluptatem magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et autem perferendis dolorum ipsa veritatis animi eveniet aspernatur, asperiores, odio sunt nihil numquam facere nisi quibusdam quaerat distinctio molestias voluptatem magnam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home