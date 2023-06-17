<template>

    <div class="sidebar-box">
        <div class="link-box">
            <LinkIcon text="https://github.com/MarceloSemeghini">
                <a href="https://github.com/MarceloSemeghini" target="_blank">
                    <img src="../assets/github.png" alt="github">
                </a>
            </LinkIcon>
            <LinkIcon text="https://www.linkedin.com/in/marcelo-santesso-semeghini-248937187/">
                <a href="https://www.linkedin.com/in/marcelo-santesso-semeghini-248937187/" target="_blank">
                    <img src="../assets/linkedin.png" alt="linkedin">
                </a>
            </LinkIcon>
            <LinkIcon text="+55(16)99107-5199" @click="copy('5516991075199')">
                <img src="../assets/whatsapp.png" alt="whatsapp">
            </LinkIcon>
            <LinkIcon text="marcelosemeghini@gmail.com" @click="copy('marcelosemeghini@gmail.com')">
                <img src="../assets/gmail.png" alt="gmail">
            </LinkIcon>
        </div>
    </div>

</template>

<script>
import LinkIcon from './LinkIcon.vue'

    export default {
        components: {
            LinkIcon
        },
        methods: {
            copy(text){
                navigator.clipboard
                    .writeText(text)
                    .then(() => {
                        alert(this.$t('sidebar.copied'));
                    })
                    .catch(() => {
                        alert(this.$t('sidebar.couldnt_copy') );
                    });
            }
        }
    }

</script>