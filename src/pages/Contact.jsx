import { Form, Navigate, useNavigate } from "react-router"
import { z } from "zod/v4"
import { useState } from "react"


const contactSchema = z.object({
    name: z.string().min(2, "Name required"),
    email: z.email(),
    message: z.string().min(1, "Message required")
})

export default function Contact() {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    function handleSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())
        console.log("Form submitted", data)

        const result = contactSchema.safeParse(data)

        if (!result.success) {
            const errors = z.treeifyError(result.error)
            console.log(errors)
            setErrors(errors.properties)
        } else {
            setErrors({})

            fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(result.data)
            }).then(res => {
                console.log("data sent!!!")
                if (res.ok) Navigate("/")
            })
        }
    }

    return(
        <>
        <Form method="post" onSubmit={handleSubmit}>
        <div>
                <label htmlFor="email">Message:</label>
                <input type="email" name ="email" placeholder="Email"></input>
                <p>{errors && errors?.message?.errors[0]}</p>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name ="message" placeholder="Message"></textarea>
                <p>{errors && errors?.message?.errors[0]}</p>
            </div>
            <button type="submit">Submit</button>
        </Form>
        </>
    )
}

