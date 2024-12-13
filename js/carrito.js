
// --- Carrito con localStorage ---

let Carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto) {
    const existingProduct = Carrito.find(item => item.id === producto.id);

    if (existingProduct) {
        if (existingProduct.cantidad < existingProduct.stock) {
            existingProduct.cantidad++;
        } else {
            alert("No hay suficiente stock disponible.");
        }
    } else {
        Carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(Carrito));
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    Carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(Carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoContenedor = document.getElementById("carrito");
    carritoContenedor.innerHTML = "";

    if (Carrito.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "El carrito está vacío.";
        carritoContenedor.appendChild(mensaje);
        return;
    }

    Carrito.forEach((producto, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p>${producto.titulo} - $${producto.precio} - Cantidad: ${producto.cantidad} 
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>
        `;
        carritoContenedor.appendChild(item);
    });
}

// --- Inicialización ---

armadorTarjetas();
actualizarCarrito(); // Mostrar el carrito al cargar la página