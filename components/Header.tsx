import PrimaryBtn from './btns/PrimaryBtn';
import ThirdBtn from './btns/ThirdBtn';

const Header = () => {
    return (
        <div className="px-6 lgg1:px-0">
            <div className="max-w-1120 my-0 mx-auto py-24 mdd:flex justify-between font-runda">
                <div className="max-w-lg mb-20">
                    <h1 className="line font-body font-extrabold text-8xl md:text-9xl uppercase text-secondary max-w-27  pb-8 leading-10 tracking-wide">planted 10,000 trees and counting</h1>
                    <p className="text-lg leading-7 pb-8">Our paper-based cartons are 92% renewable and way less destructive to our planet than single-use plastic bottles and aluminum cans.</p>
                    <div>
                        <div className="inline-block mr-6 mb-6">
                            <PrimaryBtn link="/" text="Make an Impact"/>
                        </div>
                        <div className="inline-block">
                            <ThirdBtn link="/products" text="See Our Products"/>
                        </div>
                    </div>
                </div>
                <div className="relative ">
                    <div className="lgg:absolute lgg:-right-32">
                        <div className="bg-cover max-w-608 h-512 -mb-98 lg:-mb-0 mx-auto lg:mx-0">
                            <div className="xls:w-80 xxs:w-96 md1:w-608 mdd:w-96 lgg:w-608"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;