var available = /** @class */ (function () {
    function available() {
        var _this = this;
        this.dog = [];
        this.cat = [];
        this.parrot = [];
        this.count = function () {
            var count = [];
            count.push(_this.dog.length);
            count.push(_this.cat.length);
            count.push(_this.parrot.length);
            console.log("Number of Dog is " + count[0] + " Number of CAT is " + count[1] + " Number of Parrot is " + count[2]);
        };
    }
    available.prototype.insert = function (type, name, breed) {
        if (name === void 0) { name = "tommy"; }
        var pet = {
            type: type,
            name: name,
            breed: breed
        };
        pet.type = type;
        pet.name = name;
        pet.breed = breed;
        if (type == 'dog') {
            this.dog.push(pet);
        }
        else if (type == "cat") {
            this.cat.push(pet);
        }
        else {
            this.parrot.push(pet);
        }
    };
    return available;
}());
var obj = new available();
obj.insert("dog", "cherry", "beagle");
obj.insert("dog", "delta", "rott");
obj.insert("cat", "tom");
obj.insert("parrot");
obj.count();
var request = /** @class */ (function () {
    function request() {
        this.enquiry = [];
    }
    request.prototype.insert = function (type) {
        this.enquiry.push(type);
    };
    request.prototype.isavailable = function () {
        for (var i = 0; i < this.enquiry.length; i++) {
            if (this.enquiry[i] == "dog") {
                if (obj.dog.length > 0) {
                    obj.dog.pop();
                    console.log("For Enqiry no " + i + " Dog is available for adoption");
                }
                else {
                    console.log("For Enqiry no " + i + " Dog is Not available for adoption");
                }
            }
            else if (this.enquiry[i] == "cat") {
                if (obj.cat.length > 0) {
                    obj.cat.pop();
                    console.log("For Enqiry no " + i + " Cat is available for adoption");
                }
                else {
                    console.log("For Enqiry no " + i + " Cat is Not available for adoption");
                }
            }
            else if (this.enquiry[i] == "parrot") {
                if (obj.parrot.length > 0) {
                    obj.parrot.pop();
                    console.log("For Enqiry no " + i + " Parrot is available for adoption");
                }
                else {
                    console.log("For Enqiry no " + i + " Parrot is Not available for adoption");
                }
            }
            else {
                console.log(this.enquiry[i] + " is Not available For Adoption.");
            }
        }
    };
    return request;
}());
// let dogenter=()=>{
//     let dog :string=(prompt("Enter Name of Dog"))
//     obj.insert("dog",dog)
// }
// let catenter=()=>{
//     let cat :string=(prompt("Enter Name of Cat"))
//     obj.insert("dog",cat)
// }
// let parrotenter=()=>{
//     let parrot :string=(prompt("Enter Name of Parrot"))
//     obj.insert("dog",parrot)
// }
// let dogreq=()=>{
//     req.insert("dog")
// }
// let catreq=()=>{
//     req.insert("dog")
// }
// let parrotreq=()=>{
//     req.insert("dog")
// }
var req = new request();
req.insert("dog");
req.insert("dog");
req.insert("cat");
req.insert("cat");
req.isavailable();
