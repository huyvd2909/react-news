import Paper from '@mui/material/Paper';
import IconButton  from '@mui/material/IconButton';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import { CButton } from '../commons/override';
import { timeDiff } from '../../utils';
import { Newspaper } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
export const Headline = ({article}) => {
    const [isShowDetail, setIsShowDetail] = useState(false)
    useEffect(()=> {
        console.log(isShowDetail)
    }, [isShowDetail])
    return (
        <div className="headline-container p-2 relative w-full">
            <Paper elevation={4} sx={{fontSize: 13}}>
            <div className="flex flex-row w-full p-3">
                 <div className="flex flex-col w-[calc(100%-92px)]">
                    <div className="flex flex-row items-center">
                        <span className=' text-blue-400'>{article?.source?.name ?? "Anonymous"}</span>
                        <i className="ml-2 text-gray-500" >{timeDiff(article.publishedAt)}</i>
                    </div>
                 <span>{article.title}</span>
                 </div>
                 <div className='w-[80px] h-[80px] ml-3'>
                    {
                       article.urlToImage ?
                            <img src={article.urlToImage} className="w-full h-full rounded-xl" alt="img" />:
                            <div className='rounded-xl bg-blue-400 w-full h-full flex items-center justify-center'>
                                <Newspaper sx={{fontSize: 40, color: 'white'}} ></Newspaper>
                            </div>
                    }
                 </div>
                 <div onMouseEnter={()=> setIsShowDetail(true)} onMouseLeave={()=>setIsShowDetail(false)} className={`container-hover rounded-lg bg-slate-50 absolute bottom-2 left-2 w-[300px] h-[48px] bg-transparent`}>
                    {isShowDetail && (<div className='flex rounded-xl flex-row items-center w-fit h-full bg-white p-2'>
                        <Tooltip title="Open in new tab">
                            <IconButton aria-label="Open in new tab" color="white" variant='outlined' size='small' href={article.url} target='_blank'>
                                <PresentToAllIcon></PresentToAllIcon>
                            </IconButton>
                    
                        </Tooltip>
                        <Tooltip title="Show previews">
                        <IconButton className='ml-2' aria-label="Show previews" color="white" variant='outlined' size='small' href={article.url} target='_blank'>
                                <PresentToAllIcon></PresentToAllIcon>
                            </IconButton>
                        </Tooltip>
                    </div>)}
                </div>
                 </div>

       
            </Paper>
           {/* <Accordion elevation={4} >
                <AccordionSummary
                aria-controls="panel1-content"
                sx={{fontSize: 14}}
                id="panel1-header"
                >
                 
                </AccordionSummary>
                <AccordionDetails sx={{fontSize: 13}}>
                </AccordionDetails>
            </Accordion>
               */}
           </div>
    )
}