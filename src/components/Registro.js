import { useState } from "react";
import React from 'react';

const Registro = () => {
    const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
    return (
        <div>
            <form className="w-50 container">
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e)=>setPass(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Repetir Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e)=>setPass(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-outline-secondary">
          Registrarse
        </button>
      </form>
            
        </div>
    );
};

export default Registro;