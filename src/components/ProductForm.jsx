import { useState } from "react"


const initialDateForm = {
    name: '',
    description: '',
    price: ''

}
export const ProductForm = () => {

    const [form, setForm] = useState(initialDateForm);

    const { name, description, price } = form;

    return (
        <form>
            <input placeholder="Name" name="name" value={name} onChange={(Event) => setForm({
                ...form, name: Event.target.value
            })} />
            <input placeholder="Description" name="description" value={description} onChange={(Event) => setForm({
                ...form, description: Event.target.value
            })} />
            <input placeholder="Price" name="price" value={price} onChange={(Event) => setForm({
                ...form, price: Event.target.value
            })} />

        </form>
    )

}