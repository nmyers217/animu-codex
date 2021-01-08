import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.anilist.co';
const client = new GraphQLClient(endpoint);

export const getAnime = async function (id) {
  const query = gql`
    query($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
      }
    }
  `;
  const { Media } = await client.request(query, { id });
  return Media;
};
