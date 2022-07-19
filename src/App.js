import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import movierow from './components/movierow';



export default () => {

  const [movieList, setMovieList ] = useState([]);

  useEffect(()=>{
  
    const loadAll = async () => {

      // pegando a lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);
      //console.log(list);
    }
    loadAll();

  }, []);

  // Preparando corpo da pagina
  //Header
  //Destaque
  //As Listas
  //Rodape
  
  
  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <movierow />
        ))}
      </section>
    </div>
  );
}
