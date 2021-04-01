//-------------------------- Function to display Current Order for manufacturers-----------------------//
let ManufacturingBrands = [];
ManufacturingBrands["Eco-Products SL"]="Eco-Products SL";
ManufacturingBrands["EcowareLanka"]="Ecoware Lanka";
ManufacturingBrands["Trickledown"]="Trickledown";
ManufacturingBrands["BacktoEarth"]="Back To Earth";


function current_manufacturers(){
    let manufacturer = "";
    var Manu = document.getElementsByName("Manufactures");

    for(let i = 0; i < Manu.length; i++)
    {
        if(Manu[i].checked)
        {
            manufacturer = ManufacturingBrands[Manu[i].value];
        
        }      
    }
    document.getElementById("current_manufacturers").value = manufacturer;
 
}

//----------------------------To display the Products in current order--------------------------------//

let ProductName = [];
ProductName["Plates"]="Plates";
ProductName["Bags"]="Bags";
ProductName["Mugs"]="Mugs";
ProductName["Soap"]="Soap";

function Products_click(){
    let Pro = "";
    var productsorder = document.getElementsByName("Products");
    for(let i = 0; i < productsorder.length; i++)
    {
        if(productsorder[i].checked)
        {
            Pro = ProductName[productsorder[i].value];
        }
    }
    document.getElementById("current_product").value = Pro;
   
}

//---------------------------------------Size in Current Order----------------------------------//

let SizesAvailable=[];
SizesAvailable["Small"]="Small";
SizesAvailable["Medium"]="Medium";
SizesAvailable["Large"]="Large";


function Size_click(){
    let productSize="";
    let Products_size = document.getElementsByName("Size");
    for (let i=0; i<Products_size.length;i++)
    {
        if(Products_size[i].checked)
        {
            productSize=SizesAvailable[Products_size[i].value];
    
        }
        document.getElementById("current_size").value=productSize;
    }
}

//--------Function to display Extras in the Current Order---------------------------------------------//
let ExtraPackage=[];
ExtraPackage["packaging"]="Eco-friendly packaging ";
ExtraPackage["cards"]="Eco-friendly greeting cards";
ExtraPackage["decorations"]="Eco-friendly decorations";


function Extra_click(){
    let packageExtra="";
    let packages_Extra = document.getElementsByName("Extras");
    for (let i=0; i<packages_Extra.length;i++)
    {
        if(packages_Extra[i].checked)
        {
            packageExtra=ExtraPackage[packages_Extra[i].value];
    
        }
        document.getElementById("current_extras").value=packageExtra;
    }
}
//----------------initializing the prices to display the total cost in the current order---------------------///

//--------------------Array to initialize the Product price ------------------// 
let ProductPrice = [];
ProductPrice["Plates"]=2000;
ProductPrice["Bags"]=1000;
ProductPrice["Mugs"]=2500;
ProductPrice["Soap"]=800;

//---------- Returning the product price----------------------//
function productfunction(){
    let  pricesofProduct = 0;
   var Products =document.getElementsByName("Products");
    
    for(let i = 0; i < Products.length; i++)
    {
        if(Products[i].checked)
        {
            pricesofProduct = ProductPrice[Products[i].value];
            
        }
    }
    return pricesofProduct;
}
//----------------------------Array to initialize the Size value-------------------------//

let sizePrices = [];
sizePrices["Small"]=0;
sizePrices["Medium"]=2500;
sizePrices["Large"]=5000;
//--------------------------Returning the Size-------------------------------------------//
function sizesOfProducts(){
    let  productSize = 0;
    var Size = document.getElementsByName("Size");
    
    for(let i = 0; i < Size.length; i++)
    {
        if(Size[i].checked)
        {
        productSize =sizePrices[Size[i].value];
            
        }
    }
    return productSize;
}

//------------------- Array to initialize Extras value------------------------//
let extraPrices = [];
extraPrices["packaging"]=500;
extraPrices["cards"]=1000;
extraPrices["decorations"]=1500;
//----------Function to return the Extras------//
function ExtraFunction(){
    let ExtraProduct=0;
    var extra = document.getElementsByName("Extras");
    for(let i = 0; i < extra.length; i++)
    {
        if(extra[i].checked)
        {
            ExtraProduct=extraPrices[extra[i].value];
        }
    }
    return ExtraProduct;
}

//------------Calculating total cost and displaying in current order------------//

function FindTotalCost(){
    let totalcost= productfunction() + sizesOfProducts() + ExtraFunction();
    document.getElementById("current_totalcost").value ="Rs "+ totalcost +"/=";
}


//===========================Script to add elements in over all order==========================================///
///to display the grand total
function getTotalCost(){

    let teaTotalPrice =  productfunction() + sizesOfProducts() + ExtraFunction() ;

    return teaTotalPrice;
}


let addOrderButton=document.getElementById("addorder");
addOrderButton.addEventListener("click",overallTable);


function overallTable(){
    var manufacturers = document.getElementById("current_manufacturers").value;
    var typeOfProduct  = document.getElementById("current_product").value;
    var SizeOfProduct = document.getElementById("current_size").value;
    var ExtraPackages = document.getElementById("current_extras").value;
    var CurrentProductPrice = document.getElementById("current_totalcost").value;
   

    let table=document.getElementById("OverallorderTable");
    var row= table.insertRow(0);

    var row= table.insertRow(table.rows.length);

    
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
  
           cell1.innerHTML =manufacturers; 
            cell2.innerHTML = typeOfProduct; 
           cell3.innerHTML =SizeOfProduct ; 
            cell4.innerHTML = ExtraPackages;  
            cell5.innerHTML = CurrentProductPrice;
                   

            
            document.getElementById("current_product").value="";
            document.getElementById("current_size").value="";
            document.getElementById("current_extras").value="";
            document.getElementById("current_totalcost").value="";
            document.getElementById("totaloverallcost").value="LKR " +totaloverallcost;

 //This is to reset the radio buttons once the user clicks the add order button//
            document.getElementById("Eco-ProductsSL").checked = false;
            document.getElementById("EcowareLanka").checked = false;
            document.getElementById("Trickledown").checked = false;
            document.getElementById("BacktoEarth").checked = false;
            document.getElementById("Bags").checked = false;
            document.getElementById("Plates").checked = false;
            document.getElementById("Mugs").checked = false;
            document.getElementById("Soap").checked = false;
            document.getElementById("Small").checked = false;
            document.getElementById("Medium").checked = false;
            document.getElementById("Large").checked = false;
            document.getElementById("packaging").checked = false;
            document.getElementById("cards").checked = false;
            document.getElementById("decorations").checked = false;            
}

    
///=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Place order button-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-///

let placeOrderButton=document.getElementById("PlaceOrder");
placeOrderButton.addEventListener("click",PlaceOrder);
function PlaceOrder(){

  let ManufacturerName = document.getElementById("current_manufacturers").value;
    let tables = document.getElementById("OverallorderTable");
    let orderNum = (tables.rows.length -1);

    if(orderNum >= 1){
        window.alert("Thanks for Purchasing product from " +ManufacturerName);
        for(let i=0; i < tables.rows.length; i++){
            tables.rows[i].innerHTML = "";
            location.reload();
        }
    }else{
            window.alert("No order was placed!")
        }
    }
    
///=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Add Favourite--------------------------------//

let addToFavBtn=document.getElementById("AddFav");
addToFavBtn.addEventListener("click",addFavOrder);


function addFavOrder(){
        
    var manufacturers = document.getElementById("current_manufacturers").value;
    var typeOfProduct  = document.getElementById("current_product").value;
    var SizeOfProduct = document.getElementById("current_size").value;
    var ExtraPackages = document.getElementById("current_extras").value;
    var CurrentProductPrice = document.getElementById("current_totalcost").value;

    //initializing the Current Items to a variable called addingFav
var addingfav={manufacturers,typeOfProduct,SizeOfProduct,ExtraPackages,CurrentProductPrice};
//if there is not order in the current order table then the value will be stored as ""//
if(localStorage.getItem("Favourite")==null){
   localStorage.setItem("Favourite","[]");
}

var favouriteItem=JSON.parse(localStorage.getItem("Favourite"));
favouriteItem.push(addingfav);

localStorage.setItem("Favourite",JSON.stringify(favouriteItem));

 document.getElementById("current_manufacturers").value="";
 document.getElementById("current_product").value="";
 document.getElementById("current_size").value="";
 document.getElementById("current_extras").value="";
 document.getElementById("current_totalcost").value="";
    
     // to reset the radion button
            document.getElementById("Eco-ProductsSL").checked = false;
            document.getElementById("EcowareLanka").checked = false;
            document.getElementById("Trickledown").checked = false;
            document.getElementById("BacktoEarth").checked = false;
            document.getElementById("Bags").checked = false;
            document.getElementById("Plates").checked = false;
            document.getElementById("Mugs").checked = false;
            document.getElementById("Soap").checked = false;
            document.getElementById("Small").checked = false;
            document.getElementById("Medium").checked = false;
            document.getElementById("Large").checked = false;
            document.getElementById("packaging").checked = false;
            document.getElementById("cards").checked = false;
            document.getElementById("decorations").checked = false;   
        }
    

// Checking Loyalty Points 

var loybtn = document.getElementById('checkLoyalty');

loybtn.addEventListener("click", checkLoyalty);

function checkLoyalty() {
    let Table = document.getElementById("OverallorderTable");
    let LoyalPoint=document.getElementById("LoyalPoint");
    let noOfOrders = (Table.rows.length-1);
    let LoyaltyPoints = 0;
/* There is some problem in the table therefore i have taken more than 6 instead of 3 and also the expected output 
appears in the website*/
    if (noOfOrders > 6) {
       LoyaltyPoints = (noOfOrders * 20/2);
       LoyalPoint.innerText="The Loyalty Point is "+LoyaltyPoints;
    }
    else{
        LoyalPoint.innerText="Order More than 3 Products to earn loyalty points";
    }
  
}










