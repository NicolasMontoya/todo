import { ref, computed, reactive } from "@vue/reactivity";

export const useTodoList = () => {
  // Store data
  let lists = reactive([]);
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
  const currentList = computed(() => lists.filter(predicate));
  const counter = computed(() => lists.filter(predicate).filter(element => !element.completed).length);

  // Mutations
  const addList = (todo) => {
    lists.push({
      idx: lists.length,
      completed: false,
      text: todo,
    });
  };
  const removeList = (indexToRemove) => {
      console.log(lists);
    const index = lists.indexOf(lists.find(element => element.idx === indexToRemove));
    lists.splice(index, 1);
  };
  const setFilter = (value) => {
    filter.value = value;
  };

  return {
    filter,
    currentList,
    counter,
    addList,
    removeList,
    setFilter,
  };
};
