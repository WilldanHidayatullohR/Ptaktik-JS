// Inisialisasi antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Nabila datang
antrian.push("Nabila");

// Maza dan Elsi datang
antrian.push("Maza", "Elsi");

// Elsi pulang
antrian.pop();

// Ray mendapatkan belanjaannya
antrian.shift();

// Fiki mendapatkan belanjaannya
antrian.shift();

// Tomi nyerobot antrian di depan
antrian.unshift("Tomi");

// Hasil akhir antrian
console.log("Hasil akhir antrian:", antrian);
