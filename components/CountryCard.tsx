import styles from '../styles/Card.module.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import {CAPITAL, NO_IMAGE, POPULATION, REGOIN} from '../constants/strings'
import {Card} from '../types'

export default function CountryCard({ src, population, regoin, capital, id, countryName }: Card) {
  const router = useRouter();
  return (
    <div className={styles.container} onClick={() => router.push(`/${id}`)}>
      <Image src={src} alt={NO_IMAGE} id={styles.img} />
      <div style={{ padding: 8 }}>
        <div id={styles.title}>{countryName}</div>
        <div id={styles.subTitle}>{POPULATION} {population}</div>
        <div id={styles.subTitle}>{REGOIN} {regoin}</div>
        <div id={styles.subTitle}>{CAPITAL} {capital}</div>
      </div>
    </div>
  )
}
