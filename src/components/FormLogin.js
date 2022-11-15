import React, { useEffect, useState } from "react";
import {appendErrors, useForm} from "react-hook-form"



const FormLogin = () => {

    const {register, handleSubmit, formState: {errors}, reset, setFocus} = useForm({
        criteriaMode: "all"
    })

    const [inputField, setInputField] = useState({
        username: '',
        password: '',
        email: ''
    })

    useEffect(() => {
        setFocus("username");
      }, []);
    

    const inputHandler = (e) => {
        setInputField((prevField) => ({
            ...prevField,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (data) => {
        console.log(data.username)
        console.log(data.password)
        console.log(data.email)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username:
                <input type="text" placeholder="username" {...register("username", {required: "Required"})}/>
            </label>
            <br/>
            <label>Password:
                <input type="password" placeholder="password" {...register("password", {required: "Required"})}/>
            </label>
            {errors.password && <span>This field is required</span> }
            <br/>
            <label>Email:
                <input type="email"
                {...register("email", {
                required: "Required",
                })}
            />
            {errors.email && errors.email.message}
            </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default FormLogin;