type ButtonProps = {
    children: React.ReactNode;
    type?:"button"|"submit"|"reset";
    onClick?:()=>void;
    loading?:boolean;
    disabled?:boolean;
    variant?:"primary"|"secondary"|"danger";
    className?:string;
}

export default function Button({
    children,
    type = "button",
    onClick,
    loading=false,
    disabled=false,
    variant="primary",
    className="",
}:ButtonProps){
    const variantClasses = {
        primary:"bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed",
        secondary:"bg-gray-600 hover:bg-gray-700 text-gray-800 disabled:bg-gray-100 disabled:text-gray-400",
        danger:"bg-red-600 hover:bg-red-700 text-white disabled:bg-red-300 disabled:cursor-not-allowed",
    };

    return(
        <button
            type={type}
            onClick={onClick}
            disabled={loading || disabled}
            className={`w-full py-2 rounded-lg font-medium transition ${variantClasses[variant]} ${className}`}
        >
            {loading ? "Loading...................": children}
        </button>
    )
}