import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material";
import { debounce } from '../utils';
import { useEffect, useState } from 'react';
import { articlesData } from '../mockData/rightPanel';
import NewsService from '../services/news.services';
import { Headline } from '../components/news/Headline';
const SearchInput = styled(OutlinedInput)({
    textTransform: 'none',
    fontSize: 14
})
const SearchAdornment = styled(InputAdornment)({
    marginRight: 4
})
export const RightPanel = () => {
    // const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const handleSearch  = (param) => {
        // const payload = {
        //     q: param,
        // }
        setTimeout(() => {
            const resp = articlesData.articles.filter((article) => article.title !== '[Removed]')
            console.log(resp)
            setSearchResult(resp)
        })
        // NewsService.getAll(payload).then(res => res.data).then(res => {
        //     setSearchResult(res.articles)
        // }).then(()=>{
        // })
    }
    useEffect(() => {
        console.log('RightPanel mounted')
    })
    return (<div className="right-panel-container">
        <SearchInput  onBlur={(e) => handleSearch(e.target.value)}  size="small" placeholder="Article name" sx={{borderRadius: 4, backgroundColor: '#fafafa'}} variant="outlined" fullWidth endAdornment={
            <SearchAdornment position="start">
              <SearchIcon sx={{fontSize: 24}} />
            </SearchAdornment>
          }/>
        <div className="search-results mt-3">
        {searchResult.map((result, index) => (
            <Headline article={result} key={index}/>
        ))}</div>
    </div>)
}