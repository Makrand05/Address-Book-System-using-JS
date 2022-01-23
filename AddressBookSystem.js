console.log("Welcome in Address book");
class AddressBook{
    //property
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
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phone=phone;
        this.email=email;
    }
    set firstName(firstName){//Set Firt name
        let regex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (regex.test(firstName)) {
        this._firstName = firstName;
        } else throw "Incorrect  Fist name";
    }
    get firstName(){return this._firstName}
    
    set lastName(lastName){//set Last Name
        let regex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (regex.test(lastName)) {
        this._lastName = lastName;
        } else throw "Incorrect  Last name";
    }
    get lastName(){return this._lastName}

    set address(address){//set address
        let regex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (regex.test(address)) {
        this._address = address;
        } else throw "Incorrect  Address";
    }
    get address(){return this._address}

    set city(city){///set City
        let regex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (regex.test(city)) {
        this._city = city;
        } else throw "Incorrect city Name";
    }
    get city(){return this._city}

    set state(state){///set State
        let regex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (regex.test(state)) {
        this._state = state;
        } else throw "Incorrect state Name";
    }
    get state(){return this._state}

}
var prompt = require('prompt-sync')();
//let addressBook=new AddressBookModel();
function getData(){
    try{
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
    catch(e){
        console.log(e);
    }
}
let m=getData();
console.log(m);