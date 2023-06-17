<template>
    <div class="flag box">
        <div class="borders" :class="open ? 'opened' : 'closed'" @click="togglePopup()">
            <template v-if="language === 'en'">
                <img src="../assets/EUAflag.png" alt="flag">
            </template>
            <template v-else-if="language === 'pt'">
                <img src="../assets/BRflag.png" alt="BRflag">
            </template>
            <div class="popup">
                <div @click="changeLanguage('en')">
                    <img src="../assets/EUAflag.png" alt="EUAflag" >
                </div>
                <div @click="changeLanguage('pt')">
                    <img src="../assets/BRflag.png" alt="BRflag">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                open: false,
                language: localStorage.getItem('lang')
            }
        },
        methods: {
            togglePopup(){
                this.open = !this.open
            },  
            changeLanguage(lang){
                if(this.language != lang){
                    localStorage.setItem('lang', lang);
                    window.location.reload();
                }
            }
        },
        created () {
            if(localStorage.getItem('lang') == null){
                localStorage.setItem('lang', 'en')
            }
        }
    }
</script>