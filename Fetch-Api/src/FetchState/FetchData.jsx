import { useState } from "react"

const FetchData = () => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    const handleFetch = async () => {
        setLoading(true);
        
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data)
            setPosts(data)
        } catch(err) {
            setError(true)
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className="fetchsec">
            <div className="container">
                <div className="topsec">
                    <button className="fetchbtn" onClick={() => handleFetch()}>{loading ? "Loading..." : "Fetch Posts"}</button>
                    {
                        error && (
                            <span className="error-msg">Something went error</span>
                        )
                    }
                </div>
                <div className="cardsec">
                    <ul className="reset">
                        {
                            posts.length > 0 && (
                                posts.map((post, index) => {
                                    return(
                                        <li key={post.id ?? index}>
                                            <div className="cardimg">
                                                <img src={post.image} width="150" height="150" alt={post.title} />
                                            </div>
                                            <div className="cardcontent">
                                                <h2>{post.title}</h2>
                                                <p>Price: {post.price}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FetchData
