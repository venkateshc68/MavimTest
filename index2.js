

fetch('https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/').then((data)=>{
    //console.log(data);
    return data.json();

}).then((completedata)=>{
  //console.log(completedata[2].Crust)
 // document.getElementById('root').innerHTML=completedata[2].Crust;  

 let data1="";
 completedata.map((values)=>{
     data1+=`<div class="card">
       <h1 class="title">${values.Crust}</h1>
       
       <p>${values.Flavor}</p>
       <p class="category">${values.Order_ID}</p>
       <p class="price">${values.Size}</p>
       <p class="price">${values.Table_No}</p>
       <p class="price">${values.Timestamp}</p>
       <p class="price">id :${values.id}</p>
       </div>`
 });
 document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err)
})
