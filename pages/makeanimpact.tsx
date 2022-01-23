import Articles from "../components/Articles";
import Footer from "../components/Footer";
import ImpactCalcMob from "../components/ImpactCalcMob";

const makeanimpact = () => {
    return (
        <>
            <div className="px-6 lgg1:px-0">
                <div className="max-w-1120 my-0 mx-auto pt-6 lg:py-24 lg:flex justify-between font-runda">
                    <div className="lg:hidden bg-cover mb-10">
                        <div className="h-80"></div>
                    </div>

                    <div className="max-w-640 mb-20 md:mx-auto lg:mx-0">
                        <h1 className="line lg:max-w-486 xxxl:max-w-full font-body font-extrabold text-7xl md:text-8xl lgg:text-9xl uppercase text-secondary  pb-8 leading-10 tracking-wide">EVERY INDIVIDUAL ACTION DOES MAKE A DIFFERENCE.</h1>
                        <p className="text-lg lg:max-w-486 xxxl:max-w-full leading-7 pb-8 lg:w-510 lgg:w-full">Reducing or eliminating single-use non-sustainable products cuts down on overconsumption and waste. Your actions help restore natural resources that strengthen our ecosystem.</p>
                    </div>

                    <div className="hidden lg:max-w-486 xxxl:max-w-full lg:block relative ">
                        <div className="xxxl:absolute lgg:-right-32">
                            <div className="bg-cover max-w-510 h-512 -mb-98 lg:-mb-0 mx-auto lg:mx-0">
                                <div className="mdd:w-96 lgg:w-510"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImpactCalcMob />
            
            <div className="pt-24 lg:py-28 max-w-1120 my-0 mx-auto px-6 lgg1:px-0">
                <div className="lg:flex justify-between">
                    <div className="bg-coffee w-full lgg:w-544 md:mx-auto lgg:mx-0">
                        <div className=" h-80 lgg:w-544 lgg:h-96 "></div>
                    </div>

                    <div className="w-full lg:flex flex-col items-end">
                        <div className='max-w-448 mx-auto lg:mx-0 mt-12 mb-14 lg:mb-20'>
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

                <div className="md:max-w-544 lg:max-w-928 mx-auto md:text-center mt-24 lg:mt-36 mb-12">
                    <h3 className="font-body text-brownLight text-6xl lg:text-8xl font-bold tracking-normal max-w-1000 uppercase">Reduce your carbon footprint while investing in a brighter tomorrow for future generations</h3>
                </div>
            </div>

            <Articles bg='bg-white' />
            <Footer text="Ready to see the product in action?" textBtn="Make an Impact" link="/makeanimpact" />
        </>
    );
}

export default makeanimpact;