import React,{ createContext,useContext,useState} from 'react';

const ResultContext = createContext();
const baseUrl ='https://google-search3.p.rapidapi.com/api/v1';



export const ResultContextProvider = ({children})=>{

    const [results,setResults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');

     

    // /videos,/search, /image
    const getResults = async (type) => { 
        setIsLoading(true);
        console.log(`${baseUrl}${type}`);
        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
	        headers: {                
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'changetoyourkey'
	        }
        })


        const data = await response.json();       

       

    
        if(type.includes('/news')){
            setResults(data.entries)
        }else if(type.includes('/image')){          
            setResults(data.image_results)
        }
        else {
            setResults(data.results)
        }     
        //console.log(data.results);
        setIsLoading(false);

       
    }
    return (
        <ResultContext.Provider value = {{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </ResultContext.Provider>
    )
      
}

export const useResultContext = ()=> useContext(ResultContext)


//






    
     



 