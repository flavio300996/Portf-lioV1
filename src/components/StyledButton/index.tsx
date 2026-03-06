import { ButtonStylezed } from "./styles";
import type { ReactNode } from "react";

interface styledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton: React.FC<styledButtonProps> = ({ children, onClick }) => {

    return (
        <>
            <ButtonStylezed onClick={onClick}>
                {children}
            </ButtonStylezed>
        </>
    )
}

export default StyledButton;