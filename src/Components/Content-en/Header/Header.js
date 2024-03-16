import React, { useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import style from './Header.module.css'


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <header className={style.header}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                <path d="M20.4506 5.25918C19.0919 5.69691 17.9456 6.47652 17.6601 7.15634L17.5398 7.4419L15.6561 7.43301L15.4116 6.93006C15.2253 6.54668 15.063 6.3708 14.7263 6.18701L14.2864 5.94591H11.1062C6.93498 5.94591 6.40895 6.15341 6.40895 7.80355V8.26796L5.69955 8.61478C3.08441 9.8924 1.03538 12.416 0.225789 15.3546L0.000346207 16.1748V26.2584C0.000346207 37.2698 -0.0327188 36.5584 0.547422 38.1166C1.84798 41.6086 4.86291 44.1352 8.54916 44.8258C9.78859 45.0581 40.2114 45.0581 41.4508 44.8258C45.1371 44.1362 48.152 41.6096 49.4526 38.1166C50.0327 36.5584 49.9997 37.2698 49.9997 26.2584V16.1748L49.7832 15.4031C48.649 11.3647 45.7433 8.61182 41.6342 7.67905C41.02 7.53972 40.2134 7.50514 36.6765 7.46858L32.4532 7.42412L32.3369 7.14745C32.0504 6.46565 30.8209 5.64553 29.4663 5.23349C28.3992 4.9084 21.4756 4.92816 20.4506 5.25918ZM40.0601 10.8222C43.053 11.1256 45.3856 12.9526 46.3976 15.7874L46.6731 16.5591L46.7012 25.871C46.7332 36.5189 46.7653 36.0218 45.9236 37.7342C44.9758 39.662 43.064 41.1205 40.9288 41.5453C39.7856 41.7726 10.2114 41.7726 9.07118 41.5453C6.91594 41.1145 5.0112 39.6284 4.00923 37.5949C3.24473 36.0426 3.26677 36.4072 3.29883 25.871L3.32689 16.5591L3.63149 15.7163C4.60841 13.0168 6.9961 11.1167 9.77356 10.8291C10.9589 10.7066 38.8517 10.6997 40.0601 10.8212V10.8222ZM9.51706 11.8884C6.37889 12.3419 4.35391 14.8942 4.35391 18.398V19.6954H11.0661L11.2915 19.2369C12.2845 17.2123 14.2844 15.0167 16.4357 13.5869C17.2402 13.0524 19.3614 11.9763 19.6109 11.9763C19.669 11.9763 19.7161 11.9328 19.7161 11.8795C19.7161 11.7609 10.3457 11.7678 9.51706 11.8874V11.8884ZM30.2839 11.8548C30.2839 11.9002 30.4492 11.9951 30.6506 12.0652C33.7206 13.1294 37.462 16.4702 38.7385 19.2863L38.9249 19.6964H45.6471V18.399C45.6471 15.1284 44.1341 12.9842 41.1462 12.0168C40.5581 11.8261 30.2849 11.674 30.2849 11.8558L30.2839 11.8548ZM24.0707 12.5178C12.6663 13.6156 7.13237 25.9748 14.0931 34.7976C21.7892 44.5512 37.8768 39.7015 38.8858 27.3236C39.5611 19.0343 32.2528 11.7313 24.0707 12.5178ZM26.6638 15.9455C33.2327 16.8753 37.3277 23.963 34.8278 30.0774C31.9482 37.1216 22.708 38.9279 17.4136 33.4804C10.3908 26.2544 16.5819 14.5187 26.6638 15.9455ZM23.8723 17.5719C17.9617 18.395 14.553 24.3474 16.8885 29.7701C19.5698 35.9942 28.5605 36.7659 32.376 31.1001C36.5512 24.9007 31.2949 16.5394 23.8723 17.5719ZM27.7168 18.9098C28.8581 19.2596 29.7118 20.0768 29.7318 20.8366C29.7779 22.5886 26.2289 22.5332 25.0416 20.7635C24.1388 19.4187 25.747 18.3051 27.7168 18.9098ZM22.701 32.2552C23.7821 32.4805 25.3923 33.4557 25.3923 33.8846C25.3923 34.8865 21.7581 34.2393 20.697 33.0486C19.9636 32.2246 20.8564 31.8708 22.701 32.2552ZM41.9128 35.9991C39.8938 36.6167 40.2846 39.3863 42.3897 39.3794C44.5309 39.3725 44.6902 36.2629 42.564 35.9734C42.3486 35.9438 42.056 35.9556 41.9128 36.0001V35.9991Z"/>
            </svg>
            <div className={style.headerNavig}>
                <Navigation />

                <button className={style.burger} onClick={toggleMenu}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11H50V14.1111H0V11Z" fill="white" />
                <path d="M0 23.4444H50V26.5556H0V23.4444Z" fill="white" />
                <path d="M0 35.8889H50V39H0V35.8889Z" fill="white" />
                </svg>
                </button>
                {isOpen && (<div className={style.menu}>
                <button className={style.bottonAct} onClick={toggleMenu}>
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.65211 44.6915L22.5197 23.8239M22.5197 23.8239L45.3436 1M22.5197 23.8239L44.6915 45.9957M22.5197 23.8239L1 2.30422" stroke="white" stroke-width="2" />
                </svg>
                </button>
                <a className={style.menuItem} href="#skils">Skills</a>
                <a className={style.menuItem} href="#portfolio">Portfolio</a>
                <a className={style.menuItem} href ='#video'>Videor</a>
                <a className={style.menuItem} href ='#price'>Price</a>
                <a className={style.menuItem} href ='#contacts'>Contacts</a>
        </div>)}

            </div>
        </header>
    )
}


