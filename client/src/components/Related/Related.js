import React, {Component} from "react"
import axios from "axios"
import "./Related.css"

class Related extends Component {

    state = 
    {
        users: []
    }

    componentDidMount() {
        axios.get("/api/user/browse/get-all")
        .then((res) => {
            let data = res.data;
            console.log(data)
            this.setState({
                users: data
            });
            console.log("State: ", this.state);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div id="Related">
                <div id="title-div">
                    <h3 id="title">Related Developers</h3>
                </div>
            </div>
        )
    }

}
    
export default Related