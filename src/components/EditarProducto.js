import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'
import { useParams, withRouter } from 'react-router-dom'
import { validacionInputs, validacionNumeros } from './common/helpers'

const EditarProducto = (props) => {
  const [producto, setProducto] = useState({})
  const URL = process.env.REACT_APP_API_URL
  const { id } = useParams()
  const nombreProductoRef = useRef('')
  const descripcionRef = useRef('')
  const [compania, setCompania] = useState('')
  const precioRef = useRef(0)
  const stockRef = useRef(0)
  const imagenRef = useRef('')
  const [error, setError] = useState(false)

  useEffect(() => {
    consultarProducto()
  }, [])

  const consultarProducto = async () => {
    try {
      const respuesta = await fetch(URL + '/' + id)
      if (respuesta.status === 200) {
        const productoEncontrado = await respuesta.json()
        setProducto(productoEncontrado)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const leerCompania = (e) => setCompania(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let _compania = compania === '' ? producto.compania : compania

    if (
      validacionInputs(nombreProductoRef.current.value) &&
      validacionInputs(descripcionRef.current.value) &&
      validacionInputs(imagenRef.current.value) &&
      validacionInputs(_compania) &&
      validacionNumeros(parseInt(precioRef.current.value)) &&
      validacionNumeros(parseInt(stockRef.current.value))
    ) {
      setError(false)
      try{
          const productoModificado= {
              nombreProducto: nombreProductoRef.current.value,
              descripcion: descripcionRef.current.value,
              imagen: imagenRef.current.value,
              compania: _compania,
              precio: parseInt(precioRef.current.value),
              stock: parseInt(stockRef.current.value)
                        }
           const respuesta = await fetch(`${URL}/${producto._id}`,{
               method: "PUT",
               headers:{"Content-Type":"application/json"},
               body: JSON.stringify(productoModificado)
               
           })
           if(respuesta.status ===200){
            Swal.fire({
                icon: 'success',
                title: 'Producto Modificado',
                text: 'El Producto fue Modificado Correctamente',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#C21605',
              })
              props.consultarAPI();
              props.history.push('/productos/')
           }
           


      }catch(error){
      console.log(error)}

    } else {
      setError(true)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text:
          'Faltan cargar Datos Obligatorios o alguno no cumple los requisitos',
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
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción:*</label>
          <input
            type="text"
            className="form-control"
            id="descP"
            defaultValue={producto.descripcion}
            ref={descripcionRef}
            required
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
            defaultChecked={producto.compania && producto.compania === 'DC'}
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
            defaultChecked={producto.compania && producto.compania === 'Marvel'}
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
            defaultChecked={
              producto.compania && producto.compania === 'Propios'
            }
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
            defaultValue={producto.precio}
            ref={precioRef}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad*</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            min="0"
            defaultValue={producto.stock}
            ref={stockRef}
          ></input>
        </div>
        <div className="my-3">
          <label className="form-label">Imagen:*</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="escriba aquí la ruta de la imagen"
            defaultValue={producto.imagen}
            ref={imagenRef}
          ></input>
        </div>

        <button type="submit" className="btn btn-danger">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default withRouter(EditarProducto);