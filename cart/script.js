//show real products
var products = [
    {name:"Blue Chair", headline:"Lakdi ka stool.", price:"10,000", image:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"White Chair", headline:"Soft like cloud.", price:"15,000", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Traditional Chair", headline:"Looks very old.", price:"16,500", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function addProducts(){
    var clutter = "";
    products.forEach(function(product, index){
        
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.image}" alt="">
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
                    <i data-index="${index}" class="add ri-add-line"></i>
                </button>
            </div>
        </div>
    </div>`;
    })
    
    document.querySelector(".products").innerHTML = clutter;
}

//show real popular products
var popular = [
    {name:"Blue Chair", headline:"Lakdi ka stool.", price:"10,000", image:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"White Chair", headline:"Soft like cloud.", price:"15,000", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Traditional Chair", headline:"Looks very old.", price:"16,500", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
    </div>`;
    })
    
    document.querySelector(".populars").innerHTML = clutter;
}

//on click of product add button add it to the cart
var cart = []

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index])
            console.log(cart);
        }
    })
}

//show added items in cart icon
function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";
        
        var clutter = "";
        cart.forEach(function(prod, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}"/>
            </div>
                <div>
                    <h3 class="font-semibold">${prod.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
                </div>
        </div>`;
        })

        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

showCart();
addToCart();
addProducts();
addPopularProducts();