import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputProps {
  className: string
}

type InputPrefixProps =
  ComponentProps<'div'> /* Extende todos os atributos que uma div pode ter */

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps =
  ComponentProps<'input'> /* Extende todos os atributos que uma div pode ter */

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:placeholder-zinc-400 dark:text-zinc-100"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}
