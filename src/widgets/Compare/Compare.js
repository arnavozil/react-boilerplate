import moment from 'moment';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import PrimaryHeading from '../Heading/Heading';

import s from './Compare.module.scss';
const PALLETE = ['#0071e3', '#2AFC98', '#f07167', '#eec584', '#0081a7', '#00afb9', '#fe5e41', '#35ff69', '#321325', '#5f04f0', '#9a031e', '#cb793a', '#fcdc4d', '#84a07c', '#e6f14a', '#cacaaa'];

const Compare = ({
    max,
    A = 50,
    B = 40,
    labelA = '',
    labelB = '',
    heading = '',
}) => {

    return <div>
        {heading ? <PrimaryHeading text={heading} className={s.heading} /> : <></>}
        <div className={s.main}>
            <section
                className={[s.main_back, s.a].join(' ')} 
                style={{left: 0, width: `${A / (max || A + B) * 100}%`}}
            />
            <section
                className={[s.main_back, s.b].join(' ')} 
                style={{left: `${A / (max || A + B) * 100}%`, width: `${B / (max || A + B) * 100}%`}}
            />
        </div>
        <div className={s.text}>
            {A ? <span className={s.text_words}>{(labelA ? `${labelA}: ` : '') + A}</span> : <></>}
            {B ? <span className={s.text_words}>{(labelB ? `${labelB}: ` : '') + B}</span> : <></>}
        </div>
    </div>
};


export default Compare;

export const MultiCompare = ({
    max = 100,
    data = [],
    heading = '',
    rightLabel = '',
    leftLabel = '',
    refer = null,
    customTip = false,
    tr
}) => {

    return <div ref={refer}>
        {heading ? <PrimaryHeading text={heading} className={s.heading} /> : <></>}
        <div className={s.main}>
            
            {data.map((el, ind) => {
                return <section 
                    key={ind}
                    className={s.main_back}
                    style={{
                        left: `${el.left}%`, 
                        width: `${el.width}%`, 
                        cursor: 'pointer',
                        borderRadius: ind === 0 ? '.15rem 0 0 .15rem' : ind === data.length - 1 ? '0 .15rem .15rem 0' : '',
                        backgroundColor: PALLETE[ind % PALLETE.length] 
                    }}
                    data-tip={!customTip ? `${+el.amount.toFixed(2)} on ${moment(el.date).format('DD/MMM/yyyy')}` : el?.tip}
                />
            })}
        </div>
        <div className={s.text}>
            {leftLabel ? <span>{leftLabel}</span> : <></>}
            {rightLabel ? <span>{rightLabel}</span> : <></>}
        </div>
        <ReactTooltip multiline type='dark' effect='solid' />
    </div>
};