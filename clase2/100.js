var con = new Mongo("localhost:27017");
var db = con.getDB("clasedos");

db.createCollection("usuarios_100", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Debe ser de tipo string"
                }
            }
        }
    }
});