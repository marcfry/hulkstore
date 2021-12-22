import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { validacionInputs, validacionNumeros, validarNumeros } from './common/helpers'

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState(0)
  const [compania, setCompania] = useState('')
  const [stock, setStock] = useState(0)
  const [imagen, setImagen] = useState('')
  const [error, setError] = useState(false)
  const URL = process.env.REACT_APP_API_URL

  const leerCompania = (e) => setCompania(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (
      validacionInputs(nombreProducto) &&
      validacionInputs(descripcion) &&
      validacionInputs(imagen) &&
      validacionInputs(compania) &&
      validacionNumeros (precio) &&
      validacionNumeros(stock)
    ) {
      setError(false)
      const producto = {
        nombreProducto,
        descripcion,
        precio,
        compania,
        stock,
        imagen,
      }
      try {
        const cabecera = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(producto),
        }
        const respuesta = await fetch(URL, cabecera)
        if (respuesta.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Producto Agregado',
            text: 'El Producto fue agregado Correctamente',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#C21605',
          })
          e.target.reset()
          props.consultarAPI()
        }
      } catch (error) {
        console.log(error)
        Swal.fire(
          'Se produjo un error',
          'Intentelo nuevamente mas tarde',
          'error',
        )
      }
    } else {
      setError(true)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Faltan cargar Datos Obligatorios',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#C21605',
      })
    }
  }

  return (
    <div className="container">
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="mt-3">
          <label className="form-label">Nombre del Producto:*</label>
          <input
            type="text"
            className="form-control"
            id="nombreP"
            required
            onChange={(e) => setNombreProducto(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción:*</label>
          <input
            type="text"
            className="form-control"
            id="descP"
            required
            onChange={(e) => setDescripcion(e.target.value)}
          ></input>
        </div>
        <label className="form-label">Seleccionar Compañia*</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="DC"
            onChange={leerCompania}
          ></input>
          <label className="form-check-label">DC Comics</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="Marvel"
            onChange={leerCompania}
          ></input>
          <label className="form-check-label">Marvel</label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            value="Propios"
            onChange={leerCompania}
          ></input>
          <label className="form-check-label">Propios</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Precio*</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            min="0"
            onChange={(e) => setPrecio(parseInt(e.target.value))}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad*</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            min="0"
            onChange={(e) => setStock(parseInt(e.target.value))}
          ></input>
        </div>
        <div className="my-3">
          <label className="form-label">Imagen:*</label>
          <input
            type="text"
            className="form-control"
            id="nombreP"
            required
            placeholder='escriba aquí la ruta de la imagen'
            onChange={(e) => setImagen(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="btn btn-danger mt-3">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default AgregarProducto