import { connectDB } from "@/app/lib/dbConnect";
import TodoModel from "@/app/lib/models/TodoModel";
import { NextResponse } from "next/server";

// const todos = [
//     { id: 1731946010001, todo: "Demo Data 1", isComplete: true },
//     { id: 1731946010002, todo: "Demo Data 2", isComplete: true },
//     { id: 1731946010003, todo: "Demo Data 3", isComplete: true },
//     { id: 1731946010004, todo: "Demo Data 4", isComplete: true },
//     { id: 1731946010005, todo: "Demo Data 5", isComplete: true },
//     { id: 1731946010006, todo: "Demo Data 6", isComplete: true },
// ];


export async function GET() {
    try {
        await connectDB()
        const todos = await TodoModel.find();
        console.log("todo==>", todo);

        return NextResponse.json({
            todos: todos,
            msg: 201
        });
    } catch (error) {
        console.error("Error fetching todos:", error.message);
        return NextResponse.json(
            { error: "Failed to fetch todos", msg: error.message },
            { status: 500 }
        );
    }
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