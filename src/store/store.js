import {configureStore} from '@reduxjs/toolkit';
import Slice from './slice';

const store = configureStore({
    reducer: {
        auth :Slice,
        //TODO: add more slices here for posts
    }
});


export default store;
