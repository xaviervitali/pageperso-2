<template>
  <div id="other">
    <client-only placeholder="Loading...">
      <apexcharts width="80%" type="bar" :options="options" :series="series" />
    </client-only>
  </div>
</template>

  <script>
export default {
  components: {
    Apexcharts: () => import("vue-apexcharts")
  },
  props: {
    selected: { type: String, required: true },
    noteMin: { type: Number, required: true }
  },
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
           animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
    }
        },
        xaxis: {
          labels: { show: false },

          categories: []
        },
        yaxis: {
          labels: { show: false }
        },
        grid: {
          show: false
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: "middle",
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + "%";
          },
          style: {
            fontSize: '1.2rem',
            fontFamily: 'Helvetica, Arial, sans-serif',
            // colors: 'white'
        },
         dropShadow: {
            enabled:  true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.45
        },
          offsetX: 0
        }
      },
      series: [
        {
          name: "Autres compétences",
          data: []
        }
      ]
    };
  },

  methods: {
    capitalize(title) {
      let newStr = "";

      title = title.split(" ");

      title.forEach(word => {
        newStr += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
      });
      return newStr;
    }
  },
  created() {
    this.series[0].data = [];
    this.options.xaxis.categories = [];

    this.$store.getters["skills/sortSkillsByName"].skillsOthers.forEach(
      skill => {
        if (skill.note > this.noteMin) {
          this.options.xaxis.categories.push(this.capitalize(skill.title));

          this.series[0].data.push(skill.note * 10);
        }
      }
    );
  },
};
</script>

  <style  >
p {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  z-index: 99;
  text-shadow: 0 0 1px black;
  margin: 0;
  max-width: 20rem;
}

#other {
  background-image:
    url("../assets/img/otherBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
  margin: 2rem 0;
}

.apexcharts-canvas {
  text-align: center;
  margin: auto;
}
</style>
