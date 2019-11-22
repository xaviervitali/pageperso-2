<template>
  <footer>
    <section class="fixed-bottom d-flex justify-content-around flex-row p-2">
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
      <article
        class="date"
      >
        <p>{{date}}</p>
        <p>{{time}}</p>
      </article>
    </section>
  </footer>
</template>

<script>
import { async } from "q";
export default {
  data() {
    return {
      date: "",
      time: "",
      utc: 0
    };
  },
  mounted() {
    this.getTime();
  },
  methods: {
    async getTime() {
      let datas = await this.$axios.get(
        "/form.php"
      );
      this.utc = datas.data.dateUTC*1000;
      this.setTime

      window.setInterval(this.setTime, 1000);
    },

    setTime() {
      let datasUTC = new Date(this.utc);
      this.date = datasUTC.toLocaleDateString("fr-FR");
      this.time = datasUTC.toLocaleTimeString("fr-Fr");
      this.utc+=1000;
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

footer i {
  color: white;
  font-size: 2rem;
}
footer i:hover {
  color: blue;
}

footer section article {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}
</style>