<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-left">
                    <h3>lmnzxx</h3>
                    <a href="mailto:lmnzxx@example.com" class="footer-email">contactlmnzxx@gmail.com</a>
                </div>
                <div class="footer-center">
                    <h4>Link</h4>
                    <nav>
                        <a href="#home" @click.prevent="scrollTo('home')">Home</a>
                        <a href="#about" @click.prevent="scrollTo('about')">About</a>
                        <a href="#portofolio" @click.prevent="scrollTo('portofolio')">Portofolio</a>
                        <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
                    </nav>
                </div>
                <div class="footer-right">
                    <h4>Support Document</h4>
                    <a href="/Resume.pdf" download>Download my Resume</a>
                </div>
            </div>
            <div class="footer-middle">
                <div class="social-icons">
                    <a href="https://www.github.com/lmnzxx" class="icon"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/heryandi-pradana-9b3035196/" class="icon"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.x.com/lmnzxx" class="icon"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/lmnzxx" class="icon"><i class="fab fa-instagram"></i></a>
                </div>
                <hr />
            </div>
            <p>Made with ❤️ by lmnzxx using Vue + Vite + TS</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const scrollTo = (sectionId: string) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        return { scrollTo };
    },
});
</script>

<style scoped>
.footer {
    background: rgb(33, 33, 33);
    padding: 20px 0;
    text-align: center;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
    font-family: "Poppins", sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Bagian Atas */
.footer-top {
    max-width: 100%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 10px 0;
    color: #ffffff;
    text-align: left;
    gap: 200px;
    margin-bottom: 50px;
}

.footer-left h3 {
    font-size: 18px;
    text-align: left;
    margin-bottom: 2px;
}

.footer-email {
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
}

.footer-email:hover {
    color: #eaeaea;
}

.footer-center, .footer-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.footer-center h4, .footer-right h4 {
    margin-bottom: 5px;
    font-size: 16px;
    color: #ffffff;
}

.footer-center nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.footer-center a, .footer-right a {
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-center a:hover, .footer-right a:hover {
    color: #eaeaea;
}

/* Bagian Tengah */
.footer-middle {
    margin: 15px 0;
    max-width: 800px;
    width: 100%;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
}

.icon {
    font-size: 18px;
    color: #ffffff;
    transition: color 0.3s ease;
}

.icon:hover {
    color: #eaeaea;
}

hr {
    border: none;
    height: 1px;
    background: #ffffff;
    margin: 10px 0;
    width: 100%;
}

/* Bagian Bawah */
.footer p {
    font-size: 14px;
    color: #ffffff;
    margin-top: 10px;
}

/* Responsive */
@media (max-width: 768px) {
    .footer-top {
        flex-direction: column;
        gap: 10px;
        text-align: left;
    }

    .footer-center nav {
        flex-direction: column;
        gap: 5px;
    }

    .footer p {
        font-size: 12px;
    }
}
</style>
