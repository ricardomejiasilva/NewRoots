import Link from "next/dist/client/link";

const ThirdBtn = ({text, link} : {text : string, link : string}) => {
    return (
        <>
            <Link href={link}>
                <button className="py-3 px-6 border-2 hover:bg-primary border-primary text-primary hover:text-white duration-100">{text}</button>
            </Link>
        </>
    );
}

export default ThirdBtn;