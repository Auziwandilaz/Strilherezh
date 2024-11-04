interface Props {
    className?: string;
    empty?: boolean;
}

export const BackArrowIcon = ({ className = "", empty = true }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <rect
                width="24"
                height="24"
                rx="12"
                fill="#F4F4F4"
            />
            <path
                fill-rule="evenodd" 
                clip-rule="evenodd"
                d="M6.93933 12.0321L7.47237 12.5598L10.4724 15.5294L11.5276 14.4634L9.82375 12.7767H16V11.2767H9.79786L11.533 9.52406L10.467 8.46875L7.46701 11.4991L6.93933 12.0321Z"
                fill="#AAAAAA"
            />
            {!empty && <circle cx="19.5" cy="7.64282" r="3" fill="#D43D28" />}
        </svg>
        
    );
};
