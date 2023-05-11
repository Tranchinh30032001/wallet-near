import React from 'react';

const WrapIcon = ({ color }) => {
    const fill = color || '#006ADC';
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="0" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7071 16.2929C22.0976 16.6834 22.0976 17.3166 21.7071 17.7071L17.7071 21.7071C17.3166 22.0976 16.6834 22.0976 16.2929 21.7071L12.2929 17.7071C11.9024 17.3166 11.9024 16.6834 12.2929 16.2929C12.6834 15.9024 13.3166 15.9024 13.7071 16.2929L17 19.5858L20.2929 16.2929C20.6834 15.9024 21.3166 15.9024 21.7071 16.2929Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 2C17.5523 2 18 2.44772 18 3L18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21L16 3C16 2.44772 16.4477 2 17 2Z"
                fill={fill}
            />
            <path
                d="M10.2929 7.70711C10.6834 8.09763 11.3166 8.09763 11.7071 7.70711C12.0976 7.31658 12.0976 6.68342 11.7071 6.29289L7.70711 2.29289C7.51261 2.09839 7.25792 2.00076 7.003 2L7 2L6.997 2C6.8625 2.0004 6.73425 2.02735 6.61722 2.07588C6.49927 2.12468 6.38877 2.19702 6.29289 2.29289L2.29289 6.29289C1.90237 6.68342 1.90237 7.31658 2.29289 7.70711C2.68342 8.09763 3.31658 8.09763 3.70711 7.70711L6 5.41421L6 21C6 21.5523 6.44771 22 7 22C7.55228 22 8 21.5523 8 21L8 5.41421L10.2929 7.70711Z"
                fill={fill}
            />
        </svg>
    );
};

export default WrapIcon;
