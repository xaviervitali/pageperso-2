<template>
  <div>
    <section class="fixed-bottom">
      <article>
        <p v-b-tooltip.hover.top="'Linkedin'">
          <a href="https://github.com/xaviervitali/home">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </p>
      </article>
      <article>
        <p v-b-tooltip.hover.top="'Github'">
          <a href="http://www.linkedin.com/in/xavier-vitali">
            <i class="fab fa-github"></i>
          </a>
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
section {
  background: linear-gradient(to top, #2fa9bc 33%, #f9f9f9 99%);

  width: 100%;
  padding: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  /* opacity: .9; */
  margin-top: 5rem;
}

i {
  color: white;
}
</style>