import { useState } from "react"
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <form className="form">
            Password:
            <input type="email" id="email" placeholder="Enter Your Email" />
            <input type={showPassword ? "text" : "password"} name="" id=""/>
            <input type="checkbox" name="" id="" onChange={handleShowPassword}/>
            <button>Submit</button>
        </form>
    );
}; 

export default LoginForm;