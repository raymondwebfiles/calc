document.write("Hello<br>");

let array=[
    'Rom',
    'Ram',
    'Lav', 
];

document.write(array.join(' ')+"<br>");

let array2 = [
    'a','b','c',
];

function go(arg){
    for(let i=0; i<arg.length; i++){
        document.write(arg[i]+"<br>");
    }  
}
go(array2);

document.write("<hr>");

let alpha=['a','b','c','d','e','f'];
class arr{
    constructor(boxdata){
        this.data = boxdata;
    }
    list(){
        let newbox = this.data;
        for(let ctr=0; ctr<newbox.length; ctr++){
            document.write("This alphabet "+ctr+" : "+newbox[ctr]+"<br>");
        }
    }
    add(newdata){
        this.data.push(newdata);
    }
    del(alpha){
        this.data.splice(alpha, 1);
    }
}
let letter = new arr(alpha);
letter.del(3);
letter.add("Anton");
letter.add("Anton");
letter.list();

let header = document.getElementById('header');
header.style.background = "blue";