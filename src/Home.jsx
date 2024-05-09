import React from 'react';
import Cards from './Cards';
import Slider from './Slider';
import Map from './Map';
import Form from './Form';
import Acrod from './Acrod';
import './Card.css'

function Home() {
  let Data = [{
    image: '1.jpg',
    title: 'Tre Cime',
    Desc: 'The Three Peaks rise on the southern edge of the extensive pinnacle plateau with the Langen Alm (La Grava Longa), an alpine plateau at around 2200 m to 2400 m, which here forms the end of the Rienz Valley (Valle della Rienza). There are three small mountain lakes, the Zinnenseen. This area north of the mountains to the peaks to the municipality of part Toblach in South Tyrol and the Natural Park Three Peaks. Awesome place to ',
    link: 'Trechi'
  }, {
    image: '2.jpg',
    title: 'Luxembourg Trams',
    Desc: 'Luxembourg is in the process of reintroducing trams to its transport infrastructure. Construction work began on a new tram depot on the edge of the Grünewald Forest and the Kirchberg quarter of Luxembourg City in January 2015,[1] with the first tracks of the T1 tramline being laid in July 2016.[2] The tramline, when fully operational,and more often you can travel in this with full enjoyment and',
    link: 'Lux'
  }, {
    image: '3.jpg',
    title: 'Swiss Alps',
    Desc: 'The Alps cover 60% of Switzerlands total 41,285 square kilometres (15,940 sq mi) surface area, making it one of the most alpine countries. Despite the fact that Switzerland covers only 14% of the Alps total 192,753 square kilometres (74,422 sq mi) area,[3][4] 48 out of 82 alpine four-thousanders are located in the Swiss Alps and practically all of the remaining 34 are within 20 kilometres (12 mi) of the country.',
    link: 'Swiss'
  }];

  return (
    <>
      <Slider />
      <div className='card-container'>
            <Cards image={Data[0].image} title={Data[0].title} Desc={Data[0].Desc} links={Data[0].link} />
            <Cards image={Data[1].image} title={Data[1].title} Desc={Data[1].Desc} links={Data[1].link} />
            <Cards image={Data[2].image} title={Data[2].title} Desc={Data[2].Desc} links={Data[2].link} />
            </div>
      <Map />
      <Acrod />
      <Form />
    </>
  );
}

export default Home;
