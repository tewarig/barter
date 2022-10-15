import { Appearance } from 'react-native';

const useColorModes = () => {
    const colorScheme = Appearance.getColorScheme();
    let backgroundColor = colorScheme == 'dark' ? '#000' : '#fff'; 
    let textColor = colorScheme == 'dark' ? '#fff' : '#000';
    return { backgroundColor , textColor };

}
export default useColorModes;