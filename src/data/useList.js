import { ref, computed, reactive } from "@vue/reactivity";

export const useTodoList = () => {
  // Store data
  let lists = ref([
    {
      idx: 1,
      completed: true,
      text: 'Complete online JavaScript course'
    },
    {
      idx: 2,
      completed: false,
      text: 'Jog around the park 3x'
    },
    {
      idx: 3,
      completed: false,
      text: '10 minutes meditation'
    },
    {
      idx: 4,
      completed: false,
      text: 'Read for 1 hour'
    },
    {
      idx: 5,
      completed: false,
      text: 'Pick up groceries'
    },
    {
      idx: 6,
      completed: false,
      text: 'Complete Todo App on Frontend Mentor'
    }
  ]);
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
