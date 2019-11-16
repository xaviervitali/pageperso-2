<template>
  <div id="other">
    <client-only placeholder="Loading...">

      <apexcharts width="80%" type="donut" :options="chartOptions" :series="series" />

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
      series: [],
      chartOptions: {
        chart: {
          type: "donut"
        },
        labels: []
      }
    };
  },
  created() {
    this.series = [];
    this.chartOptions.labels = [];

    this.$store.getters["skills/sortSkillsByName"].skillsOthers.forEach(
      skill => {
        if (skill.note > this.noteMin) {
          this.chartOptions.labels.push(skill.title);

          this.series.push(skill.note * 10);
        }
      }
    );
  }
};
</script>

<style>
#other {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url("../assets/img/otherBackground.jpg");
  background-repeat: no-repeat;

  background-size: cover;
  background-position-y: center;
  padding: 1rem;
  margin: 2rem 0;
}

.apexcharts-canvas {
  margin: auto;
}

.apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left{
  background: rgba(255, 255, 255, .8);
  height: 7rem ;
  border-radius: 1rem;
}
</style>
