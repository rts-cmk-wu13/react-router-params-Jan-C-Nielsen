import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router"


export default function Dogs() {

    const dogs = useLoaderData();
  

    return  (
        <ul>
           
            { dogs.map(dog => ( 
               <li key={dog.id}><Link to={`/dogs/${dog.id}`}>{dog.breed}</Link></li>
            ) ) }
        </ul>

    )
}