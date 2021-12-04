<script setup>
import InputTodoComponent from './components/ui/InputTodoComponent.vue';
import HeaderComponent from './components/todo/HeaderComponent.vue';
import ListComponent from './components/todo/ListComponent.vue';


</script>

<template>
  <section class="todo">
    <HeaderComponent />
    <InputTodoComponent />
    <ListComponent />
  </section>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

body {
  margin: 0;
  padding: 0;
}

/* Define styles for the default root window element */
:root {
  --default-text: hsl(235, 19%, 35%);
  --border:hsl(233, 14%, 35%);
  --background: #ffffff;
  --background-header-mobile-image: url("./assets/images/bg-mobile-light.jpg");
  --background-header-desktop-image: url("../assets/images/bg-mobile-light.jpg");
  --background-card: #fafafa;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --default-text: hsl(236, 33%, 92%);
  --border: hsla(235, 32%, 92%, 0.137);
  --background: hsl(235, 21%, 11%);
  --background-header-mobile-image: url("./assets/images/bg-mobile-dark.jpg");
  --background-header-desktop-image: url("../assets/images/bg-mobile-dark.jpg");
  --background-card: hsl(235, 24%, 19%);
}

textarea:focus,
input:focus {
  outline: none;
}

#app {
  font-family: "Josefin Sans", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  margin: 0;
  padding: 0;
  background: var(--background);
  .todo {
    height: 100vh;
    width: 100%;
    background-image: var(--background-header-mobile-image);
    background-repeat: no-repeat;
    background-size: 100% 200px;
    display: block;
  }
  @media screen and (min-width: 600px) {
    .todo {
      height: 100vh;
      max-width: 1440px;
      margin: 0 auto 0;
      background-image: var(--background-header-desktop-image);
      background-repeat: no-repeat;
      background-size: 100% 300px;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr 1.2fr 1fr;
    }
  }
}
</style>
