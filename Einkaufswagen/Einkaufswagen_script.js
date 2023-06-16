        // JavaScript-Code für den erweiterten Einkaufswagen
        var cartItems = [];

        var cartItemsElement = document.getElementById("cart-items");
        var cartSubtotalElement = document.getElementById("cart-subtotal");
        var shippingCostElement = document.getElementById("shipping-cost");
        var cartTotalElement = document.getElementById("cart-total");
        var checkoutBtn = document.getElementById("checkout-btn");

        var couponInput = document.getElementById("coupon-input");
        var applyCouponBtn = document.getElementById("apply-coupon-btn");
        var couponMsg = document.getElementById("coupon-msg");

        var standardShipping = document.getElementById("standard-shipping");
        var expressShipping = document.getElementById("express-shipping");

        applyCouponBtn.addEventListener("click", function() {
            applyCoupon();
        });

        checkoutBtn.addEventListener("click", function() {
            checkout();
        });

        function updateCart() {
            while (cartItemsElement.tBodies[0].hasChildNodes()) {
                cartItemsElement.tBodies[0].removeChild(cartItemsElement.tBodies[0].lastChild);
            }

            var subtotal = 0;

            for (var i = 0; i < cartItems.length; i++) {
                var item = cartItems[i];
                var row = document.createElement("tr");

                var nameCell = document.createElement("td");
                nameCell.textContent = item.name;
                row.appendChild(nameCell);

                var priceCell = document.createElement("td");
                priceCell.textContent = item.price.toFixed(2) + " EUR";
                row.appendChild(priceCell);

                var quantityCell = document.createElement("td");
                var quantityInput = document.createElement("input");
                quantityInput.type = "number";
                quantityInput.value = item.quantity;
                quantityInput.classList.add("quantity-input");
                quantityInput.addEventListener("input", (function(index) {
                    return function() {
                        updateQuantity(index, this.value);
                    };
                })(i));
                quantityCell.appendChild(quantityInput);
                row.appendChild(quantityCell);

                var totalCell = document.createElement("td");
                var itemTotal = item.price * item.quantity;
                totalCell.textContent = itemTotal.toFixed(2) + " EUR";
                row.appendChild(totalCell);

                var actionsCell = document.createElement("td");
                var updateBtn = document.createElement("button");
                updateBtn.textContent = "Aktualisieren";
                updateBtn.classList.add("update-btn");
                updateBtn.addEventListener("click", (function(index) {
                    return function() {
                        updateQuantity(index, quantityInput.value);
                    };
                })(i));
                actionsCell.appendChild(updateBtn);

                var removeBtn = document.createElement("button");
                removeBtn.textContent = "Entfernen";
                removeBtn.classList.add("remove-btn");
                removeBtn.addEventListener("click", (function(index) {
                    return function() {
                        removeItem(index);
                    };
                })(i));
                actionsCell.appendChild(removeBtn);

                row.appendChild(actionsCell);

                cartItemsElement.tBodies[0].appendChild(row);

                subtotal += itemTotal;
            }

            var shippingCost = calculateShippingCost(subtotal);
            var total = subtotal + shippingCost;

            cartSubtotalElement.textContent = "Gesamtsumme: " + subtotal.toFixed(2) + " EUR";
            shippingCostElement.textContent = "Versandkosten: " + shippingCost.toFixed(2) + " EUR";
            cartTotalElement.textContent = "Gesamtbetrag: " + total.toFixed(2) + " EUR";

            saveCart();
        }

        function addItem(name, price, quantity) {
            var item = {
                name: name,
                price: price,
                quantity: quantity
            };

            cartItems.push(item);

            updateCart();
        }

        function updateQuantity(index, quantity) {
            if (quantity > 0) {
                cartItems[index].quantity = quantity;
                updateCart();
            }
        }

        function removeItem(index) {
            cartItems.splice(index, 1);
            updateCart();
        }

        function calculateShippingCost(subtotal) {
            if (expressShipping.checked) {
                return 10.00;
            } else {
                return 5.00;
            }
        }

        function applyCoupon() {
            var couponCode = couponInput.value;
            // Hier kannst du die Logik zur Überprüfung des Gutscheincodes implementieren
            // und den Rabattbetrag entsprechend berechnen
            // Zum Beispiel:
            var discount = 0;
            if (couponCode === "SUMMER10") {
                discount = 10;
            } else if (couponCode === "FREESHIPPING") {
                discount = calculateShippingCost(0);
            }
            // ...

            if (discount > 0) {
                couponMsg.textContent = "Gutscheincode angewendet: -" + discount.toFixed(2) + " EUR";
            } else {
                couponMsg.textContent = "Ungültiger Gutscheincode";
            }

            updateCart();
        }

        function checkout() {
            // Hier kannst du die Kassenprozess-Logik implementieren
            // Zum Beispiel den Bestellprozess, das Speichern der Bestellung in der Datenbank usw.
            alert("Kassenprozess starten...");
        }

        function loadCart() {
            var savedCart = localStorage.getItem("cart");

            if (savedCart) {
                cartItems = JSON.parse(savedCart);
                updateCart();
            }
        }

        function saveCart() {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }

        loadCart();