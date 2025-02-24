import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.titulo}> Bem-vindo(a) à Clínica Vida Saudável</h1>
      <p className={styles.paragrafo}> Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
      <button className={styles.button} type="submit">
        <Link href="/agendar" className={styles.agendarConsulta}>Agende aqui</Link>
      </button>
    </div>
  );
}