import * as React from 'react';

import FeaturedPost from './featuredPost';

export default function Works(): React.ReactElement {
  // const [l, setL] = React.useState(JSON.stringify({}));
  // const options = {
  //   method: 'GET',
  // };
  // const langs = fetch(
  //   'https://api.github.com/repos/laskal05/l-it/languages',
  //   options,
  // )
  //   .then(res => res.json())
  //   .then(res => setL(JSON.stringify(res)));

  const cards = [
    {
      title: 'L;IT',
      date: '2020~',
      description:
        '2019年から開業した新規の個人事業主です。本サイトはテンプレートを用いて自作しています。',
      image: 'https://source.unsplash.com/random',
      imageTitle: 'Random Image',
      href: 'https://l-it.site/',
    },
    {
      title: '内容証明オンライン',
      date: '2019~',
      description:
        '内容証明郵便の書き方が分からなくても大丈夫。豊富なテンプレートから作成し、ワードファイルでダウンロードができます。',
      image: 'https://naiyoo.jp/img/top_right.png',
      imageTitle: 'Naiyoo Image',
      href: 'https://naiyoo.jp/',
    },
    {
      title: '(ホームページ作成中)',
      date: '2019~',
      description: '...',
      image: '',
      imageTitle: 'Image',
      href: '#',
    },
    // {
    //   title: '有限会社FSK(作成中)',
    //   date: '2019~',
    //   description:
    //     '運送用機械機器、産業用機械機器、精密板金、精缶加工等、板金加工から組み立ての一貫生産を行なっている板金加工メーカー',
    //   image: '',
    //   imageTitle: 'Image Text',
    //   href: 'https://fsk0303.site/',
    // },
  ];

  return (
    <>
      {cards.map((card, i) => (
        <React.Fragment key={i.toString()}>
          <br />
          <FeaturedPost post={card} gridMDNum={12} />
        </React.Fragment>
      ))}
      <br />
    </>
  );
}
