<template>
  <div class="todo__header">
    <h1 class="todo__title">TODO</h1>
    <img @click="toggleTheme" :src="getImage()" />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

let currentTheme = ref();
const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
}

const setTheme = (theme) => {
  currentTheme.value = theme;
  localStorage.setItem("user-theme", theme);
  document.documentElement.className = theme;
}

setTheme(getMediaPreference());

const toggleTheme = () => {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
};

const getImage = () => {
  let icon;
  if (currentTheme.value === 'dark-theme') {
    icon = 'icon-sun';
  } else {
    icon = 'icon-moon';
  }
  return new URL(`../../assets/images/${icon}.svg`, import.meta.url).href;
}

</script>

<style lang="scss" scoped>
.todo {
  &__header {
    display: grid;
    grid-auto-flow: column;
    height: fit-content;
    padding: 49px 24px 22px;
    > img {
      justify-self: end;
      width: 26px;
      height: 26px;
    }
  }
  &__title {
    margin: 0;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 28.13px;
    line-height: 28px;
    letter-spacing: 0.38em;
  }
}

@media screen and (min-width: 600px) {
  .todo {
    &__header {
      grid-column: 2;
      padding: 84px 24px 30px;
    }
    &__title {
      color: white;
      letter-spacing: 1rem;
      margin: 0;
    }
  }
}
</style>