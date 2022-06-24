import Header from "./Header"
import React,{useState,useEffect} from "react"
import {Table } from 'react-bootstrap'
function ProductList()
{
    return(
        <div>
            <Header />
            <h1>Product list</h1>
            <Table />
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Category</td>

            </tr>
        </div>
    )
}
export default ProductList