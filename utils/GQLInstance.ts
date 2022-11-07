import { GraphQLClient } from 'graphql-request';
import { Cookie } from '../services';
import { GlobalConstants } from '@/common/constants';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const API_URL: string = (process.env.NODE_ENV === 'development' ? process.env.API_BASE_URL_LOCAL : process.env.API_BASE_URL)!;

const graphQLClientInstance = () => {
  const graphQLClient = new GraphQLClient(API_URL);

  if (GlobalConstants.WHITE_LIST.every((e: string) => API_URL.indexOf(e) === -1)) {
    graphQLClient.setHeaders({
      Authorization: `Bearer ${Cookie.getToken}`
    });
  }
  return graphQLClient;
};
export default graphQLClientInstance;
