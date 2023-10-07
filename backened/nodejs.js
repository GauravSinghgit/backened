/*var cluster = require('cluster');
if(cluster.isWorking)
{
    console.log('child threadd');

}
else
{
    console.log('parent threa');
    cluster.fork();
    cluster.fork();
}
*/
var express = require('express');
var app = express();
app.get('/',function(req,res)
{
    res.send('hellow world');
});
var server = app.listen(8081, function()
{
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s",host,port)
})

