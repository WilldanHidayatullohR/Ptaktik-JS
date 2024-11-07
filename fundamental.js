// // // let x = "Celerates";
// // // let y = "2024";

// // // alert(x+y);
// // // console.log(x + y);

// // // let x = ["Dog", "Cat"];
// // // // alert(x);
// // // console.log(x);

// // let x {firstname: 'Wildan', lastname: 'Hida'};
// // console.log(x);

// // CONTOHHHHHH

// // 1. String
// // Studi Kasus: Menyapa pengguna dengan namanya
// let namaPengguna = "Alice";
// let sapaan = "Halo, " + namaPengguna + "!";
// alert(sapaan); // Menampilkan: "Halo, Alice!"

// // 2. Boolean
// // Studi Kasus: Memeriksa apakah pengguna sudah login
// let sudahLogin = true;
// if (sudahLogin) {
//     console.log("Pengguna sudah login."); // Output di console: "Pengguna sudah login."
// } else {
//     alert("Pengguna belum login."); // Menampilkan alert jika belum login
// }

// // 3. Numbers
// // Studi Kasus: Menghitung total harga setelah pajak
// let harga = 100;
// let tarifPajak = 0.1;
// let totalHarga = harga + (harga * tarifPajak);
// console.log("Total Harga:", totalHarga); // Output di console: 110

// // 4. Array
// // Studi Kasus: Menyimpan daftar barang dalam keranjang belanja
// let keranjangBelanja = ["Apel", "Pisang", "Jeruk"];
// keranjangBelanja.push("Anggur"); // Menambahkan item baru
// alert("Keranjang Belanja: " + keranjangBelanja.join(", ")); // Menampilkan: "Keranjang Belanja: Apel, Pisang, Jeruk, Anggur"

// // 5. BigInt
// // Studi Kasus: Menghitung jarak antar bintang dalam unit sangat besar
// let jarakAntarBintang = 123456789012345678901234567890n;
// console.log("Jarak antar bintang:", jarakAntarBintang); // Output di console: 123456789012345678901234567890n

// // 6. The Undefined value and null
// // Studi Kasus: Memeriksa apakah profil pengguna sudah lengkap
// let profilPengguna = null; // misalnya pengguna belum mengisi profil
// if (profilPengguna === null) {
//     alert("Profil pengguna belum lengkap."); // Menampilkan alert: "Profil pengguna belum lengkap."
// } else {
//     console.log("Profil pengguna sudah lengkap."); // Output di console jika profil lengkap
// }

// // 7. Object and Symbol
// // Studi Kasus: Menyimpan data produk dalam bentuk objek
// let produk = { id: 1, nama: "Laptop", harga: 1500 };
// console.log("Nama Produk:", produk.nama); // Output di console: "Laptop"

// let idUnik = Symbol("unik");
// let item = {
//     [idUnik]: 12345,
//     nama: "Meja",
//     harga: 300
// };
// alert("ID Item: " + item[idUnik]); // Menampilkan: ID Item: 12345

// // 8. The typeof Operator
// // Studi Kasus: Memeriksa tipe data masukan pengguna
// let masukanPengguna = "123";
// console.log("Tipe dari masukanPengguna:", typeof masukanPengguna); // Output di console: "string"
// if (typeof masukanPengguna === "string") {
//     alert("Masukan pengguna adalah sebuah string."); // Menampilkan: "Masukan pengguna adalah sebuah string."
// }

function printHeart() {
  console.log("<3");
}
printHeart();

function multiply(a, b) {
  return a * b;
}

// Example calls
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20
