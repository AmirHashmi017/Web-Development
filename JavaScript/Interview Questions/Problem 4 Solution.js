// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
function PasswordValidator(password)
{
if(password.lenght<8)
{
    return false;
}
const HasUpperCase=/[A-Z]/.test(password);
const HasLowerCase=/[a-z]/.test(password);
const HasDigit=/\d/.test(password);
return HasUpperCase&&HasLowerCase&&HasDigit;
}
console.log(PasswordValidator("amirHashmi191"));