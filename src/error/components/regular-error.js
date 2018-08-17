import React from 'react'
import './regular-error.css'

function RegularError(props) {
  return(
    <div className='RegularError'>
      <p>
        Oh, oh ... <br />
        Algo no salió bien
      </p>
      <p>🙊🙈🙉</p>
      <span className='RegularError-reload'>
        Recarga la página nuevamente
      </span>
    </div>
  )
}

export default RegularError
