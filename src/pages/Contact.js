import React from "react";

class Contact extends React.Component {
    constructor(props){
        super(props)

    }

    componentWillMount(){
        console.log("componentWillMount !!")
    }

    componentDidMount(){
        console.log("componentDidMount !!")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount !!")
    }

    render(){
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et autem perferendis dolorum ipsa veritatis animi eveniet aspernatur, asperiores, odio sunt nihil numquam facere nisi quibusdam quaerat distinctio molestias voluptatem magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et autem perferendis dolorum ipsa veritatis animi eveniet aspernatur, asperiores, odio sunt nihil numquam facere nisi quibusdam quaerat distinctio molestias voluptatem magnam. { this.props.name}

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
}
export default Contact