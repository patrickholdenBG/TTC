'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log('root useEffect called');
    router.push('/flights'); // Navigate to /flights page
  }, [router]);

  return (
    <main className={styles.main}>
     
    </main>
  )
}
