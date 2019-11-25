<template>
  <footer>
    <section class="fixed-bottom d-flex justify-content-around align-items-center flex-row p-2">
      <article>
        <p v-b-tooltip.hover.top="'Linkedin'">
          <a href="http://www.linkedin.com/in/xavier-vitali" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </p>
      </article>
      <article>
        <p v-b-tooltip.hover.top="'Github'">
          <a href="https://github.com/xaviervitali/home" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </p>
      </article>
      <article class="weather" v-if="showWeather">
        <p>
          <i :class="['wi',  this.$store.state.weather.weather]"></i>
        </p>
        <p>{{this.$store.state.weather.temperature}} °C</p>
      </article>
    </section>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      gettingLocation: false,
      errorStr: null,
      showWeather: false
    };
  },
  created() {},

  mounted() {
    if (
      this.$store.state.weather.weather === "" &&
      this.$store.state.weather.temperature === 0
    ) {
      if (!("geolocation" in navigator)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }

      this.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.gettingLocation = false;
          this.$store.dispatch("weather/getWeather",pos);
          this.showWeather = true;
        },
        err => {
          this.gettingLocation = false;
          this.showWeather = false;

          this.errorStr = err.message;
        }
      );
    }
  }
};
</script>

<style>
footer section {
  background: linear-gradient(to top, #2fa9bc 33%, #f9f9f9 99%);
}

footer p {
  padding: 0;
  color: white;
  margin: 0;
  /* text-shadow: 0 0 1px black; */
}
footer a {
  padding: 0;
  margin: 0;
}
.date,
.date p {
  font-size: 1rem;
  margin: 0.1rem;
}

footer .fab {
  color: white;
  font-size: 2rem;
}
footer .fab:hover {
  color: blue;
}

footer section article {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}
footer {
  margin-top: 4rem;
}

.weather {
  font-size: 1.5rem;
}

/* .weather:hover {
  transform: scale(1.5);
} */
</style>