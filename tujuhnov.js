document.addEventListener("DOMContentLoaded", function () {
  let antrian = ["ray", "fiki", "fadhilla", "farah"];

  // Modifikasi antrian sesuai instruksi
  antrian.push("nabila");
  antrian.push("maza", "elsi");
  antrian.pop();
  antrian.shift();
  antrian.shift();
  antrian.unshift("tomi");

  // Ambil elemen <ul> dengan id "antrian-list"
  const antrianList = document.getElementById("antrian-list");

  // Buat elemen <li> untuk setiap pembeli di antrian
  antrian.forEach((pembeli) => {
    const listItem = document.createElement("li");
    listItem.textContent = pembeli;
    antrianList.appendChild(listItem);

    // Menampilkan tiap pembeli di console, satu per baris
    console.log(pembeli);
  });
});
