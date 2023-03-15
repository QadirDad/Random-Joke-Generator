const btn=document.querySelector("#btn")
const jokes=document.querySelector("#jokes")


btn.addEventListener("click",()=>{
    
    function gene(){
        fetch("https://icanhazdadjoke.com/",{
            headers:{
                Accept:"Application/json"
            }
        }).then((data)=>{
            return data.json()
        }).then((getdata)=>{
            jokes.innerHTML=getdata.joke
        })
    }
    gene()
})