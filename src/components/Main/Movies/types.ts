export type Props = {
    filter: string | null;
    sort: string | null;
};

export type IMovie = {
  "id": number | string;
  "title": string;
  "image": string;
  "release_date": number;
  "genre": string[];
  "movieURL": string;
  "rating": number;
  "runtime": number;
  "description": string;
};