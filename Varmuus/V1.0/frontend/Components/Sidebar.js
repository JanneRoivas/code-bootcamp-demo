import React from 'react'



  
function Sidebar(props) {
    const products = props.tyyppi
    return (
        <div className="sidebar">
            {products.map(products => products)}
        </div>
    )
}

export default Sidebar