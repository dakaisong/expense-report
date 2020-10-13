import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import { dispatch } from 'redux';


const slice = createSlice({
    name: 'receipt',
    initialState:{
        list:{
            data: [
                {
                    amount:'',
                    description:'',
                    currency:''
                }
            ],
        },
        loading: false,
    },
    reducers: {

        receiptAdded: (deviceUsage, action) => {
            receipt.list.push(action.payload);
        }
    }
});

export const {
    receiptAdded
} = slice.actions;