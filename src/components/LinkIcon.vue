<template>
    <div class="icon-box">
        <slot></slot>
        <div class="info-popup">
            <div class="contact-info">
                <h2>{{ text }}</h2>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        props: ['text']
    }

</script>