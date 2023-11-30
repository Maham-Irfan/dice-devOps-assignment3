'use client'
import { useState, useEffect } from 'react';
import styles from '../page.module.css'

interface Category {
    id: number;
    name: string;
    stock: number;
  }

export default function Category(){
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await fetch('/api/category', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (response.ok) {
              const data = await response.json();
              setCategories(data.categories);
            } else {
              console.error('Failed to fetch categories');
            }
          } catch (error) {
            console.error('Error fetching categories', error);
          }
        };
    
        fetchData();
      }, []);
    return(
      <main className={styles.main}>
        <div className={styles.description}>
            {categories.map((category) => (
            <div key={category.id}>{category.name} available = {category.stock}</div>
            ))}
        </div>
      </main>
        
    )
}