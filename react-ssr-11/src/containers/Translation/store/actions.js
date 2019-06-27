export const CHANGE_TRANSLATION_LIST = 'CHANGE_TRANSLATION_LIST';

export const changeTranslationList = (data) => ({
    type: CHANGE_TRANSLATION_LIST,
    data
})

export const getTranslationList = () => {
    return (dispatch, getState, axios) => {
        return axios.get('/api/translations.json').then((res) => {
            console.log(res.data.data);
            if (res.data.success) {
                dispatch(changeTranslationList(res.data.data))
            } else {
                dispatch(changeTranslationList([]))
            }
        });
    }
}

