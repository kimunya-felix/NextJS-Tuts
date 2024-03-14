import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup
    .string()
    .email('Invalid email format').
    required(" Email is a required field"),
    password: yup
    .string()
    .required("Password is a required field")
    .min(8, 'Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
})

export default loginSchema;