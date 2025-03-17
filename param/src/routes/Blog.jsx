import { Link, useSearchParams } from "react-router-dom";
import { Topseclayout } from "../layout/Topseclayout";

export const Blog = () => {
    const [searchParams] = useSearchParams();
    const isAddingNew = searchParams.get("add-new");

    // Debugging logs
    console.log("Query Parameter (add-new):", isAddingNew);

    return (
        <Topseclayout type="blog">
            <div>
                {isAddingNew === "blog" ? (
                    <div>
                        <h2>Add a New Blog</h2>
                        <form>
                            <input type="text" placeholder="Title" required />
                            <textarea placeholder="Content"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        <Link to="/blog">Cancel</Link>
                    </div>
                ) : (
                    <h1>Blog List</h1>
                )}
            </div>
        </Topseclayout>
    );
};
