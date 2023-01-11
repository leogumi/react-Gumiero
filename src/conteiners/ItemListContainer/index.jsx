import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import productJson from '../../data/products.json';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])


    const { categoryId } = useParams()
    console.log(categoryId)


    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then(products => {

                if (categoryId) {
                    const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
                    console.log(productosFiltradosPorCategoria)
                    setProducts(productosFiltradosPorCategoria)
                } else {
                    setProducts(products)
                }
            })
            .catch((err) => {
                alert("Hubo un error")
            });

    }, [categoryId])

    const handleChange = (event) => {
        const value = event.target.value
        const productsFiltradosPorInput = productJson.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
        setProducts(productsFiltradosPorInput)
    }

    console.log(products)

    return (
        <div>
            <input onChange={handleChange} placeholder='Buscar Producto'></input>
            <ItemList productos={products} />
        </div>
    )
}

export default ItemListContainer