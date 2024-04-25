// data table
let products = {
    data: [{
            productName: "White Levents T-shirt",
            price: "35k",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },
  
        {
            productName: "Black Levents T-shirt",
            price: "34k",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },
  
        {
            productName: "Black Levent Hoodie",
            price: "35k",
            image: "https://levents.asia/cdn/shop/files/MT_cd9f30bd-f049-4934-b6a8-7791aaa994a0.jpg?v=1709537470&width=713"
        },
  
        {
            productName: "Black Vacation T-shirt",
            price: "22k",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },
  
        {
            productName: "White Vacation T-shirt",
            price: "38k",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },
  
        {
            productName: "Black Starry Space T-shirt",
            price: "42K",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },
  
        {
            productName: "Levents Dinorsaur T-shirt",
            price: "37k",
            image: "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg"
        },
  
        {
            productName: "Levents Earth T-shirt",
            price: "36k",
            image: "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg"
        },
  
        {
            productName: "Pink Levents T-shirt",
            price: "29k",
            image: "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg"
        },
    ]
  }





// creating the cards 

for (let i of products.data){
    let card = document.createElement("div")
    card.classList.add("card")

  
    let img = document.createElement("img")
    img.setAttribute("src", i.image )
  
    let title = document.createElement("p")
    title.classList.add("title")
    title.innerText = i.productName.toUpperCase()
  
    let price = document.createElement("p")
    price.classList.add("price")
    price.innerText = i.price.toUpperCase()
  
  
    let button = document.createElement("button")
    button.innerText = 'BUY'
    button.classList = 'buy'

    let main = document.getElementById("main-container")
  
    
    main.append(card)
    card.append(img)
    card.append(title)
    card.append(price)
    card.append(button)
  
}


// searchbar navigation 

const button = document.getElementById("search-button")

function buttonClick(){

    var searchInput = document.getElementById("search-bar")
    var inputValue = searchInput.value.toUpperCase()


    var cards = document.querySelectorAll('.card')
    var productNames = document.querySelectorAll('.title')


    productNames.forEach(function(name,index,array){
        

        if (name.textContent.includes(inputValue)){
            cards[index].style.display = 'block'
        }
        else{
            cards[index].style.display = 'none';

        }

    })   
}

button.addEventListener('click',buttonClick)


// sidebar purchasing 

const purchaseButton = document.getElementsByClassName('buy')



//sidebar toggle


const toggleSideBar = document.getElementById('toggle-cart')
const sideBar = document.getElementById('cart-container')


toggleSideBar.addEventListener('click', ()=>{

    if (sideBar.style.display === 'none'){
        sideBar.style.display = 'flex'
    }
    else{
        sideBar.style.display = 'none'

    }

})

//purcashing item + store in local storage

const itemBrought = document.querySelectorAll('.buy')

localStorage.clear()


itemBrought.forEach((button) =>{

    var clickCount = 1

    button.addEventListener('click', (event)=>{
        let itemContainer = event.target.parentNode
        let itemName = itemContainer.querySelector('.title').innerText
        let itemCost = itemContainer.querySelector('.price').innerText
        itemCost = Number(itemCost.replace('K',""))

    
        let dataSet = {
            name : itemName,
            initalcost : itemCost,
            cost: itemCost,
            clicks : clickCount
        }



        let savedData = JSON.parse(localStorage.getItem('itemData'))
        // check if there has data alr in local storage
        if(savedData !== null){

            console.log("data exist")

            const itemIndex = savedData.findIndex((item) => item.name === itemName);

            if (itemIndex !== -1){
                console.log(itemIndex)
                savedData[itemIndex].clicks = savedData[itemIndex].clicks + 1;
                savedData[itemIndex].cost = savedData[itemIndex].cost *  savedData[itemIndex].clicks;
                
            }

            else{
                savedData.push(dataSet)

          
            }

            localStorage.setItem('itemData', JSON.stringify(savedData))
            displayItem()
            console.log(JSON.parse(localStorage.getItem('itemData')))



            }

            


        

        
        
         
        // if theres no data of the item 
        else{
            console.log('data not exist and being added now')
            let database = []
            database.push(dataSet)
            localStorage.setItem('itemData', JSON.stringify(database))

            displayItem()
    
        }



    })

})



const displayItem = ()=>{

    const itemDashBoard = document.getElementsByClassName('item-container')
    const totalCost = document.getElementById('total-cost')
    var collectData = JSON.parse(localStorage.getItem('itemData'))

    for (let i = 0; i < collectData.length; i++){
        let itemChildContainer = document.createElement('div')
        itemChildContainer.classList = 'item'
        let itemName = document.createElement('p')
        itemName.classList = 'title'
        let itemCost = document.createElement('p')
        itemCost.classList = 'cost'
        let itemQuantity = document.createElement('p')
        itemQuantity = 'quantity'
        let addItem = document.createElement('button')
        let removeItem = document.createElement('button')
        addItem.classList = 'add'
        removeItem.classList = 'remove'

        itemName = collectData[i].name 
        itemCost = collectData[i].cost
        itemQuantity = collectData[i].clicks 
        addItem.innerHTML = '+'
        removeItem.innerHTML = '-'

    
        itemDashBoard.appendChild(itemChildContainer)

        itemChildContainer.appendChild(itemName)
        itemChildContainer.appendChild(itemCost)
        itemChildContainer.appendChild(itemQuantity)
        itemChildContainer.appendChild(addItem)
        itemChildContainer.appendChild(removeItem) 
     
    }

    



}