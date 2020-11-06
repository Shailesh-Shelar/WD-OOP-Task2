



class available
{
type:string;

name:string;
dog=[]
cat=[]
parrot=[]
insert(type:string,name:string="tommy",breed?:string)
{   let pet=
    {
        type,
        name,
        breed,
    }
    pet.type=type;
    pet.name=name;
    pet.breed=breed;

    if(type=='dog')
    {
        this.dog.push(pet)
    }
    else if(type=="cat")
    {
        this.cat.push(pet)
    }
    else
    {
        this.parrot.push(pet)
    }
    
}

count=()=>{
    let count=[]
    count.push(this.dog.length)
    count.push(this.cat.length)
    count.push(this.parrot.length)
    console.log(`Number of Dog is ${count[0]} Number of CAT is ${count[1]} Number of Parrot is ${count[2]}`)
}


}

let obj=new available();
obj.insert("dog","cherry","beagle")
obj.insert("dog","delta","rott")
obj.insert("cat","tom")
obj.insert("parrot");
obj.count();


class request
{
    enquiry=[]
    insert(type:string)
    {
        this.enquiry.push(type)
    }
    
    isavailable()
        {
            for(let i=0;i<this.enquiry.length;i++)
            {
                if(this.enquiry[i]=="dog")
                {
                    if(obj.dog.length>0)
                    {
                        obj.dog.pop();
                        console.log(`For Enqiry no ${i} Dog is available for adoption`)
                    }
                    else
                    {
                        console.log(`For Enqiry no ${i} Dog is Not available for adoption`)
                    }
                }
                else if(this.enquiry[i]=="cat")
                {
                    if(obj.cat.length>0)
                    {
                        obj.cat.pop();
                        
                        console.log(`For Enqiry no ${i} Cat is available for adoption`)
                    }
                    else
                    {
                        console.log(`For Enqiry no ${i} Cat is Not available for adoption`)
                    }
                }
                else if(this.enquiry[i]=="parrot")
                {
                    if(obj.parrot.length>0)
                    {
                        obj.parrot.pop();
                        console.log(`For Enqiry no ${i} Parrot is available for adoption`)
                    }
                    else
                    {
                        console.log(`For Enqiry no ${i} Parrot is Not available for adoption`)
                    }
                }
                else
                {
                    console.log(`${this.enquiry[i]} is Not available For Adoption.`)
                }
            }

        }
    
}






let req=new request();
req.insert("dog")
req.insert("dog")
req.insert("cat")
req.insert("cat")
req.isavailable();


