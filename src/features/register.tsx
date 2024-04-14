

import { Button, Link } from '@nextui-org/react'
import React, { useState } from 'react'
import Input from '../components/input'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../app/services/userApi'
import { hasErrorField } from '../utils/has-error-field'
import ErrorMessage from '../components/error-message'

type Props = {
    setSelected: (value: string) => void
  }

type Register = {
    email: string   
    password: string   
    name: string
}

const Register: React.FC<Props> = ({ setSelected }) => {   

    const { control, formState: { errors }, handleSubmit } = useForm<Register>({
        mode: "onChange",
        reValidateMode: "onBlur",
        defaultValues: {
          email: "",
          password: "",
          name: ''
        },
    })   

    const [register, { isLoading }] = useRegisterMutation()
    const [error, setError] = useState('')   

    const onSubmit = async (data: Register) => {
        try {
            await register(data).unwrap()   
            setSelected('login')
        } catch (error) {
            if (hasErrorField(error)) {
                setError(error.data.error)
            }
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        control={control}
        name="name"
        label="Имя"
        type="name"
        required="Обязательное поле"
      />
      <Input
        control={control}
        name="email"
        label="Почта"
        type="email"
        required="Обязательное поле"
      />

      <Input
        control={control}
        name="password"
        label="Пароль"
        type="password"
        required="Обязательное поле"
      />   

      <ErrorMessage error={error} />

      <p className="text-center text-small">
        Есть аккаунта?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("login")}
        >
          Войдите
        </Link>
      </p>
      <div className="flex gap-2 justify-center">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Регистрация
        </Button>
      </div>
    </form>
  )
}

export default Register