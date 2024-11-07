document.addEventListener("DOMContentLoaded", function () {
  let antrian = ["ray", "fiki", "fadhilla", "farah"];

  antrian.push("nabila");
  antrian.push("maza", "elsi");
  antrian.pop();
  antrian.shift();
  antrian.shift();
  antrian.unshift("tomi");
  
  const antrianList = document.getElementById("antrian-list");

  antrian.forEach((pembeli) => {
    const listItem = document.createElement("li");
    listItem.textContent = pembeli;
    antrianList.appendChild(listItem);

    console.log(pembeli);
  });
});
