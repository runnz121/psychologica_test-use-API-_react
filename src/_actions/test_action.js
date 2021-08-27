import axios from 'axios';

import {
    NEXT_PAGE
} from './types';

export const nextPage = page => ({
    type : NEXT_PAGE,
});