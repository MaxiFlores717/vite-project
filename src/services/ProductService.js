import axios from "axios";

const initProducts = [
    {
        id: 1,
        name: 'Monitor Samsumg',
        price: 500,
        description: 'El monitor es bueno'
    },
    {
        id: 2,
        name: 'Iphone 14',
        price: 800,
        description: 'El cecular es bueno'
    }

];

const baseUrl = 'http://localhost:8080/products';

export const listProduct = () => {
    return initProducts;


}

export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;
        
    } catch (error) {
        console.log(error);
    }

        return null;

}

export const create = async ({name, price, description}) => {
    try {
        const response = await axios.post(baseUrl,{
            name: name,
            price: price,
            description: description,
        });
        return response;
        
    } catch (error) {
        console.log(error);
    }

        return undefined;

}

export const update = async ({id, name, price, description}) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`,{
            name: name,
            price: price,
            description: description,
        });
        return response;
        
    } catch (error) {
        console.log(error);
    }

        return undefined;

}

export const remove = async (id) => {
    try {
        console.log(id)
        const response = await axios.delete(`${baseUrl}/${id}`);
        
    } catch (error) {
        console.log(error);
    }
}