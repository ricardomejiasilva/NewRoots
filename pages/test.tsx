import { useState } from "react";
import useFormTest from "../hooks/useFormTest";
import validate from "../hooks/validateLogin";


const test = () => {
    const { handleChange, handleSubmit, setValues, values, errors } = useFormTest(submit, validate)

    function submit() {
      console.log("Submitted Succesfully");
      setValues({
        name: '', email: "", message: ""
      })
    }
    
    console.log(Object.keys(errors));
    


    return (
        <div>
        <form onSubmit={handleSubmit} noValidate>
        <div>
            <label>Name</label>
            <div>
                <input
                className={`${errors.name && "inputError"}`}
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            </div>

            <div>
            <label>Email</label>
            <div>
                <input
                className={`${errors.email && "inputError"}`}
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            </div>

            <div>
            <label>Message</label>
            <div>
                <input
                className={`${errors.message && "inputError"}`}
                name="message"
                type="text"
                value={values.message}
                onChange={handleChange}
                />
                {errors.message && <p className="error">{errors.message}</p>}
            </div>
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default test;