import {useEffect, useState} from 'react';
import {useTypedSelector} from './use-typed-selector';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = async () => {
    const token = useTypedSelector(state => state.login.token);
    setIsLoading(true);
  };

  useEffect(()=>{
    startLoading()
  },[])
  return isLoading
};
