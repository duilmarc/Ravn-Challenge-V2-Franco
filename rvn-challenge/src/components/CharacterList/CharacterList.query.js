import React from "react";
import { useQuery } from '@apollo/client';
import "./CharacterList.css";
import CharacterList from "./CharacterList";
import {SHOWLIST} from "./../../Apollo-Client/query"


function QueryList() {
  const { data, error, loading, fetchMore} = useQuery(SHOWLIST);
  if (loading) return <p>Loading..</p>
  if (error) return <p>{error.message}</p>; 
  const entries = data.allPeople ;
  const onLoadMore = () =>{ 
    fetchMore({
      variables: {
        cursor: data.allPeople.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.allPeople.edges;
        const pageInfo = fetchMoreResult.allPeople.pageInfo;
        return newEdges.length
          ? {
            allPeople: {
                __typename: previousResult.allPeople.__typename,
                edges: [...previousResult.allPeople.edges, ...newEdges],
                pageInfo
              }
            }
          : previousResult;
      }
    })
  }
  return (
      <CharacterList
        loading={loading}
        characters={entries}
        onLoadMore={ onLoadMore }
      />
    );
}



export default QueryList;