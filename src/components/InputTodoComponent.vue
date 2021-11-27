<script setup>
import CheckboxTodoComponent from './CheckboxTodoComponent.vue';
console.log("Hi");
</script>

<template>
  <div class="todo__input">
    <CheckboxTodoComponent />
    <label class="todo__input-check-label" for="checkbox"></label>
    <input
      placeholder="Create a new todo..."
      type="text"
      class="todo__input-text"
    />
  </div>
</template>

<style lang="scss">
.todo {
  &__input {
    width: 100%;
    position: relative;
    padding: 10px 26px 10px;
    box-sizing: border-box;
    &-text {
      font-family: "Josefin Sans", "Roboto", sans-serif;
      color: var(--default-text);
      background: var(--background-card);
      box-sizing: border-box;
      width: 100%;
      padding: 17px 52px;
      border: 0;
      border-radius: 6px;
      caret-color: hsl(220, 98%, 61%);
    }
  }
}
</style>