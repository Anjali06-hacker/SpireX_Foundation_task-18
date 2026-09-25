/* ================= MENU DATA ================= */
/*  This array contains the restaurant menu items.
    In a real restaurant website, these items
    could come from a database. */
const menuItems = [
    {
        name: "Paneer Tikka",
        category: "starter",
        description:
            "Grilled paneer cubes with spices and vegetables.",
        price: "₹220",
        icon: "🥘"
    },
    {
        name: "Veg Spring Rolls",
        category: "starter",
        description:
            "Crispy rolls filled with fresh vegetables.",
        price: "₹180",
        icon: "🥟"
    },
    {
        name: "Butter Paneer",
        category: "main",
        description:
            "Paneer cooked in a rich and creamy tomato gravy.",
        price: "₹280",
        icon: "🍛"
    },
    {
        name: "Veg Biryani",
        category: "main",
        description:
            "Fragrant basmati rice cooked with vegetables and spices.",
        price: "₹250",
        icon: "🍚"
    },
    {
        name: "Masala Dosa",
        category: "main",
        description:
            "Crispy dosa served with sambar and chutney.",
        price: "₹160",
        icon: "🥞"
    },
    {
        name: "Chocolate Cake",
        category: "dessert",
        description:
            "Soft chocolate cake topped with chocolate cream.",
        price: "₹140",
        icon: "🍰"
    },
    {
        name: "Gulab Jamun",
        category: "dessert",
        description:
            "Soft sweet dumplings served with sugar syrup.",
        price: "₹100",
        icon: "🍮"
    },
    {
        name: "Fresh Lime Soda",
        category: "drink",
        description:
            "Refreshing lime drink served chilled.",
        price: "₹80",
        icon: "🥤"
    },
    {
        name: "Mango Shake",
        category: "drink",
        description:
            "Creamy mango shake prepared with fresh mangoes.",
        price: "₹130",
        icon: "🥭"
    }
];
/* ================= DISPLAY MENU ================= */
/*  This function displays the menu items
    on the webpage.
    The category parameter determines which
    menu items should be displayed.  */
function filterMenu(category) {
    const menuContainer =
        document.getElementById(
            "menuContainer"
        );
    // Clear the existing menu
    menuContainer.innerHTML = "";
    // Filter menu items
    let filteredItems;
    if (category === "all") {
        filteredItems = menuItems;
    } else {
        filteredItems =
            menuItems.filter(function(item) {
                return item.category === category;
            });
    }
    // Create cards for the filtered items
    filteredItems.forEach(function(item) {
        const card =
            document.createElement("div");
        card.className =
            "menu-card";
        card.innerHTML = `
            <div class="menu-icon">
                ${item.icon}
            </div>
            <h3>
                ${item.name}
            </h3>
            <p>
                ${item.description}
            </p>
            <span class="price">
                ${item.price}
            </span>
        `;
        menuContainer.appendChild(card);
    });
}
/* ================= TABLE BOOKING ================= */
/*  This function handles the table
    booking form. */
document.getElementById(
    "bookingForm"
).addEventListener(
    "submit",
    function(event) {
        // Prevent the page from refreshing
        event.preventDefault();
        // Get customer information
        const name =
            document.getElementById(
                "customerName"
            ).value;
        const date =
            document.getElementById(
                "bookingDate"
            ).value;
        const time =
            document.getElementById(
                "bookingTime"
            ).value;
        const guests =
            document.getElementById(
                "guests"
            ).value;
        // Get the confirmation message element
        const message =
            document.getElementById(
                "bookingMessage"
            );
        // Display booking confirmation
        message.textContent =
            "Thank you, " +
            name +
            "! Your table for " +
            guests +
            " guest(s) has been requested for " +
            date +
            " at " +
            time +
            ".";
        // Add styling to the confirmation
        message.style.backgroundColor =
            "#d4edda";
        message.style.color =
            "#155724";
        // Clear the form
        document.getElementById(
            "bookingForm"
        ).reset();
    }
);
/* ================= INITIAL PAGE LOAD ================= */
/*  Display all menu items when the
    webpage is opened.*/
filterMenu("all");