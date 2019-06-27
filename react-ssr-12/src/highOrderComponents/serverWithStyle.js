import React from 'react';
// WrappedComponent:要渲染的组件
// style：服务端要渲染的样式
const serverWithStyle = style => WrappedComponent => class extends React.Component {
    
    componentWillMount() {
        // console.log(style._getContent());
        // 通过 this.props.staticContext 判断当前渲染环境
        if(this.props.staticContext) {
            if(Array.isArray(style) && style.length > 0) {
                style.forEach((item) => {
                    this.props.staticContext.css.push(item._getCss());
                })
            } else {
                this.props.staticContext.css.push(style._getCss());
            }
        }
    }
    render() {
        return <WrappedComponent { ...this.props }/>;
    }
};

export default serverWithStyle;
