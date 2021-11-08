import WebsBtnDark from "../components/btns/WebsBtnDark";
import ResBtnDark from "../components/btns/ResBtnDark";
import Social from "../components/Social";
import QuoteStatic from "../components/Quote";

const products = () => {
    return (
        <>
            <div className="px-6 lgg:px-0 max-w-1120 my-0 mx-auto">
                <div className="pt-4 md:pt-24 md:pb-16 mdd:flex justify-between font-runda">
                    <div className="max-w-lg mb-20">
                        <div className="lg:hidden business-bg mb-10">
                            <div className="h-80"></div>
                        </div>

                        <h1 className="font-body font-extrabold text-8xl md:text-9xl uppercase text-secondary max-w-27 10 pb-8 leading-14 tracking-wide">why is this a better cup?</h1>
                        <p className="text-lg leading-7 pb-8">Our paper-based cartons are 92% renewable and way less destructive to our planet than single-use plastic bottles and aluminum cans.</p>
                        <div>
                            <div className="inline-block mr-6 mb-6">
                                <WebsBtnDark />
                            </div>
                            <div className="inline-block">
                                <ResBtnDark />
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
            
            <div className="bg-white lgg:bg-transparent max-w-1440 px-6 lgg:px-0  mx-auto md:py-16 lg:py-0">
                <div className=" h-512 relative mr-0">
                    <div className=" max-w-1280 lg:absolute right-0">
                        <div className=" md:bg-white lg:py-32 lg:pl-20 lg:pr-20 lgg:pr-40">
                            <div className="lg:flex items-center md:pl-16 lg:pl-0">
                                <div className="mb-16 lg:mb-0">
                                    <img src="/img/171.png" alt="" />
                                </div>
                                
                                <div className="lg:ml-16 lgg:ml-32 md:w-456 ">
                                    <h3 className="text-4xl text-secondary font-bold mb-6">Biodegradable</h3>
                                    <p className="text-lg">Constructed of renewably sourced paper, this cup can be broken down naturally without damaging the environment. This helps divert waste from landfills, effectively reducing pollution while promoting a more sustainable planet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-6 lgg:px-0 py-6 md:py-16 lg:py-28 max-w-1120 mx-auto">                 
                <div className="md:flex md:flex-col lg:flex-row items-end lg:items-center md:text-right lg:text-left md:pr-16 lg:pr-0 lg:px-20 lgg:px-0">
                    <div className="block lg:hidden mb-16">
                        <img src="/img/172.png" alt="" />
                    </div>
                    <div className="md:w-456 mb-6 md:mb-0 ">
                        <h3 className="text-4xl text-secondary font-bold mb-6">Environment First</h3>
                        <p className="text-lg">We’re looking towards the future in everything that we do. From our responsible manufacturing processes to our vow of restoring the environment one tree at a time, we’re taking strong action to offset any potential harm caused by this production.</p>
                    </div>

                    <div className="hidden lg:block ml-32">
                        <img src="/img/172.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="bg-white lgg:bg-transparent px-6 lgg:px-0 max-w-1440 mx-auto md:py-16 lg:py-0 relative">
                <div className="h-512 relative">
                    <div className="max-w-1280 lg:absolute left-0">
                        <div className="md:bg-white lg:py-28 lg:px-16 lgg:px-40">
                            <div className=" lg:flex items-center md:pl-16 lg:pl-0">
                                <div className="mb-12 lg:mb-0">
                                    <img src="/img/82.png" alt="" />
                                </div>
                                
                                <div className="lg:ml-16 lgg:ml-32 md:w-456">
                                    <h3 className="text-4xl text-secondary font-bold mb-6">Brand Positioning</h3>
                                    <p className="text-lg">We’re unconventional and driven to change our industry. Our focus is supplying the foodservice sector with sustainable, single-use products of exceptional quality. Our partnership with the National Forest Foundation and supporting their tree planting initiatives is also paramount to our organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 lgg:px-0 py-12 md:py-16 lg:py-28 max-w-1120 mx-auto">                 
                <div className="md:flex md:flex-col lg:flex-row items-end lg:items-center md:text-right lg:text-left md:pr-16 lg:pr-0">
                    <div className="block lg:hidden mt-12 md:mt-0 mb-16">
                        <img src="/img/169.png" alt="" />
                    </div>
                    <div className="md:w-456">
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
                <div className="px-6 lgg:px-0 max-w-1120 text-center mx-auto py-32">
                    <h2 className="font-body font-bold text-7xl md:text-8xl text-brownLight mb-16">MARKETS WE SERVE</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        <div className="text-center mb-6 ">
                            <img className="mx-auto" src="/img/Ellipse 1.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Coffee Shop</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 2.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Coffee Shop</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 3.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Coffee Shop</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 4.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Coffee Shop</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 5.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Coffee Shop</p>
                        </div>
                        <div className="text-center mb-6">
                            <img className="mx-auto" src="/img/Ellipse 6.png" alt="" />
                            <p className="text-secondary text-xl mt-4">Coffee Shop</p>
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
                            <h3 className="text-secondary text-2xl md:text-3xl max-w-3xl inline-block mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tellus tempus tortor id magna egestas.</h3>
                            
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:text-right md:mb-20">
                        <div className="pb-3">
                            <WebsBtnDark />
                        </div>
                        <div>
                            <ResBtnDark />
                        </div>
                    </div>
                </div>
            </div>

            <div className="roots w-100% px-6 lgg:px-0">
                <div className="py-20 lg:py-28 max-w-1120 my-0 mx-auto lg:flex justify-between">
                    <div className="lg:inline-block mb-14 w-72 lg:w-80">
                        <h2 className=" text-white text-7xl lg:text-8xl uppercase font-body font-bold leading-11">The values we live everyday</h2>
                    </div>
                    <div className="lg:inline-block lgg:mr-12">
                        <div className="md:grid md:grid-cols-2 font-runda text-white lg:gap-x-16 lgg:gap-x-32">
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Pharetra tincidunt.</h3>
                                <p className="text-lg"> Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Sed suspendisse eu.</p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Pharetra tincidunt.</h3>
                                <p className="text-lg"> Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Sed suspendisse eu.</p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Pharetra tincidunt.</h3>
                                <p className="text-lg"> Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Sed suspendisse eu.</p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Pharetra tincidunt.</h3>
                                <p className="text-lg"> Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Sed suspendisse eu.</p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Pharetra tincidunt.</h3>
                                <p className="text-lg"> Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Sed suspendisse eu.</p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Pharetra tincidunt.</h3>
                                <p className="text-lg"> Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Sed suspendisse eu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
            <Social/>
        </>
    );
}

export default products;