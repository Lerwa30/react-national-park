import { useState, useContext } from "react";
import axios from "axios";

const Login = () => {
    const { register, setRegister} = useState(false);
    const { username, setUsername} = useState('');
    const { password, setPassword } = useState('');


    return (
        <div>
            <form>
                <input
                type="text"
                placeholder="username"

                >
                </input>
            </form>
        </div>
    )
}

export default Login;