import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.anilist.co';
const client = new GraphQLClient(endpoint);

export const getAllMedia = async function (page, perPage = 50) {
  // TODO: support different media query params
  // TODO: trim unused fields
  const query = gql`
    query($page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(sort: POPULARITY_DESC) {
          id
          idMal
          title {
            english
            romaji
            native
          }
          type
          status
          description
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          season
          episodes
          chapters
          volumes
          coverImage {
            medium
          }
          genres
          averageScore
          popularity
          isLocked
          favourites
        }
      }
    }
  `;
  const { Page } = await client.request(query, { page, perPage });
  return Page;
};

export const getMedia = async function (id) {
  const query = gql`
    query($id: Int) {
      Media(id: $id) {
        id
        idMal
        title {
          english
          romaji
          native
        }
        type
        status
        description
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        season
        episodes
        chapters
        volumes
        trailer {
          id
          site
          thumbnail
        }
        coverImage {
          large
        }
        bannerImage
        genres
        averageScore
        popularity
        isLocked
        favourites
        updatedAt
      }
    }
  `;
  const { Media } = await client.request(query, { id });
  return Media;
};
