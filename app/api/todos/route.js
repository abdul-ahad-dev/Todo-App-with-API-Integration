import { connectDB } from "@/app/lib/dbConnect";
import TodoModel from "@/app/lib/models/TodoModel";


export async function GET() {
    try {
        await connectDB();
        const todos = await TodoModel.find();
        console.log("Todos:", todos);
        return Response.json({
            todos,
            msg: "Todos fetched successfully",
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
        return Response.json({
            todos: [],
            msg: "Error fetching todos",
        });
    }
}

export async function POST(request) {
    await connectDB();
    const todos = await TodoModel.find();
    const data = await request.json();
    todos.push({
        id: `${Date.now()}`,
        todo: data.todo,
        isComplete: false
    })

    return Response.json({
        todos: todos,
        msg: "Todo added successfully"
    });
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