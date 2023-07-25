import styles from "./Sidebar.module.css";
import imageCapa from "../../assets/capa.jpg";
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={imageCapa} alt="Foto de capa" />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/paulanader.png" />
        <strong>Paula Nader</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
