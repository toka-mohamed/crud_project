var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDesc=document.getElementById("productDesc");
var productContainer;
if(localStorage.getItem("productList")==null){
    productContainer=[];
}else{
    productContainer=JSON.parse(localStorage.getItem("productList"));
}
function getproduct(){
    if(check()==true){
    var product={
       name:productName.value,
       price:productPrice.value,
       category:productCategory.value,
         desc:productDesc.value,

    };
    productContainer.push(product);
    localStorage.setItem("productList",JSON.stringify(productContainer));
    console.log(productContainer);
    dispaly();

clearform();    //when he add then clear the form
    }else{
        alert("the inputs are empty");
    }
}

function clearform(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";



}

function dispaly(){
    var cartoona=``;

    for(var i=0;i<productContainer.length;i++){
        cartoona+=`<tr>  <td>${i}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td> <button  onclick="changeValues(${i})"  class="btn btn-outline-danger">update</button> </td>
         <td> <button onclick="deleted(${i})" class="btn btn-outline-warning">delete</button> </td>

                </tr>

`
    }
    document.getElementById("demo").innerHTML=cartoona;
}

function check(){
    if(productName.value!="" && productPrice.value!="" &&productCategory.value!="" && productDesc.value!=""){
        return true;
    }else{
        return false;
    }
}

function deleted(index){
productContainer.splice(index,1);
localStorage.setItem("productList",JSON.stringify(productContainer));
dispaly();
}


function searchProduct(searchterm){
    var cartoona=``;
for(var i=0;i<productContainer.length;i++){
if(productContainer[i].name.toLowerCase().includes(searchterm.toLowerCase())==true){
    cartoona+=`<tr>  <td>${i}</td>
    <td>${productContainer[i].name}</td>
    <td>${productContainer[i].price}</td>
    <td>${productContainer[i].category}</td>
    <td>${productContainer[i].desc}</td>
    <td> <button onclick="changeValues(${i})"  class="btn btn-outline-danger">update</button> </td>
    <td> <button onclick="deleted(${i})"      class="btn btn-outline-warning">delete</button> </td>

    </tr>`;



}

else{
    console.log("Mesh maogod");
}

}
document.getElementById("demo").innerHTML=cartoona;



}

function changeValues(indexvalue){
    productName.value=productContainer[indexvalue].name;
    productPrice.value=productContainer[indexvalue].price;
    productCategory.value=productContainer[indexvalue].category;
    productDesc.value=productContainer[indexvalue].desc;

}
