route.get("/create_account")

route.post("/create_account",async function(req,res) {
    var d=req.body;
    var sql=`insert into users(user_name,user_mobile,user_email,password)values(?,?,?,?)`
    var data=await exe (sql,[d.user_name,d.user_mobile,d.user_email,d.password])
    res.redirect("/login");    
});