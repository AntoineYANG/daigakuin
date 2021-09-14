import { Daigakuin, DaigakuinType } from './types';
import logoHitotsubashi from './logos/HitotsubashiUniv.png';
import logoKyotoUniversity from './logos/KyotoUniversity.png';
import logoNagoyaUniversity from './logos/NagoyaUniversity.png';
import logoOsakaUniversity from './logos/OsakaUniversity.png';
import logoTohokuUniversity from './logos/TohokuUniversity.png';
import logoTokodai from './logos/TokyoInstituteOfTechnology.png';
import logoTokyoIkaShikaDai from './logos/TokyoMedicalAndDentalUniversity.png';
import logoTodai from './logos/UnivOfTokyo.png';
import logoTsukubaDaigaku from './logos/UniversityOfTsukuba.png';

const list: Daigakuin[] = [{
    id: '',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '一橋大学',
    nameEN: 'Hitotsubashi University (former Tokyo College of Commerce)',
    location: {
      prefecture: '東京都',
      district: '国立市'
    },
    logo: logoHitotsubashi
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '京都大学',
    nameEN: 'Kyoto University (former Kyoto Imperial University)',
    location: {
      prefecture: '京都府',
      district: '京都市'
    },
    logo: logoKyotoUniversity,
    motto: '自由の学風'
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '名古屋大学',
    nameEN: 'Nagoya University (former Nagoya Imperial University)',
    location: {
      prefecture: '愛知県',
      district: '名古屋市'
    },
    logo: logoNagoyaUniversity,
    motto: '勇気ある知識人'
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '大阪大学',
    nameEN: 'Osaka University (former Osaka Imperial University)',
    location: {
      prefecture: '大阪市',
      district: '吹田市/豊中市/箕面市'
    },
    logo: logoOsakaUniversity,
    motto: '地域に生き世界に伸びる'
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '東北大学',
    nameEN: 'Tohoku University (former Tohoku Imperial University)',
    location: {
      prefecture: '宮城県',
      district: '仙台市'
    },
    logo: logoTohokuUniversity,
    motto: '研究第一主義'
  },
  {
    id: 'TIT',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '東京工業大学',
    nameEN: 'Tokyo Institute of Technology',
    location: {
      prefecture: '東京都/神奈川県',
      district: '目黒区/横浜市'
    },
    logo: logoTokodai,
    motto: '時代を創る知・技・志・和の理工人'
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '東京医科歯科大学',
    nameEN: 'Tokyo Medical and Dental University',
    location: {
      prefecture: '東京都',
      district: '文京区'
    },
    logo: logoTokyoIkaShikaDai,
    motto: '知と癒しの匠を創造する'
  },
  {
    id: 'UTokyo',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '東京大学',
    nameEN: 'The University of Tokyo (former Tokyo Imperial University)',
    location: {
      prefecture: '東京都',
      district: '文京区'
    },
    logo: logoTodai
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    isDesignated: true,
    name: '筑波大学',
    nameEN: 'University of Tsukuba',
    location: {
      prefecture: '茨城県',
      district: 'つくば市'
    },
    logo: logoTsukubaDaigaku
  },  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Aichi University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Akita University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Asahikawa Medical University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Chiba University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Ehime University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Fukuoka University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Fukushima University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Gifu University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'The Graduate University for Advanced Studies',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Gunma University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Hamamatsu University School of Medicine',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Hirosaki University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Hiroshima University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Hokkaido University (former Hokkaido Imperial University)',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Hokkaido University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Hyogo University of Teacher Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Ibaraki University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Iwate University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Japan Advanced Institute of Science and Technology (JAIST)',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Joetsu University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kagawa University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kagoshima University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kanazawa University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kitami Institute of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kobe University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kochi University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kumamoto University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kyoto Institute of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kyoto University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kyushu Institute of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Kyushu University (former Kyushu Imperial University)',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Mie University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Miyagi University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Muroran Institute of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Nagaoka University of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Nagasaki University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Nagoya Institute of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Nara Institute of Science and Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Nara University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Nara Women\'s University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Naruto University of Education',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'National Graduate Institute for Policy Studies',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'National Institute of Fitness and Sports in Kanoya',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Niigata University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Obihiro University of Agriculture and Veterinary Medicine',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Ochanomizu University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Oita University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Okayama University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Osaka Kyoiku University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Otaru University of Commerce',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Saga University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Saitama University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Shiga University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Shiga University of Medical Science',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Shimane University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Shinshu University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Shizuoka University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Tokyo Gakugei University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Tokyo University of Agriculture and Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Tokyo University of Foreign Studies',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Tokyo University of Marine Science and Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Tokyo University of the Arts',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Tottori University',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Toyohashi University of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'Tsukuba University of Technology',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'University of Electro-Communications',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'University of Fukui',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'University of Miyazaki',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'University of the Ryukyus',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'The University of Tokushima',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'University of Toyama',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  },
  {
    id: '',
    type: DaigakuinType.NATIONAL,
    name: '',
    nameEN: 'University of Yamanashi',
    location: {
      prefecture: '?',
      district: '?'
    },
    logo: ''
  }
];

export default list;