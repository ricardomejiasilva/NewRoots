import Link from "next/dist/client/link"
import Articles from "../../components/Articles"

// export const getStaticPaths = async () => {
//     const res = await fetch('https://text-api-2.herokuapp.com/articles')
//     const data = await res.json()
//     console.log(data);
    

//     const paths = data.map(item => {
//         return{
//             params: { id: item.id.toString() }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
//}

// export const getStaticProps = async (params) => {
//     const id = params.id
//     console.log(id);
    
//     const res = await fetch('https://text-api-2.herokuapp.com/articles/' + id)
//     const data = await res.json()
    
    
//     return {
//         props: { items : data }
//     }
// }

const SingleArticle = ({items}) => {
    return (
        <>
            <div className="max-w-1120 mx-auto mt-20 lg:mt-28 px-6 lgg:px-0">
                <div className="lg:px-20 mb-20">
                    <p className="text-xs text-primary mb-8 mt-12 font-bold">SEP 8, 2021 <span className="px-2">•</span > Article</p>
                    <h1 className="text-3xl md:text-5xl text-secondary font-semibold mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing scelerisque sit amet amet rhoncus. Nec.</h1>
                </div>
            </div>
            <div className="max-w-1440 mx-auto px-6 lgg:px-0 md:pt-36 relative mb-24 lg:mb-32">
                <div className="max-w-1088 w-full lg:absolute right-0 mt-24 md:-mt-32 lg:-mt-40">
                    <img className="w-full mb-64" src="/img/174.jpg" alt="" />
                </div>
                <div className="max-w-736 mx-auto -mt-36 lg:mt-48  lg:pt-96">
                    <div className="w-full">
                        <h2 className="hidden md:block text-3xl font-bold mb-4">{items.title}</h2>
                        <p className="text-2xl mb-32">{items.text}</p>

                        <img src={items.img} alt="" />

                        <p className="text-2xl mt-32">{items.text}</p>
                    </div>
                </div>
            </div>
            <Articles bg="bg-white" />
        </>
    );
}

export default SingleArticle;