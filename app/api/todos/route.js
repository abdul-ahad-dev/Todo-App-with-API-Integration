const todos = [
    { id: 1731946010001, todo: "Task 1", isComplete: true },
    { id: 1731946010002, todo: "Task 2", isComplete: true },
    { id: 1731946010003, todo: "Task 3", isComplete: true },
    { id: 1731946010004, todo: "Task 4", isComplete: true },
    { id: 1731946010005, todo: "Task 5", isComplete: true },
    { id: 1731946010006, todo: "Task 6", isComplete: true },
    { id: 1731946010007, todo: "Task 7", isComplete: true },
    { id: 1731946010008, todo: "Task 8", isComplete: true },
    { id: 1731946010009, todo: "Task 9", isComplete: true },
];


export async function GET() {
    return Response.json({
        todos: todos,
        msg: 201
    })
}

export async function POST(request) {
    const data = await request.json();
    todos.push({
        id: `${Date.now()}`,
        todo: data.todo,
        isComplete: false
    })

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