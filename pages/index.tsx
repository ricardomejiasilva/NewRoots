
import Header from '../components/Header'
import ImpactCalc from '../components/ImpactCalc'
import Quote from '../components/Quote'
import Articles from '../components/Articles'
import Business from '../components/Business'
import Social from '../components/Social'
import PrimaryBtn from '../components/btns/PrimaryBtnLight'
import Footer from '../components/Footer'


export default function index() {
  return (
    <div>
      <Header />
      <ImpactCalc />

      <div className="max-w-1120 my-0 mx-auto mb-16 md:mb-0  md:py-24">
            <div className="relative mb-16 md:mb-28 md:px-6 lg:px-0">
                <div className="hidden md:block">
                   <img src="/img/trees.png" alt="" />
                </div>
                
                <div className="bg-tree block md:hidden">
                    <div className="md:w-96 h-80"></div>
                </div>

                <div className="px-5 md:px-0 -mt-0.5 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 right-1/2">
                    <div className="bg-white px-14 -mt-32 md:-mt-0 md:px-10 lg:px-20 py-12 md:py-10 lg:py-20 ">
                        <h2 className="max-w-486 uppercase font-body font-bold text-6xl md:text-8xl text-brownLight pb-7">500 boxes plants one tree</h2>
                        <p className="max-w-486 text-md md:text-lg leading-7 pb-7">We aim to make a positive impact on the earth. A portion of all sales goes to planting trees for a greener and cleaner planet.</p>
                        <PrimaryBtn link="/" text="Learn More" />
                    </div>
                </div>         
            </div>

            <div className="px-6 lgg:px-0 md:flex md:justify-between">
                <div className="text-center w-64 md:w-72 m-auto mb-8">
                    <h3 className="font-body font-bold text-8xl md:text-9xl text-secondary">128</h3>
                    <p className="text-lg leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci interdum proin.</p>
                </div>
                <div className="text-center w-64 md:w-72 m-auto mb-8">
                    <h3 className="font-body font-bold text-8xl md:text-9xl text-secondary">657K</h3>
                    <p className="text-lg leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci interdum proin.</p>
                </div>
                <div className="text-center w-64 md:w-72 m-auto mb-8">
                    <h3 className="font-body font-bold text-8xl md:text-9xl text-secondary">$4M</h3>
                    <p className="text-lg leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci interdum proin.</p>
                </div>
            </div>              
        </div>
        
      <Quote />
      <Articles bg='' />
      <Business />
      <Social />
      <Footer text="Have any additional questions?" textBtn="Contact Us" link="/contact" />
    </div>
  )
}
