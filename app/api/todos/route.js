import { connectDB } from "@/app/lib/dbConnect";
import TodoModel from "@/app/lib/models/TodoModel";

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
    // await connectDB();

    // const data = await request.json();

    // const todoAdded = await new TodoModel({
    //     todo: data.todo,
    //     isComplete: false,
    // });

    // await todoAdded.save();

    // console.log("Todo added:", todoAdded);

    // return Response.json({
    //     data: todoAdded,
    //     msg: "Todo added successfully",
    // });
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