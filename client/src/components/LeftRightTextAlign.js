import React from 'react'

const LeftRightTextAlign = (props) => {

    const { leftText, rightText, title, border } = props;
    let row;
    let leftCol;
    let rightCol;


    if (title) {
        row = !border ? 'row mt-3 mx-1' : 'row mt-3 pt-3 mx-1 border-top'
        leftCol = 'col-auto me-auto align-self-start'
        rightCol = 'col-auto align-self-end'
    } else {
        row = 'row my-1 mx-lg-1'
        leftCol = 'col-auto me-auto align-self-start'
        rightCol = 'col-auto align-self-end'
    }

    return (
        <div className={row}>
            <div className={leftCol}>
                {leftText}
            </div>
            <div className={rightCol}>
                {rightText}
            </div>
        </div >
    )
}

export default LeftRightTextAlign