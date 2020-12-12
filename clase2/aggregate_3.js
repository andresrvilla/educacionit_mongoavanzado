var con = new Mongo();
var db = con.getDB("clasedos");

var cursor = db.autos.aggregate(
    [
        {
            $group: {
                _id: "$active",
                cantidad: {
                    $sum: 1 //Cuenta de 1 en 1
                },
                fecha_promedio: {
                    $avg: "$fecha_modelo"
                }
            }
        }
    ]
);

while(cursor.hasNext()){
    var o = cursor.next();
    printjson(o);
}