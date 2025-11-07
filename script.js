// Data resep dalam format JavaScript Object
const recipes = {
    "nasi-goreng": {
        title: "Nasi Goreng Sederhana 🍚🌶️",
        bahan: [
            "2 piring nasi putih (dingin lebih baik)",
            "1 butir telur",
            "3 siung bawang merah, iris",
            "2 siung bawang putih, iris",
            "1 sdm kecap manis",
            "Garam, merica secukupnya",
            "Sedikit minyak goreng"
        ],
        cara: [
            "Panaskan minyak, orak-arik telur hingga matang. Sisihkan.",
            "Masukkan bawang merah dan bawang putih, tumis hingga harum.",
            "Masukkan nasi, aduk rata dengan bumbu dan telur orak-arik.",
            "Tambahkan kecap manis, garam, dan merica. Aduk cepat hingga nasi tercampur rata dan berwarna coklat merata.",
            "Koreksi rasa dan sajikan selagi hangat."
        ]
    },
    "telur-ceplok": {
        title: "Telur Ceplok Kilat 🍳🧂",
        bahan: [
            "1 butir telur ayam",
            "2 sdm minyak goreng",
            "Garam dan merica secukupnya"
        ],
        cara: [
            "Panaskan minyak dengan api sedang.",
            "Pecahkan telur ke dalam wajan. Jangan aduk.",
            "Taburkan garam dan merica di atas telur.",
            "Tunggu hingga bagian putih telur matang dan pinggirannya sedikit renyah.",
            "Angkat dengan spatula. Sajikan."
        ]
    }
};

// Ambil elemen DOM
const selectElement = document.getElementById('recipe-select');
const outputElement = document.getElementById('recipe-output');

// Fungsi untuk menampilkan resep
function displayRecipe(recipeKey) {
    // Kosongkan output jika tidak ada yang dipilih
    if (!recipeKey) {
        outputElement.innerHTML = '<p class="placeholder-text">Resep akan muncul di sini setelah Anda memilih.</p>';
        return;
    }

    const recipe = recipes[recipeKey];
    let htmlContent = `<h2 class="recipe-title">${recipe.title}</h2>`;

    // Bagian Bahan
    htmlContent += '<h3>Bahan-Bahan:</h3><ul>';
    recipe.bahan.forEach(item => {
        htmlContent += `<li>${item}</li>`;
    });
    htmlContent += '</ul>';

    // Bagian Cara Membuat
    htmlContent += '<h3>Cara Membuat:</h3><ol>';
    recipe.cara.forEach(step => {
        htmlContent += `<li>${step}</li>`;
    });
    htmlContent += '</ol>';

    outputElement.innerHTML = htmlContent;
}

// Tambahkan event listener saat pilihan di dropdown berubah
selectElement.addEventListener('change', (event) => {
    const selectedKey = event.target.value;
    displayRecipe(selectedKey);
});

// Panggil sekali saat inisialisasi untuk memastikan placeholder muncul
displayRecipe('');
