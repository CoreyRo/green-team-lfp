import React, { Component} from 'react'
import { Col, Container, Row } from '../../components/Grid'
import Jumbotron from '../../components/Jumbotron'
import './Profile.css'


class Profile extends Component {
    state = {

    }

    componentWillMount(){

    }

    componentDidMount(){

    }



    render(){
        return(
            <Container>
                
                    <div className="row jumbotron d-flex">
                        <Col size="sm-4">
                            <div className="row">
                                <div className="col-sm-12">

                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <img className="img-fluid" style={{width: 150}} src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" /> 
                                            <h2> Joe Doe </h2>
                                            <button className="btn btn-sm btn-primary">Change Picture</button>
                                            <div class="stars">
                                                <form action="">
                                                    <input class="star star-5" id="star-5" type="radio" name="star"/>
                                                    <label class="star star-5" for="star-5"></label>
                                                    <input class="star star-4" id="star-4" type="radio" name="star"/>
                                                    <label class="star star-4" for="star-4"></label>
                                                    <input class="star star-3" id="star-3" type="radio" name="star"/>
                                                    <label class="star star-3" for="star-3"></label>
                                                    <input class="star star-2" id="star-2" type="radio" name="star"/>
                                                    <label class="star star-2" for="star-2"></label>
                                                    <input class="star star-1" id="star-1" type="radio" name="star"/>
                                                    <label class="star star-1" for="star-1"></label>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2> Skills </h2>
                                            <ul>
                                                <li>
                                                    <h4>Javascript</h4>
                                                </li>
                                                <li>
                                                    <h4>HTML</h4>
                                                </li>
                                                <li>
                                                    <h4>Python</h4>
                                                </li>
                                                <li>
                                                    <h4>Ruby</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col size="sm-2">
                        </Col>
                        <Col size="sm-6">

                            <div className="">
                                <h3>About me</h3>
                                <p>Lorem ipsum dolor sit amet, per et alia equidem fabulas. 
                                    Legendos delicata ea nam, duo no accusamus percipitur, pro ancillae appetere eu. 
                                    Ex pro graeci democritum, mea eu tale vivendum deseruisse, eu albucius urbanitas consectetuer vel. 
                                    At per meis congue imperdiet, altera nostrud eam eu.</p>
                            </div>
                            <div>
                                <h3>My Projects</h3>
                                <p>Lorem ipsum dolor sit amet, per et alia equidem fabulas. 
                                    Legendos delicata ea nam, duo no accusamus percipitur, pro ancillae appetere eu. 
                                    Ex pro graeci democritum, mea eu tale vivendum deseruisse, eu albucius urbanitas consectetuer vel. 
                                    At per meis congue imperdiet, altera nostrud eam eu.</p>    
                            </div>
                            <div>
                                <h3>Joined Projects</h3>
                                <p>Lorem ipsum dolor sit amet, per et alia equidem fabulas. 
                                    Legendos delicata ea nam, duo no accusamus percipitur, pro ancillae appetere eu. 
                                    Ex pro graeci democritum, mea eu tale vivendum deseruisse, eu albucius urbanitas consectetuer vel. 
                                    At per meis congue imperdiet, altera nostrud eam eu.</p>
                            </div>
                        </Col>
                    </div>

            </Container>
        )
    }

}

export default Profile