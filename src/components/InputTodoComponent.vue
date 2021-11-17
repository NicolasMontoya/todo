<script setup>
console.log('Hi');
</script>

<template>
    <div class="todo__input">
        <input id="checkbox" type="checkbox" class="todo__input-check" />
        <label class="todo__input-check-label" for="checkbox"></label>
        <input placeholder="Create a new todo..." type="text" class="todo__input-text" />
        <img src="../assets/images/icon-cross.svg" class="todo__input-image" />
    </div>
</template>

<style lang="scss">
.todo {
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
                position: absolute;
                width: 20px;
                left: 26px;
                top: 24px;
            }
        }
        &-image {
            box-sizing: border-box;
            position: absolute;
            right: 26px;
            top: 24px;
        }
        &-text {
            color: v;
            background: var(--backgroun-card);
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