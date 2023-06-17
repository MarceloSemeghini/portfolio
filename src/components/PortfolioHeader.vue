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
        <LanguagePopup/>
    </div>

</template>

<script>
import LanguagePopup from './LanguagePopup.vue'

    export default {
        components: {
            LanguagePopup
        }
    }

</script>