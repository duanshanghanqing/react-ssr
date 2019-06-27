export const CHANGE_HOME_LIST = 'CHANGE_HOME_LIST';

export const changeList = data => ({
  type: CHANGE_HOME_LIST,
  data,
});


export const getHomeList = () => (dispatch, getState, axios) => axios.get('/api/news.json').then((res) => {
  const list = res.data.data;
  dispatch(changeList(list));
});
