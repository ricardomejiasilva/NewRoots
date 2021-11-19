import Link from "next/dist/client/link"
export const getStaticProps = async () => {

    const res = await fetch('https://text-api-2.herokuapp.com/articles')
    const data = await res.json()
    
    
    return {
        props: { items : data }
    }
}

const index = ({items}) => {
    console.log(items);
    
    return (
        <div>
            <h1 className="font-body text-9xl text-secondary font-bold">Articles</h1>
            {items.map((item:any)=> (
                <Link  href={'/articles/' + item.id}>
                    <a key={item.id}>
                        <div className="border-2 shadow-lg w-full bg-blue-100 py-6 mb-6 text-center">
                            <img className="max-w-352 mx-auto" src={item.img} alt="" />
                            <h3>{item.title}</h3>
                        </div>
                        
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default index;