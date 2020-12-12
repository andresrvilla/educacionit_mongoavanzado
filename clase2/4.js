var con = new Mongo();
var db = con.getDB("clasedos");

db.createCollection("usuarios_4", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                nombre: {
                    bsonType: "string"
                }
            }
        }
    }
});