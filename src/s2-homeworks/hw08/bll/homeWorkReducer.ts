import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
                if (action.payload === 'up') {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    else if (a.name < b.name) {
                        return -1
                    }
                    else {
                        return 0
                    }
                })]
            }
                if (action.payload === 'down') {
                    return [...state.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1
                        }
                        else if (a.name < b.name) {
                            return 1
                        }
                        else {
                            return 0
                        }
                    })]
                }
                else return state
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
           return state.filter( el => el.age >= 18 )

        }
        default:
            return state
    }
}
