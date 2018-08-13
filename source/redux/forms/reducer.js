// Core
import { combineForms } from 'react-redux-form';
import { token } from "../../config/index";
import { dev } from "../../init/middleware/index";

export const formsReducer = combineForms({
    signup: {
        firstName: 'Yevhenii',
        lastName:  'Liashenko',
        email:     'test@test.com',
        password:  '123123',
        invite:    dev ? token : '',
    },
    login: {
        email:    '',
        password: '',
    },
    user: {
        profile: {
            firstName: '',
            lastName:  '',
            avatar:    [],
        },
        password: {
            oldPassword: '',
            newPassword: '',
        },
    },
}, 'forms');
