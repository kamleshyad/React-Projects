import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

export const Blog = () => {
    const [searchParams] = useSearchParams();
    
    const isAddingNew = searchParams.get("add-new"); // Check if ?add-new=blog exists

    // Sample blog posts
    const [blogs, setBlogs] = useState([
        { id: 1, title: "React Basics" },
        { id: 2, title: "Advanced React Patterns" },
        { id: 3, title: "State Management with Zustand" }
    ]);

    // Handle blog submission
    const handleAddBlog = (e) => {
        e.preventDefault();
        const newBlogTitle = e.target.title.value;
        if (newBlogTitle) {
            setBlogs([...blogs, { id: blogs.length + 1, title: newBlogTitle }]);
        }
    };

    return (
        <div>
            <h1>Blog</h1>

            {/* Show 'Add New Blog' form if ?add-new=blog is in the URL */}
            {isAddingNew === "blog" ? (
                <div>
                    <h2>Add a New Blog</h2>
                    <form onSubmit={handleAddBlog}>
                        <input type="text" name="title" placeholder="Title" required />
                        <textarea name="content" placeholder="Content"></textarea>
                        <button type="submit">Submit</button>
                    </form>

                    {/* Back to blogs list */}
                    <Link to="/blog">Cancel</Link>
                </div>
            ) : (
                <>
                    <ul>
                        {blogs.map((blog) => (
                            <li key={blog.id}>
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Dynamic Link to Add a New Blog */}
                    <Link to="/blog?add-new=blog">Add New Blog</Link>
                </>
            )}
        </div>
    );
};
