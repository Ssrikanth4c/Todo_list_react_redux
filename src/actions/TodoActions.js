export const AddTodoActions = (todo) => (dispath, getState) => {
  const {
    Todo: { todos }
  } = getState();
  const hasTodo = todos.find((i) => i.todo === todo);
  if (!hasTodo && todo !== "") {
    dispath({
      type: "ADD_TODO",
      payload: [{ id: todo, todo }, ...todos]
    });
  }
};
export const RemoveTodoAction = (todo) => (dispath, getState) => {
  const {
    Todo: { todos }
  } = getState();
  console.log(todos, todo);
  const filter_data = todos.filter((td) => td.id !== todo.id);
  console.log(filter_data);
  if (todos && todos.length > 0) {
    dispath({
      type: "REMOVE_TODO",
      payload: filter_data
    });
  }
};
