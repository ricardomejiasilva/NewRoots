import WebsBtnDark from "../components/btns/WebsBtnDark";
import ResBtnDark from "../components/btns/ResBtnDark";
import Social from "../components/Social";
import QuoteStatic from "../components/Quote";
import FAQ from "../components/FAQ";
import { Data } from "../components/Data";

const products = () => {
    return (
        <>
            <div className="px-6 lgg:px-0 max-w-1120 my-0 mx-auto">
                <div className="pt-4 md:pt-6 lg:pt-24 lg:pb-16 mdd:flex justify-between font-runda">
                    <div className="max-w-lg md:max-w-full lg:max-w-lg mb-20 md:mx-auto lg:mx-0">
                        <div className="business-bg lg:hidden mb-10 md:mb-20">
                            <div className="h-80"></div>
                        </div>
                        <div className="md:max-w-544 lg:max-w-full md:mx-auto">
                            <h1 className="line font-body font-extrabold text-8xl lg:text-9xl uppercase text-secondary md:max-w-full max-w-27 10 pb-8 leading-14 tracking-wide">why is this a better cup?</h1>
                            <p className="text-lg leading-7 pb-8">Our paper-based cartons are 92% renewable and far less destructive than single-use bottles and aluminum cans. </p>
                            <div>
                                <div className="inline-block mr-6 mb-4 md:mb-6">
                                    <WebsBtnDark />
                                </div>
                                <div className="inline-block">
                                    <ResBtnDark />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="hidden lg:block">
                        <div className="relative h-512 lgg:w-608 w-96 ">
                            <div className="business-bg h-512  lgg:w-608 lg:absolute lg:-right-6 lgg:-right-40">
                                <div className=" md1:w-608 mdd:w-96 lgg:w-608"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" max-w-1440 px-6 lgg:px-0  mx-auto md:py-16 lg:py-0">
                <div className="h-512 relative mr-0">
                    <div className=" max-w-1280 lgg:absolute right-0">
                        <div className=" lg:bg-white lg:py-32 lg:pl-20 lg:pr-20 lgg:pr-40">
                            <div className="lg:flex items-center  md:max-w-544 lg:max-w-full md:mx-auto">
                                <div className="mb-16 lg:mb-0 md:mx-auto lg:w-456">
                                    <img className="md:mx-auto md:w-full lg:mx-0" src="/img/171.png" alt="" />
                                </div>
                                
                                <div className="md:mx-auto lg:ml-16 lgg:ml-32 lg:w-456">
                                    <h3 className="text-4xl text-secondary font-bold mb-6">Biodegradable</h3>
                                    <p className="text-lg">Constructed of renewably sourced paper, this cup can be broken down naturally without damaging the environment. This helps divert waste from landfills, effectively reducing pollution while promoting a more sustainable planet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-6 lgg:px-0 py-6 md:py-16 lg:py-28 max-w-1120 mx-auto">                 
                <div className="md:flex md:flex-col lg:flex-row items-end lg:items-center lg:text-left lg:px-20 lgg:px-0 md:max-w-544 lg:max-w-full md:mx-auto">
                    <div className="block lg:hidden mb-16 md:w-full">
                        <img className="md:w-full" src="/img/172.png" alt="" />
                    </div>
                    <div className="lg:w-456 mb-6 md:mb-0 ">
                        <h3 className="text-4xl text-secondary font-bold mb-6">Environment First</h3>
                        <p className="text-lg">We’re looking towards the future in everything that we do. From our responsible manufacturing processes to our vow of restoring the environment one tree at a time, we’re taking strong action to offset any potential harm caused by this production.</p>
                    </div>

                    <div className="hidden lg:block ml-32">
                        <img src="/img/172.png" alt="" />
                    </div>
                </div>
            </div>

            <div className=" px-6 lgg:px-0 max-w-1440 mx-auto mb-12 xxs:mb-0 pt-6 relative">
                <div className="h-512 relative">
                    <div className="max-w-1280 lgg:absolute left-0">
                        <div className="lg:bg-white lg:py-28 lg:px-16 lgg:px-40">
                            <div className=" lg:flex items-center md:max-w-544 lg:max-w-full md:mx-auto">
                                <div className="mb-12 lg:mb-0 w-full lg:w-456">
                                    <img className="w-full" src="/img/82.png" alt="" />
                                </div>
                                
                                <div className="lg:ml-16 lgg:ml-32 md:w-full lg:w-456">
                                    <h3 className="text-4xl text-secondary font-bold mb-6">Brand Positioning</h3>
                                    <p className="text-lg">We’re unconventional and driven to change our industry. Our focus is supplying the foodservice sector with sustainable, single-use products of exceptional quality. Our partnership with the National Forest Foundation and supporting their tree planting initiatives is also paramount to our organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 lgg:px-0 py-12 pt-6 md:py-16 lg:py-28 max-w-1120 mx-auto">                 
                <div className="md:flex md:flex-col md:max-w-544 lg:max-w-full md:mx-auto lg:flex-row  lg:items-center lg:text-left pt-6 md:pt-16 lg:pt-0 lg:px-20 lgg:px-0">
                    <div className="block lg:hidden mt-12 md:mt-0 mb-16 w-full">
                        <img className="w-full" src="/img/169.png" alt="" />
                    </div>
                    <div className="md:w-full lg:w-456">
                        <h3 className="text-4xl text-secondary font-bold mb-6">Product Details</h3>
                        <ul className="list-disc list-inside text-lg">
                            <li>What’s it made of Specs</li>
                            <li>Specs</li>
                        </ul>
                    </div>

                    <div className="hidden lg:block ml-32">
                        <img src="/img/169.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="px-6 lgg:px-0 max-w-1120 text-center mx-auto py-20 md:py-32">
                    <h2 className="font-body font-bold text-7xl md:text-8xl text-brownLight mb-16">MARKETS WE SERVE</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        <div className="text-center mb-6 ">
                            <img className="mx-auto" src="/img/Ellipse 1.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Coffee Shop</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 2.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Restaurants</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 3.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Hospitality</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 4.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Colleges</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 5.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Hospitals</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 6.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Offices</p>
                        </div>
                    </div>
                </div>
            </div>
                
            <QuoteStatic/>
            <div className="px-6 lgg:px-0 max-w-1120 my-0 mx-auto">
                <div className="py-16 lg:py-32 md:pb-0 lg:flex lg:justify-between items-end">
                    <div>
                        <h2 className="font-body font-bold text-7xl md:text-8xl text-brownLight mb-6">GET THE PRODUCT</h2>
                        <div className="lg:flex lg:justify-between mb-12 lg:mb-0">
                            <h3 className="text-secondary text-2xl md:text-3xl max-w-3xl inline-block mb-6">New Roots is committed to going green while growing your business. Embrace the convenience of premium single-use products, minus the harm! </h3>
                            
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:text-right md:mb-20 lg:mb-5">
                        <div className="pb-3">
                            <WebsBtnDark />
                        </div>
                        <div>
                            <ResBtnDark />
                        </div>
                    </div>
                </div>
            </div>

            <FAQ data={Data} />

            <Social/>
        </>
    );
}

export default products;