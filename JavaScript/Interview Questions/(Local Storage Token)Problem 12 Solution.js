// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.
function StoreToken(token,expireinminutes)
{
    let now=new Date();
    let expirytime=now.getTime()+expireinminutes*60*1000;
    let tokeninfo={
        Token:token,
        Expiry:expirytime
    }
    localStorage.setItem("Token",JSON.stringify(tokeninfo));
}
function IsTokenValid()
{
    let token=JSON.parse(localStorage.getItem("Token"));
    if(token)
    {
        let now=new Date().getTime();
        if(now<token.Expiry)
        {
            return true;
        }
        return false;
    }
    return false;
}
StoreToken("Metro",0.5);
console.log(IsTokenValid());