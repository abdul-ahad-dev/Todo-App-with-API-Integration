"use client";

import { TableCell, TableRow } from './ui/table'
import { Button } from './ui/button'
import { FilePenLine, Trash2 } from 'lucide-react'
import { deleteTodo, updateTodo } from '@/app/actions/todos';
import Swal from 'sweetalert2';

export default function TodoList({ item }) {

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
            <TableCell className="text-center">{item.id}</TableCell>
            <TableCell className="text-center ">{item.todo}</TableCell>
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
                <Button variant="outline" size="icon" className="active:scale-95">
                    <FilePenLine className="h-4 w-4" />
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