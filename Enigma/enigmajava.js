function fetchStockData() {
    // Get user input
    const stockSymbol = document.getElementById("stock-input").value.trim();

    // Validate input
    if (stockSymbol === "") {
        alert("Please enter a stock symbol!");
        return;
    }

    // Mock data (replace with API call later)
    const mockResponse = {
        stockSymbol: stockSymbol.toUpperCase(),
        buySellSignal: "BUY",
        sentimentScore: "0.85 (Positive)",
        predictedTrend: "Upward",
    };

    // Display results
    document.getElementById("stock-symbol").innerText = mockResponse.stockSymbol;
    document.getElementById("buy-sell").innerText = mockResponse.buySellSignal;
    document.getElementById("sentiment").innerText = mockResponse.sentimentScore;
    document.getElementById("trend").innerText = mockResponse.predictedTrend;

    console.log("Stock Analysis Results:", mockResponse);
}
