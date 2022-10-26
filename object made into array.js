var dispdata;
var data;
var arr1 = [];

    function generatePara(result){
result.map((val,indx) => {
    arr1 = val.name;
    arr2 = val.city;

    console.log("test", arr1[0]);
})
    }
    
    async function getMethod(){ 
      let  data = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        .then((dat) =>{ dispdata = data;
            
       return dat.json();
           
        }).catch(err=>console.log(err))
     
generatePara(dispdata);
    }
  
 
