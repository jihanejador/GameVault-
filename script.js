const games = [

    {
        id: 1,
        title: "Cyberpunk 2077",
        price: 59.99,
        category: "RPG",
        
        image: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077PhantomLiberty_CDPROJEKTRED_DLC_S1_2560x1440-c62f1eb1498aaea2fc109b7aa50279a3?resize=1&w=480&h=270&quality=medium",
        description: "Plongez dans l'avenir sombre de Night City en tant que mercenaire hors-la-loi Ã  la recherche d'un implant unique."
    },
    {
        id: 2,
        title: "Elden Ring",
        price: 49.99,
        category: "Action",
      
        image: "https://external-game-cover-image-cf.store.on.epicgames.com/119133?resize=1&w=360&h=480&quality=medium",
        description: "Explorez l'Entre-terre, un vaste monde fantastique et devenez le prochain Seigneur d'Elden."
    },
    {
        id: 3,
        title: "Modern Warfare III",
        price: 69.99,
        category: "FPS",
        
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mw3/overview/Store_GamesPDP_Hero01.png?imwidth=1920",
        description: "Le combat contre la menace ultime continue dans cette expÃ©rience multijoueur lÃ©gendaire."
    },
    {
        id: 4,
        title: "The Witcher 3",
        price: 29.99,
        category: "RPG",
        
        image: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f?resize=1&w=360&h=480&quality=medium",
        description: "Incarnez Geralt de Riv et parcourez un monde dÃ©vastÃ© par la guerre Ã  la recherche de Ciri."
    },
    {
        id: 5,
        title: "FIFA 25",
        price: 79.99,
        category: "Sport",
        
        image: "https://external-game-cover-image-cf.store.on.epicgames.com/314499?resize=1&w=360&h=480&quality=medium",
        description: "Vivez l'expÃ©rience de football la plus rÃ©aliste avec les plus grandes compÃ©titions mondiales."
    },
    {
        id: 6,
        title: "Starfield",
        price: 55.00,
        category: "RPG",
        
        image: "https://external-game-cover-image-cf.store.on.epicgames.com/96437?resize=1&w=360&h=480&quality=medium",
        description: "Explorez les Ã©toiles et dÃ©couvrez le plus grand mystÃ¨re de l'humanitÃ© dans ce RPG spatial."
    }
];
let cart = [];

const cartPage= document.getElementById('cart-page');
const closeCart = document.getElementById('closeCart');
const cartBtn = document.querySelector('header button');

const gameContainer = document.getElementById('game-container');


function displayGames(gamesToShow) {
    
    gameContainer.innerHTML = "";

   
    gamesToShow.forEach(game => {
        const card = `
            <div class="bg-custom-purple rounded-[2.5rem] overflow-hidden shadow-xl text-white transform hover:scale-105 transition-all duration-300 flex flex-col">
                <img src="${game.image}" class="w-full h-44 object-cover border-b border-white/10" alt="${game.titre}">
                <div class="p-6 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl font-black italic uppercase leading-tight">${game.title}</h3>
                        <p class="text-xs font-semibold opacity-80">${game.category}</p>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-2xl font-bold">$${game.price}</span>
                        <button onclick="addToCart(${game.id})" class="bg-custom-blue px-4 py-2 rounded-full text-[10px] font-black uppercase shadow-md active:scale-90 transition">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        `;
        gameContainer.innerHTML += card;
    });
}


displayGames(games);
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input',(e)=>{
    const searchTerms = e.target.value.toLowerCase();

    const filteredGames = games.filter(game =>
        game.title.toLocaleLowerCase().includes(searchTerms)
    );
    displayGames(filteredGames);
});
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const selectedCategory = btn.getAttribute('data-category');

        let filtered;
        if(selectedCategory ==='all'){
            filtered=games;
        } else{
            filtered = games.filter(game => game.category === selectedCategory);
        }
        displayGames(filtered);

        categoryButtons.forEach(b => b.classList.replace('bg-custom-blue','bg-custom-purple'));
        btn.classList.replace('bg-custom-purple','bg-custom-blue');
    });
});

cartBtn.addEventListener('click',() => cartPage.classList.remove('hidden'));
closeCart.addEventListener('click', () => cartPage.classList.add('hidden'));

function addToCart(gameId){
    const game = games.find(g =>g.id ===gameId);
    const existingItem = cart.find(item =>item.id ===gameId);
    if(existingItem){
        existingItem.qty +=1;
    }else{
        cart.push({...game, qty:1});
    }
    renderCart();
    alert(`${game.title} Ajoute au panier !`);

    
}

function renderCart(){
    const cartItems = document.getElementById('cart-items');
    const totalPariceElement = document.getElementById('total-price');
    cartItems.innerHTML="";
    let total = 0;

    cart.forEach(item =>{
        total += item.price * item.qty;
        cartItems.innerHTML +=`
        <div class="flex items-center justify-between border-b pb-4">
            <div class="flex items-center gap-4">
                <img src="${item.image}" class="w-16 h-16 rounded-xl object-cover">
                <div>
                    <h4 class="font-bold text-gray-800">${item.title}</h4>
                    <p class="text-blue-600 font-bold">${item.price}$</p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <button onclick="updateQty(${item.id}, -1)" class="bg-gray-100 px-3 py-1 rounded-lg font-bold">-</button>
                <span class="font-bold w-6 text-center border border-black rounded">${item.qty}</span>
                <button onclick="updateQty(${item.id}, 1)" class="bg-gray-100 px-3 py-1 rounded-lg font-bold">+</button>
            </div>
        </div>
        `;
    });
    totalPariceElement.textContent = total.toFixed(2);
}
function updateQty(id,change){
    const item = cart.find(i => i.id === id);
    if(item){
        item.qty +=change;
        if (item.qty <= 0){
            cart = cart.filter(i=>i.id !== id);
        }
    }
    renderCart();
}
function saveCart(){
    localStorage.setItem('gameCart', JSON.stringify(cart));

}
function loadCart(){
    const saved = localStorage.getItem('gameCart');
    if(saved){
        cart = JSON.parse(saved);
        renderCart();
    }
}