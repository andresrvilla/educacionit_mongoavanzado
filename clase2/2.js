var con = new Mongo();
var db = con.getDB("clasedos");

db.createCollection("usuarios_2", {
    validator: {
        $jsonSchema: {
            // Si yo pongo "bsonType" como algo distinto
            // a "object", nunca voy a poder insertar algo
            // en esa coleccion
            bsonType: "string"
        }
    }
});