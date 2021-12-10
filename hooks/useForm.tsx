import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: "", name: "", phone: "", company: "", message: "" });
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
    // if (Object.keys(errors).length >= 1 && isSubmitting) {
    //   if(errors.email.length >= 1)setValues({ email: values.email})
    // }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors
  };
};

export default useForm;
