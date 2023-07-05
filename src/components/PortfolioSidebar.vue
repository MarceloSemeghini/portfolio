<template>

    <div class="sidebar-box">
        <div class="link-box">
            <LinkIcon text="https://github.com/MarceloSemeghini" link="https://github.com/MarceloSemeghini">
                    <img src="../assets/github.png" alt="github">
            </LinkIcon>
            <LinkIcon text="https://www.linkedin.com/in/marcelo-santesso-semeghini-248937187/" link="https://www.linkedin.com/in/marcelo-santesso-semeghini-248937187/">
                    <img src="../assets/linkedin.png" alt="linkedin">
            </LinkIcon>
            <a href="https://wa.me/5516991075199" target="blank">
                <LinkIcon text="+55(16)99107-5199" type="clipboard" clipboardContent='5516991075199'>
                    <img src="../assets/whatsapp.png" alt="whatsapp" >
                </LinkIcon>
            </a>
            <LinkIcon text="marcelosemeghini@gmail.com" type="clipboard" clipboardContent='marcelosemeghini@gmail.com'>
                <img src="../assets/gmail.png" alt="gmail">
            </LinkIcon>
        </div>
    </div>

</template>

<script>
import LinkIcon from './LinkIcon.vue'

    export default {
        components: {
            LinkIcon,
        },
    }

</script>