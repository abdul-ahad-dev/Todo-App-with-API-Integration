"use client";

import { TableCell, TableRow } from './ui/table'
import { Button } from './ui/button'
import { ArrowUpToLine, FilePenLine, Trash2 } from 'lucide-react'
import { deleteTodo, updateTodo } from '@/app/actions/todos';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Input } from './ui/input';

export default function TodoList({ item, index }) {

    const [openInput, setInput] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInput = async () => {
        setInput(!openInput)
        setInputValue(item.todo)

        if (inputValue !== null) return

        let obj = { ...item }
        obj.todo = inputValue
        updateTodo(obj)
    }

    const handleIsCompleteAction = async () => {
        let obj = { ...item }
        obj.isComplete = !item.isComplete
        updateTodo(obj)
    }

    const handleDeleteAction = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                let obj = { ...item }
                deleteTodo(obj)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <TableRow key={item.id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="text-center" >
                {openInput
                    ?
                    <Input
                        type="text"
                        className="border border-gray-300 rounded-md px-2 py-1"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue} />
                    :
                    item.todo
                }
            </TableCell>
            <TableCell
                onClick={handleIsCompleteAction}
                className="text-center capitalize"
            >
                {item.isComplete ? (
                    <div className="bg-green-500 text-white rounded-full px-2 py-1 text-xs cursor-pointer active:scale-95 select-none">
                        Active
                    </div>
                ) : (
                    <div className="bg-yellow-500 text-white rounded-full px-2 py-1 text-xs cursor-pointer active:scale-95 select-none">
                        Pending
                    </div>
                )}
            </TableCell>
            <TableCell className="flex justify-center gap-2">
                <Button
                    onClick={handleInput}
                    variant="outline"
                    size="icon"
                    className="active:scale-95"
                >
                    {openInput
                        ? <ArrowUpToLine className="h-4 w-4" />
                        : <FilePenLine className="h-4 w-4" />
                    }
                </Button>

                <Button
                    onClick={handleDeleteAction}
                    variant="destructive"
                    size="icon"
                    className="active:scale-95"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    )
};