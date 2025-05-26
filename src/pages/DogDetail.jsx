import { useEffect, useState } from "react";
import Dogs from "./dogs";
import { Link, useLoaderData } from "react-router"
import "../style/dogsdetail.scss"

export default function DogDetail() {
 
    const dog = useLoaderData();
 
    return  (
             <>
             <div className="dogdetail">
             <img src={dog.image}></img>
              <h2>{dog.breed}</h2>
              <p> {dog.location}</p>
            <p>The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf) is a domesticated carnivore of the family Canidae, known for its loyalty, intelligence, and long-standing companionship with humans across various cultures and environments.</p>
            <Link to={`/dogs`}>Back</Link>
            </div>
         </>)

}
