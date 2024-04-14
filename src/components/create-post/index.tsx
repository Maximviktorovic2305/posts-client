

import React from 'react'
import { useCreatePostMutation, useLazyGetAllPostsQuery } from '../../app/services/posts.Api'
import { Controller, useForm } from 'react-hook-form'
import { Button, Textarea } from '@nextui-org/react'
import ErrorMessage from '../error-message'
import { IoMdCreate } from 'react-icons/io'

const CreatePost = () => {   
    const [createPost] = useCreatePostMutation()   
    const [triggerAllPosts] = useLazyGetAllPostsQuery()   

    const { handleSubmit, formState: {errors}, control, setValue } = useForm()   

    const error = errors?.post?.message as string   

    const onSubmit = async (data: any) => {
        try {
            await createPost({ content: data.post }).unwrap()   
            setValue('post', '')   
            await triggerAllPosts().unwrap()   
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-grow'>
        <Controller name='post' control={control} defaultValue='' rules={{ required: 'Обязательное поле' }} render={({ field }) => (
            <Textarea { ...field } labelPlacement='outside' placeholder='О чем думаете?' className='mb-5' />
        )} />   

        { errors && <ErrorMessage error={error} /> }   

        <Button color='success' className='flex-end' endContent={<IoMdCreate />} type='submit'>
            Добавить пост
        </Button>
    </form>
  )
}

export default CreatePost