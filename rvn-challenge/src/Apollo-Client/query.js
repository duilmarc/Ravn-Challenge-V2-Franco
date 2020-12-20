import { gql } from "@apollo/client";

export const SHOWLIST = gql`query getlistcharacter($cursor : String)
{
  allPeople(  after: $cursor ) {
      edges{
        node{
          id
          name
          eyeColor
          hairColor
          skinColor
          birthYear
          vehicleConnection
          {
            vehicles{
              name
            }
          }			
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