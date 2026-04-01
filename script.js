// getElementById digunakan untuk mengambil elemen berdasarkan id
// digunakan untuk mengambil satu elemen
// querySelector digunakan untuk mengambil elemen berdasarkan selector
// sedangkan querySelector digunakan untuk mengambil banyak elemen

// id artikel-judul tidak ditemukan
// karena tidak ada id dengan nama artikel-judul di html
// harsunya menggunakan selector h1

const judul = document.querySelector('h1');
judul.style.color = '#3b82f6';
console.log('Warna judul berhasil diubah.');

// class tidak muncul karena artikel.classList.toggle('highlight'); dipanggil dua kali
// cara kerja nya itu menambahkan class highlight jika belum ada, dan menghapus class highlight jika sudah ada
// jadi artikel.classList.toggle('highlight'); yang pertama akan menambahkan class highlight
// artikel.classList.toggle('highlight'); yang kedua akan menghapus class highlight

const artikel = document.querySelector('.main-article');
judul.addEventListener('click', function () {
    artikel.classList.toggle('highlight');
});

// = digunakan untuk memberikan nilai
// == digunakan untuk membandingkan nilai
// === digunakan untuk membandingkan nilai dan tipe data
// bug pada if terjadi karena menggunakan = 
// karena itu bukan untuk membandingkan nilai dan tipe data, tapi untuk memberikan nilai
// seharusnya menggunakan === untuk membandingkan nilai dan tipe data

const input = document.getElementById('filter-kategori');
const items = document.querySelectorAll('.sidebar-widget:last-child li');
console.log(items);
input.addEventListener('input', function() {
  const keyword = input.value.toLowerCase();
  items.forEach(function(item) {
    const teks = item.innerText.toLowerCase();
    if (teks === keyword) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }  
  });
});

// B1
const links = document.querySelectorAll('nav a');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(function(items) {
      items.classList.remove('active');
    });
    link.classList.add('active');
  });
});

//B2
const paragraf = document.querySelectorAll('.main-article p');
let Semua_Teks = "";
paragraf.forEach(function(p) {
  Semua_Teks += p.innerText + ' ';
});
const Jumlah_Kata = Semua_Teks.split('').length;
const Estimasi_Menit = Math.ceil(Jumlah_Kata / 200);
const metaInfo = document.querySelector('.meta-info');
metaInfo.innerText += ' | Estimasi baca: ' + Estimasi_Menit + ' menit';
