// var user={
//     name:'ragul',
//     email:'slrk4444@gmail.com',
// login(){
//     console.log(this.email+' has been logged in')
// },
// logout(){
//     console.log(this.email+' has been logged out')
// }
// }

//creating  classes in javascript 
class user{
    constructor(user_details)
    {
        this.email=user_details.email
        this.name=user_details.name
        this.age=user_details.age
        this.level_score=0
    }
    login()
    {
        console.log('ur loggedin ')
        return this
    }
    logout(){
       
            console.log('ur logged out ')
            return this
        
    }
    update_level(){
        this.level_score++
        console.log(`the  score is  ${this.level_score}`)
        return this
    }

}

//creating  instance of  the user  class

const  user_one=new user({
    name:'gokul',
    email:'gokul@gmail.com',
    age:19
})

const user_two=new user({
    name:'vasan',
    email:'vasanc2003@gmail.com',
    age:19
})
console.table({email_1:user_one,
            email_2:user_two})

//the method  chaining can be done using returning this in all methods 
//user_two.login().update_level().update_level().logout()

//inheritance 
class admin extends user{
    delete_user(user)
    {
        users=user.filter( u=>{
            return u.email !==user.email
        })
    }
}
var users=[user_one,user_two]


var admin =new admin({ 
name:'hari',
email:'hari4444@gmail.com',
age:999
})


//to delete user:admin.delet_user(user)