import { GraphQLClient } from 'graphql-request';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const API_URL: string = (process.env.NODE_ENV === 'development' ? process.env.API_BASE_URL_LOCAL : process.env.API_BASE_URL)!;

const graphQLClientInstance = () => {
  return new GraphQLClient(API_URL);
};
export { API_URL };
export default graphQLClientInstance;
