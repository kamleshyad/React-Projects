import { useSearchParams } from "react-router-dom";
import { Topseclayout } from "../layout/Topseclayout";
import { Link } from "react-router-dom";

export const Category = () => {

    const [searchParams] = useSearchParams();
    const isAddingNew = searchParams.get('add-new');

    return (
        <Topseclayout type='category'>
            <div>
                {isAddingNew === "category" ? (
                    <div>
                        <h2>Add a New Page</h2>
                        <form>
                            <input type="text" placeholder="Page Title" required />
                            <textarea placeholder="Page Content"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        <Link to="/page">Cancel</Link>
                    </div>
                ) : (
                    <h1>Page List</h1>
                )}
            </div>
        </Topseclayout>
    )
}
