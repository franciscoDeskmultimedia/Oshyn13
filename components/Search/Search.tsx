import { useState } from 'react';
import Fuse from 'fuse.js';

const Search = (props:any) => {
    const [query,setQuery] = useState('')
    const fuse = new Fuse(props.works, {
        keys: [
          'title',
          'client'
        ],
        includeScore: true
      });
      const results = fuse.search(query);
      console.log(results)
      const searchResults = results.map(res => res.item);

      function handleOnSearch(event:any){
        console.log(event.target.value)
        setQuery(event.target.value)
      }

    return(
        <>
            <form className={`search_form ${props.serachNav ? 'search_nav' : ''}`}>
                <label htmlFor="search">Search</label>
                <input  type="text" name="search" id="search" onChange={handleOnSearch} />
            </form>
            <ul>
                {searchResults.map((item:any,index:any)=>{
                    return(
                        <li key={index}>{item.title}</li>
                    )
                }) ?? <li>no results</li>}
                
            </ul>
        </>
    )
}

export default Search