'use server'

import { revalidatePath } from "next/cache";

export default async function addTodo(formData) {
    const todo = formData.get('todo')
    console.log(" todo ==>", todo)
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