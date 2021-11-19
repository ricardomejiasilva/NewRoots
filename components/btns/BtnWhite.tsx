import Link from "next/dist/client/link";
const BtnWhite = ({text, link} : {text : string, link : string}) => {
    return (
        <>
            <Link href={link}>
                <button type="button" className="py-3 px-6 bg-transparent hover:bg-white hover:text-primary border-2 text-white focus:light outline-light duration-100">{text}</button>
            </Link>
            
        </>
    );
}

export default BtnWhite;