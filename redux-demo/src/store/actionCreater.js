import {CHANGE_INPUT, ADD_ITEM , DELETE_ITEM } from './actionTypes'

export const changeInputAction = (value) => ({
    type:CHANGE_INPUT,
    value
})

export const addAction = () => ({
    type:ADD_ITEM,
})

export const deleteAction = (value) => ({
    type:DELETE_ITEM,
    value
})

