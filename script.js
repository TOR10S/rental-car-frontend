const list = document.querySelector(".car-list");
const numbers = [1, 2, 3, 4, 5, 6];
const markup = numbers
  .map((number) => {
    return `<li class="car-list-li">
              <img src="./img/Home.jpg" class="car-img" alt="car-img" />
              <div class="car-main-info">
                <p class="car-name">car name <span>model</span> and year</p>
                <p class="car-price">price</p>
              </div>
              <p class="car-sub-info">
                Kiev | Ukraine | Luxury car rentals | suv | 9582km
              </p>
              <a href="" class="car-link">Read more</a>
            </li>`;
  })
  .join("");
list.innerHTML = markup;
