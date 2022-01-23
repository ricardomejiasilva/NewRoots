import { Data } from "../components/Data";
import FAQ2 from "../components/FAQ2";
import Footer from "../components/Footer";
import useForm from "../hooks/useForm";
import validate from "../hooks/validateLogin";
import { useState } from "react";

const contact = () => {
    const [phoneFormat, setPhoneFormat] = useState("");
    const [nameActive, setNameActive] = useState(false)
    const [emailActive, setEmailActive] = useState(false)
    const [phoneActive, setPhoneActive] = useState(false)
    const [companyActive, setCompanyActive] = useState(false)
    const [messageActive, setMessageActive] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    let formattedPhoneNumber = ''
    
    const handleInput = (e:any) => {
    
        formattedPhoneNumber = formatPhoneNumber(e.target.value);
        values.phone = formattedPhoneNumber
        setPhoneFormat(formattedPhoneNumber);

        function formatPhoneNumber(value:any) {
            if (!value) return value;

            const phoneNumber = value.replace(/[^\d]/g, "");
            const phoneNumberLength = phoneNumber.length;
        
            if (phoneNumberLength < 4) return phoneNumber;
            if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
            }
            
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
            3,
            6
            )}-${phoneNumber.slice(6, 10)}`;
        }
    }

    const { handleChange, handleSubmit, setValues, values, errors } : any = useForm(submit, validate);
    
    function submit() {
        console.log('Success');
    
        setValues({ 
            email: "", name: "", phone: "", company: "", message: "" 
        })
        setMessageActive(false)
        setSubmitted(true)
      } 

    const handleMessage = (e) => {
        setMessageActive(true)
        e.target.style.height = '150px';
    }
    const handleMessageBlur = (e) => {
        setMessageActive(false)
        if(!values.message){
            e.target.style.height = '40px';
        }
    }
 
    if(nameActive) errors.name = ""
    if(emailActive) errors.email = ""
    if(phoneActive) errors.phone = ""
    if(messageActive) errors.message = ""


    return (
        <>
            <div className="md:max-w-544 lg:max-w-1120 mx-auto mt-14 md:mt-18 lg:mt-28 px-6 lgg1:px-0">
                <div className="lg:flex justify-between mb-16 lg:mb-32">
                    <h1 className="text-8xl text-secondary font-body font-bold mr-36 mb-6">CONTACT</h1>
                    <p className="text-primary text-xl lg:text-3xl">Questions about our products? Interested in learning more? Please use the form below to get in contact with us.</p>
                </div>

                <div className="lg:flex justify-between">
                    <div className="mb-6 md:mb-16  lg:pr-16 lgg:pr-0">
                        <div className="max-w-448 mb-10">
                            <p className="text-secondary text-2xl mb-4">Say Hello!</p>
                            <p className="text-lg">Due to the high volume of inquiries, our response times have increased slightly, but we strive to get back to you within two business days. We appreciate your patience!</p>
                        </div>
                    </div>
                    
                    <div className=" md:w-96 lg:w-full max-w-544" >
                        <h3 className={`${submitted ? 'block' : 'hidden'} text-3xl text-sky`}>Thanks for contacting us! We'll get back to you as soon as possible.</h3>
                        <form 
                            id="form"
                            noValidate 
                            onSubmit={handleSubmit} 
                            action="submit"
                            className={submitted ? 'hidden' : 'block'}
                        >
                            <div className="mb-8">
                                <div className={`${errors.name && "bg-errorLight"} mb-2`}>
                                    <label className={`${nameActive || values.name.length > 0  ? "text-sky" : "hidden"} text-lg pl-2`} htmlFor="name">Name</label>
                                    
                                    <input 
                                        type="text" 
                                        placeholder="Full name"
                                        name="name" 
                                        value={values.name} 
                                        id="name"
                                        required 
                                        onChange={handleChange}
                                        onFocus={() => setNameActive(true)}
                                        onBlur={() => setNameActive(false)}
                                        className={`${errors.name ? "text-error  placeholder-red-900" : "text-secondary placeholder-secondary"} bg-transparent w-full border-b-2 py-2 border-line text-left text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent pl-2` }
                                    />
                                </div>
                                {errors.name && <p className="text-sm text-error pl-2">{errors.name}</p>}
                            </div>

                            <div className="mb-8">
                                <div className={`${errors.email && "bg-errorLight"} mb-2`}>
                                    <label className={`${emailActive || values.email.length > 0 ? "text-sky" : "hidden"}  text-lg pl-2`} htmlFor="email">Email</label>

                                    <label className={`${emailActive  ? "text-sky" : values.email.length > 0 ? 'text-sky' : errors.email ? 'hidden' : 'hidden'}  text-lg pl-2`} htmlFor="email">Email</label>
                                    
                                    <input 
                                        type="email" 
                                        placeholder="Email"
                                        name="email" 
                                        value={values.email} 
                                        id="email"
                                        required 
                                        onChange={handleChange}
                                        onFocus={() => setEmailActive(true)}
                                        onBlur={() => setEmailActive(false)}
                                        className={`${errors.email ? "text-error placeholder-red-900" : "text-secondary placeholder-secondary"} bg-transparent w-full border-b-2 py-2 border-line text-left text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent pl-2` }
                                    />
                                </div>
                                {errors.email && <p className="text-sm text-error pl-2">{errors.email}</p>}
                            </div>

                            <div className="mb-8">
                                <div className={`${errors.phone && "bg-errorLight"} mb-2`}>
                                    <label className={`${phoneActive || values.phone.length > 0 ? "text-sky" : "hidden"} ${errors.phone ? "text-error" : ""} text-lg pl-2`} htmlFor="phone">Phone (optional)</label>
                                    
                                    <input 
                                        type="phone" 
                                        placeholder="Phone (optional)"
                                        name="phone" 
                                        value={values.phone}
                                        id="phone"
                                        maxLength={14}
                                        minLength={10}
                                        onFocus={() => setPhoneActive(true)}
                                        onBlur={() => setPhoneActive(false)}
                                        onChange={(e) => handleInput(e)} 
                                        className={`${errors.phone ? "text-error placeholder-red-900" : "text-secondary placeholder-secondary"} bg-transparent w-full border-b-2 py-2 border-line text-left text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent pl-2` }
                                    />
                                </div>
                                {errors.phone && <p className="text-sm text-error pl-2">{errors.phone}</p>}
                            </div>

                            
                            <div className="mb-8">
                                <div className={`${errors.company && "bg-errorLight"} mb-2`}>
                                    <label className={`${companyActive || values.company.length > 0 ? "text-sky" : "hidden"} text-lg pl-2`} htmlFor="company">Company (optional)</label>
                                    
                                    <input 
                                        type="company" 
                                        placeholder="Company (optional)"
                                        name="company" 
                                        value={values.company} 
                                        id="company"
                                        required 
                                        onChange={handleChange}
                                        onFocus={() => setCompanyActive(true)}
                                        onBlur={() => setCompanyActive(false)}
                                        className={`${errors.company ? "text-error placeholder-red-900" : "text-secondary placeholder-secondary"} bg-transparent w-full border-b-2 py-2 border-line text-left text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent pl-2` }
                                    />
                                </div>
                                {errors.company && <p className="text-sm text-error pl-2">{errors.company}</p>}
                            </div>

                            <div className="mb-8">
                                <div className={`${errors.message && "bg-errorLight"} border-b-2 border-line`}>
                                    <label className={`${messageActive || values.message.length > 0 ? "text-sky" : "hidden"} text-lg pl-2`} htmlFor="message">Message</label>
                                    
                                    <textarea
                                        placeholder="Message"
                                        name="message" 
                                        value={values.message} 
                                        id="message"
                                        required 
                                        onChange={handleChange}
                                        onFocus={handleMessage}
                                        onBlur={handleMessageBlur}
                                        className={`${errors.message ? "text-error placeholder-red-900" : "text-secondary placeholder-secondary"} bg-transparent w-full  text-left text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent  pt-2 pl-2 h-10` }
                                    ></textarea>
                                </div>
                                {errors.message && <p className="text-sm text-error pl-2">{errors.message}</p>}
                            </div>
                            <button 
                                type="submit" 
                                name="submit"
                                className="py-3 px-6 mt-6 bg-primary hover:bg-secondary text-white focus:light outline-light duration-100">
                                    Submit
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
            <FAQ2 data={Data} />
            <Footer text="Ready to see the product in action?" textBtn="See Our Products" link="/products" />
        </>
    );
}

export default contact;