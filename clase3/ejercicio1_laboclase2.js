var con = new Mongo();
var db = con.getDB("video");

var cursor  = db.movieDetails.aggregate(
    [
        { $match: { year: { $eq: 1968 } } },
        { $match: { director: {$eq: "Stanley Kubrick"} }},
        { $project: { _id: 0, title: 1, awards: 1} }
    ]
);

while(cursor.hasNext()){
    printjson(cursor.next())
}