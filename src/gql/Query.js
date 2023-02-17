import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    countries {
        code
        name
        emoji
      }
  }
`;

export const COUNTRY_QUERY = gql`
  query Continent($code: ID!) {
    country(code: $code) {
      name
      native
      phone
      continent {
        name
      }
      currency
      languages {
        name
      }
      states {
        name
      }
    }
  }
`;

