// Verified original picture sets from the supplied Loigiaihay Global Success 7 lesson pages.
// These assets are hot-linked from img.loigiaihay.com; the repository does not re-host them.
const WORD_IMAGE_GROUPS = [
  {
    unit: 1,
    words: ['making models','horse riding','riding a horse','collecting coins','gardening','dollhouse','building dollhouses','collecting teddy bears'],
    img: 'https://img.loigiaihay.com/picture/2022/0313/task2-gettingstarted-u1-ta7.png',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-1-getting-started-a106464.html',
    label: 'Unit 1 Getting Started – six hobby pictures'
  },
  {
    unit: 2,
    words: ['dim light','lip balm','chapped lips','coloured vegetables','red spots'],
    img: 'https://img.loigiaihay.com/picture/2022/0314/task1-acloserlook1-u2-ta7.png',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-2-a-closer-look-1-a106563.html',
    label: 'Unit 2 A Closer Look 1 – health picture matching'
  },
  {
    unit: 3,
    words: ['pick up litter','help homeless children','recycle plastic bottles','donate clothes','clean the playground'],
    img: 'https://img.loigiaihay.com/picture/2022/0401/task3-getting-started-u3-ta7-global.png',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-3-getting-started-a107618.html',
    label: 'Unit 3 Getting Started – community service pictures'
  },
  {
    unit: 5,
    words: ['beef','salt','water','sugar','flour','milk','teaspoon','tablespoon'],
    img: 'https://img.loigiaihay.com/picture/2022/1123/ex1-look1-u5-ta7-global.png',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-5-a-closer-look-1-a107799.html',
    label: 'Unit 5 A Closer Look 1 – food quantities picture set'
  },
  {
    unit: 7,
    words: ['traffic light','traffic lights','hospital ahead','no right turn','cycle lane','no cycling','school ahead'],
    img: 'https://img.loigiaihay.com/picture/2023/0329/tieng-anh-7-unit-7-a-closer-look-1-1680056909.jpg',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-7-a-closer-look-1-a108623.html',
    label: 'Unit 7 A Closer Look 1 – road signs'
  },
  {
    unit: 9,
    words: ['Halloween','Christmas','Mid-Autumn Festival','Cannes Film Festival','Easter','Thanksgiving'],
    img: 'https://img.loigiaihay.com/picture/2022/1102/ex1-look1-u9-ta7-global.png',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-9-a-closer-look-1-a108743.html',
    label: 'Unit 9 A Closer Look 1 – festival pictures'
  },
  {
    unit: 10,
    words: ['nuclear energy','hydro energy','solar energy','wind energy'],
    img: 'https://img.loigiaihay.com/picture/2022/1103/ex2-look1-u10-ta7-global.png',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-10-a-closer-look-1-a108820.html',
    label: 'Unit 10 A Closer Look 1 – energy-source pictures'
  },
  {
    unit: 12,
    words: ['island country','Scottish kilt','tattoo','castle','kangaroo','coastline'],
    img: 'https://img.loigiaihay.com/picture/2023/0410/ex1-acloserlook1-u12-ta7-global.png',
    source: 'https://loigiaihay.com/tieng-anh-7-unit-12-a-closer-look-1-a108936.html',
    label: 'Unit 12 A Closer Look 1 – English-speaking countries picture set'
  }
];

function getWordSourceImage(unitNo, word) {
  const key = String(word || '').trim().toLowerCase();
  const group = WORD_IMAGE_GROUPS.find(item =>
    item.unit === Number(unitNo) && item.words.some(w => w.toLowerCase() === key)
  );
  return group || null;
}
