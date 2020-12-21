import { gql } from "@apollo/client";

export const SHOWLIST = gql`query getlistcharacter($cursor : String)
{
  allPeople( first:5,  after: $cursor ) {
      edges{
        node{
          id
          name
          species{
            name
          }
          homeworld
          {
            name
          }
        }
      }
      pageInfo{
        startCursor
        hasPreviousPage
        endCursor
        hasNextPage
      }
  }
}
`; 
export const DETAILLINFO = gql`query getdetaillinfo($id : ID){
  person(id: $id){
    eyeColor
    hairColor
    birthYear
    skinColor
    vehicleConnection{
      vehicles{
        name
      }
    }
  }     
}`; 