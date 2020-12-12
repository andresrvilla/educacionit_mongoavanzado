var con = new Mongo();
var db = con.getDB("clasedos");

db.createCollection("usuarios_5", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            /*
            Al poner explicitamente que no se puedan agregar mas propiedades
            esta validación fallará porque no incluye entre las propiedades
            validas al _id
            */
            additionalProperties: false,
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Debe ser de tipo string"
                }
            }
        }
    }
});