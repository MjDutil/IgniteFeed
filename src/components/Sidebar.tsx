import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <div>
            <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1446160657592-4782fb76fb99?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
            <div className={styles.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/113648830?v=4" />

                <strong>Maju Dutil</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
            </aside>
        </div>
    );
}