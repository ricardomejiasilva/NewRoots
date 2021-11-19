import Image from 'next/image';
import Link from 'next/dist/client/link';
import WebsBtn from './btns/WebsBtn';
import ResBtn from './btns/ResBtn';
const Footer = () => {
    return (
        <div className="roots w-100% px-6 lgg:px-0">
            <div className=" pt-16 md:pt-28 pb-8 md:pb-16 max-w-1120 my-0 mx-auto">
                <div className="text-center max-w-lg my-0 mx-auto pb-24">
                    <h3 className="font-body font-bold text-7xl text-white pb-6 md:pb-14">HAVE ANY ADDITIONAL QUESTIONS?</h3>
                    <Link href="/">
                        <button className="bg-white text-primary py-3 px-6">Contact Us</button>
                    </Link>
                </div>
                <div className="border-t-2 border-light font-runda pt-14">
                    <div className="pb-14 md:flex md:justify-between">
                        <div className="text-white">
                            <h4 className="text-3xl text-semibold pb-9">New Roots</h4>
                            <p className="max-w-md text-base mb-8">New Roots provides top-quality, eco-friendly products with a better tomorrow in mind. Through our partnership with the National Forest Foundation, we pledge to plant new trees and restore the environment for future generations to enjoy.</p>
                        </div>
                        <div className="flex flex-col md:text-right">
                            <div className="pb-3">
                                <WebsBtn></WebsBtn>
                            </div>
                            <div>
                                <ResBtn />
                            </div>
                        </div>
                    </div>
                    <div className="text-light text-sm md:flex md:justify-between w-40 md:w-full">
                        <p className="mb-2 md:mb-0">©2021, New Roots, Inc.  All Rights Reserved.</p>
                        <ul className="flex flex-wrap md:flex-nowrap">
                            <li className="pr-3 mb-2 md:mb-0"><Link href="/">Accessibility</Link></li>
                            <li className="pr-3"><Link href="/Legal">Privacy</Link></li>
                            <li className="pr-3"><Link href="/">Terms of Use</Link></li>
                            <li><Link href="/">Security</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;