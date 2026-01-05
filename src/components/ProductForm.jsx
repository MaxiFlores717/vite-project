import { useState } from "react"


const initialDateForm = {
    name: '',
    description: '',
    price: ''

}
export const ProductForm = ({handlerAdd}) => {

    const [form, setForm] = useState(initialDateForm);

    const { name, description, price } = form;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(!name || !description || !price){
                alert('Debe completas los datos del formulario')
                return
            }

            console.log(form);
            handlerAdd(form);
            setForm(initialDateForm);
        }}>
            <div>

                <input style={{ 'marginBottom': '4px' }} placeholder="Name" name="name" value={name} onChange={(Event) => setForm({
                    ...form, name: Event.target.value
                })} />
            </div>
            <div>

                <input style={{ 'marginBottom': '4px' }} placeholder="Description" name="description" value={description} onChange={(Event) => setForm({
                    ...form, description: Event.target.value
                })} />
            </div>
            <div>
                <input style={{ 'marginBottom': '4px' }} placeholder="Price" name="price" value={price} onChange={(Event) => setForm({
                    ...form, price: Event.target.value
                })} />

            </div>
            <div>

                <button type="submit">
                    Create
                </button>
            </div>

        </form>
    )

}