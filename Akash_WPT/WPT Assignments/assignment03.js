/* 3.	Create a table called  resource with resource id integer, primary key, resourcename varchar(15), status boolean
a.	Demonstrate 
i.	Insert
ii.	Update  -- category and price
iii.	Multi select – query on status
iv.	Single select  -- query on resourceid. */

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


/* con.query('create table resource (resource_id integer primary key, resource_name varchar(15),status boolean)',
    [],(err,res)=>{
        if(err){
            console.log("Error"+err);
        }
        else{
            console.log(res);
        }
    }); */
/*   con.query('insert into resource (resource_id,resource_name,status) values(?,?,?)',[5,"stones",4]
 ,(err,rows)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(rows.affectedRows);
        
    }
 }); */  

 con.query('update resource set status=? where resource_id=?',["true",5],(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        
        if(res.affectedRows===0)
        {
            console.log('not updated')
        }else if(res.affectedRows>0)
        {
            console.log(res.affectedRows);
            console.log('update successful')
        }
    }
 }); 


 /* con.query('select resource_id,resource_name,status from resource where status=?',[true],(err,rows)=>{
    if(err){
        console.log(err)
    }
    else{
        
            for (let index = 0; index < rows.length; index++) {
                console.log(rows[index].resource_id+" "+rows[index].resource_name+" "+rows[index].status)
                
            }
           
        
    }
}); */ 

/* con.query('select resource_id,resource_name,status from resource where resource_id=?',[3],(err,rows)=>{
    if(err){
        console.log(err)
    }
    else{
        
            for (let index = 0; index < rows.length; index++) {
                console.log(rows[index].resource_id+" "+rows[index].resource_name+" "+rows[index].status)
                
            }
           
        
    }
}); */

 con.query('select * from resource',[],(err,rows)=>{
    if(err){
        console.log(err);
    }
    else
        console.log(rows);
    
}); 