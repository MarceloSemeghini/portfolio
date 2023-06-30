<template>

    <div class="projects-box" id="projects">
        <template v-for="index in Math.ceil(this.projects.length/3)" :key="index">
            <div class="project-row">
                <template v-for="project in 3" v-bind:key="project.image">
                    <div class="project" v-if="projects[3*(index-1)+project-1]">
                        <h3>{{ projects[3*(index-1)+project-1].name }}</h3>
                        <a :href="projects[3*(index-1)+project-1].link" target="_blank" class="image-box">
                            <img :src="projects[3*(index-1)+project-1].image" :alt="projects[3*(index-1)+project-1].name">
                        </a>
                    </div>
                    <div class="project soon" v-else>
                        <h1>{{ $t('projects.soon') }}</h1>
                    </div>
                </template>
            </div>
        </template>
    </div>

</template>

<script>

    export default{
        data() {
            return {
                projects: [
                    {image: this.getImage('pokedexprint'), link: 'https://github.com/MarceloSemeghini/pokemon', name: 'pokedex'},
                ]
            }
        },
        methods: {
            getImage(name) {
                var images = require.context('../assets/', false, /\.png$/)
                return images('./' + name + ".png")
            }
        }
    }

</script>