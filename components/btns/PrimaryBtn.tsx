import Link from "next/dist/client/link";
const PrimaryBtn = ({text, link} : {text : string, link : string}) => {
    return (
        <>
            <Link href={link}>
                <button type="button" className="py-3 px-6 bg-primary hover:bg-secondary text-white focus:light outline-light duration-100">{text}</button>
            </Link>
            
        </>
    );
}

export default PrimaryBtn;