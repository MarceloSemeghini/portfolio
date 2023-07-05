<template>
    <div :class="open ? 'opened' : 'closed'" @mouseover="open = true" @mouseleave="open = false">
        <template v-if="type === 'link'">
            <a :href="link" target="_blank">
                <slot></slot>
            </a>
        </template>
        <template v-if="type === 'clipboard'">
            <button @click="copy()">
                <slot></slot>
                <img src="../assets/coppied.png" alt="coppied" class="coppiedIcon" :class="coppied ? 'visible' : 'invisible'">
            </button>
        </template>
        <div class="popup">
            <div class="contact-info">
                <h2>{{ text }}</h2>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        props: {
            text: {
                type: String
            },
            link: {
                default: '',
                type: String
            },
            clipboardContent: {
                default: '',
                type: String
            },
            type: {
                default: 'link',
                type: String
            },
        },
        data() {
            return {
                open: false,
                coppied: false
            }
        },
        methods: {
            copy(){
                navigator.clipboard
                    .writeText(this.clipboardContent)
                    .then(() => {
                        this.coppied = true
                        
                    })
                    .catch(() => {
                    });
                setTimeout(() => {
                    this.coppied = false
                }, 500);
            }
        }
    }

</script>