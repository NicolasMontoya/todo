<template>
    <nav class="navigation">
        <ul class="navigation__list" :class="{'navigation__list--not-rounded': (counter > 0 && currentFilter != 'completed') || currentFilter == 'completed' }">
            <li class="navigation__summary">
                {{ counter }} items left
            </li>
            <li
                class="navigation__item"
                :class="{ 'navigation__item--active': currentFilter === 'all' }"
                @click="changeFilter('all')"
            >All</li>
            <li
                class="navigation__item"
                :class="{ 'navigation__item--active': currentFilter === 'active' }"
                @click="changeFilter('active')"
            >Active</li>
            <li
                class="navigation__item"
                :class="{ 'navigation__item--active': currentFilter === 'completed' }"
                @click="changeFilter('completed')"
            >Completed</li>
            <li class="navigation__clear" @click="emit('clearCompleted')">
                Clear completed
            </li>
        </ul>
    </nav>
</template>
<script setup>

const { currentFilter, counter } = defineProps({
    currentFilter: String,
    counter: Number,
});

const emit = defineEmits(['changeFilter', 'clearCompleted'])

function changeFilter(filter) {
    emit('changeFilter', filter);
}

</script>
<style lang="scss">
.navigation {
    &__list {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        background: var(--background-card);
        list-style: none;
        border-radius: 0.5rem;
        padding: 15px;
        margin: 24px;
        font-size: 12px;
        gap: 12px;
    }
    &__item {
        color: var(--navbar-text);
        &--active {
            color: var(--active-text);
        }
    }
    &__summary {
        visibility: hidden;
        font-size: 12px;
        color: var(--navbar-text);
    }
    &__clear {
        visibility: hidden;
        font-size: 12px;
        color: var(--navbar-text);
    }
}

@media screen and (min-width: 600px) {
.navigation {
    &__list {
        margin-top: 0;
        &--not-rounded {
            border-start-start-radius: 0;
            border-start-end-radius: 0;
        }
    }
    &__summary {
        visibility: visible;
        flex-basis: 20%;
        flex-grow: 2;
    }
    &__clear {
        visibility: visible;
        cursor: pointer;
        flex-grow: 2;
        flex-basis: 20%;
        text-align: end;
    }
    &__item {
        flex-basis: 10%;
        cursor: pointer;
        color: var(--navbar-text);
        &--active {
            color: var(--active-text);
        }
    }
}

}
</style>