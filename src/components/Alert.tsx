import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
}


function Alert({children}:AlertProps): JSX.Element {

  
    return (
        <>
        <div className="alert alert-primary">

            <h1> {children}</h1>
			
        </div>
        </>
    );
}

export default Alert;
