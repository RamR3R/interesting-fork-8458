


// flag change 

let country=document.querySelector(".country")
let flag=document.querySelector(".flag")
let img=document.querySelector(".flag>img")
let close=document.querySelector(".close")
let BotCountry=document.querySelector(".botCountry")
// let flagDelivery=document.querySelector(".flagDelivery")
let countryData = JSON.parse(localStorage.getItem("userCountry"));


flag.addEventListener("click",()=>{
  BotCountry.style.display="flex";
  country.style.display="flex";
})
close.addEventListener("click",()=>{
  BotCountry.style.display="none";
  country.style.display="none";
 })
 
 
document.querySelector(".sc1").addEventListener("click",(e)=>{
  country.style.display="none";
  BotCountry.style.display="none";
//   flagDelivery.src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png"
  localStorage.setItem("currency","inr");
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/3909/3909444.png","India"]));
  window.location.reload()
})
document.querySelector(".sc2").addEventListener("click",()=>{
  country.style.display="none";
  BotCountry.style.display="none";
//   flagDelivery.src="https://cdn-icons-png.flaticon.com/512/197/197484.png"
  localStorage.setItem("currency","usd");
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/197/197484.png","USA"]));
  window.location.reload()
})
document.querySelector(".sc3").addEventListener("click",()=>{
  country.style.display="none";
  BotCountry.style.display="none";
//   flagDelivery.src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
  localStorage.setItem("currency","pound");
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/197/197374.png","UK"]));
  window.location.reload()
})

img.src=countryData[0]
// flagDelivery.src=countryData[0]

// -----------------------------------------------------


// use local storage token as "cartlist" to get the data for now just use dummy data for reference

let DataBase = JSON.parse(localStorage.getItem("cart")) || [];
total(DataBase);   



display(DataBase);
// console.log(DataBase)



// let filterP = document.querySelector("#filterP");
// let filterD = document.querySelector("#filterD");
// let filterR = document.querySelector("#filterR");

// filterP.addEventListener("change",()=>{
//   filterD.value =""
//   filterR.value =""
//    let data = JSON.parse(localStorage.getItem("cart")) || [];
//     if(filterP.value == "asc" || filterP.value == "")
//     {
//         data.sort((a,b)=>(a["price-inr"]-a["price-inr"]*a.discount/100)-(b["price-inr"]-b["price-inr"]*b.discount/100));
//     }
//     if(filterP.value == "dsc" || filterP.value == "")
//     {
//         data.sort((a,b)=>(b["price-inr"]-b["price-inr"]*b.discount/100)-(a["price-inr"]-a["price-inr"]*a.discount/100));    }
//     else
//     {
//         display(DataBase);   
//     }
    
//     console.log(data);
//     display(data);
//     window.reload()
// })

// filterD.addEventListener("change",()=>{
//   filterP.value = ""
//   filterR.value = ""
//   let data = JSON.parse(localStorage.getItem("cart")) || [];
//    if(filterD.value == "asc" || filterD.value == "")
//    {
//        data.sort((a,b)=>a.discount-b.discount);
//    }
//    if(filterD.value == "dsc" || filterD.value == "")
//    {
//     data.sort((a,b)=>b.discount-a.discount); }
//    else
//    {
//        display(DataBase);
//        total(DataBase);   
//    }
   
//    console.log(data);
//    display(data);
//    total(data);
//    window.reload()
// })
// filterR.addEventListener("change",()=>{
//   filterP.value = ""
//   filterD.value = ""
//   let data = JSON.parse(localStorage.getItem("cart")) || [];
//    if(filterR.value == "asc" || filterR.value == "")
//    {
//        data.sort((a,b)=>a.rating-b.rating);
//    }
//    if(filterR.value == "dsc" || filterR.value == "")
//    {
//     data.sort((a,b)=>b.rating-a.rating);   }
//    else
//    {
//        display(DataBase);
//        total(DataBase);   
//    }
   
//    console.log(data);
//    display(data);
//    window.reload()
// })


function display(data)
{
    let body  = document.querySelector("#container");
    body.innerHTML = null;
    if(data.length == 0){
        let notify = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerText = "Your cartlist is Empty";
        let signin = document.createElement("a");
        signin.setAttribute("href","./LoginNew.html");
        signin.innerText = "Click here to Login";
        let shop = document.createElement('a');
        shop.setAttribute("href","./index.html");
        shop.innerText = "Click here to Browse Products"
        notify.append(h1,signin,shop);
        notify.setAttribute("id","notify");
        body.append(notify);
    }
    else
    data.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("class","card")
        let img = document.createElement("img");
        img.setAttribute("class","img")
        let title = document.createElement("h3");
        title.setAttribute("class","title")
        let buy = document.createElement("button");
        buy.setAttribute("class","buy")
        let price = document.createElement("h4");
        price.setAttribute("class","price")
        let discountedPrice = document.createElement("h4");
        discountedPrice.setAttribute("class","discountedPrice")
        let rating = document.createElement("h4");
        rating.setAttribute("class","rating")
        let discount = document.createElement("h4");
        discount.setAttribute("class","discount")

        let add = document.createElement("div");
        add.setAttribute("class","add")
        title.innerText = element.name;
        img.setAttribute("src",element.image4);
        discount.innerText=element.discount+"%"

        if(countryData[1]==="India"){
            price.innerText="₹"+element["price-inr"]
            discountedPrice.innerText=`₹${Math.ceil(element["price-inr"]-(element["price-inr"]*element.discount)/100)}`;
          }
          if(countryData[1]==="USA"){
            price.innerText="$"+element["price-usd"]
            discountedPrice.innerText=`$${Math.ceil(element["price-usd"]-(element["price-usd"]*element.discount)/100)}`;
          }
          if(countryData[1]==="UK"){
            price.innerText="£"+element["price-pound"]
            discountedPrice.innerText=`£${Math.ceil(element["price-pound"]-(element["price-pound"]*element.discount)/100)}`;
          }
          
        buy.innerText = "ADD TO WISHLIST";
        rating.innerText="⭐"+element.rating
        let quan = document.createElement("div");
        quan.setAttribute("class","quan")
        let plus = document.createElement("button");
        plus.innerText = " + ";
        plus.addEventListener("click",()=>{
            let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
                element.quantity++;
                LS.splice(data.indexOf(element),1,element);
                localStorage.setItem("cart",JSON.stringify(LS));
                display(LS);
                total(LS);
        })
        let quantity = document.createElement("p");
        quantity.innerText = element.quantity;
        let minus = document.createElement("button");
        minus.innerText = " - ";
        minus.addEventListener("click",()=>{
            if(element.quantity == 1)
            {
                let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
                LS.splice(data.indexOf(element),1);
                localStorage.setItem("cart",JSON.stringify(LS));
                alert("Product deleted from cart");
                display(LS);
                total(LS);
            }
            else{
                let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
                element.quantity--;
                LS.splice(data.indexOf(element),1,element);
                localStorage.setItem("cart",JSON.stringify(LS));
                display(LS);
                total(LS);
            }
        })
        quan.append(plus,quantity,minus);
        let delet = document.createElement("button");
        delet.innerText = "Delete";
        delet.setAttribute("class","Delbutton")
        delet.addEventListener("click",()=>{
            let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
            LS.splice(data.indexOf(element),1);
            localStorage.setItem("cart",JSON.stringify(LS));
            display(LS);
            total(LS);
            alert("Product Removed from cartlist");
        })
        add.append(delet);

        card.append(img,title,price,discountedPrice,quan,rating,discount,add);
        // data will be use for product page
// --------------------------Do Not Touch---------------------------------------------------
let productData=[{
  "id": element.id,
  "name": element.name,
  "image1": element.image1,
  "image2": element.image2,
  "image3": element.image3,
  "image4": element.image4,
  "price-inr": element["price-inr"],
  "price-usd": element["price-usd"],
  "price-pound": element["price-pound"],
  "discount": element.discount,
  "description": element.description,
  "sex": element.sex,
  "category": element.category,
  "stock": element.stock,
  "size": element.size,
  "rating":element.rating
}]
      img.addEventListener("click",()=>{
        localStorage.setItem("product", JSON.stringify(productData));
        window.location.replace("product.html") 
      })
      title.addEventListener("click",()=>{
        localStorage.setItem("product", JSON.stringify(productData));
        window.location.replace("product.html") 
      })
  // ------------------------------------------------------------------------------------------------------
        body.append(card);
    });
    
}

function total(data){
  let price = document.getElementById("total");
  let discountedPrice=document.getElementById("totalDis")
  let x = 0;
  let y=0;
  data.forEach(element=>{
    if(countryData[1]==="India"){

      y+=Number(`${Math.ceil(element["price-inr"]-(element["price-inr"]*element.discount)/100)}`);
      x += Number(element["price-inr"])*Number(element.quantity);
      price.innerText="₹"+x;
      discountedPrice.innerText="₹"+y
    }
    if(countryData[1]==="USA"){
      y+=Number(`${Math.ceil(element["price-usd"]-(element["price-usd"]*element.discount)/100)}`);
      x += Number(element["price-usd"])*Number(element.quantity);
      price.innerText="$"+x;
      discountedPrice.innerText="$"+y
    }
    if(countryData[1]==="UK"){
      y+=Number(`${Math.ceil(element["price-pound"]-(element["price-pound"]*element.discount)/100)}`);
      x += Number(element["price-pound"])*Number(element.quantity);
      price.innerText="$"+x;
      discountedPrice.innerText="$"+y
    }
  })
  
  price.innerText = x
}

let checkout = document.getElementById("checkout");
checkout.addEventListener("click",()=>{
  let login = JSON.parse(localStorage.getItem("login-info"));
  if(login!==null)
  window.location.href = "./checkout.html";
  else
  {
    alert("Login Before Checking out");
    window.location.href = "./LoginNew.html";
  }
})