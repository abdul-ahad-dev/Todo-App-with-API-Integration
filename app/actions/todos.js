'use server'

import { revalidatePath } from "next/cache";

export async function addTodo(formData) {
    const todo = formData.get('todo');
    if (!todo) return
    try {
        await fetch(process.env.PUBLIC_API_URL, {
            method: 'POST',
            body: JSON.stringify({ todo }),
        });
        revalidatePath('/todo')
    }
    catch (error) {
        console.log("error==>", error);
    }
}

export async function updateTodo(obj) {
    try {
        await fetch(process.env.PUBLIC_API_URL, {
            method: 'PUT',
            body: JSON.stringify(obj),
        });
        revalidatePath('/todo')
    }
    catch (error) {
        console.log("error==>", error);
    }
}


export async function deleteTodo(obj) {
    try {
        await fetch(process.env.PUBLIC_API_URL, {
            method: 'DELETE',
            body: JSON.stringify(obj),
        });
        revalidatePath('/todo')
    }
    catch (error) {
        console.log("error==>", error);
    }
}