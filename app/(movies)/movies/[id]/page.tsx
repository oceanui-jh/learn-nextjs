import { Suspense } from 'react';
import MovieVidoes from '../../../../components/movie-videos';
import MovieInfo from '../../../../components/movie-info';

export default async function MovieDetial({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h3>Videos</h3>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVidoes id={id} />
      </Suspense>
    </div>
  );
}
