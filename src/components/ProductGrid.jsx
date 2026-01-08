import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";

export const ProductGrid = ({ handlerRemove, handlerProductSelected,  products = [] }) => {

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                    <th>update</th>
                    <th>remove</th>

                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return <ProductDetail handlerProductSelected={handlerProductSelected} handlerRemove={handlerRemove} product={product} key={product.name}></ProductDetail>
                })}

            </tbody>
        </table>
    )

}

ProductGrid.propTypes = {
    product: PropTypes.array.isRequired
}
