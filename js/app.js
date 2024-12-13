class producto {
    constructor(id, imagen, precio, categoria, stock, color, talle, titulo) {
        this.id = id;
        this.imagen = imagen;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
        this.color = color;
        this.talle = talle;
        this.titulo = titulo;
    }
}

const productos = [
    new producto(1, "../img/top1.jpeg", 5000, "top", 15, "blanco", "s", "Top rolling stone"),
    new producto(2, "../img/top2.jpeg", 4600, "top", 8, "verde", "s", "Top militar",),
    new producto(3, "../img/top3.jpeg", 4800, "top", 10, "negro", "s", "Top espacial"),
    new producto(4, "../img/top4.jpeg", 5200, "top", 5, "negro", "s", "Top Glamour"),
    new producto(5, "../img/short1.jpeg", 8500, "short", 10, "celeste", 46, "Short de jean"),
    new producto(6, "../img/short2.jpeg", 8600, "short", 10, "celeste", 46, "short de jean clasic"),
    new producto(7, "../img/pantalon1.jpeg", 12000, "pantalon", 12, "celeste", 48, "Pantalon wadeleg jean"),
    new producto(8, "../img/pantalon2.jpeg", 13800, "pantalon", 7, "negro", 48, "Pantalon Engomado"),
    new producto(9, "../img/pantalon3.jpeg", 12800, "pantalon", 10, "negro", 46, "Pantalon Clasic"),
    new producto(10, "../img/pantalon4.jpeg", 15000, "pantalon", 3, "beige", 46, "Pantalon Star"),
];

// --- Funciones para crear y mostrar las tarjetas de productos ---

function armadorTarjetas() {
    for (const producto of productos) {
        const contenedor = document.getElementById("contenedor");
        const cardProducto = crearCardProducto(producto);
        contenedor.appendChild(cardProducto);
    }
}

function crearCardProducto(producto) {
    // Crear el contenedor principal de la tarjeta
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    card.style.margin = "1rem";

    // Crear la imagen del producto
    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = producto.imagen;
    img.alt = producto.titulo;

    // Crear el cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Título del producto
    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = producto.titulo;

    // Precio
    const precio = document.createElement("p");
    precio.className = "card-text";
    precio.innerHTML = `<strong>Precio:</strong> ${producto.precio}`;

    // Categoría
    const categoria = document.createElement("p");
    categoria.className = "card-text";
    categoria.innerHTML = `<strong>Categoría:</strong> ${producto.categoria}`;

    // Stock
    const stock = document.createElement("p");
    stock.className = "card-text";
    stock.innerHTML = `<strong>Stock:</strong> ${producto.stock > 0 ? producto.stock : "Agotado"}`;

    // Color
    const color = document.createElement("p");
    color.className = "card-text";
    color.innerHTML = `<strong>Color:</strong> ${producto.color}`;

    // Talle
    const talle = document.createElement("p");
    talle.className = "card-text";
    talle.innerHTML = `<strong>Talle:</strong> ${producto.talle}`;

    // Botón de acción (opcional)
    const boton = document.createElement("button");
    boton.className = "btn btn-primary";
    boton.textContent = "Agregar al carrito";

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    // Agregar elementos al cuerpo de la tarjeta
    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(categoria);
    cardBody.appendChild(stock);
    cardBody.appendChild(color);
    cardBody.appendChild(talle);
    cardBody.appendChild(boton);

    // Agregar imagen y cuerpo al contenedor principal
    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

function filtroCategoria() {

    let parametro = document.getElementById("categoriaRopa").value;
    const categoria = productos.filter((producto) => producto.categoria === parametro);
    console.log(categoria);
    if (parametro != "") {
        contenedor.innerHTML = "";
        ;
    } else {
        contenedor.innerHTML = "";
        armadorTarjetas()
    }

    for (producto of categoria) {
        // Crear la tarjeta
        function crearCardProducto(producto) {
            // Crear el contenedor principal de la tarjeta
            const card = document.createElement("div");
            card.className = "card";
            card.style.width = "18rem";
            card.style.margin = "1rem";

            // Crear la imagen del producto
            const img = document.createElement("img");
            img.className = "card-img-top";
            img.src = producto.imagen;
            img.alt = producto.titulo;

            // Crear el cuerpo de la tarjeta
            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            // Título del producto
            const titulo = document.createElement("h5");
            titulo.className = "card-title";
            titulo.textContent = producto.titulo;

            // Precio
            const precio = document.createElement("p");
            precio.className = "card-text";
            precio.innerHTML = `<strong>Precio:</strong> ${producto.precio}`;

            // Categoría
            const categoria = document.createElement("p");
            categoria.className = "card-text";
            categoria.innerHTML = `<strong>Categoría:</strong> ${producto.categoria}`;

            // Stock
            const stock = document.createElement("p");
            stock.className = "card-text";
            stock.innerHTML = `<strong>Stock:</strong> ${producto.stock > 0 ? producto.stock : "Agotado"}`;

            // Color
            const color = document.createElement("p");
            color.className = "card-text";
            color.innerHTML = `<strong>Color:</strong> ${producto.color}`;

            // Talle
            const talle = document.createElement("p");
            talle.className = "card-text";
            talle.innerHTML = `<strong>Talle:</strong> ${producto.talle}`;

            // Botón de acción (opcional)
            const boton = document.createElement("button");
            boton.className = "btn btn-primary";
            boton.textContent = "Agregar al carrito";

            boton.addEventListener("click", () => {
                agregarAlCarrito(producto);
            });

            // Agregar elementos al cuerpo de la tarjeta
            cardBody.appendChild(titulo);
            cardBody.appendChild(precio);
            cardBody.appendChild(categoria);
            cardBody.appendChild(stock);
            cardBody.appendChild(color);
            cardBody.appendChild(talle);
            cardBody.appendChild(boton);

            // Agregar imagen y cuerpo al contenedor principal
            card.appendChild(img);
            card.appendChild(cardBody);

            return card;
        }
        const contenedor = document.getElementById("contenedor"); // Asegúrate de tener un contenedor con este ID en tu HTML
        const cardProducto = crearCardProducto(producto);
        contenedor.appendChild(cardProducto);
    };
}

let Carrito = JSON.parse(localStorage.getItem('carrito')) || [];
function eliminarDelCarrito(index) {
    Carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(Carrito));
    actualizarCarrito();
}
function actualizarCarrito() {
    const carritoContenedor = document.getElementById("carrito"); // Asegúrate de tener este contenedor en tu HTML
    carritoContenedor.innerHTML = ""; // Limpia el contenido previo

    const h2 = document.createElement("h2");
    h2.textContent = "CARRITO DE COMPRAS";
    carritoContenedor.appendChild(h2);

    Carrito.forEach((producto) => {
        const item = document.createElement("div");
        item.innerHTML = `<p>${producto.titulo} - $${producto.precio} - ${producto.cantidad} </p>`;
        item.innerHTML += `<button onclick="eliminarDelCarrito(${Carrito.indexOf(producto)})">Eliminar</button>`;
        carritoContenedor.appendChild(item);
    });

const button = document.createElement("button");
button.className ="btn-cp";
button.textContent = "Finalizar compra";
button.addEventListener("click", () => {
    Carrito = [];
    localStorage.setItem('carrito', JSON.stringify(Carrito));
    actualizarCarrito();
});
carritoContenedor.appendChild(button);
}

function agregarAlCarrito(producto) {
    const existingProduct = Carrito.find(item => item.id === producto.id);
    let total = "";
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
    console.log(Carrito);
}


// -------------- //    
armadorTarjetas();

const mostrarProductos = (productos) => {
    const contenedor = document.getElementById("contenedor");
}
