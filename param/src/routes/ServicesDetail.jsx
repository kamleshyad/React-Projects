import { useParams } from "react-router-dom"

export const ServicesDetail = () => {

    const {id, name} = useParams();

    return (
        <>
            <h1>Services Id {id}</h1>
            <h1>Services Id {name}</h1>
        </>
    )
}
