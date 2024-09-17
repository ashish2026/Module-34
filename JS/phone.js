// https://openapi.programming-hero.com/api/phones?search=iphone

const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones)
  displayPhones(phones);
};

const displayPhones = (phone) => {
  // console.log(phones)

  const phoneContainer = document.getElementById("phone-container");
  // clear phone container cards before adding new cards 
  phoneContainer.textContent=''

  phone.forEach((phones) => {
    console.log(phones);
    // 1.Create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 space-20 bg-gray-100 shadow-xl`;
    // 3. set inner html
    phoneCard.innerHTML = `
            <figure>
              <img
                src=${phones.image}
                alt="Phone"
              />
            </figure>
            <div class="card-body">
            <h2 class="card-title">${phones.phone_name}</h2>
            <p>${phones.brand}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
    
    `;
    phoneContainer.appendChild(phoneCard);
  });
};

// handle search button
const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};


// another handle search button
const handleSearch2 =()=>{
  
}

loadPhone();

