import { useState, useEffect } from "react";

const useFormTest = (callback:any, validate:any) => {
    const [values, setValues] = useState({ email: "", name: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = event => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    }, [errors]);
  
    return {
      handleChange,
      handleSubmit,
      values,
      setValues,
      errors
    };
  };  

export default useFormTest;