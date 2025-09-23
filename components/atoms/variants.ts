import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: (string | undefined | false | null)[]) {
  return twMerge(clsx(...inputs))
}

export const buttonVariants = cva(
  'flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300',
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-[var(--bg-primary)] text-[#FFFFFF]',
        secondary: 'bg-[var(--bg-secondary)] text-[#FFFFFF]',
        tertiary: 'bg-[var(--bg-tertiary)] text-[#FFFFFF]',
        yellowish: 'bg-[var(--yellowish)] text-[#00270E] font-semibold',
        destructive: 'bg-red-500 text-white font-bold hover:bg-red-600',
        outline: 'border-4 border-[var(--yellowish)] font-bold',
        whiteOutline: 'border-4 border-white text-[#00FF1E] font-bold'
      },
      size: {
        default: '',
        xs: 'h-7 rounded px-2 text-xs',
        sm: 'h-8 rounded-md px-3 text-sm',
        md: 'h-11 rounded-lg px-10 text-lg font-bold',
        lg: 'h-16 rounded-2xl text-xl px-10 font-bold',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export const badgeVariants = cva(
  'rounded-full w-fit py-0.5 flex items-center justify-center font-semibold',
  {
    variants: {
      variant: {
        default: 'text-[#09FF00]  bg-[#00FF26]/40',
        primary: 'bg-[#D900FF]/20 text-[#E100FF]',
        secondary: 'bg-[#00EEFF]/20 text-[#00D0FF]',
        tertiary: 'bg-[#FF7700]/20 text-[#FF9D00]',
        yellowish: 'bg-[var(--yellowish)] text-[#00270E]',
        destructive: 'bg-[#FF0000]/20 text-[#FF0000]',
        outline: 'border-4 border-[var(--yellowish)] '
      },
      size: {
        default: 'px-3 text-sm',
        xs: 'h-7 rounded px-2 text-xs',
        sm: 'h-8 rounded-md px-3 text-sm'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
