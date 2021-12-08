<script setup>
import InputTodoComponent from './components/ui/InputTodoComponent.vue';
import HeaderComponent from './components/todo/HeaderComponent.vue';
import ListComponent from './components/todo/ListComponent.vue';
import NavigationComponent from './components/todo/NavigationComponent.vue';
import { useTodoList } from './data/useList';

const { currentList, counter, addList, removeList, filter, setFilter, clearCompleted } = useTodoList();

</script>

<template>
  <section class="todo">
    <HeaderComponent />
    <InputTodoComponent @save="addList"  />
    <ListComponent :tasks="currentList" :counter="counter" @remove="removeList" @clearCompleted="clearCompleted" />
    <NavigationComponent :currentFilter="filter" :counter="counter" @changeFilter="setFilter" @clearCompleted="clearCompleted" />
  </section>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");


// General color
$bright-blue: hsl(220, 98%, 61%);
$very-light-grayish-blue: hsl(236, 33%, 92%);

// Light theme colors
$very-light-gray: hsl(0, 0%, 98%);
$light-grayish-blue: hsl(233, 11%, 84%);
$dark-grayish-blue: hsl(236, 9%, 61%);
$very-dark-grayish-blue: hsl(235, 19%, 35%);

$very-dark-blue: hsl(235, 21%, 11%);
$very-dark-desaturated-blue: hsl(235, 24%, 19%);
$light-grayish-blue-hover: hsl(236, 33%, 92%);

body {
  margin: 0;
  padding: 0;
}

/* Define styles for the default root window element */
:root {
  --default-text: hsl(235, 19%, 35%);
  --inactive-text: hsl(233, 11%, 84%);
  --navbar-text: hsl(236, 9%, 61%);
  --border: hsl(236, 33%, 92%);
  --active-text: hsl(220, 98%, 61%);
  --background: rgba(229, 226, 226, 0.438);
  --background-header-mobile-image: url("./assets/images/bg-mobile-light.jpg");
  --background-header-desktop-image: url("./assets/images/bg-desktop-light.jpg");
  --background-card: #fff;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --default-text: hsl(236, 33%, 92%);
    --inactive-text: #a9a9a993;
  --navbar-text: #a9a9a993;
  --border: #a9a9a993;
  --background: hsl(235, 21%, 11%);
  --active-text: hsl(220, 98%, 61%);
  --background-header-mobile-image: url("./assets/images/bg-mobile-dark.jpg");
  --background-header-desktop-image: url("./assets/images/bg-desktop-dark.jpg");
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
}

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
      display: flex;
      flex-direction: column;
      padding-left: 26rem;
      padding-right: 26rem;
      box-sizing: border-box;
    }
  }
</style>
