'use client'
import React from 'react';
import * as z from 'zod'
import {FieldValue, useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod";

const loginSchema = z.object({
    name: z.string().min(8)
})



const CreateUser = () => {
    const {
        register,
        handleSubmit } = useForm({
            resolver: zodResolver(loginSchema),
            })
    const onSubmit = (data: FieldValue<typeof loginSchema['_type']>) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} type="text" />
            <button type="submit">Submit</button>
        </form>
    )
};

export default CreateUser;