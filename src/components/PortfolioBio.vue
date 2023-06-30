<template>

    <div class="bio">
        <div class="intro section">
            <div>
                <h1>{{ $t('bio.role') }}</h1>
            </div>
            <div class='profile-box' @mouseover="active=false" @mouseleave="active=true">
                <img src="../assets/profile1.png" alt="profile" :class="active ? 'visible' : 'invisible'">
                <img src="../assets/profile2.png" alt="profile" :class="active ? 'invisible' : 'visible'" class="image2">
            </div>
        </div>
        <div class="about section" id="about">
            <div class="content">
                <h1>
                    {{ $t('bio.invitation') }} 
                    {{ $t('bio.incentive') }} 
                </h1>
                <h2>
                    {{ $t('bio.who_am_i') }} 
                    {{ $t('bio.get_in_touch') }} 
                </h2>
            </div>
        </div>
        <div class="project section" id="projects">
            <PProjects/>
        </div>
    </div>
        
</template>

<script>
    import PProjects from './PortfolioProjects.vue'

    export default {
        data(){
            return {
                active: true
                
            }
        },
        components: {
            PProjects
        }
    }

</script>