import React, {Component} from "react"
import LoginForm from "../Login-form"
import RegisterForm from "../Register-form"

class LoginRegisterForm extends Component {
    state = 
    {
        register: false
    }

    render() {
        return (
            <div>
                {
                    this.state.register ?
                    (<RegisterForm />)
                    :
                    (<LoginForm />)
                }
            </div>        
        )
    }
}

export default LoginRegisterForm