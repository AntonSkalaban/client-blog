import { BlogPost } from "types";
import Blog1 from "assets/images/png/blogs/blog1.png";
import Blog2 from "assets/images/png/blogs/blog2.png";

export const blogBosts: BlogPost[] = [
  {
    id: 1,
    authorId: 1,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 2,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "business", ru: "" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog2,
    tag: "business",
  },
  {
    id: 3,
    authorId: 3,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 4,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 5,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 6,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 7,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 8,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 9,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
  {
    id: 10,
    authorId: 2,
    date: "Aug 23, 2021",
    category: { en: "startup", ru: "стартап" },
    title: {
      en: "Design tips for designers that cover everything you need",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod",
    },
    text: {
      en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит",
    },
    description: {
      en: `<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul>
        <li><h4>Lorem ipsum dolor sit amet</h4></li>
        <li><h4>Non blandit massa enim nec scelerisque</h4></li>
        <li><h4>Neque egestas congue quisque egestas</h4></li>
        </ul>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p className=text-big>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        `,
      ru: `<h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <ul>
      <li><h4>Лорем ипсум долор сит амет</h4></li>
      <li><h4>Нон бландит масса еним нец сцелерисцуе</h4></li>
      <li><h4>Неуе егестас конгуе quisque егестас</h4></li>
      </ul>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
      <h2>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod.</h2>
      <p className=text-big>Лорем ипсум долор сит амет, консектетур адиписцинг елит, сед до eiusmod темпор incididunt ут лаборе ет долоре магна алияуа. Нон бландит масса еним нец. Сцелерисцуе виверра маурис ин алияуам сем. Ат рисус виверра адиписцинг ат ин теллус. Социис натоуе пенатибус ет магнис дис партуринт монтес. Ридицулус мус маурис витае ултрициес лео. Неуе егестас конгуе quisque егестас диам. Рисус ин хендрерит гравида рутрум quisque нон.</p>
    `,
    },
    img: Blog1,
    tag: "business",
  },
];
