import React, { Fragment, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Fragment>
      <form className="w-50 container">
        <div class="mb-3">
          <label class="form-label">E-mail</label>
          <input
            type="email"
            class="form-control"
            required
            onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            onChange={(e)=>setPass(e.target.value)}
          ></input>
        </div>
        <button type="submit" class="btn btn-outline-secondary">
          Ingresar
        </button>
      </form>
    </Fragment>
  )
}

export default Login
