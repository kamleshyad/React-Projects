import { useNavigate } from "react-router-dom";

export const Topseclayout = ({ children, type }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="topsec">
                <div className="topleft">
                    <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3> {/* Capitalize first letter */}
                </div>
                <div className="topright">
                    <button onClick={() => navigate(`/${type}?add-new=${type}`)}>
                        Add New {type}
                    </button>
                </div>
            </div>
            {children}
        </>
    );
};
