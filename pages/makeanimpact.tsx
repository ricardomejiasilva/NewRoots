import Articles from "../components/Articles";
import BtnWhite from "../components/btns/BtnWhite";
import Footer from "../components/Footer";
import ImpactCalc from "../components/ImpactCalc";

const makeanimpact = () => {
    return (
        <>
            <div className="px-6 lgg1:px-0">
                <div className="max-w-1120 my-0 mx-auto pt-6 lg:py-24 mdd:flex justify-between font-runda">
                    <div className="lg:hidden bg-cover mb-10">
                        <div className="h-80"></div>
                    </div>

                    <div className="max-w-640 mb-20 md:mx-auto lg:mx-0">
                        <h1 className="line font-body font-extrabold text-7xl md:text-9xl lg:text-8xl lgg:text-9xl uppercase text-secondary  pb-8 leading-10 tracking-wide">EVERY INDIVIDUAL ACTION DOES MAKE A DIFFERENCE.</h1>
                        <p className="text-lg leading-7 pb-8 lg:w-510 lgg:w-full">Reducing or eliminating single-use non-sustainable products cuts down on overconsumption and waste. Your actions help restore natural resources that strengthen our ecosystem.</p>
                    </div>

                    <div className="hidden lg:block relative ">
                        <div className="lgg:absolute lgg:-right-32">
                            <div className="bg-cover max-w-510 h-512 -mb-98 lg:-mb-0 mx-auto lg:mx-0">
                                <div className="mdd:w-96 lgg:w-510"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ImpactCalc />
            

            <div className="lg:py-28 max-w-1120 my-0 mx-auto px-6 lgg1:px-0">
                <div className="lgg:flex justify-between">
                    <div className="bg-coffee w-full lgg:w-544 md:mx-auto lgg:mx-0">
                        <div className=" h-80 lgg:w-544 lgg:h-96 "></div>
                    </div>

                    <div className="w-full lgg:flex flex-col items-end">
                        <div className='max-w-448 mx-auto lg:mx-0 mt-12 mb-14 md:mb-20'>
                            <h4 className="text-secondary text-2xl font-bold mb-6">Planning for your future. </h4>
                            <p className="text-lg">Trees are Earth’s lungs. They help clean the air we breathe. Nurture their growth and reap the benefits later. </p>
                        </div>
                        <div className='max-w-448 mx-auto lg:mx-0 mb-14 md:mb-20'>
                            <h4 className="text-secondary text-2xl font-bold mb-6">Sustainability is good business.</h4>
                            <p className="text-lg">Biodegradable products not only improve our planet but financially benefit your business. Traditional plastic or Styrofoam can cost you more. </p>
                        </div>
                        <div className='max-w-448 mx-auto lg:mx-0 mb-14 md:mb-20'>
                            <h4 className="text-secondary text-2xl font-bold mb-6">Making a healthy choice. </h4>
                            <p className="text-lg">Because biodegradable cups are chemical-free and plant-based, you’re drinking from a healthy container.</p>
                        </div>
                        <div className='max-w-448 mx-auto lg:mx-0'>
                            <h4 className="text-secondary text-2xl font-bold mb-6">Relating to your customers. </h4>
                            <p className="text-lg">Your customers want companies to reflect their values. They want to feel good about the products they use and talk about them with others. Cultivate this relationship, grow your brand.</p>
                        </div>
                    </div>
                </div>

                <div className="md:max-w-544 lg:max-w-928 mx-auto md:text-center mt-24 md:mt-36 mb-12">
                    <h3 className="font-body text-brownLight text-6xl lg:text-8xl font-bold tracking-normal max-w-1000 uppercase">Reduce your carbon footprint while investing in a brighter tomorrow for future generations</h3>
                </div>
            </div>

            <div className="roots w-100% px-6 lgg1:px-0 py-32">
                <div className="max-w-1120 my-0 mx-auto">
                    <div className="lg:inline-block mb-14 md:mx-auto lg:mx-0">
                        <h2 className=" text-white text-7xl md:text-left lg:text-left lg:text-8xl uppercase font-body font-bold leading-11">ways to take action</h2>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 max-w-1120 my-0 mx-auto">
                    <div className="text-white mb-16 lg:w-352 mx-6 lg:ml-24">
                        <h3 className="text-3xl mb-6">Volunteer</h3>
                        <p className="text-lg mb-6">Find an organization that shares an eco-friendly mission. Spend time with a community of like-minded people ready to make environmental progress. </p>

                        <div>
                            <BtnWhite link="/makeanimpact"  text="Sign up"/>
                        </div>
                    </div>
                    <div className="text-white mb-16 lg:w-352 mx-6 lg:ml-24">
                        <h3 className="text-3xl mb-6">Donate</h3>
                        <p className="text-lg mb-6">Support businesses that support the New Roots initiative. We vow to plant a tree for every 100 cups we sell, and you can donate a specified amount or a percentage of your sales to the cause. </p>

                        <div>
                            <BtnWhite link="/makeanimpact"  text="Donate"/>
                        </div>
                    </div>
                    <div className="text-white mb-16 lg:w-352 mx-6 lg:ml-24">
                        <h3 className="text-3xl mb-6">Drop a seed. </h3>
                        <p className="text-lg mb-6">Offset your carbon and fight climate change by getting your hands a little dirty. Sign up with the National Forest Foundation to help plant a tree. </p>

                        <div>
                            <BtnWhite link="/makeanimpact"  text="Plant a tree"/>
                        </div>
                    </div>
                    <div className="text-white mb-16 lg:w-352 mx-6 lg:ml-24">
                        <h3 className="text-3xl mb-6">Make a pledge.</h3>
                        <p className="text-lg mb-6">Make a petition or sign one outlining your plans to become eco-friendlier. We need as many of us as possible moving in the same direction—lead the way. </p>

                        <div>
                            <BtnWhite link="/makeanimpact"  text="Make a pledge"/>
                        </div>
                    </div>
                </div>
            </div>
            <Articles bg='' />
            <Footer text="Ready to see the product in action?" textBtn="Make an Impact" link="/makeanimpact" />
        </>
    );
}

export default makeanimpact;