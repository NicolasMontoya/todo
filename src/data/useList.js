import { ref, computed, reactive } from "@vue/reactivity";

export const useTodoList = () => {
  // Store data
  let lists = ref([]);
  const filter = ref("all");

  // Getters
  const predicate = (element) => {
    if (filter.value === "all") {
      return true;
    } else if (filter.value === "active") {
      return !element.completed;
    } else {
      return element.completed;
    }
  };
  const currentList = computed(() => lists.value.filter(predicate));
  const counter = computed(() => lists.value.filter(predicate).filter(element => !element.completed).length);

  // Mutations
  const addList = (todo) => {
    lists.value.push({
      idx: lists.value.length,
      completed: false,
      text: todo,
    });
  };
  const removeList = (indexToRemove) => {
    lists.value = lists.value.filter(element => element.idx !== indexToRemove);
  };
  const setFilter = (value) => {
    filter.value = value;
  };
  const clearCompleted = () => {
    lists.value = lists.value.filter(element => !element.completed);
  }

  return {
    filter,
    currentList,
    counter,
    addList,
    removeList,
    setFilter,
    clearCompleted
  };
};
