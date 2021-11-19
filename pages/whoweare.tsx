import Business from "../components/Business";
import Social from "../components/Social";

const whoweare = () => {
    return (
        <div>
            <div className="px-6 lgg:px-0 max-w-1120 my-0 mx-auto ">
                <div className="lg:flex justify-between my-16 md:my-20">
                    <h1 className="md:mx-auto lg:mx-0 max-w-544 text-secondary text-8xl uppercase font-body font-bold mb-6 line">New Roots, <br/>Planting Trees</h1>
                    <p className="md:mx-auto lg:mx-0 max-w-md md:max-w-544 lg:max-w-md  text-base lg:text-3xl font-runda self-center mt-9">We’re invested in producing top-quality, sustainable products that will allow your business and the environment to flourish together.</p>
                </div>
                <div>
                    <div className="bg-cover">
                        <div className="h-512 md:h-80 lg:h-512"></div>
                    </div>
                </div>
                <div className="lg:flex lg:items-center lg:justify-center md:w-full md:max-w-544 lg:max-w-1120 md:pb-10 lg:pb-0 md:mx-auto lg:mx-0 my-16 md:my-16 lg:my-28">
                    <p className="w-full lg:max-w-md text-primary text-2xl lg:text-3xl font-runda self-end md:mx-auto lg:mx-0 mr-10 mb-8">New Roots’ commitment to the environment runs deep.  </p>

                    <p className="md:max-w-544 lg:max-w-md text-lg md:mx-auto lg:mx-0 pt-6 mt-6 md:-mt-9 lg:ml-10">We aim to restore the world by restocking your business. With the support of National Forest Foundation, we promise to plant new trees and foster increased biodiversity by donating a portion of all our profits to offset the damage caused by plastic waste.</p>
                </div>
            </div>

             <div className="roots w-100% px-6 lgg:px-0">
                <div className="py-20 lg:py-28 max-w-1120 w-full my-0 mx-auto lg:flex justify-between">
                    <div className="lg:inline-block mb-14 w-72 md:w-72 lg:w-96 ">
                        <h2 className=" text-white text-7xl lg:text-8xl uppercase font-body font-bold leading-11">The values we embrace</h2>
                    </div>

                    <div className="lg:inline-block lgg:mr-12 lg:ml-20">
                        <div className="md:grid md:grid-cols-2 font-runda text-white lg:gap-x-16 lgg:gap-x-32">
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Creating A Greener Tomorrow</h3>
                                <p className="text-lg"> A portion of our sales goes directly towards supporting the National Forest Foundation and their tree planting efforts.</p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">The Best Quality </h3>
                                <p className="text-lg">Our products are made to withstand the demands of any foodservice establishment while also promoting sustainability. </p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Ensuring Complete Transparency and Integrity </h3>
                                <p className="text-lg">We accurately report on how many trees have been planted through our initiative. </p>
                            </div>
                            <div className="max-w-sm pb-12">
                                <h3 className="text-3xl font-bold pb-6">Going Above and Beyond </h3>
                                <p className="text-lg"> By planting trees at an aggressive rate, we’re able to offset the energy and resources necessary to produce our cups. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden pt-12 md:pt-16 lg:pt-24  md:pb-10">
                <div className="scroll-top2 text-5xl md:text-7xl lg:text-9xl text-black opacity-10 mb-6 lg:mb-12">
                    Certification / Certification
                </div>
                <div className="scroll-bottom2 text-5xl md:text-7xl lg:text-9xl text-black opacity-10 ">
                    <p>Certification / Certification</p> 
                </div>
            </div>
            <div className="px-6 lgg:px-0">
                <div className="max-w-1120 my-0 mx-auto lg:pt-16 pb-24 lg:pb-32">
                    <div className="my-20 text-center">
                        <div className="z-0 inline-block">
                            <img className="w-32 xxs:w-36 md1:w-80 lg2:w-456 mr-4 xxs:mr-6  md1:mr-14 lg:w-456" src="/Img/90.png" alt="" />    
                        </div>
                        <div className="z-10 inline-block ">
                            <img className="w-32 xxs:w-36 md1:w-80 lg2:w-456 mb-10 xxs:mb-12 md1:mb-24" src="/Img/91.png" alt="" />
                        </div>
                        <div className="z-20">
                            <img className="w-32 xxs:w-36 md1:w-80 lg2:w-456 mx-auto -mt-20 xxs:-mt-20 md1:-mt-40"  src="/Img/92.png" alt="" />
                        </div>
                    </div>

                    <div className="lgg:flex justify-between lg:pt-16">
                        <div className="">
                            <h2 className="font-body font-bold text-8xl text-brownLight mb-7">BENEFITS</h2>
                        </div>
                        <div className="max-w-736 text-left">
                            <p className="text-2xl">New Roots provides top-quality, eco-friendly products with a better tomorrow in mind. Through our partnership with the National Forest Foundation, we pledge to plant new trees and restore the environment for future generations to enjoy. We’re passionate about making a positive difference. Our goals are centered around creating a greener, and cleaner, world for many years to come. That said, our cups are made from renewable resources, and we vow to plant a tree for every 100 that we sell. </p>
                        </div>
                    </div>
                </div>
            </div> 

            <Business />

            <Social />
        </div>
    );
}

export default whoweare;