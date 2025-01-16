import './Layout.css'
import { CButton } from '../components/commons/override';
import { Newspaper } from '@mui/icons-material'
import { RightPanel } from './RightPanel';
export const Layout = () => {
    return(
        <div className="layout-container">
            <div className="left-panel">
                <div className="navigation">
                    <CButton startIcon={<Newspaper/>} sx={{backgroundColor: '#ffffff'}} variant='contained' color='white' href='#' >RandomNews</CButton>
                </div>
                <div className="main-content"></div>
            </div>
            <div className="right-panel"
            >
                <RightPanel></RightPanel>
            </div>
        </div>
    )
}