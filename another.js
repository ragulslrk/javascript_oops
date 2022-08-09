// this is another way of  creating the class (manually using __proto__)
 function user(user_details){
  
    this.name=user_details.name
    this.email=user_details.email
    this.age=user_details.age
 }
 user.prototype.login=()=>{
    console.log('ur logged in')
 }

 user.prototype.logout=()=>{
    console.log('ur logged out')
 }

 const user_one=new user({
    
       name:'gokul',
       email:'gokul@gmail.com',
       age:19
    
 })

 //creating the class admin andnalso implementing the inheritance 
 function admin(user_details){
    user.call(this,user_details)
 }
admin.prototype=Object.create(user.prototype)
admin.prototype.direct_method=()=>{
    console.log('this is direct method')
}
const  admin1=new admin({
    name:'hari',
    email:'hari4444@gmail.com',
    age:999
})
 console.log(user_one)