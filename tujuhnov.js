//  antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian awal:", antrian);

// 1. Kak Nabila datang ke antrian, kita tambahkan dia di belakang
antrian.push("Nabila");
console.log("Setelah Nabila datang:", antrian);

// 2. Kak Maza dan Kak Elsi datang ke antrian, tambahkan keduanya di belakang
antrian.push("Maza", "Elsi");
console.log("Setelah Maza dan Elsi datang:", antrian);

// 3. Kak Elsi, yang berada di paling belakang, pulang ke rumah
antrian.pop();
console.log("Setelah Elsi pulang:", antrian);

// 4. Ray yang berada di depan sudah mendapatkan belanjaannya
antrian.shift();
console.log("Setelah Ray mendapatkan belanjaannya:", antrian);

// 5. Fiki, yang sekarang berada di depan, juga sudah mendapatkan belanjaannya
antrian.shift();
console.log("Setelah Fiki mendapatkan belanjaannya:", antrian);

// 6. Kak Tomi nyerobot antrian di posisi terdepan
antrian.unshift("Tomi");
console.log("Setelah Tomi nyerobot:", antrian);

// Hasil akhir antrian
console.log("Hasil akhir antrian:", antrian);
