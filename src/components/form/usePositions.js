import React, {useEffect, useState} from 'react';

const usePositions = (apiCallback) => {
    const [fetchedPositions, setFetchedPositions] = useState([]);
    const [loadingPositions, setLoadingPositions] = useState(true);
    const [errorPositions, setApiErrorMsgPositions] = useState(null);
  
    useEffect(() => {
      fetchPositions();
    }, [])
  
    const fetchPositions = async () => {
      try {
        const { data } = await apiCallback();
        if (!data.success) throw Error("The API doesn't return positions");
        setFetchedPositions(data.positions);
      }
      catch (error) {
        error.response?.data?.message ? setApiErrorMsgPositions(error.response.data.message) : setApiErrorMsgPositions(error.message);
      }
      finally {
        setLoadingPositions(false);
      }
  
    }
  
    return {fetchedPositions, loadingPositions, errorPositions} 
  
  }

  export {usePositions};