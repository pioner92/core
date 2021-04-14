import {useNavigation} from '@react-navigation/native';

export const useNavigate = (route: string) => {
  const {navigate} = useNavigation();
  return navigate(route)
};
