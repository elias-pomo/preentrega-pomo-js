
/* ALGORITMO CON CONDICIONAL */
function mayorMenor() {

    let numero1 = parseInt(prompt("ingresa el primer numero: "));
    let numero2 = parseInt(prompt("ingresa el segundo numero: "));

    if (numero1 > numero2) {
        alert("el numero " + numero1 + " es mayor");
    }
    else if (numero2 > numero1) {
        alert("el numero " + numero2 + " es mayor");
    }
    else {
        alert("los numeros son iguales");
    }
}
/* ALGORITMO CON CONDICIONAL */

/* ------------------------- */

/* ALGORITMO CON CICLO */

function sueldo() {
    let n = parseInt(prompt("ingrese el valor de N:"));

    for (let i = 1; i <= n; i++) {
        let horasTrabajadas = parseInt(prompt("ingrese las horas trabajadas:"));
        if (horasTrabajadas <= 180) {
            sueldoTotal = horasTrabajadas * 560;
        } else {
            let horasExtras = horasTrabajadas - 180;
            let sueldoBase = 180 * 560;
            sueldoTotal = sueldoBase + (horasExtras * 600);
        }
        console.log("el sueldo total del empleado es: " + sueldoTotal);
        alert("el sueldo total del empleado es: " + sueldoTotal);
    }
}

/* ALGORITMO CON CICLO */

/* ------------------------- */

/* SIMULADOR INTERACTIVO */

function calcularPropina() {
    const total = parseFloat(document.getElementById("totalCuenta").value);
    const porcentaje = parseFloat(document.getElementById("porcentajePropina").value);
    propina = (total * (porcentaje / 100)).toFixed(2);
    document.getElementById("resultado").innerText = `Propina: $${propina}`;
}

/* primer pre entrega */

/* ------------------------- */

/* segunda pre entrega */

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
]
function armadorTarjetas(){
    for (producto of productos) {
        // Crear la tarjeta
        const crearCardProducto = (producto) => {
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
            boton.className = "btn btn-primary onclick=añadirProducto();";
            boton.textContent = "Agregar al carrito";
    
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
        };
        const contenedor = document.getElementById("contenedor"); // Asegúrate de tener un contenedor con este ID en tu HTML
        const cardProducto = crearCardProducto(producto);
        contenedor.appendChild(cardProducto);
    };
}
armadorTarjetas();

const mostrarProductos = (productos) => {
    const contenedor = document.getElementById("contenedor");
}
/* filtrar por categoria */
function filtroCategoria() {

    let parametro = document.getElementById("categoriaRopa").value;
    const categoria = productos.filter((producto) => producto.categoria === parametro);
    console.log(categoria);
    if(parametro != ""){
        contenedor.innerHTML = "";
        ;
    }else{
        contenedor.innerHTML = "";
        armadorTarjetas()
    }
    
    for(producto of categoria){
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
    

    };
function añadirProducto(){
console.log("sexo");
}



// Limpiar el contenedor


/* segunda pre entrega */