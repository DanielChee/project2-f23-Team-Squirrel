import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Sidebar.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBone, faPencilAlt, faFolder, faFrog, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faBone, faPencilAlt);


const Sidebar = (props) => {
  const { selected } = props;
  const { fullName, admin } = useAuth();

  
  return (
    <div className={styles.sidebar}>
        
        <Link href="/traininglogs" className={`${styles.sidebarItem} ${selected === "TL" ? styles.selected : ""}`}>
        <div className={`${styles.iconContainer} ${selected !== "TL" ? styles.whiteBackground : ""}`}>
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </div>
        Training logs
      </Link>

      <Link href="/animals" className={`${styles.sidebarItem} ${selected === "A" ? styles.selected : ""}`}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faBone} className={styles.icon} />
          </div>
            Animals
      </Link>

      <div className={styles.horizontalLine}></div>
      
      
      {admin && (
        <div className={styles.adminAccess}>
          <div>Admin access</div>
          <Link href="/admin/traininglogs" className={`${styles.adminAccessLink} ${selected === "ATL" ? styles.selected : ""}`}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faFolder} className="icon" />
          </div>
            All training
          </Link>
          <Link href="/admin/animals" className={`${styles.adminAccessLink} ${selected === "AA" ? styles.selected : ""}`}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faFrog} className="icon" />
          </div>
            All animals
          </Link>
          <Link href="/admin/users" className={`${styles.adminAccessLink} ${selected === "AU" ? styles.selected : ""}`}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faUsers} className="icon" />
          </div>
          All users
          </Link>
        </div>
      )}
      <div className={styles.userInfo}>
        <div className={styles.userIcon}>L</div>
        <div>
          <div className={styles.userName}>{fullName}</div>
          <div className={styles.userRole}>{admin ? 'Admin' : 'User'}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


