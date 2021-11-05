import Link from "next/dist/client/link";
const PrimaryBtnLight = ({text, link} : {text : string, link : string}) => {
    return (
        <>
            <Link href={link}>
                <button type="button" className="py-3 px-6 mr-6 mb-6 bg-white hover:bg-main text-primary duration-100">{text}</button>
            </Link>
        </>
    );
}

export default PrimaryBtnLight;