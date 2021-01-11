var shoppingList = [[hamburguer, 2],[spaghetti, 4],[ketchup, 5],[chocolate, 7],[sugar, 6]]
    shoppingList[0]; //el sistema index empieza desde el 0. La respuesta sería hamburguer.
    shoppingList[0] = fire; // aca selecciono el item del string y lo puedo cambiar. pasa de hamburguer a fire.
    shoppingList[1,1]; // para arrays multi-función, selecciones PRIMERO el sub array y despues el item (mas sub-arrays, mas se exitnede el [])
    shoppingList.push([mayonesa]); // la función push agrega un item al ULTIMO lugar del index. quedaria: [sugar, 6], ["mayonesa"]
    shoppingList.unshift(pepperoni); // la funcion .unshift agrega un item al PRIMER lugar del index. ahora quedaria [pepperoni, hamburguer, 2]
var antiList = shoppingList.pop(); //la función pop quita el ULTIMO item, que puede ser guardado en otra variable. "[mayonesa" ahora forma parte de la var antiList
    antilist = shoppingList.shift(); // .shift te permite quitar el PRIMER item del array. ahora solo queda [_ , 2]



