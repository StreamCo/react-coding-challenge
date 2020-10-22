import { useEffect, useState } from "react";
import { errorHint } from '../constants';

export const useFetch = (url, category) => {
  const [states, setStates] = useState({
    payload: [],
    loading: false
  });

  useEffect(() => {
    setStates({
      payload: [],
      loading: true
    });

    fetch(url)
      .then(res => {
        try {
          if (res.ok) {
            
            return res.json();
          } else {
            throw new Error(res)
          }
        } catch(error) {
          return errorHint;
        }
      })
      .then(data => {
        if(data === errorHint) {
          setStates({
            payload: [errorHint],
            loading: false
          });
        }

        if (data && data.entries) {
          setStates({
            payload: data
              .entries
              .filter(({ releaseYear, programType }) => releaseYear >= 2010 && programType === category)
              .slice(0, 21)
              .sort((a, b) => {
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
              }),
            loading: false
          });
        }
      });
  }, []);

  return states;
};
