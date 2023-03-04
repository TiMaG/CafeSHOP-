var ingredientes_opcion1 = ['Whole Milk', 'Syrup', 'Ice', 'Chocolate Sauce', 'Chocolate Chips', 'Vanilla', 'Cocoa Powder', 'Whipped Cream'];
var ingredientes_opcion2 = ['Milk', 'Syrup', 'Ice', 'Chocolate Sauce', 'Caramel Topping', 'Whipped Cream', 'Vanilla Powder'];
var ingredientes_opcion3 = ['Milk', 'Syrup', 'Ice', 'Strawberry Sauce', 'Strawberry Pieces', 'Whipped Cream', 'Vanilla Powder'];
var ingredientes_opcion4 = ['Milk', 'Syrup', 'Ice', 'Green Sauce', 'Special Toppings', 'Whipped Cream', 'Green Tea Leaves'];

function cargar(opcion) {
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if (opcion == 1) {
        nombre.innerHTML = "Chocolate Frappe"
        descripcion.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventor sunt quas official sapiente? Velit.";
        fotoPrincipal.src = "img/f1.png";
        circulo.style.backgroundColor = "#f88965";
        ingredientes.innerHTML = "";
        for (x = 0; x < ingredientes_opcion1.length; x++) {
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if (opcion == 2) {
        nombre.innerHTML = "Vanilla Frappe"
        descripcion.innerHTML = "But to the architect that, because, often not with the wise, he is or is asperated to bear the most worthy from where!";
        fotoPrincipal.src = "img/f2.png";
        circulo.style.backgroundColor = "#f1c072";
        ingredientes.innerHTML = "";
        for (x = 0; x < ingredientes_opcion2.length; x++) {
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if (opcion == 3) {
        nombre.innerHTML = "Strawberry Frappe"
        descripcion.innerHTML = "Find out the great pleasures of these great architects! Or does it take times to be prepared for, really easy from, just for some, rougher that laborious one?";
        fotoPrincipal.src = "img/f3.png";
        circulo.style.backgroundColor = "#d46475";
        ingredientes.innerHTML = "";
        for (x = 0; x < ingredientes_opcion3.length; x++) {
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==4){
        nombre.innerHTML = "Tea frappe"
        descripcion.innerHTML = "Find out the great pleasures of these great architects! Or it takes time";
        fotoPrincipal.src = "img/f4.png";
        circulo.style.backgroundColor = "#398969";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion4.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    
}