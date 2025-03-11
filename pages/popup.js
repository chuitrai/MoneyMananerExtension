document.addEventListener("DOMContentLoaded", function() {
   let incomeInput = document.getElementById("income");
   let shoppingInput = document.getElementById("shopping");
   let transportInput = document.getElementById("transport");
   let healthInput = document.getElementById("health");
   let entertainmentInput = document.getElementById("entertainment");
   let othersInput = document.getElementById("others");
   let totalInput = document.getElementById("total");
   let saveButton = document.getElementById("save");

   // Load the saved data
   chrome.storage.sync.get(["income", "shopping", "transport", "health", "entertainment", "others", "total"], function(data) {
      incomeInput.value = data.income || 0;
      shoppingInput.value = data.shopping || 0;
      transportInput.value = data.transport || 0;
      healthInput.value = data.health || 0;
      entertainmentInput.value = data.entertainment || 0;
      othersInput.value = data.others || 0;
      totalInput.value = data.total || 0;
   });

   // Save the data
   saveButton.addEventListener("click", function() {
      chrome.storage.sync.set({
         income: incomeInput.value,
         shopping: shoppingInput.value,
         transport: transportInput.value,
         health: healthInput.value,
         entertainment: entertainmentInput.value,
         others: othersInput.value,
         total: totalInput.value,
         timestamp: new Date().getTime()
      }, 
      function() {
         alert("Data saved successfully!");
         // Close the popup
      });
   });
});
