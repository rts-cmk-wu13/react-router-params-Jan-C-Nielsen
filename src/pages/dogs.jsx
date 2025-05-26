import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router"
import "../style/dogs.scss"

export default function Dogs() {

    const dogs = useLoaderData();

    return  (
        <ul>
             { dogs.map(dog => ( 
               <li className="dogcard" key={dog.id}>
                <Link to={`/dogs/${dog.id}`}><img src={dog.image}></img>
                 <div> <h2> {dog.breed}</h2> <p> {dog.location}</p><p> {dog.short_description}</p></div></Link></li>
            ) ) }
        </ul>
    )
}