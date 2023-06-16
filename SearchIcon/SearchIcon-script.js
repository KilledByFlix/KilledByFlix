document.getElementById("search-button").addEventListener("click", function() {
    var searchInput = document.getElementById("search-input");
    var searchTerm = searchInput.value.trim();
  
    if (searchTerm !== "") {
      // Hier ist die Logik zur Verarbeitung der Suche
      var searchResults = filterProducts(searchTerm);
      displaySearchResults(searchResults);
    }
  });
  
  // Funktion zur Filterung der Produkte basierend auf dem Suchbegriff
  function filterProducts(searchTerm) {
    // Beispiel: Eine Array mit Produkten simulieren
    var products = [
      { name: "Produkt 1", category: "Klamotten groß" },
      { name: "Produkt 2", category: "Klamotten klein" },
      { name: "Produkt 3", category: "Hunde" },
      { name: "Produkt 4", category: "Baby" },
      { name: "Produkt 5", category: "Katzen" },
      { name: "Produkt 6", category: "Klamotten für Frauen" },
      { name: "Produkt 7", category: "Klamotten für Kinder" },
      { name: "Produkt 8", category: "Klamotten für Männer" },
      { name: "Produkt 9", category: "Cool" },
    ];
  
    // Filtern der Produkte basierend auf dem Suchbegriff
    var filteredProducts = products.filter(function(product) {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  
    return filteredProducts;
  }
  
  // Funktion zur Anzeige der Suchergebnisse
  function displaySearchResults(results) {
    var resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ""; // Leeren des Inhalts
  if (results.length > 0) {
      results.forEach(function(result) {
        var resultItem = document.createElement("div");
        resultItem.innerText = result.name;
        resultsContainer.appendChild(resultItem);
      });
    } else {
      displayNoResultsMessage();
    }
  }
  
  // Funktion zur Anzeige der Meldung, wenn keine Ergebnisse gefunden wurden
  function displayNoResultsMessage() {
    var resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "Product Not Found";
  }