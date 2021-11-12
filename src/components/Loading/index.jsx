import React from 'react';
import './style.css'
import loadingIcon from './loading.gif'

const Loading = () => (
    <div className="loading">
        <div className="loading-icon">
            <img src={loadingIcon} alt={'loading icon'} />
        </div>
    </div>
)

export default Loading