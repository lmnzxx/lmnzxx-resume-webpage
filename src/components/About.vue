<template>
        <section class="about" id="about">
            <div class="container">
                <div class="wrapabout">
                    <h2 class="tittle">ABOUT ME</h2>
                    <div class="content-wrapper">
                        <div class="left-content">
                            <p class="sub-tittle">Welcome to My World of Innovation in Tech and Networking</p>
                            <p class="intro">
                            I&#39;m a Computer Systems Student with a background in Computer and Network Engineering from vocational
                            high school, now advancing my expertise in Backend Development and Cybersecurity. With main experience as
                            an IT Technical Support and Network Administrator, I bring a solid foundation in networking, database
                            management, and Python programming, paired with technical problem-solving skills. My journey in tech
                            includes projects that leverage these skills to enhance system security and efficiency.<br /><br />Currently
                            exploring cybersecurity, network architecture design, REST API development, and project management, I aim
                            to bring a unique blend of technical depth and strategic foresight to each project. Let&#39;s build
                            something remarkable together!
                            </p>
                        </div>
                        <div class="right-content">
                            <p class="get-to-know">Get to know me better by checking my social media!</p>
                            <div class="social-container">
                                <p class="get-to-know-sub">
                                    Let’s connect and share ideas! Whether you&#39;re interested in collaboration or simply want to discuss
                                    these fields, feel free to reach out.😬
                                </p>
                                <div class="group-link">
                                    <a href="https://www.instagram.com/lmnzxx">
                                        <img class="element-instagram" src="../assets/38-instagram-2-512-1.png">
                                    </a>
                                    <a href="https://github.com/lmnzxx">
                                        <img class="icon-social-github" src="../assets/icon-social-github-256-1.png" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/heryandi-pradana-9b3035196">
                                        <img class="element-linkedin" src="../assets/11-linkedin-256-1.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
    .about {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        padding: 40px 0;
    }
    .container {
        max-width: 1200px;
        width: 100%;
        padding: 40px;
    }
    .wrapabout {
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .tittle {
        font-size: 24px;
        font-weight: bold;
        color: #000;
        margin-bottom: 10px;
        font-family: "Helvetica-Regular", Helvetica;
    }
    .content-wrapper {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
    .sub-tittle {
        font-size: 32px;
        font-weight: bold;
        color: #000;
        margin-bottom: 20px;
        font-family: "Helvetica-Regular", Helvetica;
    }
    .left-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .intro {
        font-size: 18px;
        color: #595959;
        text-align: justify;
        max-width: 800px;
        line-height: 1.6;
        font-family: "Helvetica-Regular", Helvetica;
    }
    .right-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .get-to-know {
        font-size: 24px;
        font-weight: bold;
        color: #000;
        margin-top: 30px;
        font-family: "Helvetica-Bold", Helvetica;
    }
    .social-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    .get-to-know-sub {
        font-size: 18px;
        text-align: justify;
        color: #595959;
        max-width: 600px;
        font-family: "Helvetica-Regular", Helvetica;
    }
    .group-link {
        display: flex;
        gap: 15px;
        margin-top: 10px;
    }
    .element-instagram {
        width: 29px;
        height: 30px;
        top: 0;
        left: 0;
        object-fit: cover;
    }
    .icon-social-github {
        width: 29px;
        height: 29px;
        top: 1px;
        left: 49px;
        object-fit: cover;
    }
    .element-linkedin {
        width: 30px;
        height: 30px;
        top: 0;
        left: 98px;
        object-fit: cover;
    }
    @media (max-width: 768px) {
        .content-wrapper {
            flex-direction: column;
        }
        .left-content {
            order: 1; 
        }
        .right-content {
            order: 2; 
        }
    }
</style>