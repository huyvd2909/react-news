import './Layout.css'
import Button from '@mui/material/Button';

export const Layout = () => {
    return(
        <div className="layout-container">
            <div className="left-panel">
                <div className="navigation">
                    <Button variant='outlined' >Hello</Button>
                </div>
                <div className="main-content"></div>
            </div>
            <div className="right-panel"></div>
        </div>
    )
}