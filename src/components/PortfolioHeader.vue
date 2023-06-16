<template>

    <div class="header-box">
        <div class="link box">
            <h2>
                <a href="#about">{{ $t('header.about') }}</a>
            </h2>
            <h2>
                <a href="#projects">{{ $t('header.projects') }}</a>
            </h2>
        </div>
        <div class="name box">
            <h1>Marcelo Semeghini</h1>
        </div>
        <div class="flag box">
            <select name="language" id="lang" v-model="language" @change="changeLanguage()">
                <option value="en">EN<img src="../assets/EUAflag.png" alt="flag"></option>
                <option value="pt">PT<img src="../assets/BRflag.png" alt="flag"></option>
            </select>
            <div class="borders">
                <img src="../assets/EUAflag.png" alt="flag">
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                language: null
            }
        },
        methods: {
            changeLanguage(){
                if(localStorage.getItem('lang') !== this.language){
                    localStorage.setItem('lang', this.language);
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