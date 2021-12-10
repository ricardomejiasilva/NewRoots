export default function validate(values:any) {

  let errors :  { [index: string ]: String } = {};

  if (values.name.length < 1){
    errors.name = "Full name is required."
  }

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "This is an invalid email address";
  } 

  if (values.email.length < 1){
    errors.email = "Email is required."
  }

  if (values.phone && values.phone.length < 13) {
    errors.phone = "This is an invalid phone number";
  }

  if (!values.message) {
    errors.message= "Please write a brief message.";
  } 

  return errors;
}
