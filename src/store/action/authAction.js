function login(user) {
    return{ type: "LOGIN", payload: user};
}
function loginFail(message){
    return {type: "LOGIN_FAIL", payload:message }
}

 function loginMiddlewave (user){
    return (dispatch) => {
        try{
            console.log("user",user)
            if(!user.email || !user.password){
                dispatch(loginFail("fail roi"))
                alert("Please enter all fields")
                return;
            }else{
                 dispatch(login(user))
                 alert("Login successfully")
            }
        }catch(error){

        }
    }
}
export default loginMiddlewave;
