<template>
    <div v-if="tasks" class="list__container">
        <article v-for="task in tasks" class="list__element">
            <CheckboxTodoComponent :id="task.text" v-model:value="task.completed" />
            <span class="list__text" :class="{ 'list__text--completed': task.completed }">{{ task.text }}</span>
        </article>
        <div class="list__summary">
            <p> {{ remainingItems }} items</p>
            <p>Clear completed</p>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from "@vue/reactivity";
import CheckboxTodoComponent from "../ui/CheckboxTodoComponent.vue";

const props = defineProps({
    tasks: Array
});

const tasks = ref([
    {
        completed: true,
        text: 'One',
    },
    {
        completed: true,
        text: 'Two',
    },
    {
        completed: true,
        text: 'Three',
    },
    {
        completed: true,
        text: 'Four',
    },
]);

const remainingItems = computed(() => tasks.value.filter(task => !task.completed).length);

</script>
<style lang="scss">
.list {
    &__container {
        background: var(--background-card);
        box-sizing: border-box;
        margin: 10px 26px;
        border-radius: 0.6rem;
    }
    &__element {
        font-size: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-bottom: 1px solid var(--border);
        & > span {
            color: var(--default-text);
        }
    }
    &__summary {
        font-size: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: #a9a9a9;
        & > p {
            margin: 0;
            padding: 20px;
            justify-self: start;
            &:last-child {
                justify-self: end;
            }
        }
    }
    &__navigation {
        display: flex;
        flex-direction: row;
    }
    &__text {
        &--completed{
            text-decoration: line-through;
        }
    }
}
</style>