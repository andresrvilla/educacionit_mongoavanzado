var con = new Mongo();
var db = con.getDB("clasedos");

db.createCollection("usuarios_6", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            properties: {
                _id:{
                    bsonType: "objectId"
                },
                nombre: {
                    bsonType: "string",
                    description: "Debe ser de tipo string"
                }
            }
        }
    }
});