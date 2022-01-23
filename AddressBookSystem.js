console.log("Welcome in Address book");
class AddressBook{
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(firstName,lastName,address,city,state,zip,phone,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=address;
        this.state=state;
        this.zip=zip;
        this.phone=phone;
        this.email=email;
    }

}
var prompt = require('prompt-sync')();
//let addressBook=new AddressBookModel();
function getData(){
    let readline =require('prompt-sync')();
    let firstName=readline("Enter the First Name : ");
    let lastName=readline("Enter the Last Name : ");
    let address=readline("Enter the address : ");
    let city=readline("Enter the city Name : ");
    let state=readline("Enter the state Name : ");
    let zip=readline("Enter the zip Code : ");
    let phone=readline("Enter the phone Number : ");
    let email=readline("Enter the Email id : ");
    return(new AddressBook(firstName,lastName,address,city,state,zip,phone,email));
}

console.log(getData);