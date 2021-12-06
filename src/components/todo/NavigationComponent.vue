<template>
    <nav class="navigation">
        <ul class="navigation__list">
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
        </ul>
    </nav>
</template>
<script setup>

const { currentFilter } = defineProps({
    currentFilter: String
});

const emit = defineEmits(['changeFilter'])

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
        padding: 20px;
        margin: 24px;
        font-size: 16px;
        gap: 12px;
    }
    &__item {
        color: var(--navbar-text);
        &--active {
            color: var(--active-text);
        }
    }
}
</style>