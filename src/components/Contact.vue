<template>
    <section id="contact" class="contact">
        <div class="tittle-container">
            <h1 class="tittle">Contact Us</h1>
            <h2 class="sub-tittle">Let's start a conversation!</h2>
        </div>
        <div class="contact-container">
            <div class="contact-form">
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <div class="input-container">
                            <input v-model="formData.name" type="text" id="name" placeholder=" " required />
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div class="form-group" :class="{ 'invalid-group': !isEmailValid && formData.email }">
                        <div class="input-container">
                            <input v-model="formData.email" type="email" id="email" placeholder=" " required @input="validateEmail"/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-container">
                            <textarea v-model="formData.message" id="message" placeholder=" " required></textarea>
                            <label for="message">Message</label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

        <div v-if="showAlert" class="alert-container">
            <div class="alert-box">
                <p>{{ alertMessage }}</p>
                <button @click="showAlert = false">OK</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isEmailValid = ref(true);

const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isEmailValid.value = emailPattern.test(formData.value.email);
};


const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2_Zfd7jRFGUa-AWpn9yRfcv6YBcaXzuRGjJ43KtgJkvugGg/formResponse";

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

const showAlert = ref(false);
const alertMessage = ref("");

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
        alertMessage.value = "Message sent! We'll get back to you soon.";
        showAlert.value = true;
        formData.value = { name: "", email: "", message: "" };
    } catch (error) {
        alertMessage.value = "Oh no! We couldn't send your message. Try again?";
        showAlert.value = true;
    }
};
</script>

<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #ffffff;
    font-family: "Helvetica-Regular", Helvetica;
    gap: 50px;
}

.contact-container {
    width: 100%;
    max-width: 1200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 120px;
}

.contact-form {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.tittle-container {
    margin-top: 50px;
}

.tittle {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}

.sub-tittle {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 25px;
    color: #666;
}

.form-group {
    margin-bottom: 20px;
    position: relative;
}

.input-container {
    position: relative;
    width: 100%;
}

.input-container input,
.input-container textarea {
    max-width: 1200px;
    width: 100%;
    padding: 14px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    background: #f1f1f1;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.input-container label {
    position: absolute;
    top: 14px;
    left: 12px;
    background: #f1f1f1;
    padding: 0 5px;
    font-size: 16px;
    color: #aaa;
    transition: all 0.3s ease;
}

.input-container input:focus,
.input-container textarea:focus {
    border-color: #007bff;
    background: white;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

.input-container input:focus + label,
.input-container textarea:focus + label {
    top: -7px;
    background-color: white;
    font-size: 12px;
    color: #007bff;
}

.input-container input:not(:placeholder-shown),
.input-container textarea:not(:placeholder-shown) {
    border-color: #007bff;
    background: white;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

.input-container input:not(:placeholder-shown) + label,
.input-container textarea:not(:placeholder-shown) + label {
    top: -7px;
    background: white;
    font-size: 12px;
    color: #007bff;
}

.invalid-group .input-container input {
    border-color: red !important;
    box-shadow: 0 0 8px rgba(255, 0, 0, 0.5);
}

.invalid-group .input-container label {
    color: red !important;
}

textarea {
    resize: vertical;
    height: 100px;
}

button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background: linear-gradient(135deg, #0056b3, #003f7f);
    transform: scale(1.02);
}

.alert-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 101;
}

.alert-box {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    min-width: 300px;
}

.alert-box p {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
    margin-top: 0;
}

.alert-box button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s;
}

.alert-box button:hover {
    background: #0056b3;
}
</style>
