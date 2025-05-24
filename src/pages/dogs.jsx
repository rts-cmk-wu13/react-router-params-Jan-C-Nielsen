import { useEffect, useState } from "react"
import { Link } from "react-router"


export default function Dogs() {

    const [dogs, setDogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch("http://localhost:4000/dogs")
            .then(response => response.json())
            .then(result => setDogs(result))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return (<p>Loading...</p>)
    }

    return isLoading ? (<p>Loading...</p>) : (
        <ul>
            {dogs.map(dog => ( 
               <li key={dog.id}><Link to={`/dogs/${dog.id}`}>{dog.breed}</Link></li>
            ))}
        </ul>

    )
}