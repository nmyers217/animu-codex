import { GraphQLClient, gql } from 'graphql-request';

import { SearchFormState } from '../components/SearchForm';

const endpoint = 'https://graphql.anilist.co';
const client = new GraphQLClient(endpoint);

export const getAllMedia = async function (
  page: number,
  perPage: number = 50,
  filters: SearchFormState
) {
  const query = gql`
    query($search: String, $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(search: $search, sort: POPULARITY_DESC) {
          id
          coverImage {
            medium
            large
          }
          title {
            english
            romaji
            native
          }
          status
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
          type
          format
          genres
          season
          seasonYear
          episodes
          chapters
          volumes
          description
        }
      }
    }
  `;
  const variables = { page, perPage, search: filters.search || undefined };
  const { Page } = await client.request(query, variables);
  return Page;
};

export const getMedia = async function (id: number) {
  // TODO: clean this up
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
