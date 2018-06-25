import loki from "lokijs";

class ProductosApi {

    constructor() {

    }

    todos() {
        console.log(this.productos)

        // var db = new loki('perseo.db');

        //  console.log(this.db)
        return ["Camiseta Racing", "Camiseta Racing Suplente"]
    }
}

export default ProductosApi;