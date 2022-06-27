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

const express = require('express');
const app = express();

app.use(express.static("cp"))


app.get('/bankpage',(req,res)=>{


    let input= req.query.accountnumber;
    let output={status:false, bal:"",message:"Account number not found"};

    con.query('select balance from bankdetails where acno=?',[input],(err,rows)=>{
        if(err){
            console.log("error has occured let us see");
        }
        else{
            if(rows.length>0)
            {
                output.status=true;
                output.message="Account number found";
                output.bal=rows[0].balance;
                
            }
        }
        res.send(output);
    });

});

app.listen(909,function(){
    console.log("server listening at port 909 ...")
});
