<template>
    <div v-if="tasks" class="list__container">
        <article v-for="task in tasks" class="list__element">
            <CheckboxTodoComponent :id="task.text" v-model:value="task.completed" />
            <span
                class="list__text"
                :class="{ 'list__text--completed': task.completed }"
            >{{ task.text }}</span>
            <button @click="emit('remove', task.idx)" class="list__remove" aria-label="Remove">
                <img src="../../assets/images/icon-cross.svg" height="14" width="14" />
            </button>
        </article>
        <div class="list__summary">
            <p>{{ counter }} items left</p>
            <p @click="emit('clearCompleted')">Clear completed</p>
        </div>
    </div>
</template>
<script setup>
import CheckboxTodoComponent from "../ui/CheckboxTodoComponent.vue";

const { tasks, counter } = defineProps({
    tasks: Array,
    counter: Number,
});

console.log(counter);

const emit = defineEmits(['remove', 'clearCompleted']);

</script>
<style lang="scss">
.list {
    &__container {
        background: var(--background-card);
        box-sizing: border-box;
        margin: 10px 24px;
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
        cursor: pointer;
        * {
            cursor: pointer;
        }
    }
    &__summary {
        font-size: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: var(--navbar-text);
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
        color: var(--default-text);
        &--completed {
            text-decoration: line-through;
            color: var(--inactive-text);
        }
    }
    &__remove {
        margin-left: auto;
        background: none;
        border: none;
    }
}

@media screen and (min-width: 600px) {
    .list {
        &__container {
            margin-bottom: 0;
            border-end-start-radius: 0;
            border-end-end-radius: 0;
        }
        &__element:hover > &__remove {
            visibility: visible;
        }
        &__remove {
            visibility: hidden;
        }
        &__summary {
            display: none;
        }
    }
}
</style>