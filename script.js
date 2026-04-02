const games = [
    {
        "id": 1,
        "titre": "The Witcher 3: Wild Hunt",
        "prix": 29.99,
        "image": "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHkBOG9zreMvx9sz.png",
        "genre": "RPG"
    },
    {
        "id": 2,
        "titre": "Grand Theft Auto V",
        "prix": 19.99,
        "image": "https://image.api.playstation.com/cdn/UP0002/CUSA00419_00/8621Y666B4XlT4P8S9sS.png",
        "genre": "Action"
    },
    {
        "id": 3,
        "titre": "FIFA 23",
        "prix": 59.99,
        "image": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1200,f_auto,q_auto/v1/ncom/en_US/games/switch/f/fifa-23-nintendo-switch-legacy-edition-switch/hero",
        "genre": "Sports"
    },
    {
        "id": 4,
        "titre": "Cyberpunk 2077",
        "prix": 49.99,
        "image": "https://media.s-bol.com/R6696p9v999j/550x712.jpg",
        "genre": "RPG"
    },
    {
        "id": 5,
        "titre": "Call of Duty: Modern Warfare II",
        "prix": 69.99,
        "image": "https://image.api.playstation.com/vulcan/ap/rnd/202209/1318/9fFzN82T56JvL7uN8Z8R9H7N.png",
        "genre": "Action"
    },
    {
        "id": 6,
        "titre": "Minecraft",
        "prix": 26.95,
        "image": "https://images.tntv.pf/tntv/2023/04/Minecraft-Legends.jpg",
        "genre": "Aventure"
    }
];
const gameContainer = document.getElementById('game-container');


function displayGames(gamesToShow) {
    
    gameContainer.innerHTML = "";

   
    gamesToShow.forEach(game => {
        const card = `
            <div class="bg-custom-purple rounded-[2.5rem] overflow-hidden shadow-xl text-white transform hover:scale-105 transition-all duration-300 flex flex-col">
                <img src="${game.image}" class="w-full h-44 object-cover border-b border-white/10" alt="${game.titre}">
                <div class="p-6 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl font-black italic uppercase leading-tight">${game.titre}</h3>
                        <p class="text-xs font-semibold opacity-80">${game.genre}</p>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-2xl font-bold">$${game.prix}</span>
                        <button class="bg-custom-blue px-4 py-2 rounded-full text-[10px] font-black uppercase shadow-md active:scale-90 transition">
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