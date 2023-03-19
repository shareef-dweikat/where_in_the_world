
import { CAPITAL, NO_IMAGE, POPULATION, REGOIN, COUNTRY_NAME } from '../constants/strings'
import styles from '../styles/Details.module.css'
import { COUNTRY } from '../types'
import Image from 'next/image'
import configs from '../tsconfig.json'
import {COUNTRY_API} from '../constants/endpoints'

interface PROPS {
  country: COUNTRY
}

export default function Details({ country }: PROPS) {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Image id={styles.flagImg} src={country.src} alt={NO_IMAGE} />
        <div id={styles.descriptionContainer}>
          <div id={styles.descriptionInnerContainer}>
            <div id={styles.country}>{COUNTRY_NAME}</div>
            <div id={styles.title}>{country.countryOfficalName}</div>
            <div id={styles.mb16}>{country.desc}</div>
            <div id={styles.subTitle}>{POPULATION} {country.population}</div>
            <div id={styles.subTitle}>{REGOIN} {country.capital}</div>
            <div id={styles.subTitle}>{CAPITAL} {country.capital}</div>
            <Image id={styles.mapImg} src={country.map} alt={NO_IMAGE} />
          </div>
        </div>
      </div>
    </div>

  )
}

// This gets called on every request
export async function getServerSideProps(context: any) {

  const { paramId } = context.params
  // Fetch data from external API
  const res = await fetch(`${configs.compilerOptions.baseUrl}${COUNTRY_API}${paramId}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { country: data } }
}
