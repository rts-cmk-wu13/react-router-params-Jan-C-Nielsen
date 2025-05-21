import { useEffect, useState } from "react"
import { Link } from "react-router"


export default function Users() {

    const [usrs, setUsrs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => setUsrs(result))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return (<p>Loading...</p>)
    }

    return isLoading ? (<p>Loading...</p>) : (
        <ul>
            {usrs.map(user => (
                <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            ))}½
        </ul>

    )
}