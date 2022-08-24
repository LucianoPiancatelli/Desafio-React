import Carrito from './Carrito.js'
const Nav =() => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MangaFull</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
           
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Editoriales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Precios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Envios</a>
        </li>
       
      </ul>
      
    </div>
    <Carrito />
  </div>
</nav>

)
}

export default Nav;
