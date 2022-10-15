import axios from '../utils/axios';

export const signInUser = async (email: string, password: string, navigation: any): Promise<any> => {

    try {
        const res = await axios.post(`/api/auth`, { email, password });
        if (res.data.success) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        }

    } catch (error) {
        console.error(error);
    }
}

export const signUpUser = async (name: string, email: string, password: string, navigation: any): Promise<any> => {
    try {
        const res = await axios.post(`/api/auth/register`, { name, email, password});
        if (res.data.success) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        }
    } catch (error) {
        console.log(error);
    }
}