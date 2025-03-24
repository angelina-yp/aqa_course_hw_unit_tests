   async function createTodo(Todo) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Todo),
      });
  
      if (response.status !== 201) {
        throw new Error(`Error ${response.status}`);
      }
  
      const data = await response.json();
  
          for (const key in Todo) {
        if (Todo[key] !== data[key]) {
          throw new Error(`Error "${key}"`);
        }
      }
  
      return data;
  
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("Работа функции завершена");
    }
  }
  
  // Пример использования функции
  createTodo({
    userId: 1,
    title: "Buy milk",
    completed: false,
  });