import {React, useState, useEffect} from 'react';

const productos = [
    {id:"0",nombre:"Blue Lock",precio:"950", img: "../images/blue-lock.jpg"},
    {id:"1",nombre:"Naruto",precio:"900", img: "../images/blue-lock.jpg"},
    {id:"2",nombre:"One Piece",precio:"1000", img: "../images/blue-lock.jpg"},
    {id:"3",nombre:"Vinland Saga",precio:"1000", img: "../images/blue-lock.jpg"},
 ]
 

function consultarPromesa(confirmacion) {

    return new Promise ((res,rej) => {
            if(confirmacion) {
                res(productos)
            } else {
                rej("Acceso denegado")
            }
    })

}

const Productos = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
        const productosJSX = data.map((producto, indice) => 
            <div className="card border-primary mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
                <div className="card-header">{producto.nombre}</div>
                    <div className="card-body">
                       
                        <p className="card-text">Precio: ${producto.precio}</p>
                       
                </div>
            </div>
            )

            console.log(productosJSX)
        
            setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);
    

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default Productos;

/*
*/