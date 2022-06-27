/* 1.	Theory
a.	Install mysql2 package.
b.	Prove db connection works.
c.	Then start your code
i.	Don’t think look at the examples we have written in the class and copy paste. And not modify my code..

2.	Create a table called  item with itemno integer, primary key, itemname varchar(15), price integer, category varchar(15)
a.	Demonstrate 
i.	Insert
ii.	Update  -- category and price
iii.	Multi select – query on category
iv.	Single select  -- query on itemno. */



const url=" ";
const dbpar={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'ameypatekar_20_jh',
    port:3306
};

const mysql=require('mysql2');
const con=mysql.createConnection(dbpar);
console.log("Database connecting");

//code to check database connection
con.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected Successfuly")
});


con.query('select * from dept',[],(err,res)=>{
    if(err){
        console.log("Error in program \n"+err);
    }
    else{
        console.log(res);
    }
});