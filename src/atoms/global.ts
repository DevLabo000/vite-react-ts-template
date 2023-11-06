import { atom } from 'jotai'
import { UserType } from '@/types'

export const loginUserAtom = atom<UserType | null>(null)

export default loginUserAtom
