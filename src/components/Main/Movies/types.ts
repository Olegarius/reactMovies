export type Props = {
    filter: string | null;
    sort: string | null;
};

export type IMovie = {
  "id": number | string;
  "title": string;
  "image": string;
  "release_date": string;
  "genre": string[];
  "movieURL": string;
  "rating": number | string;
  "runtime": number | string;
  "description": string;
};