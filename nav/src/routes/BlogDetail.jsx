import { useParams } from "react-router-dom";

export const BlogDetail = () => {
    const { id } = useParams(); // Get dynamic ID

    return (
        <div>
            <h1>Blog Detail</h1>
            <p>Reading blog post with ID: {id}</p>
        </div>
    );
};
