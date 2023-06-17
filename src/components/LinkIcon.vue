<template>
    <div :class="open ? 'opened' : 'closed'" @mouseover="open = true" @mouseleave="open = false">
        <slot></slot>
        <div class="popup">
            <div class="contact-info">
                <h2>{{ text }}</h2>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        props: ['text'],
        data() {
            return {open: false}
        }
    }

</script>