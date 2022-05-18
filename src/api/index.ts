export const getFilterItems = async () => {
    const data = await fetch('/data/filters.json');
    return await data.json();
};

type MoviesProps = {
    filter: string | null;
    sort: string | null;
}
export const getMovies = async ({filter, sort}: MoviesProps) => {
    const data = await fetch(`/data/movies.json?filter=${filter}&sort=${sort}`);
    return await data.json();
};

export const deleteMovie = async (id: number | string) => {
    // TODO: delete
    return await Promise.resolve({});
};
