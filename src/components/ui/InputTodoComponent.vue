<script setup>
import { ref } from '@vue/reactivity';
import CheckboxTodoComponent from './CheckboxTodoComponent.vue';

defineProps({
    placeholder: {
        type: String,
        required: false,
        default: () => 'Create a new todo...'
    }
});

const emit = defineEmits(['save']);
const inputData = ref('');

const saveList = () => {
    emit('save', inputData.value);
    inputData.value = '';
} ;

</script>

<template>
    <div class="todo__input">
        <div class="todo__input-check">
        <CheckboxTodoComponent :id="`base-check`" :disabled="true" />
        </div>
        <input v-model="inputData" @keydown.enter="saveList" :placeholder="placeholder" type="text" class="todo__input-text" />
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
            padding: 20px 52px;
            border: 0;
            border-radius: 6px;
            caret-color: hsl(220, 98%, 61%);
        }
        &-check {
            position: absolute;
            left: 40px;
            top: 25px;
        }
    }
}
</style>