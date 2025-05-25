export  async function getDogs() {
    const res = await fetch("http://localhost:4000/dogs")

    if (!res.ok) throw new Error("Response not OK")

    return await res.json() ;
}

export  async function getDog({ params }) {
    console.log(params)
    const res = await fetch(`http://localhost:4000/dogs/${params.id}`)

    if (!res.ok) throw new Error("Response not OK")

    return await res.json() ;
}
