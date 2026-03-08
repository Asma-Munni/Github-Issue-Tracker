const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        buttons.forEach((b) => {
            b.classList.remove("bg-[#3b82f6]", "text-white");
            b.classList.add("bg-[#e4e4e7]", "text-[#64748b]");
        });

        btn.classList.remove("bg-[#e4e4e7]", "text-[#64748b]");
        btn.classList.add("bg-[#3b82f6]", "text-white");

    });
});








// console.log(cardsContainer);
const loadCards = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then(res => res.json())
  .then((json) => displayCards(json.data));
};

//load every single card on modal
const loadCardDetail =async(id)=>{
  const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
 // console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayCardDetail(details.data);
};

//display every single card on modal
const displayCardDetail =(card)=>{
console.log(card);
const detailsDiv = document.getElementById("detailsContainer");
detailsDiv.innerHTML =`<div id="card" class="space-y-3 p-3 shadow-sm">
        <div class="flex justify-between">
            <img src="./B13-A5-Github-Issue-Tracker/assets/Open-Status.png" alt="">
            <!--badge-->
            <div onclick="loadCardDetail(${card.id})" class="badge badge-soft badge-secondary">${card.priority}</div>
        </div>
        <h3 class="text-[#1f2937] font-semibold text-[14px]">${card.title}</h3>
        <p class="text-[#64748b] text-[12px]">${card.description}</p>  
        <!--2 badges-->
        <div class=" flex">
            <div class="badge badge-soft badge-secondary"><img src="./B13-A5-Github-Issue-Tracker/assets/BugDroid.png" alt=""> BUG</div>
            <div class="badge badge-soft badge-warning text-[12px]"><img src="./B13-A5-Github-Issue-Tracker/assets/Vector (1).png" alt=""> HELP WANTED</div>   
        </div>
        
        <div class="mt-4 w-full  border-t border-t-gray-200 pt-2">
            <p class="text-[12px] text-[#64748b]">#1by john_doe</p>
             <p class="text-[12px] text-[#64748b]">1/15/2024</p>
            </div>
        </div>`;
       // detailsContainer.appendChild(detailsDiv);
document.getElementById("card_modal").showModal();
}

const displayCards =(cards)=>{
    console.log(cards);
   //get the container and empty
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML ="";
    // get  into every card
    for(let card of cards){
        //create card
    const cardDiv = document.createElement("div");

   
  
    // innerhtml set
    cardDiv.innerHTML = `
     <div id="card" class="space-y-3 p-3 shadow-sm h-full">
        <div class="flex justify-between">
            <img src="./B13-A5-Github-Issue-Tracker/assets/Open-Status.png" alt="">
            <!--badge-->
            <div onclick="loadCardDetail(${card.id})" class="badge  badge-soft badge-secondary ">${card.priority}</div>
        </div>
        <h3 class="text-[#1f2937] font-semibold text-[14px]">${card.title}</h3>
        <p class="text-[#64748b] text-[12px]">${card.description}</p>  
        <!--2 badges-->
        <div class=" flex">
            <div class="badge badge-soft badge-secondary"><img src="./B13-A5-Github-Issue-Tracker/assets/BugDroid.png" alt=""> BUG</div>
            <div class="badge badge-soft badge-warning text-[12px]"><img src="./B13-A5-Github-Issue-Tracker/assets/Vector (1).png" alt=""> HELP WANTED</div>   
        </div>
        
        <div class="mt-4 w-full  border-t border-t-gray-200 pt-2">
            <p class="text-[12px] text-[#64748b]">#1by john_doe</p>
             <p class="text-[12px] text-[#64748b]">1/15/2024</p>
            </div>
        </div>
                   `;
        //append into container
  cardsContainer.appendChild(cardDiv);
 
 
};
    };
   
loadCards();