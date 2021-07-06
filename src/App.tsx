import React, { useRef } from "react";
import styles from "./App.module.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { ContentSection, Header } from "./components";
import { Introduction } from "./sections";
import WorksSection from "./sections/WorksSection/WorksSection";

function App() {
    const aboutMeRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.root}>
            <Header />
            <main>
                <Introduction nextSectionRef={aboutMeRef} />
                <section ref={aboutMeRef} id="about-me" className="container">
                    <ContentSection emoji="🧑" title="Обо мне">
                        <p>
                            С самого детства заинтересован сферой <b>IT</b>, закончил среднее специальное и высшее
                            образование (<b>бакалавр</b>) по Информационным системам.
                        </p>
                        <p>
                            Имею уже около четырёх лет стажа работы системным администратором, плотно работал с
                            настройкой корпоративных серверов и сетевого оборудования (проходил очные курсы) на данный
                            момент ещё продолжаю занимать эту должность. Подрабатывал на <b>3D</b> моделировании на
                            фрилансе, но есть непоколебимое желание развиваться и направиться в разработку ПО.
                        </p>
                        <p>
                            Я начал интенсивно изучать программирование более <b>1.5</b> года назад, писал небольшие web
                            приложения на <b>Python</b> - <b>Django</b> - <b>Postgresql</b>, фронтенд на <b>React</b>{" "}
                            либо чистом <b>JavaScript</b>.
                        </p>
                        <p>
                            Мне хватает мотивации и искренней заинтересованности для того, чтобы изучать множество
                            технологий и языков программирования без помощи долготлительных курсов с постоянными
                            “пинками”.
                        </p>
                    </ContentSection>
                    <ContentSection emoji="🖼" title="Почему Frontend?">
                        <p>
                            Хоть я и крайне завлечён в освоении различных технических аспектов (ООП, ФП, строгая
                            типизация кода, паттерны, алгоритмы), но, в то же время, мне всегда нравилось работать с
                            графикой. Много лет я зарабатывал на 3D моделировании для игры Garry’s Mod.
                        </p>
                        <p>
                            Поэтому, Frontend для меня стал идеальным вариантом деятельности и развития - ведь он
                            совмещает в себе как глубокую техничесткую проработку, так и работу с визуалом, создание
                            графических интерфейсов, создание нечто по-своему прекрасного.
                        </p>
                    </ContentSection>
                    <ContentSection emoji="💬" title="Языки">
                        <p>
                            <b>Русский</b> - Родной. <br /> <b>Английский</b> - Средне-продвинутый.
                        </p>
                        <p>
                            Я всегда стараюсь искать информацию/документацию в первоисточнике - на английском языке.
                            Могу абсолютно свободно смотреть обучающие видео, “чатится” и читать документацию на
                            английском. На мой взгляд, такая информация часто более ценна, т.к. не перефразирована
                            отечественными контент-мейкерами. Кроме того, это поддерживает мой уровень знания языка.
                        </p>
                    </ContentSection>
                </section>
                <WorksSection/>
            </main>
            <footer className="container">
                <h6 style={{ margin: 0 }}>Designed & Made by Max Kayander</h6>
            </footer>
        </div>
    );
}

export default App;
