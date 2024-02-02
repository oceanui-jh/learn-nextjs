import { API_URL } from '../app/contants';
import styles from '../styles/movie-credit.module.css';

async function getCredit(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredit(id);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>출연</h1>
      <ul className={styles.credits}>
        {credits.map((credit) => (
          <li className={credit.profile_path !== null ? '' : styles.hidden}>
            <img src={credit.profile_path} alt={credit.name} />
            <h5>{credit.name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
