<script setup>
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from '@vue/reactivity';

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const done = ref(false);

</script>

<template>
  <section class="todo">
    <div class="todo__header">
      <h1 class="todo__title">TODO</h1>
      <img src="./assets/images/icon-sun.svg" />
    </div>
    <div class="todo__input">
      <input id="checkbox" type="checkbox" class="todo__input-check">
      <label class="todo__input-check-label" for="checkbox"></label>
      <input type="text" class="todo__input-text" :class="{ 'todo__input-text--done': done }">
      <img src="./assets/images/icon-cross.svg" class="todo__input-image">
    </div>
  </section>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Josefin Sans", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background: hsl(235, 21%, 11%);
}

.todo {
  height: 100vh;
  width: 100%;
  background-image: url("./assets/images/bg-mobile-dark.jpg");
  background-repeat: no-repeat;
  background-size: 100% 200px;
  display: block;
  &__header {
    display: grid;
    grid-auto-flow: column;
    height: fit-content;
    padding: 3rem 2rem;
    > img {
      justify-self: end;
      width: 15px;
      height: 15px;
    }
  }
  &__input {
    width: 100%;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    &-check {
      position: absolute;
      visibility: hidden;
      &:checked + &-label {
        background-color: #66bb6a;
        border-color: #66bb6a;
        &:after {
          opacity: 1;
        }
      }
      &-label {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 20px;
        left: 18px;
        position: absolute;
        top: 17px;
        width: 20px;
      }
    }
    &-image {
      position: absolute;
      right:20px;
      top:18px;
    }
    &-text {
      box-sizing: border-box;
      width: 100%;
      padding: 20px 40px;
      border: 0;
      border-radius: 6px;
    }
  }
  &__title {
    color: white;
    letter-spacing: 1rem;
    font-size: 1.8rem;
    margin: 0;
  }
}

@media screen and (min-width: 600px) {
  .todo {
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto 0;
  background-image: url("./assets/images/bg-desktop-dark.jpg");
  background-repeat: no-repeat;
  background-size: 100% 300px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1.2fr 1fr;
  &__header {
    grid-column: 2;
    > img {
      width: 40px;
      height: 40px;
    }
  }
  &__title {
    color: white;
    letter-spacing: 1rem;
    font-size: 3rem;
    margin: 0;
  }
}
}
</style>
