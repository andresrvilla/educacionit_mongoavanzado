var con = new Mongo();
var db = con.getDB("clasedos");

db.createCollection("usuarios_8", {
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
                    description: "Debe ser de tipo string",
                    minLength: 2,
                    maxLength: 100
                },
                edad: {
                    bsonType: "int",
                    minimum: 18,
                    maximum: 120
                }
            }
        }
    }
});