import { GraphQLClient } from 'graphql-request';
import { Cookie } from '@services';
import { WHITE_LIST } from '@utils/constants';

const API_URL: string = (process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_BASE_URL_LOCAL : process.env.REACT_APP_API_BASE_URL)!;

const graphQLClientInstance = () => {
    const graphQLClient = new GraphQLClient(API_URL);

    if (WHITE_LIST.every(e => (API_URL).indexOf(e) === -1)) {
        graphQLClient.setHeaders({
            Authorization: `Bearer ${Cookie.getToken}`
        })
    }
    return graphQLClient;
}
export default graphQLClientInstance;
