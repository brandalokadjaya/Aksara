
      /// -- script tulisan berjalan baru  input disini ///
         
  
    const message = "Aku mengerti. Aku juga pernah merasa sedih tentang sebuah perasaan. Rasanya seperti dunia runtuh seketika. Rasanya seperti tidak ada yang bisa membuatmu merasa lebih baik. Rasanya seperti semua harapan hilang. Tapi aku tahu bahwa hal-hal akan membaik. Kau akan melewati ini. Kau akan menemukan kebahagiaan lagi. Kau akan menemukan cinta lagi. Kau akan menemukan harapan lagi. Dalam waktu yang singkat, kau akan dapat melihat kembali ke masa ini dan menyadari bahwa itu hanya bagian kecil dari hidupmu. Itu hanya saat yang sulit yang kau lalui. Dan kau akan bersyukur telah melewatinya. Jadi jangan menyerah. Teruslah maju. Teruslah berharap. Dan kau akan menemukan kebahagiaan lagi.";

  const typedText = document.getElementById('typed-text');
  const readButton = document.getElementById('read-button');
function type() {
  let index = 0;

  const interval = setInterval(() => {
    typedText.textContent += message[index];

    index++;

    if (index >= message.length) {
      clearInterval(interval);
    }
  }, 70);
}
readButton.addEventListener('click', () => {
  const speech = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(speech);
});

document.addEventListener('DOMContentLoaded', type);


        
        
        
        /// script java $= fungsi suara dari zero ///
      
        
              // Inisialisasi objek SpeechSynthesis
const synth = window.speechSynthesis;

// Fungsi untuk menyapa pengguna
function greetUser() {
  const greetingText = "  Halo, saya Amoo . asisten komputer organisasi dhefrends. Saya adalah asisten virtual yang dilatih untuk memberikan informasi dan menyelesaikan tugas. Saya dapat mengakses, dan memproses informasi dari dunia nyata melalui angin. dan menjaga respons saya tetap konsisten dengan hasil pencarian. Saya masih dalam pengembangan, tetapi saya telah belajar untuk melakukan berbagai jenis tugas, termasuk menyapa anda .  SELAMAT DATANG DI AKSARA 'saatnya menyambung rasa' copyright by Dhe frends ";

  // Membuat objek SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(greetingText);
utterance.lang = 'id-ID'; // Kode bahasa Indonesia
  // Mengeluarkan suara
  synth.speak(utterance);
}

// Mendapatkan elemen tombol toggle
const toggleButton = document.getElementById('toggle-form-button');

// Variabel untuk menyimpan status tombol toggle
let isToggled = false;

// Event listener untuk tombol toggle
toggleButton.addEventListener('click', () => {
  if (!isToggled) {
    // Mengubah status toggle menjadi true
    isToggled = true;

    // Memanggil fungsi greetUser()
    greetUser();
  }
});

      
        
        
        
            ///  script java $= fungsi postingan | input | output/hasil | tombol ubah nama | tombol like ///
          
          
    // Mendapatkan elemen-elemen dari DOM
    const postForm = document.getElementById('post-form');
    const postInput = document.getElementById('post-input');
    const postsContainer = document.getElementById('posts');
    const changeUsernameButton = document.getElementById('change-username-button');
    const toggleFormButton = document.getElementById('toggle-form-button');

    // Mendapatkan username dari local storage atau mengatur default
    let username = localStorage.getItem('username') || 'Guest';

    // Fungsi untuk mengatur username baru
    const setUsername = (newUsername) => {
      username = newUsername.trim();
      localStorage.setItem('username', username);
    };

    // Fungsi untuk membuat postingan baru
    const createPost = (content) => {
      const post = {
        id: Date.now(),
        content,
        likes: 0 ,
        username
      };
      posts.unshift(post);
      return post;
    };

    // Fungsi untuk menggambar postingan ke dalam DOM
    const renderPost = (post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <div class="post-username">${post.username}</div>
        <p class="post-content">${post.content}</p>
        <div class="post-actions">
          <button class="like-button" data-id="${post.id}">
            <span class="-button">
              <i class="far fa-heart heart-icon"></i>
              <span class="likes-count">${post.likes}</span>
            </span>
          </button>
        </div>
      `;
      postsContainer.insertBefore(postElement, postsContainer.firstChild);
    };

    // Fungsi untuk menggambar semua postingan ke dalam DOM
    const renderPosts = () => {
      postsContainer.innerHTML = '';
      posts.forEach(post => {
        renderPost(post);
      });
    };

    // Fungsi untuk menambah jumlah like pada postingan
    const addLike = (postId) => {
      const post = posts.find(p => p.id === postId);
      if (post) {
        post.likes++;
      }
    };

    // Fungsi untuk mengatur tampilan tombol like
    const setLikeButtonState = (button, isClicked) => {
      const likesCount = button.querySelector('.likes-count');
      likesCount.textContent = isClicked ? parseInt(likesCount.textContent) + 1 : parseInt(likesCount.textContent) + 1;
      button.classList.toggle('clicked', isClicked);
    };

    // Event listener saat form postingan dikirim
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const content = postInput.value.trim();
      if (content !== '') {
        const post = createPost(content);
        renderPost(post);
        postInput.value = '';
        postsContainer.scrollTop = 0;
      }
    });

    // Event listener saat tombol like diklik
    postsContainer.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('heart-icon')) {
        const likeButton = target.parentNode;
        const postId = parseInt(likeButton.dataset.id);
        const isClicked = !likeButton.classList.contains('clicked');
        addLike(postId);
        setLikeButtonState(likeButton, isClicked);
      }
    });

    // Event listener saat tombol ganti username diklik
    changeUsernameButton.addEventListener('click', () => {
      const newUsername = prompt('🎗 Demit ora ndulit Setan ora doyan 🎗 silahkan Masukkan username baru sesuka kalian :');
      if (newUsername !== null && newUsername.trim() !== '') {
        setUsername(newUsername);
      }
    });

    // Event listener saat tombol toggle form diklik
    toggleFormButton.addEventListener('click', () => {
      if (postForm.style.display === 'none') {
        showPostForm();
      } else {
        hidePostForm();
      }
    });

    // Fungsi untuk menampilkan form postingan
    const showPostForm = () => {
      postForm.style.display = 'block';
      postInput.focus();
    };

    // Fungsi untuk menyembunyikan form postingan
    const hidePostForm = () => {
      postForm.style.display = 'none';
    };

    // Array untuk menyimpan data postingan
    let posts = [];

    // Contoh postingan awal
    createPost('Amoo said ; Selamat datang di Aksara! from TheFriends ❕ otw milad ke 2 pada 12 Rabiul awal 1445 H / september besok ');

    // Menggambar postingan awal ke dalam DOM
    renderPosts();
    