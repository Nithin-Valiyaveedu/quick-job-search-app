import React, { useReducer, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://job-search4.p.rapidapi.com/linkedin/search";


const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
  //TODO:
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };

    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error };
    
    // TODO: Later Stage UPDATE_HAS_NEXT_PAGE
    // case ACTIONS.UPDATE_HAS_NEXT_PAGE:
    //     return {...state, hasNextPage: action.payload.hasNextPage}

    default:
      return state;
  }
}

const FetchJobs = (params,page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: { ...params, page:1 },
        headers: {
          "x-rapidapi-host": "job-search4.p.rapidapi.com",
          "x-rapidapi-key":"510a3588bbmshf481f5b85f60ee0p118bcdjsn6a4514928b70",
        },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if(axios.isCancel(e)) return
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
      return ()=>{
          cancelToken.cancel()
      }

  }, [params, page]);

  return state;
};

export default FetchJobs;
