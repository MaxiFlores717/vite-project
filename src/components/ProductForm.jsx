import { useEffect, useState } from "react"


const initialDateForm = {
    id: 0,
    name: '',
    description: '',
    price: ''

}
export const ProductForm = ({ productSelected, handlerAdd }) => {

    const [form, setForm] = useState(initialDateForm);

    const { id, name, description, price } = form;

    useEffect(() => {
        setForm(productSelected);
    }, [productSelected]);


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (!name || !description || !price) {
                alert('Debe completas los datos del formulario')
                return
            }

            //console.log(form);
            handlerAdd(form);
            setForm(initialDateForm);
        }}>
            <div>

                <input className="form-control my-3 w-75" placeholder="Name" name="name" value={name} onChange={(Event) => setForm({
                    ...form, name: Event.target.value
                })} />
            </div>
            <div>

                <input className="form-control my-3 w-75" placeholder="Description" name="description" value={description} onChange={(Event) => setForm({
                    ...form, description: Event.target.value
                })} />
            </div>
            <div>
                <input className="form-control my-3 w-75" placeholder="Price" name="price" value={price} onChange={(Event) => setForm({
                    ...form, price: Event.target.value
                })} />

            </div>
            <div>

                <button type="submit" className="btn btn-primary">
                    {id>0 ? 'Update': 'Create' }
                </button>
            </div>

        </form>
    )

}