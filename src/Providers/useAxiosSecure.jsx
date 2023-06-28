import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const useAxiosSecure = () => {
  const history = useHistory();

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'https://music-school-server-sahariarsupto.vercel.app/',
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 403) {
            // Log out user asynchronously and redirect to login page
            logoutAndRedirect();
          }
        }
        return Promise.reject(error);
      }
    );

    const logoutAndRedirect = async () => {
      // Call your logout method asynchronously
      await AuthContext.logout();

      // Redirect user to login page
      history.push('/login');
    };
  }, [history]);
};

export default useAxiosSecure;