import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {productRows} from '../../dummyData'
import {Link} from 'react-router-dom'

export default function ProductList() {
    const[data,setData]=useState(productRows)

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          editable: true,
          renderCell:(params)=>{
              return (
                  <div className="productListUser">
                      <img className="userListImg" src={params.row.img} alt=""/>
                      {params.row.name}
                    </div>
              )
          }
        },
        {
          field: 'stock',
          headerName: 'stock',
          width: 200,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 120,
        },
        {
            field:'action',
            headerName:'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/product/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={(id)=>{deleteItem(params.row.id)}}/>
                    </>
                )
            }
        }
        
      ];

    function deleteItem(id){
        setData(data.filter(item=> item.id !== id))
    }

    return (
        <div className="productList">
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}
