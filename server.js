var express=require('express')

var app=express();

app.get('/api/customers',function(req,res){
	const customers=[
		{id:1, firstName:'John',lastName:'Doe'},
		{id:2, firstName:'Joghn',lastName:'Dode'},
		{id:3, firstName:'Jbohn',lastName:'Does'}
	];
	res.json(customers);
})

app.listen(5000,function(req,res){
	console.log("listening to port 5000");
});