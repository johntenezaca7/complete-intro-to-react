//@flow

import React from 'react';
import style, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

const Image = style.img`
    animation: ${spin} 4s infinite linear;
`;

const Spinner =  () => <Image src="/public/img/loading.png" alt="loading indicator" />;

export default Spinner;