import { Data } from "../components/Data";
import FAQ2 from "../components/FAQ2";
import Footer from "../components/Footer";

const contact = () => {
    return (
        <>
            <div className="md:max-w-544 lg:max-w-1120 mx-auto mt-14 md:mt-18 lg:mt-28 px-6 lgg:px-0">
                <div className="lg:flex justify-between mb-16 lg:mb-32">
                    <h1 className="text-8xl text-secondary font-body font-bold mr-36 mb-6">CONTACT</h1>
                    <p className="text-primary text-xl lg:text-3xl">Questions about our products? Interested in learning more? Please use the form below to get in contact with us.</p>
                </div>

                <div className="lg:flex justify-between">
                    <div className="mb-16  lg:pr-16 lgg:pr-0">
                        <div className="max-w-448 mb-10">
                            <p className="text-secondary text-2xl mb-4">Say Hello!</p>
                            <p className="text-lg">Due to the high volume of inquiries, our response times have increased slightly, but we strive to get back to you within two business days. We appreciate your patience!</p>
                        </div>
                        <div className="md:flex lg:flex-col">
                            <div className="md:mr-10 lg:mr-0 flex flex-col mb-10">
                                <p className="text-secondary text-2xl mb-4">For specific questions</p>
                                <a href="/">FAQ</a>
                                <a href="/">Warranty</a>
                                <a href="/">Returns</a>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-secondary text-2xl mb-4">Find us on social</p>
                                <a href="/">Instagram</a>
                            </div>
                        </div>
                        
                    </div>
                    

                    <form className=" md:w-96 lg:w-full max-w-544" action="">
                        <input 
                            type="text" 
                            placeholder="Name"
                            name="cups" 
                            id="cups" 
                            className="bg-transparent w-full border-b-2 border-line mb-12 text-left text-secondary text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent" 
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            name="email" 
                            id="email"
                            required 
                            className="bg-transparent w-full border-b-2 border-line mb-12 text-left text-secondary text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent" 
                        />
                        <input 
                            type="tel" 
                            placeholder="Phone"
                            name="phone" 
                            id="phone"
                            maxLength={17}
                            minLength={10}
                            required
                            className="bg-transparent w-full border-b-2 border-line mb-12 text-left text-secondary text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent" 
                        />
                        <input 
                            type="text" 
                            placeholder="Message"
                            name="message" 
                            id="message" 
                            className="bg-transparent w-full border-b-2 border-line mb-12 text-left text-secondary text-xl md:text-2xl placeholder-secondary focus:outline-none focus:placeholder-transparent" 
                        />
                        <p className="text-sm max-w-352 mt-6 mb-12">
                            This form is protected by reCAPTCHA and the Google <a className="text-primary" href="/">Privacy Policy</a> and <a className="text-primary" href="/">Terms of Service</a> apply.
                        </p>
                        <button type="submit" className="py-3 px-6 bg-primary hover:bg-secondary text-white focus:light outline-light duration-100">submit</button>
                    </form>
                </div>
                
            </div>
            <FAQ2 data={Data} />
            <Footer text="Ready to see the product in action?" textBtn="See Our Products" link="/products" />
        </>
    );
}

export default contact;