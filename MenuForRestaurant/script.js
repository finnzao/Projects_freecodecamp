//ITENS
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://wallsdesk.com/wp-content/uploads/2017/01/Fast-Food-Photos.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://imgs.search.brave.com/wcdjIbOafnROS6Lt89tG5nQJQObqM7RnU5NWoXRcmhg/rs:fit:1200:600:1/g:ce/aHR0cHM6Ly9kMWR4/czExM2FyOWViZC5j/bG91ZGZyb250Lm5l/dC8yMjViYXRvbnJv/dWdlLzIwMjEvMDYv/RGluaW5nSW5fZnQt/bWFpbi5qcGc",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://imgs.search.brave.com/R3xels1vz2-WcE1HbCS7R-sp1uqx76onCJRci8TERIk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3Lmhh/cHBpbmVzc2lzaG9t/ZW1hZGUubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA1/L1R3by1TdHJhd2Jl/cnJ5LU1pbGtzaGFr/ZXMtaW4tR2xhc3Mt/Q3Vwcy1TcTIuanBn",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://i2.wp.com/sometimeshome.com/wp-content/uploads/2019/01/sometimes_home-traditional_slovenian_food_0019.jpg?fit=1080%2C721&ssl=1",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://imgs.search.brave.com/idb9oFEmq73IBPiD2NWxR_6Pdmt3Wx66C_DiHdFI-8E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9h/V0o0VzVaNktzZjhW/S2xfV09UNmdDR1VN/VXc9LzQyMDB4Mjgw/MC9maWx0ZXJzOmZp/bGwoYXV0bywxKS92/ZWdldGFyaWFuLW9t/ZWxldHRlLXdpdGgt/YmVsbC1wZXBwZXJz/LTMzNzY1NjktaGVy/by00LWMyNzY3NTE5/OTUxMDRjMWU5MTcw/NzBlOTExZDJkNjc3/LmpwZw",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://imgs.search.brave.com/LjT6SDwFjvHiwWr_MdDpbfUJrK64B6XoY07E-B9EMwI/rs:fit:1200:1200:1/g:ce/aHR0cDovL21lZGlh/Mi5wb3BzdWdhci1h/c3NldHMuY29tL2Zp/bGVzLzIwMTYvMDIv/MTIvMDMxL24vMTky/MjE5NS83NDAwZTc2/NV9lZGl0X2ltZ19p/bWFnZV80MDE1NjIx/N18xNDU1MjM4ODk5/X09yZW9fRG91Z2hu/dXRfU1FVQVJFL2kv/T3Jlby1Eb3VnaG51/dHMtRm9vZC1WaWRl/by5qcGc",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://imgs.search.brave.com/1rGLN3NFXpf4CpqP2LPlMTVaEdP9a4y-R1Dq3xPTVUc/rs:fit:1024:572:1/g:ce/aHR0cHM6Ly93d3cu/aG9ybWVsZm9vZHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9O/ZXdzcm9vbV8yMDE2/X0JsYWNrLUxhYmVs/LUJhY29uLXN0cmlw/cy0xMDI0eDU3Mi4x/NDk5NDQ2NjgzLmpw/Zw",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://www.omahasteaks.com/blog/wp-content/uploads/2020/04/bg190-classic-american-burger-B-1080x610.png",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://imgs.search.brave.com/dPx7pvdQWtsTtTFUwDSat6t5Nur7HHp7Nf61lXKbPns/rs:fit:768:424:1/g:ce/aHR0cHM6Ly9yZXZp/c3RhbWVudS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDUvZGlhZG9i/dXJnZXIxLTc2OHg0/MjQuanBn",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
////

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');
const containerBtn = document.querySelector(".btn-container")
//load itens

window.addEventListener('DOMContentLoaded', function () {
    dislpayMenuItens(menu);
    dislpayMenuButtons();
});

function dislpayMenuItens(menuItens) {
    let dislpayMenu = menuItens.map(function (item) {
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}"
            class="photo_item">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
    });
    dislpayMenu = dislpayMenu.join('')
    sectionCenter.innerHTML = dislpayMenu
}

function dislpayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {//se dentro do array values ainda tem a categoria do item atual
            values.push(item.category);
        }
        return values;//retornando as categorias sem repetir 
    }, ["all"])//Esse é o valor inicial para o array,pois não existe a categoria all na lista de produtos ,ela foi adicionada agora 

    const categoryBtns = categories.map(function (category) {
        return `<button data-id="${category}" class="filter-btn" type="button">${category}</button>`
    }).join("");
    containerBtn.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

    //filter itens
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = (e.currentTarget.dataset.id)


            const menuCategory = menu.filter(function (menuItens) {
                if (menuItens.category === category) {
                    return menuItens
                }
            });

            if (category === 'all') {
                dislpayMenuItens(menu)
            } else {
                dislpayMenuItens(menuCategory)
            }
        })
    })
}