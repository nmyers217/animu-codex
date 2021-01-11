import { GraphQLClient, gql } from 'graphql-request';

import { SearchFormState } from '../components/SearchForm';

const endpoint = 'https://graphql.anilist.co';
const client = new GraphQLClient(endpoint);

export const getAllMedia = async function (
  page: number,
  filters: SearchFormState
) {
  const perPage = 25;
  const query = gql`
    query($search: String, $status: MediaStatus, $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(search: $search, status: $status, sort: POPULARITY_DESC) {
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
  const variables = {
    page,
    perPage,
    search: filters.search || undefined,
    status:
      !filters.status || filters.status.includes('All')
        ? undefined
        : filters.status.toUpperCase().split(' ').join('_'),
  };
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
