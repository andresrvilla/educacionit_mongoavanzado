var con = new Mongo();
var db = con.getDB("clasedos");

var cursor = db.autos.aggregate(
    [
        { 
            $match: { 
                $or: [
                    { "marca": "Chevrolet"},
                    { "marca": "Cadillac"},
                ]
            } 
        },
        {
            $group: {
                _id: "$color",
                cantidad: {
                    $sum: 1 //Cuenta de 1 en 1
                }
            }
        },
        {
            $match: {
                "cantidad": 2
            }
        }
    ]
);

while(cursor.hasNext()){
    var o = cursor.next();
    printjson(o);
}