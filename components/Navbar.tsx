import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import useScrollListener from "../hooks/scroll";
import Link from "next/link";
import PrimaryBtn from "./btns/PrimaryBtn";

const Navbar = () => {
    const [navClassList, setNavClassList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)
    const scroll = useScrollListener();
    const router = useRouter();

    const closeModal = () => {
        setModalOpen(false)
    }
    const handleClick = () => {
        setModalOpen(!modalOpen)
    }
    
    // update classList of nav on scroll
    useEffect(() => {

      if(!modalOpen){const _classList = [];
  
      if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
        _classList.push("nav-bar--hidden");
  
      setNavClassList(_classList);}

    }, [scroll.y, scroll.lastY]);

  return (
      <>
          <nav className={navClassList.join(" ")}>
              <div className={modalOpen ? "w-full bg-secondary" : "w-full"}>
                  <div className="max-w-1120 my-0 mx-auto sticky top-0 z-20 px-6 lgg:px-0 ">

                        <div className={modalOpen ? "w-100% flex justify-between bg-secondary" : "w-100% flex justify-between items-center bg-white"}>
                            <div onClick={closeModal} className="inline-block cursor-pointer">
                                <Link href="/" >
                                    <a href={router.pathname}>
                                        <img className="h-16 lg:h-20" src="/img/logo.jpg" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <div className="">
                                    <div className="hidden lg:block">
                                        <ul className="flex ">
                                            <li className="mr-8 ">
                                                <Link href="/whoweare">
                                                    <a className={router.pathname === "/whoweare" ? "border-b-4 pb-7 border-primary font-bold" : ""}>
                                                    Who We Are
                                                    </a>
                                                </Link>
                                            </li>
                                            
                                            <li className="mr-8">
                                                <Link href="/products">
                                                    <a className={router.pathname === "/products" ? "border-b-4 pb-7 border-primary font-bold" : ""}>
                                                    Our Products
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="mr-8">
                                                <Link href="/resources">
                                                    <a className={router.pathname === "/resources" ? "border-b-4 pb-7 border-primary font-bold" : ""}>
                                                    Resources
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="mr-14">
                                                <Link href="/contact">
                                                    <a className={router.pathname === "/contact" ? "border-b-4 pb-7 border-primary font-bold" : ""}>
                                                    Contact
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className=" hidden lg:block mr-4">
                                    <PrimaryBtn link="/" text="Make an Impact" />
                                </div>
                            </div>

                          <div className="block lg:hidden">
                              <button aria-haspopup="true" aria-controls="menu2" className="lg:hidden pr-6 mt-0" onClick={handleClick}>
                                  <svg className="ml-6" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect width="20" height="2" fill="#14532D"/>
                                      <rect y="6" width="20" height="2" fill="#14532D"/>
                                      <rect y="12" width="20" height="2" fill="#14532D"/>
                                  </svg>
                              </button>
                              <button aria-label="close" className={modalOpen ? "block" : "hidden"} onClick={handleClick}>
                                  <svg className="ml-8 mt-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="1.41406" y="0.14209" width="20" height="2" transform="rotate(45 1.41406 0.14209)" fill="white"/>
                                      <rect x="0.414062" y="14.1421" width="20" height="2" transform="rotate(-45 0.414062 14.1421)" fill="white"/>
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>

                  <div className={modalOpen ? "bg-secondary" :"hidden"}>
                      <div className="pl-12 py-20 text-white text-2xl">
                          <ul id="menu2" >
                              <li onClick={closeModal} className="pb-8">
                                <Link href="/whoweare">Who We Are</Link>
                              </li>
                              <li onClick={closeModal} className="pb-8">
                                  <Link href="/">Our Products</Link>
                              </li>
                              <li onClick={closeModal}  className="pb-8">
                                  <Link href="/">Resources</Link>
                              </li>
                              <li onClick={closeModal}  className="pb-8">
                                  <Link href="/">Contact</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className={modalOpen ? "block" : "hidden"}>
                  <div className=" bg-white py-6 cursor-pointer">
                        <p className="text-center text-primary text-lg">Make an Impact</p>
                    </div> 
              </div>
          </nav>
      </>
    
  );
};

export default Navbar;