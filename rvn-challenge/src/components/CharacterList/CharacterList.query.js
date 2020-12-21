import React from "react";
import { useQuery } from '@apollo/client';
import "./CharacterList.css";
import CharacterList from "./CharacterList";
import {SHOWLIST} from "./../../Apollo-Client/query";
import  Loader from './../Spinner';
import  Notificaction from './../Notification';

function QueryList() {
  const { data, error, loading, fetchMore} = useQuery(SHOWLIST);
  if (error) return <Notificaction text={"Failed to Load Data"}/>; 
  if (!error && loading) return <Loader/>
  const entries = data.allPeople || [];
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