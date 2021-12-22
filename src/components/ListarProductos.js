import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const ListarProductos = (props) => {
  const eliminarProducto = (codigo) => {
    Swal.fire({
      title: '¿Está seguro de elminar el Producto',
      text: 'No podrá deshacer esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#C21605',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URL = process.env.REACT_APP_API_URL + '/' + codigo
          const respuesta = await fetch(URL, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          if (respuesta.status === 200) {
            Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success')
            props.consultarAPI()
          }
        } catch (error) {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Intente Nuevamente mas tarde',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#C21605',
          })
        }
      }
    })
  }
  return (
    <div>
      <Fragment>
        {' '}
        <h2 className="text-center">Listado de Productos</h2>
      </Fragment>
      <form className="d-flex mt-5 mb-3">
        <input type="search" className="form form-control w-25"></input>
        <button className="btn btn-outline-success ms-3">Buscar</button>
      </form>

      <Table responsive striped bordered>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {props.productos.map((producto) => {
            return (
              <tr key={producto._id}>
                {/* <td>{producto._id}</td> */}
                <td>{producto.nombreProducto}</td>
                <td>$ {producto.precio}</td>
                <td>
                  <span className="fw-bold">{producto.stock}</span>
                </td>
                <td>
                  <Link className="btn btn-warning ms-3 mt-2" to={`/productos/editar/${producto._id}`}>Editar</Link>
                  <button
                    className="btn btn-danger ms-3 mt-2"
                    onClick={() => eliminarProducto(producto._id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default ListarProductos