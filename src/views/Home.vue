<template>
  <canvas ref="binaryrain"></canvas>
  <PSidebar/>
  <PHeader/>
  <PBio/>
</template>

<script>
  import PHeader from '../components/PortfolioHeader.vue'
  import PSidebar from '../components/PortfolioSidebar.vue'
  import PBio from '../components/PortfolioBio.vue'

  export default {
    name: 'HomeView',
    components: {
      PHeader,
        PSidebar,
        PBio,
    },
    mounted() {
      var canvas = this.$refs.binaryrain;
      var context = canvas.getContext("2d");

      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      var binary = "10";
      binary = binary.split("");

      var font_size = 32;
      var columns = canvas.width/font_size; 

      var drops = [];

      for(var x = 0; x < columns; x++)
          drops[x] = 1; 

      function draw()
      {
          context.fillStyle = "rgba(0, 0, 0, 0.05)";
          context.fillRect(0, 0, canvas.width, canvas.height);
          
          context.fillStyle = "#0f0"; 
          context.font = font_size + "px arial";

          for(var i = 0; i < drops.length; i++)
          {
              var text = binary[Math.floor(Math.random()*binary.length)];

              context.fillText(text, i*font_size, drops[i]*font_size);
              
              if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
                  drops[i] = 0;
              
              drops[i]++;
          }
      }

      setInterval(draw, 33);
    }
}
</script>
