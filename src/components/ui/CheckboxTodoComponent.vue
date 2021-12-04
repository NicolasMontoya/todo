<template>
    <div style="position: relative;">
        <input
            :checked="value"
            @change="updateValue($event.target.checked)"
            :id="id"
            class="checkbox"
            type="checkbox"
            :disabled="disabled"
        />
        <label :for="id"></label>
    </div>
</template>
<script setup>

const { value, disabled, id } = defineProps({
    value: {
        type: Boolean,
        required: false,
    },
    disabled: {
        type: Boolean,
        required: false,
        default: () => false,
    },
    id: {
        type: String,
        required: true,
    }
});

const emit = defineEmits(['update:value']);

function updateValue(value) {
    console.log(value);
    emit('update:value', value);
}

</script>
<style lang="scss">
.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--background-card);
    vertical-align: middle;
    border: 1px solid var(--border);
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;

    &:hover:not(:disabled):not(:checked) {
        border: 1px solid transparent; /*2*/
        background: linear-gradient(
                135deg,
                hsl(192, 100%, 67%) 0%,
                hsl(280, 87%, 65%)
            )
            border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        // Used it to show just the external part of the new layer
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }
    &:checked {
        border: none;
        background: linear-gradient(
            135deg,
            hsl(192, 100%, 67%) 0%,
            hsl(280, 87%, 65%)
        );
        + label::after {
            opacity: 1;
            transform: scale(1);
        }
    }
    &:not(:checked) + label::after {
        opacity: 0;
        transform: scale(0);
    }
    + label {
        &::after {
            content: "✔";
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 12px;
            line-height: 0.8;
            color: #fff;
            transition: all 0.2s;
        }
    }
}
</style>