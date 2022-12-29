import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";


const Infromation = () => {
    const { id } = useParams()
    
    function renderhtml() {
        if (id === "rules") {
            return (                
                <div className="rules_information">
                    <div className="cap">
                        <p>ПРАВИЛА ДОРОЖНОЙ БЕЗОПАСНОСТИ</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/5894b193fda5648afe1c1a5e70c028f25cd29099/">1. Общие положения</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/a4b879c29ebc2ff9a56a0595499b6eb2dce7980e/">2. Общие обязанности водителей</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/367c97a177672081a40df5256f7b2150d8ff81c6/">3. Применение специальных сигналов</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/1736bcf22f8e05f9d3db535f6d084651bad887a4/">4. Обязанности пешеходов</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/ebac29ce89bbf83c3390095a126a259f746a0cb8/">5. Обязанности пассажиров</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/4b7a10a56ed37080fc96999db5f3db6f3aa58cc6/">6. Сигналы светофора и регулировщика</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/5db7d611e491cc10d20b0f33c6152a6a12b6e298/">7. Применение аварийной сигнализации и знака аварийной остановки</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/2fdfa8559de67744dab415a31c1f987bc016016b/">8. Начало движения, маневрирование</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/d08dbb6ef3956314fd36b1d54a9393598f057acf/">9. Расположение транспортных средств на проезжей части</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/803907f6876a655f77995888208488d4bfccf247/">10. Скорость движения</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/00933a31260a2f952961558c8915b2304c0d37a5/">11. Обгон, опережение, встречный разъезд</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/59ded54942baa2143676e12b31244b0cb7ada00d/">12. Остановка и стоянка</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/74cbe820904f4f8ce76047ddbd81d14c8b953d3e/">13. Проезд перекрестков</a></li>
                        </ul>
                        <ul>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/7c45508e360f5b7b8ae1443d73feb01f52a6199d/">14. Пешеходные переходы и места остановок маршрутных транспортных средств</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/30652b56dc31f25e043cecc891a1b6c6d342b564/">15. Движение через железнодорожные пути</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/b9ffeb1a48b4e34db166a077afffcd010f54ccc0/">16. Движение по автомагистралям</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/4a197256b71d80d3468ba394e252f791d3066874/">17. Движение в жилых зонах</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/1d225b4fe43aaefac2b8f54fc0579d997cc402bc/">18. Приоритет маршрутных транспортных средств</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/97740763b8b2b6482c476391e6a2f5fff4204809/">19. Пользование внешними световыми приборами и звуковыми сигналами</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/882fa5c9619bb53e0aedce5214dbc06abd8a5a12/">20. Буксировка механических транспортных средств</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/d2a59b4261d79be841e0f1ce86cb9e7bf4ee4c1a/">21. Учебная езда</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/e001362573f4cd17ff27d65968c83cd423459ada/">22. Перевозка людей</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/9f6f60efaee3994438e38b50a90595abfaaaf5a2/">23. Перевозка грузов</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/f4bc69696d2f64b2318aa07f83412714797b7fea/">24. Дополнительные требования к движению велосипедистов и водителей мопедов</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/ced1ad72806ca0d929b75e26e599a52658f1b76f/">25. Дополнительные требования к движению гужевых повозок, а также к прогону животных</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/7b01aa9740914678364b723c355a6cdbfd54727a/">26. Нормы времени управления транспортным средством и отдыха</a></li>
                        </ul>
                    </div>
                    <div className="list2">
                        <br />
                        <br />
                        <ul>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/ac7f7c6628d9b362a288243ce7da1c04b5d73fd2/">Приложение 1. Дорожные знаки (по ГОСТу Р 52289-2019 и ГОСТу Р 52290-2004)</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/701372b7167cd1c57a637e75243d2ac5388a8a6d/">Приложение 2. Дорожная разметка и ее характеристики (по ГОСТу Р 51256-2011 и ГОСТу Р 52289-2004)</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/bc8a882984154b5338eda3b9d6b33690d5ddb6c7/">Приложение N 3. Особенности организации дорожного движения в период проведения XXII Олимпийских зимних игр и XI Паралимпийских зимних игр 2014 года в городе Сочи. - Утратило силу</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
        else if (id === "advice") {
            return (
                <div className="advice_information">
                    <div className="cap">
                        <p>СОВЕТЫ ДЛЯ ВОДИТЕЛЕЙ</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                <p><span style={{fontSize: "20px", color: "#3b3fff"}}>Заранее изучайте маршруты</span><br /><br />
                                – Собираясь в поездку, необходимо продумать маршрут движения, обязательно уделить внимание прилегающим улицам, постараться запомнить их названия, – отметила Ангелина Волосарь. – Если ваш основной путь следования дом-работа-дом, неплохо заранее проехать его с опытным водителем, чтобы тот мог прокомментировать дорожные знаки и разметку, указать на возможные нюансы маршрута.
                                Также сотрудник милиции рекомендует выделить выходные для изучения наиболее часто проезжаемых вами маршрутов. Это, по ее словам, придаст водителю уверенности за рулем в будние дни.</p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Перед поездкой проверяйте документы</span><br /><br />
                                    Если вас остановит сотрудник ГАИ, ему нужно будет предоставить водительское удостоверение, свидетельство о регистрации автомобиля, допуск к участию в дорожном движении и страховое свидетельство. На всякий случай проверьте, все ли из списка на месте, прежде чем отправиться в путь.
                                    Кроме того, в машине должна быть медицинская аптечка и минимальный набор инструментов на экстренный случай: домкрат, буксировочный трос, насос, запасное колесо, огнетушитель.
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Не стесняйтесь прикрепить на авто знак 70</span><br /><br />
                                    Знак «Ограничение скорости», также известный как знак 70, информирует об отсутствии у водителя стажа более двух лет. Как рассказала Ангелина Волосарь, многие стесняются выставлять его в своей машине, но это зря.
                                    – Каждый автолюбитель, профессиональный водитель и даже пилоты «Формулы- 1» когда-то были новичками, – напомнила собеседница. – Чтобы облегчить себе вождение по городу, установите на стекле заднего вида знак 70. Это предупредит других участников движения, что перед ними «молодой» водитель. Они снисходительно отнесутся к вашим ошибкам, не будут подпирать сзади, пропустят при перестроении и не станут сигналить на светофорах, если замешкаетесь.
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Минимизируйте перестроения в плотном потоке транспорта</span><br /><br />
                                    – Начинающему водителю следует минимизировать перестроения на дорогах с плотным потоком транспорта. Заняв ряд, не стоит метаться в другой. Лучше всего целенаправленно вести автомобиль в заданном направлении, соблюдая интервал и дистанцию, – посоветовала сотрудник милиции.
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Изучите характеристики своего авто на практике</span><br /><br />
                                    – Сдача экзаменов в ГАИ и получение водительского удостоверения — это только начало водительской учебы. Прежде чем вклиниваться в интенсивное городское движение, надо изучить характеристики вашего транспортного средства, – подчеркнула Ангелина Волосарь и пояснила: – Это значит, нужно научиться чувствовать габариты автомобиля, отработать трогание на горизонтальной и наклонной поверхностях, движение задним ходом, маневрирование, развороты и экстренное торможение.
                                    Практиковаться советуют по утрам, когда на дорогах мало машин, или в выходные дни. Кстати, это можно совместить с запоминанием маршрутов. 
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Не паникуйте и избегайте конфликтов</span><br /><br />
                                    – Чтобы стать профессиональным водителем, надо обладать двумя важными качествами: осмысленность действий за рулем и спокойствие. Помните, никогда не надо суетиться за рулем и паниковать, – обратила внимание спикер.
                                    В том числе, она рекомендует не поддаваться на провокации невежливых водителей и не провоцировать никого самостоятельно, потому что конфликт на дороге может привести к аварии. А вот вежливость только приветствуется. Например, как уточнила Ангелина Волосарь, если хотите поблагодарить за уступленный путь, мигните помогшему водителю аварийными сигналами – на языке автолюбителей это переводится как «спасибо».                                
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Откажитесь от лишних украшений машины</span><br /><br />
                                    Речь об игрушках и подвесках в салоне, а также о наклейках, которые крепятся на заднее стекло. По словам сотрудника милиции, многие начинающие водители любят крепить на заднее стекло стикеры, указывающие на статус новичка. Но они не предусмотрены ПДД и не нужны, если на авто уже есть вышеупомянутый знак 70. Зачем отказываться от украшений? Чтобы ничего не сужало ваш пространственный обзор и не отвлекало от концентрации на дороге.
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Не берите с собой компанию</span><br /><br />
                                    Сразу оговоримся – если едете с опытным водителем, который может подсказать выход из сложной ситуации, это только приветствуется. Но вот детей или друзей первое время брать с собой не стоит – их вопросы и комментарии могут отвлечь вас от дороги.
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>    
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Не разговаривайте по телефону во время езды</span><br /><br />
                                    – Помните: водителю запрещается пользоваться во время движения транспортного средства аппаратом радио- и телефонной связи, не оборудованным техническим устройством, позволяющим вести переговоры без использования рук, – сказала Ангелина Волосарь.
                                    Она добавила, что начинающим водителям лучше не говорить по телефону во время езды даже при наличии специальной гарнитуры, которая позволит освободить руки. Причина все та же – важно не потерять концентрацию. Так что если вам все-таки нужно позвонить или ответить, лучше не рисковать за рулем, припарковаться и только после этого начать разговор.
                                </p>
                            </li>
                            <br />
                            <br />
                            <li>
                                <p>
                                    <span style={{fontSize: "20px", color: "#3b3fff"}}>Позаботьтесь о безопасности</span><br /><br />
                                    – В целях предупреждения угонов машин и краж из салонов автотранспорта необходимо соблюдать следующие правила. Не оставляйте машину с открытыми дверцами и ключом в замке зажигания; избегайте парковки авто на длительное время в безлюдных и неосвещенных местах; при парковке автомобиля на ночь пользуйтесь гаражом или платной стоянкой. Также примите все меры к тому, чтобы угонщик не смог быстро завести вашу машину: оборудуйте ее охранной сигнализацией, системами блокировки руля, педалей и т.д. И, конечно, не оставляйте ценные вещи и деньги в салоне автомобиля, – подытожила Ангелина Волосарь.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="list2">
                        <br />
                        <br />
                        <ul>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/ac7f7c6628d9b362a288243ce7da1c04b5d73fd2/">Приложение 1. Дорожные знаки (по ГОСТу Р 52289-2019 и ГОСТу Р 52290-2004)</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/701372b7167cd1c57a637e75243d2ac5388a8a6d/">Приложение 2. Дорожная разметка и ее характеристики (по ГОСТу Р 51256-2011 и ГОСТу Р 52289-2004)</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/bc8a882984154b5338eda3b9d6b33690d5ddb6c7/">Приложение N 3. Особенности организации дорожного движения в период проведения XXII Олимпийских зимних игр и XI Паралимпийских зимних игр 2014 года в городе Сочи. - Утратило силу</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
        else {
            return (                
                <div className="other_information">
                    <div className="cap">
                        <p>ВЫБЕРИ НУЖНЫЙ БЛОК</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li><Link to="/information/rules">1. Правила ПДД</Link></li>
                            <li><Link to="/information/advice">2. Советы для водителей</Link></li>
                        </ul>
                    </div>
                    <div className="list2">
                        <br />
                        <br />
                        <ul>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/ac7f7c6628d9b362a288243ce7da1c04b5d73fd2/">Приложение 1. Дорожные знаки (по ГОСТу Р 52289-2019 и ГОСТу Р 52290-2004)</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/701372b7167cd1c57a637e75243d2ac5388a8a6d/">Приложение 2. Дорожная разметка и ее характеристики (по ГОСТу Р 51256-2011 и ГОСТу Р 52289-2004)</a></li>
                            <li><a href="http://www.consultant.ru/document/cons_doc_LAW_2709/bc8a882984154b5338eda3b9d6b33690d5ddb6c7/">Приложение N 3. Особенности организации дорожного движения в период проведения XXII Олимпийских зимних игр и XI Паралимпийских зимних игр 2014 года в городе Сочи. - Утратило силу</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
        
    }

    return (
        <>
            {renderhtml()}
        </>
    );
};

export default Infromation;