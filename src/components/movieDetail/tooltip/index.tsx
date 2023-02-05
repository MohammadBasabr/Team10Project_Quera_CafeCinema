import React, { ReactNode } from 'react';

interface  TooltipProps extends React.PropsWithChildren {
    children:ReactNode,
    message?:string
}

export const Tooltip: React.FunctionComponent<TooltipProps> = ({children,message}):JSX.Element => {
    return (
        <div className="group/tooltip relative flex">
            {children}
            <span className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 p-1 absolute top-[-40px] left-[-10px] scale-0 transition-all rounded bg-dark-secondary text-xs text-light-secondary group-hover/tooltip:scale-100 whitespace-nowrap">{message}</span>
        </div>
        )
}
