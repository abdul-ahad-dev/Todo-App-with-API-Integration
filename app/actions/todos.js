'use server'

import { revalidatePath } from "next/cache";

export async function addTodo(formData) {
    const todo = formData.get('todo');
    if (!todo) return
    try {
        await fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            body: JSON.stringify({ todo }),
        });
        revalidatePath('/todo')
    }
    catch (error) {
        console.log(error)
    }
}

export async function updateTodo(obj) {
    try {
        await fetch('http://localhost:3000/api/todos', {
            method: 'PUT',
            body: JSON.stringify(obj),
        });
        revalidatePath('/todo')
    }
    catch (error) {
        console.log(error)
    }
}


export async function deleteTodo(obj) {
    try {
        await fetch('http://localhost:3000/api/todos', {
            method: 'DELETE',
            body: JSON.stringify(obj),
        });
        revalidatePath('/todo')
    }
    catch (error) {
        console.log(error)
    }
}