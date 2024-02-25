const items = document.getElementById('productos');
const carritoItems = document.getElementById('carrito-items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const templateCarrito = document.getElementById('template-carrito').content;

const fragmento = document.createDocumentFragment();

let carrito = {};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        console.log(data);

        // Contenedor de las tarjetas
        data.forEach(item => {
            // Clonar el contenido del template
            const clone = document.importNode(templateCard, true);
        
            // Ajustar las propiedades de la tarjeta según la estructura de tu JSON
            const imgElement = clone.querySelector('img');
            imgElement.setAttribute('src', item.thumbnailUrl);
            imgElement.classList.add('mx-auto');  // Agregar clase mx-auto para centrar horizontalmente
        
            clone.querySelector('h5').textContent = item.title;
            clone.querySelector('p span').textContent = item.precio.toFixed(2);
            clone.querySelector('.btn-dark').dataset.id = item.id;
        
            // Agregar el clon al fragmento
            fragmento.appendChild(clone);
        });
        
        items.appendChild(fragmento);
// ------------- Añadir al carrito
        const addCarrito = e => {
            if (e.target.classList.contains('btn-dark')) {
                setCarrito(e.target.parentElement);
                mostrarCarrito();
            }
            e.stopPropagation();
        };

        items.addEventListener('click', addCarrito);
    } catch (error) {
        console.log(error);
    }
};

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: parseFloat(objeto.querySelector('p span').textContent),
        cantidad: 1
    };

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }
    carrito[producto.id] = { ...producto };
};
//-------------------- Mostrar carrito
const mostrarCarrito = () => {
    carritoItems.innerHTML = '';
    let totalCarrito = 0;

    Object.values(carrito).forEach(producto => {
        const cloneProducto = templateCarrito.cloneNode(true);

        cloneProducto.querySelector('th').textContent = producto.id;
        cloneProducto.querySelector('td').textContent = producto.title;
        cloneProducto.querySelector('td + td').textContent = producto.cantidad;

        const btnInfo = cloneProducto.querySelector('.btn-info');
        const btnDanger = cloneProducto.querySelector('.btn-danger');

        btnInfo.dataset.id = producto.id;
        btnDanger.dataset.id = producto.id;
// ------------------------ Añadir objetos
        btnInfo.addEventListener('click', () => {
            // Lógica para aumentar cantidad
            producto.cantidad++;
            mostrarCarrito();
        });
// -------------------- Quitar objetos
        btnDanger.addEventListener('click', () => {
            // Lógica para disminuir cantidad
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                delete carrito[producto.id];
            }
            mostrarCarrito();
        });

        const totalProducto = producto.cantidad * producto.precio;
        cloneProducto.querySelector('span').textContent = totalProducto.toFixed(2);

        totalCarrito += totalProducto;

        fragmento.appendChild(cloneProducto);
    });

    carritoItems.appendChild(fragmento);

    // Actualizar total y mostrar u ocultar mensaje de carrito vacío
    if (totalCarrito > 0) {
        footer.innerHTML = `<th scope="col" colspan="5">Total: $${totalCarrito.toFixed(2)}</th>`;
    } else {
        footer.innerHTML = '<th scope="col" colspan="5">Carrito vacío - ¡comience a comprar!</th>';
    }
};
