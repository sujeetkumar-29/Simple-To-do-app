let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete-btn");
    
    

    item.appendChild(delbtn);
   if(inp.value){

    ul.appendChild(item);
}
    // console.log(inp.value);
    inp.value="";
    
});

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();

    }
});