import React from 'react'
// import ReactDOM from 'react-dom'
// render es metodo de react-dom
import { render } from 'react-dom'
import Home from '../pages/containers/home'
// import Media from './src/playlist/components/media'
// import Playlist from './src/playlist/components/playlist'
import data from '../api.json'
// console.log('Hola mundo')

const container = document.getElementById('app')

// ReactDOM.render(que voy a renderizar, donde lo hare)

// const holaMundo = <h1>hola estudiante</h1>
// ReactDOM.render(<Media />, app)
render(<Home data={data} />, app)
