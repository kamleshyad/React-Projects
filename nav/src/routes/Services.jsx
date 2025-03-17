import { Link } from "react-router-dom";

export const Services = () => {

    const services = [
        { id: 1, name: "Web Development" },
        { id: 2, name: "Graphic Design" },
        { id: 3, name: "SEO Optimization" },
    ];

    return (
        <div>
            <h1>Services</h1>
            <ul>
                {services.map((service) => (
                    <li key={service.id}>
                        <Link to={`/services/${service.id}/${service.name.toLocaleLowerCase().replace(" ", "-")}`}>{service.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}