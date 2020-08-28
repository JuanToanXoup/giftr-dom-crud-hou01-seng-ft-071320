const gifts = [
  {
    id: 1,
    name: '8 pairs of socks',
    image: 'https://www1.assets-gap.com/webcontent/0014/216/261/cn14216261.jpg'
  },
  {
    id: 2,
    name: 'fancy pens',
    image:
      'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/3826001_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$'
  },
  {
    id: 3,
    name: "cap'n crunch",
    image: 'https://pics.drugstore.com/prodimg/576126/900.jpg'
  },
  {
    id: 4,
    name: 'the last dab',
    image: 'https://peppergeek.com/wp-content/uploads/2019/07/LastDabReduxxPro.jpg'
  }
]


let clearList = function(list){
  let noGift = document.querySelector('.gift-list');
  while (noGift.firstChild) {
    noGift.removeChild(noGift.lastChild);
  }
}


let showList = function(list){
  console.log(list)
  list.forEach(giftCallback);
}

let giftCallback = function (el,i,arr) {
  let li = document.createElement('li');
  const giftList = document.querySelector('.gift-list');
  giftList.appendChild(li).innerHTML = el.name;
  let img = document.createElement('img'); 
  img.src = el.image;
  img.height = 200;
  giftList.appendChild(img); 
}

document.addEventListener('DOMContentLoaded',(e) => {
  e.preventDefault
  clearList();
  setTimeout(() => { showList(gifts); }, 1);

  const filterInput = document.getElementById('filter-input');
  filterInput.addEventListener('keypress', (e) => {
    e.preventDefault
    if (e.key === 'Enter') {
      clearList();
      if (filterInput.value != ""){
        let filteredGifts = gifts.slice().filter(gift => gift.name.includes(filterInput.value));
        showList(filteredGifts);
      } else {
        showList(gifts);
      }
    }
  });

  const deleteGiftButton = document.getElementById('gift-form-button');
  const giftNameInput = document.getElementById('gift-name-input');
  const giftImageInput = document.getElementById('gift-image-input');

  deleteGiftButton.addEventListener('click', (e) => {
    e.preventDefault;
    gifts.push({name: giftNameInput.value, image: giftImageInput})
  });
})




