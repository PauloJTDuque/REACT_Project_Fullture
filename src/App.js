import React, { useEffect, useState } from 'react';
import {getHomeList} from './Tmdb';
import {Movierow} from './components/Movierow';

export const App = () => {

  const [movieList, setMovieList ] = useState([]);

  useEffect(()=>{
  
    const loadAll = async () => {

      // pegando a lista total
      let list = await getHomeList();
      setMovieList(list);
      //console.log(list);
    }
    loadAll();

  }, []);

 
  
  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <p>
            {
              item.title
            }
          </p>
        ))}
      </section>
    </div>
  );
}
