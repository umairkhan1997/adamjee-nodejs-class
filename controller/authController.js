

let users = [
    { userName: 'Admed', id: 1,email:'admed@gmail.com',pass:"787"},
    { userName: 'Umair', id: 2,email:'umair@gmail.com',pass:"987"},
    { userName: 'Usman', id: 3,email:'usman@gmail.com',pass:"7622"},
    { userName: 'Umar', id: 4,email:'umar@gmail.com',pass:"98687"},
]

const getusersdata = (req,res)=>{
    res.status(200).send({success:true,data:users,message:"Fetched users data successfully"})
    }


const login = (req,res)=>{
        res.status(200).send({success:true,data:users,message:"Fetched users data successfully"})
        }


const signup = (req,res)=>{
    try{
const {email,userName,pass} = req.body;

        const checkEmail = users.filter((val,ind)=>{return val.email == email } )
        console.log(checkEmail,"checkEmail");
        if(checkEmail.length > 0){
            res.status(200).send({success:false,message:"Email Duplicate,try another one!"})
        }else{
            users.push({email,userName,pass,id:users.length+1})
            res.status(200).send({success:true,message:"Signup Successfull"})
        }

    }
    catch(err){
        res.status(400).send({success:false,message:err.message})
    }
            }


module.exports = {getusersdata,login,signup}