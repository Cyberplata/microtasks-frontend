import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from './Prices.module.css';

type Props = {};
export const Prices = (props: Props) => {
    const sneakers = [
        {
            manufacturer: "Adidas",
            name: "Adidas Yeezy Boost 350",
            price: 300,
            onSale: false
        },
        {
            manufacturer: "Adidas",
            name: "Adidas Ultraboost 21",
            price: 180,
            onSale: true
        },
        {
            manufacturer: "Puma",
            name: "Puma Suede Classic",
            price: 65,
            onSale: true
        },
        {
            manufacturer: "Puma",
            name: "Puma RS-X",
            price: 110,
            onSale: false
        },
        {
            manufacturer: "Abibas",
            name: "Abibas Alphabounce",
            price: 60,
            onSale: true
        }
    ];

    // useSearchParams - это хук, который позволяет вам получить доступ к параметрам поиска URL-адреса и обновлять их без перезагрузки страницы.
    // Благодаря query параметрам в URL, вы можете обновлять данные на странице без перезагрузки.
    // Query параметры - это часть URL после знака вопроса (?), а дальше идёт пара ключ-значение, разделённые знаком равно (=).
    // Например, в URL https://example.com/?page=2 параметр page имеет значение 2.
    // Для чего же нужен этот хук?
    // 1) Допустим, у вас есть приложение, в котором есть фильтры, и вы хотите, чтобы при изменении фильтра URL менялся, чтобы пользователь мог поделиться ссылкой на страницу с применённым фильтром.
    // 2) Чтобы при клике назад/вперёд в браузере фильтры не сбрасывались.
    // 3) Можем использовать логику дальше в коде, например, фильтровать данные на странице в зависимости от query параметров.
    // 4) SEO - для поисковых систем, чтобы они могли индексировать страницы с разными query параметрами. Так как поисковые системы не выполняют JavaScript, то они не видят изменения, которые происходят на странице после загрузки. Поэтому, если вы используете React, то вам нужно использовать query параметры, чтобы поисковые системы могли индексировать ваши страницы.
    const [searchParams, setSearchParams] = useSearchParams();

    const [filteredSneakers, setFilteredSneakers] = useState(sneakers);

    console.log(searchParams.get("onSale"))

    function handleOnSale() {
        setSearchParams({onSale: "true"})
        // setFilteredSneakers(sneakers.filter(el=> el.onSale))
    }

    function handleReset() {
        setSearchParams({})
        setFilteredSneakers(sneakers)
    }

    useEffect(()=> {
        // debugger
        if (searchParams.get("onSale") === 'true') {
            setFilteredSneakers(sneakers.filter(el=> el.onSale))
            // setSearchParams({onSale: "true"})
        } else {
            setSearchParams({})
        }
    }, [searchParams])


    return (
        <div>
            <button onClick={handleOnSale} className={styles.buttonStyle}>On sale</button>
            <button onClick={handleReset} className={styles.buttonStyle}>Reset filter</button>

            <table className={styles.tableStyle}>
                <thead>
                <tr>
                    <th className={styles.thStyle}>Manufacturer</th>
                    <th className={styles.thStyle}>Name</th>
                    <th className={styles.thStyle}>Price</th>
                    <th className={styles.thStyle}>On Sale</th>
                </tr>
                </thead>
                <tbody>
                {filteredSneakers.map((sneaker, index) => (
                    <tr key={index}>
                        <td className={styles.tdStyle}>{sneaker.manufacturer}</td>
                        <td className={styles.tdStyle}>{sneaker.name}</td>
                        <td className={styles.tdStyle}>${sneaker.price}</td>
                        <td className={styles.tdStyle}>{sneaker.onSale ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};