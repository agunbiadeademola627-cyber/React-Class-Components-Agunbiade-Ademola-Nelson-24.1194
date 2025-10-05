import React from 'react';
//PRODUCTS component
function Products() {

    const colorz={ //Inline css block
        color: 'blue'
    };

    return (
        <div>
        <h2>Product Section</h2>

        <p style={colorz}>
            <i>
                Praesent feugiat ante interdum justo congue, sed tempus diam commodo. Proin ac rutrum urna. Vivamus et nunc tortor. Etiam aliquam aliquam purus vitae pharetra. Nullam lobortis sit amet nulla sit amet eleifend. Fusce elementum augue quis leo ultricies condimentum. Phasellus nec eros sed sem vulputate iaculis id eu massa.
            </i>
        </p>
        </div>
    );
}

export default Products;