import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';

@connect(
    state => ({ 
        list: state.translationReducer.translationlist,
        login: state.headerReducer.login
    }),
    actions
)
class Translation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Translation',
        };
    }
    componentDidMount() {
        // 当在浏览器渲染的时候，只有数据不存在事执行获取
        if (this.props.list.length === 0) {
          this.props.getTranslationList();
        }
      }
    render() {
        let { login } = this.props;
        return (
            login ? <div>
                <h5>{this.state.name}</h5>
                {
                    this.props.list.map((item, index) => (<p key={index}>{item.title}</p>))
                }
            </div> : <Redirect to='/'/>
        );
    }
}

Translation.loadData = (store) => {
    return store.dispatch(actions.getTranslationList());
}

export default Translation;
