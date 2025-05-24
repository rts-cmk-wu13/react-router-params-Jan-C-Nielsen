import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Dogs from "./dogs";

export default function DogDetail() {

    const { id } = useParams()
    console.log(id)

    const [dog, setDog] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:4000/dogs/${id}`)
            .then(response => response.json())
            .then(result => setDog(result))
            .finally(() => setIsLoading(false))
    }, [])

    return isLoading ? (<p>Loading...</p>) : (
        <>
        <p>Dog details</p>
        <h2>{dog.breed}</h2>
        </>
    )
}