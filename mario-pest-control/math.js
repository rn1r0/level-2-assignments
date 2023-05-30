function calculateTotalPrice() {
    const pestItems = document.getElementsByClassName("pest-item");
    let totalPrice = 0;
  
    for (let i = 0; i < pestItems.length; i++) {
      const pestItem = pestItems[i];
      const pestPrice = parseInt(pestItem.querySelector(".pest-price").textContent);
      const pestTotal = parseInt(pestItem.querySelector(".pest-total").value);
      totalPrice += pestPrice * pestTotal;
    }
  
    document.getElementById("total-price").textContent = `Total Price: $${totalPrice}`;
  }
  
  const pestTotals = document.getElementsByClassName("pest-total");
  
  for (let i = 0; i < pestTotals.length; i++) {
    pestTotals[i].addEventListener("input", calculateTotalPrice);
  }
  
  calculateTotalPrice();
     