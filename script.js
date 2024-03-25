let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

$(document).ready(function() {
    $('#login-form').submit(function(e) {
      e.preventDefault();
      const username = $('#username').val();
      if (!username) {
        alert('Please enter your username');
        return;
      }
      localStorage.setItem('username', username);
      window.location.href = 'tes.html';
    });
  });

  $(document).ready(function() {
    // Fungsi untuk menampilkan notifikasi
    function showNotification(message, type) {
      $.notify({
        message: message
      }, {
        type: type,
        timer: 1000,
        placement: {
          from: 'top',
          align: 'center'
        }
      });
    }
  
    // Fungsi untuk menambahkan transaksi
    function addTransaction(transaction) {
      const tableBody = $('table tbody');
      const row = $('<tr>').append(
        $('<td>').text(transaction.name),
        $('<td>').text(transaction.nominal),
        $('<td>').text(transaction.category),
        $('<td>').html(transaction.type === 'income' ? '<span class="badge badge-success">Income</span>' : '<span class="badge badge-danger">Outcome</span>')
      );
      tableBody.append(row);
    }
  
    // Fungsi untuk mengambil data transaksi dari local storage
    function getTransactions() {
      const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      return transactions;
    }
  
    // Fungsi untuk menyimpan data transaksi ke local storage
    function saveTransactions(transactions) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  
    // Fungsi untuk menambahkan transaksi
    function addIncome() {
      const name = $('#income-name').val();
      const nominal = parseInt($('#income-nominal').val());
      const category = $('#income-category').val();
      if (!name || !nominal || !category) {
        showNotification('Transaksi belum selesai, silakan lengkapi formulir!', 'danger');
        return;
      }
      const transaction = {
        name,
        nominal,
        category,
        type: 'income'};
      const transactions = getTransactions();
      transactions.push(transaction);
      saveTransactions(transactions);
      addTransaction(transaction);
      showNotification('Transaksi sukses!', 'success');
      $('#income-form')[0].reset();
    }
  
    // Fungsi untuk menambahkan transaksi
    function addOutcome() {
      const name = $('#outcome-name').val();
      const nominal = parseInt($('#outcome-nominal').val());
      const category = $('#outcome-category').val();
      if (!name || !nominal || !category) {
        showNotification('Transaksi belum selesai, silakan lengkapi formulir!', 'danger');
        return;
      }
      const transaction = {
        name,
        nominal,
        category,
        type: 'outcome'
      };
      const transactions = getTransactions();
      transactions.push(transaction);
      saveTransactions(transactions);
      addTransaction(transaction);
      showNotification('Transaksi sukses!', 'success');
      $('#outcome-form')[0].reset();
    }
  
    // Event listener untuk form income
    $('#income-form').submit(function(e) {
      e.preventDefault();
      addIncome();
    });
  
    // Event listener untuk form outcome
    $('#outcome-form').submit(function(e) {
      e.preventDefault();
      addOutcome();
    });
  });

  //expenct money
  // Mendefinisikan font-awesome
// dan aksenir CDN
const fontAwesomeCDN = document.createElement('link');
fontAwesomeCDN.rel = 'stylesheet';
fontAwesomeCDN.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

// Menambahkan font-awesome
// ke head
document.head.append(fontAwesomeCDN);

// Mendapatkan elemen untuk
// CSS dan JS
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'style.css';

const script = document.createElement('script');
script.src = 'script.js';

// Menambahkan CSS dan JS
// ke head dan body
document.head.append(style);
document.body.append(script);

// Mendapatkan elemen untuk nama pengguna
const loggedInUser = document.querySelector('#logged-in-user');

// Mendapatkan nama pengguna dari lokal storage
const username = localStorage.getItem('username');

// Menampilkan nama pengguna
if (username) {
    loggedInUser.textContent = username;
}

