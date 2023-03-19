import styles from '@/styles/Navbar.module.css'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import Link from 'next/link';
import { WHERE_IN, DARK_MODE } from '../constants/strings'

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
        <Link href='./'>
         <span id={styles.title}>{WHERE_IN}</span>
        </Link>
        <span id={styles.modeLabel}><NightlightOutlinedIcon/>{DARK_MODE}</span>
    </div>
  )
}
