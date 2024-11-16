const todos = [
    { id: 1, todo: "Task 1", isComplete: true },
    { id: 2, todo: "Task 2", isComplete: true },
    { id: 3, todo: "Task 3", isComplete: true },
    { id: 4, todo: "Task 4", isComplete: true },
    { id: 5, todo: "Task 5", isComplete: true },
    { id: 6, todo: "Task 6", isComplete: true },
    { id: 7, todo: "Task 7", isComplete: true },
    { id: 8, todo: "Task 8", isComplete: true },
    { id: 9, todo: "Task 1", isComplete: true },
    { id: 10, todo: "Task 8", isComplete: true },
    { id: 11, todo: "Task 9", isComplete: true },
    { id: 12, todo: "Task 10", isComplete: true },
    { id: 13, todo: "Task 11", isComplete: true },]

export async function GET() {
    return Response.json({
        todos: todos,
        msg: 201
    })
}

export async function POST(request) {
    const data = await request.json();
    todos.push({ id: todos.length + 1, todo: data.todo, isComplete: false })

    return Response.json({
        todos: todos,
        msg: "Todo added successfully"
    })
}

export async function PUT(request) {
    const data = await request.json();
    const todoIndex = todos.findIndex((todo) => todo.id === data.id);
    todos[todoIndex] = data;

    return Response.json({
        todos: todos,
        msg: "Todo updated successfully"
    })
}

export async function DELETE(request) {
    const data = await request.json();
    const todoIndex = todos.findIndex((todo) => todo.id === data.id);
    todos.splice(todoIndex, 1);

    return Response.json({
        todos: todos,
        msg: "Todo delete successfully"
    })
}