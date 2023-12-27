import {configureStore} from '@reduxjs/toolkit';
<<<<<<< HEAD
import Slice from './slice.js';
=======
import Slice from './slice';
>>>>>>> 079c4482ac64773f81ebb5553432f08df33b2b72

const store = configureStore({
    reducer: {
        auth :Slice,
        //TODO: add more slices here for posts
    }
});


export default store;
