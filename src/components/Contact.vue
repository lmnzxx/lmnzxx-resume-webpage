<template>
    <div class="contact-page">
        <div class="contact-container">
            <h2>Contact Us</h2>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Nama</label>
                    <input v-model="formData.name" type="text" id="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="formData.email" type="email" id="email" required />
                </div>
                <div class="form-group">
                    <label for="message">Pesan</label>
                    <textarea v-model="formData.message" id="message" rows="5" required></textarea>
                </div>
                <button type="submit">Kirim</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Ganti dengan URL action Google Form lo
const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2_Zfd7jRFGUa-AWpn9yRfcv6YBcaXzuRGjJ43KtgJkvugGg/formResponse";

// Mapping field dari Google Form
const FORM_FIELDS = {
    name: "entry.1996200878",
    email: "entry.1451063446",
    message: "entry.55292027",
};

const formData = ref({
    name: "",
    email: "",
    message: "",
});

// Fungsi submit form
const submitForm = async () => {
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append(FORM_FIELDS.name, formData.value.name);
    formDataEncoded.append(FORM_FIELDS.email, formData.value.email);
    formDataEncoded.append(FORM_FIELDS.message, formData.value.message);

    try {
        await fetch(GOOGLE_FORM_URL, {
            method: "POST",
            mode: "no-cors",
            body: formDataEncoded,
        });
        alert("Pesan berhasil dikirim!");
        formData.value = { name: "", email: "", message: "" }; // Reset form
    } catch (error) {
        alert("Gagal mengirim pesan!");
    }
};
</script>

<style scoped>
.contact-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f1f1f1;
}

.contact-container {
    width: 100%;
    max-width: 1200px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

textarea {
    resize: none;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background-color: #0056b3;
}
</style>
