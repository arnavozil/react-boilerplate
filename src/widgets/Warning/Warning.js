import React, { createContext, useContext, useState } from 'react';
import s from './Warning.module.scss';

export const WarningContext = createContext(null);

const Warning = ({ children }) => {
    
    const [text, setText] = useState('');
    const [timeId, setTimeId] = useState(undefined);
    const [warningClass, setWarningClass] = useState([s.main]);
    const openWarning = (message = '', className = '', duration = message.length * 200) => {
        clearTimeout(timeId);
        setText('');
        setWarningClass([s.main]);
        
        if(className) setWarningClass(c => [...c, className]);
        setText(message);
        setTimeId(setTimeout(closeWarning, duration));
    };

    const closeWarning = () => {
        setText('');
    };

    return <WarningContext.Provider value={{openWarning, closeWarning}}>
        {children}
        {text ? <p className={warningClass.join(' ')}>
            {text}
        </p> : <></>}
    </WarningContext.Provider>;
};

export default Warning;
export const withWarning = (ChildComponent) => {
    return class WarningComponent extends React.Component{
        static contextType = WarningContext;

        render(){
            return <ChildComponent 
                openWarning={this.context.openWarning}
                closeWarning={this.context.closeWarning}
                {...this.props}
            />;
        };
    };
};

export const useWarning = () => {
    const { openWarning, closeWarning } = useContext(WarningContext);
    return [openWarning, closeWarning];
};;