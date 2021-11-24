import ThirdBtn from "../components/btns/ThirdBtn";
import Footer from "../components/Footer";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";

const resources = () => {
    const router = useRouter()
    return (
        <>
            <div className="max-w-1120 mx-auto mt-14 lg:mt-28  px-6 lgg:px-0">
                <div className="lg:flex justify-between mb-14 lg:mb-32 md:max-w-544 lg:max-w-full md:mx-auto">
                    <h1 className="text-7xl md:text-8xl text-secondary font-body font-bold mr-36 mb-6">RESOURCES</h1>
                    <p className="text-primary text-xl lg:text-3xl max-w-608 ">Learn more about the environmental issues developing in our world and discover new ways that you can make a positive impact. </p>
                </div>
            </div>
            <div className="max-w-1440 mx-auto relative lg:h-775 lgg:h-892 mb-16 lg:mb-0">
                <div className="px-6 lgg:px-0 max-w-1088 w-full lg:absolute right-0">
                    <img className="w-full mb-6" src="/img/174.jpg" alt="" />
                    <div className="md:max-w-544 lg:max-w-832 md:mx-auto lg:mx-0">
                        <p className="max-w-928 text-xs text-primary pb-4 mt-4 font-bold">SEP 8, 2021 <span className="px-2">•</span> Event</p>
                        <h3 className="text-2xl lg:text-3xl text-secondary font-bold  w-full">This is a title of an article that might wrap to three lines or more</h3>
                    </div>
                </div>
            </div>

            <div className="px-6 lgg:px-0 max-w-1120 mx-auto mb-16">
                <div className="md:flex md:justify-between md:max-w-544 lg:max-w-full md:mx-auto lg:mx-0 ">
                    <div className="max-w-544 md:max-w-260 lg:max-w-544 w-full mb-16 md:mb-0 lg:mr-4 lgg:mr-0 ">
                        <img className="w-full" src="/img/175.png"/>
                        <div>
                            <p className="pt-6 text-xs text-primary font-bold">SEP 8, 2021 <span className="px-2">•</span > Article</p>
                            <div className="mt-6">
                                <Link href="/resources">
                                    <a href={router.pathname} className="text-2xl lg:text-3xl text-secondary font-bold tracking-normal mt-6">This is a title of an article that might wrap to three lines or more</a>
                                </Link>
                            </div>
                            
                        </div>
                    </div> 
                    <div className="max-w-544 md:max-w-260 lg:max-w-544 w-full lg:ml-4 lgg:ml-0">
                        <img className="w-full" src="/img/176.png"></img>
                        <div className="">
                            <p className="pt-6 text-xs text-primary font-bold">SEP 8, 2021 <span className="px-2">•</span > Article</p>
                            <div className="mt-6">
                                <Link href="/resources">
                                    <a href={router.pathname} className="text-2xl lg:text-3xl text-secondary font-bold tracking-normal mt-6">This is a title of an article that might wrap to three lines or more</a>
                                </Link>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className="md:max-w-544 lg:max-w-full md:mx-auto lg:max-0 pt-16 lg:pt-24 md:py-24  lg:flex justify-between">
                    <div className="lg:inline-block mb-14 lg:mr-16 lgg:mr-0 w-full lg:w-80 md:mx-auto lg:mx-0">
                        <h2 className=" text-brownLight text-7xl md:text-left lg:text-left lg:text-8xl uppercase font-body font-bold leading-11">recent resources</h2>
                    </div>

                    <div className="max-w-736">
                        <div className="border-b-2 border-line pb-12 mb-12">
                            <p className="text-xs text-primary mt-12 font-bold">SEP 8, 2021 <span className="px-2">•</span > Article</p>
                            <div className="mt-6">
                                <Link href="/resources">
                                    <a href={router.pathname} className="text-3xl text-secondary font-bold tracking-normal mt-6">This is a title of an article that might wrap to three lines or more</a>
                                </Link>
                            </div>
                        </div>
                        <div className="border-b-2 border-line pb-12 mb-12">
                             <p className="text-xs text-primary mt-12 font-bold">SEP 8, 2021 <span className="px-2">•</span> Article</p>
                            <div className="mt-6">
                                <Link href="/resources">
                                    <a href={router.pathname} className="text-3xl text-secondary font-bold tracking-normal mt-6">This is a title of an article that might wrap to three lines or more</a>
                                </Link>
                            </div>
                        </div>
                        <div className="border-b-2 border-line pb-12 mb-12">
                             <p className="text-xs text-primary mt-12 font-bold">SEP 8, 2021 <span className="px-2">•</span> Article</p>
                            <div className="mt-6">
                                <Link href="/resources">
                                    <a href={router.pathname} className="text-3xl text-secondary font-bold tracking-normal mt-6">This is a title of an article that might wrap to three lines or more</a>
                                </Link>
                            </div>
                        </div>
                        <div className="pb-12 mb-6">
                             <p className="text-xs text-primary mt-12 font-bold">SEP 8, 2021 <span className="px-2">•</span> Article</p>
                            <div className="mt-6">
                                <Link href="/resources">
                                    <a href={router.pathname} className="text-3xl text-secondary font-bold tracking-normal mt-6">This is a title of an article that might wrap to three lines or more</a>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <ThirdBtn link="/resources" text="View More" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer text="Ready to see the product in action?" textBtn="See Our Products" link="/products" />
        </>
    );
}

export default resources;