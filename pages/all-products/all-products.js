let list_item = $("#productlist_item");

let list_Product = [{
        img: "../../img/all-product-page/all-products20.jpeg",
        title: "Isla Mujeres Top",
        des: "Professional",
        price: 100,
        isNew: true,
        saleOff: false,
        like_new: false,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/all-products19.jpeg",
        title: "Hanalei Bottom ",
        des: "Brazilian coverage",
        price: 800,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "Bottoms",
    },
    {
        img: "../../img/all-product-page/all-products23.jpeg",
        title: "Bahamas Top",
        des: "White Sand Crinkle",
        price: 190,
        isNew: true,
        saleOff: true,
        like_new: false,
        brandNew: "One pieces",
    },
    {
        img: "../../img/all-product-page/all-products9.jpeg",
        title: "Amelia Tango Bottom",
        des: "White Crinkle Linen",
        price: 750,
        isNew: true,
        saleOff: true,
        like_new: false,
        brandNew: "Beachwear",
    },
    {
        img: "../../img/all-product-page/all-products5.jpeg",
        title: "Isla Mujeres Bottom",
        des: "Navy Rib",
        price: 380,
        isNew: false,
        saleOff: false,
        like_new: true,
        brandNew: "Bottoms",
    },
    {
        img: "../../img/all-product-page/all-products10.jpeg",
        title: "Amelia Tango Tops",
        price: 270,
        isNew: true,
        saleOff: true,
        like_new: false,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/all-products25.jpeg",
        title: "Cabo San Lucas Tops",
        des: "Persimmon Jacquard",
        price: 300,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/all-products15.jpeg",
        title: "Cabo San Lucas Tops",
        des: "Persimmon Jacquard",
        price: 120,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/all-products11.jpeg",
        title: "Cabo San Lucas Tops",
        des: "Persimmon Jacquard",
        price: 190,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "Tops",
    },
];
let filters = {
    price: -1,
    new: -1,
    brandNew: -1,
};
var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
});

const renderList = (list) => {
    let str = "";
    list.forEach((item) => {
        str += `
      
    <div class="col-sm">
    <div class="suggest">
        <div class="suggest-photo">
            <img class="suggest-photos" src="${item.img}" alt="">
        </div>
        <div class="suggest-name">${item.title}</div>
        <div class="suggest-price">${item.des}</div>
        <div class="suggest-price">$${item.price}</div>
        <div class="suggest-colors">
            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L18.6603 15H1.33975L10 0Z" fill="#F5542C"/>
                    <path d="M30 0L38.6603 15H21.3397L30 0Z" fill="#95E8E3"/>
                    <path d="M50 0L58.6603 15H41.3397L50 0Z" fill="#F4BFBF"/>
                    <path d="M70 0L78.6603 15H61.3397L70 0Z" fill="#D5CBFE"/>
                    <path d="M90 0L98.6603 15H81.3397L90 0Z" fill="#FDF5AA"/>
                    <path d="M10 20L18.6603 35H1.33975L10 20Z" fill="#F5542C"/>
                    <path d="M30 20L38.6603 35H21.3397L30 20Z" fill="#F5542C"/>
                    </svg>
        </div>
        <div class="btn-addToCart-suggest">
            <button type="submit" name="add" aria-label="Add to cart" class="btn atc-button product-form__cart-submit" data-add-to-cart="" ecl="true">
                <span data-add-to-cart-text="" ecl="true">ADD TO CART</span>
                <span class="hide" data-loader="" ecl="true">
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
                </span>
            </button></div>

    </div>
</div>                 
        `;
    });
    return str;
};

const filterList = (list) => {
    let els = renderList(list);
    list_item.html("");

    list_item.append(`
    ${els}
  `);
};
filterList(list_Product);

const handleFilterByPrice = (data, order) => {
    let newData;
    if (order === 1) {
        // filter price nho hon 10 trieu
        newData = data.filter((item) => {
            return item.price < 100;
        });
    }
    if (order === 2) {
        // filter price tu 10 - 20 trieu
        newData = data.filter((item) => {
            return item.price >= 100 && item.price <= 200;
        });
    }
    if (order === 3) {
        // filter price tu 20 - 50 trieu
        newData = data.filter((item) => {
            return item.price >= 200 && item.price <= 500;
        });
    }
    if (order === 4) {
        // filter price hon 50 trieu
        newData = data.filter((item) => {
            return item.price > 500;
        });
    }
    return newData;
};
const handleFilterByNew = (data, order) => {
    // xu ly filter by new
    let newData;
    if (order === 1) {
        newData = data.filter((item) => {
            return item.isNew;
        });
    }
    if (order === 2) {
        newData = data.filter((item) => {
            return item.saleOff;
        });
    }
    if (order === 3) {
        newData = data.filter((item) => {
            return item.like_new;
        });
    }
    return newData;
};
const handleFilterByBrandNew = (data, order) => {
    let newData;
    if (order === 1) {
        newData = data.filter((item) => {
            return item.brandNew === "Tops";
        });
    }
    if (order === 2) {
        newData = data.filter((item) => {
            return item.brandNew === "Bottoms";
        });
    }
    if (order === 3) {
        newData = data.filter((item) => {
            return item.brandNew === "One pieces";
        });
    }
    if (order === 4) {
        newData = data.filter((item) => {
            return item.brandNew === "Beachwear";
        });
    }
    if (order === 0) {
        newData = data.filter((item) => {
            return item;
        });
    }

    return newData;
};

const handleFilter = () => {
    // làm nhiệm vụ filter theo object filters
    let newData = [...list_Product];
    for (let f in filters) {
        if (filters[f] === -1) {
            delete filters[f];
        }
    }
    for (let f in filters) {
        if (f === "price") {
            newData = handleFilterByPrice(newData, filters[f]);
        }
        if (f === "new") {
            newData = handleFilterByNew(newData, filters[f]);
        }
        if (f === "brandNew") {
            newData = handleFilterByBrandNew(newData, filters[f]);
        }
    }
    filterList(newData);
};

const filterByPrice = (order) => {
    filters.price = order;
    handleFilter();
};
const filterByNew = (order) => {
    filters.new = order;
    handleFilter();
};
const filterByBrandNew = (order) => {
    filters.brandNew = order;
    handleFilter();
};

// các bước khi làm filter:
// B1: Tạo ra 1 biến tên là filters, ở dạng object = {price: 'level-2', new: 'level-1'}
// B2: Sau khi click vào các điều kiện , hoặc ô search -> biến đổi object filters cho phù hợp
// B3: Từ object filters sẽ filter mảng của mình theo điều kiện bên trong.