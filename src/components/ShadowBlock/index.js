import React from 'react'
import classNames from 'classnames';

import './ShadowBlock.scss';

const ShadowBlock = ({ children, className }) => (
    <div className={classNames('block', className)}>{children}</div>
);

export default ShadowBlock