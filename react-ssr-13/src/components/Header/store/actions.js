export const CHANGELOGIN = 'HEADER/CHANGE_LOGIN';

export const changeLogin = data => ({
  type: CHANGELOGIN,
  data,
});

export const getHeaderInfo = () => (dispatch, getState, axios) => axios.get('/api/isLogin.json').then((res) => {
  dispatch(changeLogin(res.data.data));
});

export const handleLogin = () => (dispatch, getState, axios) => axios.get('/api/login.json').then((res) => {
  console.log(res.data.data);
  if (res.data.data.login) {
    dispatch(changeLogin({
      login: true,
    }));
  }
});

export const handleLogout = () => (dispatch, getState, axios) => axios.get('/api/logout.json').then((res) => {
  console.log(res.data.data);
  if (res.data.data.logout) {
    dispatch(changeLogin({
      login: false,
    }));
  }
});
