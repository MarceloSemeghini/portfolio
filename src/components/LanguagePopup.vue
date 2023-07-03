<template>
    <div class="flag box">
        <div class="borders" :class="open ? 'opened' : 'closed'" @click="togglePopup()">
            <template v-if="storedLanguage() === 'en'">
                <img src="../assets/EUAflag.png" alt="flag">
            </template>
            <template v-else-if="storedLanguage() === 'pt'">
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
            }
        },
        methods: {
            togglePopup(){
                this.open = !this.open
            },  
            storedLanguage(){
                if(localStorage.getItem('lang')){
                    return localStorage.getItem('lang')
                } else {
                    localStorage.setItem('lang', 'en');
                    return 'en'
                }
            },
            changeLanguage(lang){
                if(this.storedLanguage() != lang){
                    localStorage.setItem('lang', lang);
                    window.location.reload();
                }
            },
            
        }
    }
</script>