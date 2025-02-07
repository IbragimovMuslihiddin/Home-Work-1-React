import React from "react";
import './home.css'
import логотип from '/src/app/assets/img/логотип.png';
import phone from '/src/app/assets/img/el_phone.png';
import menu from '/src/app/assets/img/MENU.png';
import slider from '/src/app/assets/img/slider.png';
import play from '/src/app/assets/img/icon play.png';
import nall from '/src/app/assets/img/_.png';
import nall2 from '/src/app/assets/img/_2.png';
import container from '/src/app/assets/img/container pictures.png';
import container2 from '/src/app/assets/img/container pictures one.png';
import container3 from '/src/app/assets/img/container pictures two.png';
import pic from '/src/app/assets/img/pic.png';
import pictwo from '/src/app/assets/img/pic one.png';
import video from '/src/app/assets/img/video.png';
import iconplay from '/src/app/assets/img/icon play.png';
import videotwo from '/src/app/assets/img/video one.png';
import rehau from '/src/app/assets/img/rehau.png';
import image1 from '/src/app/assets/img/1 .png';
import image2 from '/src/app/assets/img/2.png';
import image3 from '/src/app/assets/img/3.png';
import image4 from '/src/app/assets/img/4.png';
const App = () => {
  return (
    <div>
      <div className="start">
        <div className="start_start">
          <h3 className="a1">Ремонт и отделка</h3>
          <h3 className="a2">Дизайн и проектирование</h3>
        </div>
        <div className="center_start">
          <h3>О компании</h3>
          <h3>Наши работы</h3>
          <h3>Цены</h3>
          <h3>Акции</h3>
          <h3>Контакты</h3>
        </div>
        <div className="end_start">
          <h3 className="a3">+7 495 150 24 93</h3>
        </div>
      </div>
      <hr />
      <div className="start2">
        <div className="img_start2">
          <img src={логотип} alt="" />
        </div>
        <div className="text_start2">
          <h3>Ремонт квартир</h3>
          <h3>Ремонт домов</h3>
          <h3>Коммерческий ремонт</h3>
          <button>Калькулятор ремонта</button>
        </div>
        <img className="img1" src={phone} alt="" />
        <img className="img1" src={menu} alt="" />
      </div>
      <div className="start3">
        <div className="text_start3">
          <h1>
            Честный ремонт <br className="br1" /> квартир <br className="br2" />
            с полным <br className="br3" /> сопровождением
          </h1>
          <p>
            — Беспокоим один раз, когда пора <br className="br4" /> заселяться.
            Гарантируем, что по <br className="br4" /> ходу проекта цена в
            договоре не <br className="br4" /> увеличится.
          </p>
        </div>
        <div className="img_start3">
          <img className="img2" src={slider} alt="" />
          <img className="img3" src={play} alt="" />
        </div>
      </div>
      <div className="start4">
        <div className="text_start4">
          <h3>
            Ремонт квартиры в Москве <br className="br5" /> и области
          </h3>
          <p>
            Фиксированная смета и сроки работ <br className="br6" /> по
            доступной цене
          </p>
        </div>
        <div className="number_start4">
          <p>01 / 05</p>
        </div>
        <div className="button_start4">
          <img src={nall} alt="" />
          <img src={nall2} alt="" />
        </div>
      </div>
      <div className="start5">
        <h1 className="ha">Ключевые направления</h1>
        <br />
        <div className="text_start5">
          <h3 className="n1">Ремонт квартир</h3>
          <h3 className="n">Коммерческая недвижимость</h3>
          <h3 className="n">Ремонт домов</h3>
          <h3 className="n">Прочие услуги</h3>
        </div>
        <div className="img_start5">
          <div className="nav1">
            <img src={container} alt="" />
            <h4 className="bluee">Ремонт однушки</h4>
            <p>от 10 000 ₽ за м2</p>
          </div>
          <div className="nav2">
            <img src={container2} alt="" />
            <h4>Капитальный ремонт</h4>
            <p>от 15 000 ₽ за м2</p>
          </div>
          <div className="nav3">
            <img src={container3} alt="" />
            <h4>Дизайнерский ремонт</h4>
            <p>от 20 000 ₽ за м2</p>
          </div>
        </div>
      </div>
      <div className="start6">
        <h1 className="h1h">
          При работе с нами <br className="br7" /> вы получаете
        </h1>
        <br />
        <div className="start6_flex">
          <div className="item1">
            <h1>0</h1>
            <br />
            <h3>рублей свыше сметы</h3>
            <br />
            <p>
              Цена указывается в договоре <br />
              и НЕ изменяется в процессе.
            </p>
          </div>
          <br />
          <div className="item2">
            <h1>12</h1>
            <br />
            <h3>дней просрочки</h3>
            <br />
            <p>
              Гарантируем соблюдение <br />
              сроков, прописанных <br />
              в договоре. Платим <br />
              за просрочки.
            </p>
          </div>
          <br />
          <div className="item3">
            <h1>253</h1>
            <br />
            <h3>потраченых нервов</h3>
            <br />
            <p>
              Мы согласовываем все <br />
              вопросы с соседями,<br />
              подрядчиками, БТИ или <br />
              управляющими компаниями.
            </p>
          </div>
          <br />
          <div className="item4">
            <h1>1214</h1>
            <br />
            <h3>проблем после ремонта</h3>
            <br />
            <p>
              10 лет гарантии на сантехнику <br />
              и электрику, 2 года гарантии <br />
              на отделку. В течение ремонта <br />
              полная страховка квартиры.
            </p>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="start_center">
          <h1 className="haj">Наши проекты</h1>
          <br />
          <div className="text_start5">
            <h3 className="n1">Ремонт квартир</h3>
            <h3 className="n">Коммерческая недвижимость</h3>
            <h3 className="n">Ремонт домов</h3>
            <h3 className="n">Прочие услуги</h3>
          </div>
        </div>
        <div className="remont">
          <div className="remont_1">
            <div className="nav_1">
              <img className="l1" src={pic} alt="" />
            </div>
            <div className="nav_2">
              <h2>
                Ремонт элитной 5-комнатной <br />
                квартиры в Одинцово
              </h2>
              <br />
              <br />
              <br />
              <div className="item_1">
                <div className="ur">
                  <p>Площадь</p>
                  <h4>250 м2</h4>
                </div>
                <div className="ur2">
                  <p>На материалы</p>
                  <h4>4 000 000 ₽</h4>
                </div>
              </div>
              <div className="item_2">
                <div className="ur">
                  <p>Срок</p>
                  <h4>6 месяцев</h4>
                </div>
                <div className="ur2">
                  <p>За работу</p>
                  <h4>2 000 000 ₽</h4>
                </div>
              </div>
              <h2 style={{ paddingTop: "50px" }}>Подробнее о проекте</h2>
            </div>
          </div>
          <div className="remont_1">
            <div className="nav_1">
              <img className="l1" src={pictwo} alt="" />
            </div>
            <div className="nav_2">
              <h2>
                Ремонт элитной 5-комнатной <br />
                квартиры в Одинцово
              </h2>
              <br />
              <br />
              <br />
              <div className="item_1">
                <div className="ur">
                  <p>Площадь</p>
                  <h4>250 м2</h4>
                </div>
                <div className="ur2">
                  <p>На материалы</p>
                  <h4>4 000 000 ₽</h4>
                </div>
              </div>
              <div className="item_2">
                <div className="ur">
                  <p>Срок</p>
                  <h4>6 месяцев</h4>
                </div>
                <div className="ur2">
                  <p>За работу</p>
                  <h4>2 000 000 ₽</h4>
                </div>
              </div>
              <h2 style={{ paddingTop: "50px" }}>Подробнее о проекте</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="center2">
        <h1>У вас уже есть смета <br className="r1" /> от подрядчиков?</h1>
        <p>
          Бесплатно сделаем аудит и <br className="r1" /> проверим на «порядочность» <br className="r1" /> будущих исполнителей.
        </p>
        <img className="containerimage" src={container} alt="" />
        <div className="center3">
          <h1>Клиенты о нас</h1>
          <p>
            Бесплатно сделаем аудит и <br className="r1" /> проверим на «порядочность» <br className="r1" /> будущих исполнителей.
          </p>
          <div className="all">
            <div className="all_nav">
              <img className="lol" src={video} alt="" />
              <img className="f1" src={iconplay} alt="" />
              <h3 className="cos">Видеоотзыв от Андрея  Константинова</h3>
              <p className="cos2">Ремонт коттеджа в Сколково</p>
            </div>
            <div className="all_nav2">
              <img src={videotwo} alt="" />
              <img className="f1" src={iconplay} alt="" />
              <h3 className="cos3">Видеоотзыв от Семьи Костенко</h3>
              <p className="cos4">Ремонт квартиры в Медведково</p>
            </div>
          </div>
        </div>
      </div>
      <div className="center4">
        <h1 className="po1">Наш Instagram</h1>
        <div className="all_center3">
          <div className="k1_image">
          <img className="k1" src={image1} alt="" />
          <img className="k1" src={image2} alt="" />
          <img className="k1" src={image3} alt="" />
          <img className="k1" src={image4} alt="" />
          </div>
         
        </div>
      </div>
      <div className="end">
        <h1 className="po2">Нашы порктнёры</h1>
        <div className="all_center4">
          <img src={rehau} alt="" />
          <img src={rehau} alt="" />
          <img src={rehau} alt="" />
          <img src={rehau} alt="" />
          <img src={rehau} alt="" />
          <img src={rehau} alt="" />
        </div>
      </div>
      <div className="end2">
        <div className="end2_item mam">
          <div className="end_nav1">
            <h1>Стратегия</h1>
          </div>
          <div className="end_nav2">
            <p>
              Все наши креативные идеи рождаются по поведению <br /> простых
              людей. Только так создаются работы, способные <br /> изменить
              бренд. Для того, чтобы бренд стал культовым, он <br /> становится
              простым, как разговор двух приятелей в лифте. <br /> За это,
              прежде всего, отвечает стратегия — и наш <br /> стратегический
              отдел.
            </p>
          </div>
        </div>
        <div className="end2_item">
          <div className="end_nav1">
            <h1>Креатив</h1>
          </div>
          <div className="end_nav2">
            <p>
              Все наши креативные идеи рождаются по поведению <br /> простых
              людей. Только так создаются работы, способные <br /> изменить
              бренд. Для того, чтобы бренд стал культовым, он <br /> становится
              простым, как разговор двух приятелей в лифте. <br /> За это,
              прежде всего, отвечает стратегия — и наш <br /> стратегический
              отдел.
            </p>
          </div>
        </div>
        <div className="end2_item">
          <div className="end_nav1">
            <h1>Крафт</h1>
          </div>
          <div className="end_nav2">
            <p>
              Все наши креативные идеи рождаются по поведению <br /> простых
              людей. Только так создаются работы, способные <br /> изменить
              бренд. Для того, чтобы бренд стал культовым, он <br /> становится
              простым, как разговор двух приятелей в лифте. <br /> За это,
              прежде всего, отвечает стратегия — и наш <br /> стратегический
              отдел.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
