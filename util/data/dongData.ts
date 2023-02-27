const dongData = [
  {
    dongCode: 11110515,
    dongName: "서울특별시 종로구 청운효자동",
  },
  {
    dongCode: 11110530,
    dongName: "서울특별시 종로구 사직동",
  },
  {
    dongCode: 11110540,
    dongName: "서울특별시 종로구 삼청동",
  },
  {
    dongCode: 11110550,
    dongName: "서울특별시 종로구 부암동",
  },
  {
    dongCode: 11110560,
    dongName: "서울특별시 종로구 평창동",
  },
  {
    dongCode: 11110570,
    dongName: "서울특별시 종로구 무악동",
  },
  {
    dongCode: 11110580,
    dongName: "서울특별시 종로구 교남동",
  },
  {
    dongCode: 11110600,
    dongName: "서울특별시 종로구 가회동",
  },
  {
    dongCode: 11110615,
    dongName: "서울특별시 종로구 종로1.2.3.4가동",
  },
  {
    dongCode: 11110630,
    dongName: "서울특별시 종로구 종로5.6가동",
  },
  {
    dongCode: 11110640,
    dongName: "서울특별시 종로구 이화동",
  },
  {
    dongCode: 11110650,
    dongName: "서울특별시 종로구 혜화동",
  },
  {
    dongCode: 11110670,
    dongName: "서울특별시 종로구 창신1동",
  },
  {
    dongCode: 11110680,
    dongName: "서울특별시 종로구 창신2동",
  },
  {
    dongCode: 11110690,
    dongName: "서울특별시 종로구 창신3동",
  },
  {
    dongCode: 11110700,
    dongName: "서울특별시 종로구 숭인1동",
  },
  {
    dongCode: 11110710,
    dongName: "서울특별시 종로구 숭인2동",
  },
  {
    dongCode: 11140520,
    dongName: "서울특별시 중구 소공동",
  },
  {
    dongCode: 11140540,
    dongName: "서울특별시 중구 회현동",
  },
  {
    dongCode: 11140550,
    dongName: "서울특별시 중구 명동",
  },
  {
    dongCode: 11140570,
    dongName: "서울특별시 중구 필동",
  },
  {
    dongCode: 11140580,
    dongName: "서울특별시 중구 장충동",
  },
  {
    dongCode: 11140590,
    dongName: "서울특별시 중구 광희동",
  },
  {
    dongCode: 11140605,
    dongName: "서울특별시 중구 을지로동",
  },
  {
    dongCode: 11140615,
    dongName: "서울특별시 중구 신당동",
  },
  {
    dongCode: 11140625,
    dongName: "서울특별시 중구 다산동",
  },
  {
    dongCode: 11140635,
    dongName: "서울특별시 중구 약수동",
  },
  {
    dongCode: 11140645,
    dongName: "서울특별시 중구 청구동",
  },
  {
    dongCode: 11140650,
    dongName: "서울특별시 중구 신당5동",
  },
  {
    dongCode: 11140665,
    dongName: "서울특별시 중구 동화동",
  },
  {
    dongCode: 11140670,
    dongName: "서울특별시 중구 황학동",
  },
  {
    dongCode: 11140680,
    dongName: "서울특별시 중구 중림동",
  },
  {
    dongCode: 11170510,
    dongName: "서울특별시 용산구 후암동",
  },
  {
    dongCode: 11170520,
    dongName: "서울특별시 용산구 용산2가동",
  },
  {
    dongCode: 11170530,
    dongName: "서울특별시 용산구 남영동",
  },
  {
    dongCode: 11170555,
    dongName: "서울특별시 용산구 청파동",
  },
  {
    dongCode: 11170560,
    dongName: "서울특별시 용산구 원효로1동",
  },
  {
    dongCode: 11170570,
    dongName: "서울특별시 용산구 원효로2동",
  },
  {
    dongCode: 11170580,
    dongName: "서울특별시 용산구 효창동",
  },
  {
    dongCode: 11170590,
    dongName: "서울특별시 용산구 용문동",
  },
  {
    dongCode: 11170625,
    dongName: "서울특별시 용산구 한강로동",
  },
  {
    dongCode: 11170630,
    dongName: "서울특별시 용산구 이촌1동",
  },
  {
    dongCode: 11170640,
    dongName: "서울특별시 용산구 이촌2동",
  },
  {
    dongCode: 11170650,
    dongName: "서울특별시 용산구 이태원1동",
  },
  {
    dongCode: 11170660,
    dongName: "서울특별시 용산구 이태원2동",
  },
  {
    dongCode: 11170685,
    dongName: "서울특별시 용산구 한남동",
  },
  {
    dongCode: 11170690,
    dongName: "서울특별시 용산구 서빙고동",
  },
  {
    dongCode: 11170700,
    dongName: "서울특별시 용산구 보광동",
  },
  {
    dongCode: 11200520,
    dongName: "서울특별시 성동구 왕십리2동",
  },
  {
    dongCode: 11200535,
    dongName: "서울특별시 성동구 왕십리도선동",
  },
  {
    dongCode: 11200540,
    dongName: "서울특별시 성동구 마장동",
  },
  {
    dongCode: 11200550,
    dongName: "서울특별시 성동구 사근동",
  },
  {
    dongCode: 11200560,
    dongName: "서울특별시 성동구 행당1동",
  },
  {
    dongCode: 11200570,
    dongName: "서울특별시 성동구 행당2동",
  },
  {
    dongCode: 11200580,
    dongName: "서울특별시 성동구 응봉동",
  },
  {
    dongCode: 11200590,
    dongName: "서울특별시 성동구 금호1가동",
  },
  {
    dongCode: 11200615,
    dongName: "서울특별시 성동구 금호2.3가동",
  },
  {
    dongCode: 11200620,
    dongName: "서울특별시 성동구 금호4가동",
  },
  {
    dongCode: 11200645,
    dongName: "서울특별시 성동구 옥수동",
  },
  {
    dongCode: 11200650,
    dongName: "서울특별시 성동구 성수1가1동",
  },
  {
    dongCode: 11200660,
    dongName: "서울특별시 성동구 성수1가2동",
  },
  {
    dongCode: 11200670,
    dongName: "서울특별시 성동구 성수2가1동",
  },
  {
    dongCode: 11200690,
    dongName: "서울특별시 성동구 성수2가3동",
  },
  {
    dongCode: 11200720,
    dongName: "서울특별시 성동구 송정동",
  },
  {
    dongCode: 11200790,
    dongName: "서울특별시 성동구 용답동",
  },
  {
    dongCode: 11215710,
    dongName: "서울특별시 광진구 화양동",
  },
  {
    dongCode: 11215730,
    dongName: "서울특별시 광진구 군자동",
  },
  {
    dongCode: 11215740,
    dongName: "서울특별시 광진구 중곡1동",
  },
  {
    dongCode: 11215750,
    dongName: "서울특별시 광진구 중곡2동",
  },
  {
    dongCode: 11215760,
    dongName: "서울특별시 광진구 중곡3동",
  },
  {
    dongCode: 11215770,
    dongName: "서울특별시 광진구 중곡4동",
  },
  {
    dongCode: 11215780,
    dongName: "서울특별시 광진구 능동",
  },
  {
    dongCode: 11215810,
    dongName: "서울특별시 광진구 광장동",
  },
  {
    dongCode: 11215820,
    dongName: "서울특별시 광진구 자양1동",
  },
  {
    dongCode: 11215830,
    dongName: "서울특별시 광진구 자양2동",
  },
  {
    dongCode: 11215840,
    dongName: "서울특별시 광진구 자양3동",
  },
  {
    dongCode: 11215847,
    dongName: "서울특별시 광진구 자양4동",
  },
  {
    dongCode: 11215850,
    dongName: "서울특별시 광진구 구의1동",
  },
  {
    dongCode: 11215860,
    dongName: "서울특별시 광진구 구의2동",
  },
  {
    dongCode: 11215870,
    dongName: "서울특별시 광진구 구의3동",
  },
  {
    dongCode: 11230536,
    dongName: "서울특별시 동대문구 용신동",
  },
  {
    dongCode: 11230545,
    dongName: "서울특별시 동대문구 제기동",
  },
  {
    dongCode: 11230560,
    dongName: "서울특별시 동대문구 전농1동",
  },
  {
    dongCode: 11230570,
    dongName: "서울특별시 동대문구 전농2동",
  },
  {
    dongCode: 11230600,
    dongName: "서울특별시 동대문구 답십리1동",
  },
  {
    dongCode: 11230610,
    dongName: "서울특별시 동대문구 답십리2동",
  },
  {
    dongCode: 11230650,
    dongName: "서울특별시 동대문구 장안1동",
  },
  {
    dongCode: 11230660,
    dongName: "서울특별시 동대문구 장안2동",
  },
  {
    dongCode: 11230705,
    dongName: "서울특별시 동대문구 청량리동",
  },
  {
    dongCode: 11230710,
    dongName: "서울특별시 동대문구 회기동",
  },
  {
    dongCode: 11230720,
    dongName: "서울특별시 동대문구 휘경1동",
  },
  {
    dongCode: 11230730,
    dongName: "서울특별시 동대문구 휘경2동",
  },
  {
    dongCode: 11230740,
    dongName: "서울특별시 동대문구 이문1동",
  },
  {
    dongCode: 11230750,
    dongName: "서울특별시 동대문구 이문2동",
  },
  {
    dongCode: 11260520,
    dongName: "서울특별시 중랑구 면목2동",
  },
  {
    dongCode: 11260540,
    dongName: "서울특별시 중랑구 면목4동",
  },
  {
    dongCode: 11260550,
    dongName: "서울특별시 중랑구 면목5동",
  },
  {
    dongCode: 11260565,
    dongName: "서울특별시 중랑구 면목본동",
  },
  {
    dongCode: 11260570,
    dongName: "서울특별시 중랑구 면목7동",
  },
  {
    dongCode: 11260575,
    dongName: "서울특별시 중랑구 면목3.8동",
  },
  {
    dongCode: 11260580,
    dongName: "서울특별시 중랑구 상봉1동",
  },
  {
    dongCode: 11260590,
    dongName: "서울특별시 중랑구 상봉2동",
  },
  {
    dongCode: 11260600,
    dongName: "서울특별시 중랑구 중화1동",
  },
  {
    dongCode: 11260610,
    dongName: "서울특별시 중랑구 중화2동",
  },
  {
    dongCode: 11260620,
    dongName: "서울특별시 중랑구 묵1동",
  },
  {
    dongCode: 11260630,
    dongName: "서울특별시 중랑구 묵2동",
  },
  {
    dongCode: 11260655,
    dongName: "서울특별시 중랑구 망우본동",
  },
  {
    dongCode: 11260660,
    dongName: "서울특별시 중랑구 망우3동",
  },
  {
    dongCode: 11260680,
    dongName: "서울특별시 중랑구 신내1동",
  },
  {
    dongCode: 11260690,
    dongName: "서울특별시 중랑구 신내2동",
  },
  {
    dongCode: 11290525,
    dongName: "서울특별시 성북구 성북동",
  },
  {
    dongCode: 11290555,
    dongName: "서울특별시 성북구 삼선동",
  },
  {
    dongCode: 11290575,
    dongName: "서울특별시 성북구 동선동",
  },
  {
    dongCode: 11290580,
    dongName: "서울특별시 성북구 돈암1동",
  },
  {
    dongCode: 11290590,
    dongName: "서울특별시 성북구 돈암2동",
  },
  {
    dongCode: 11290600,
    dongName: "서울특별시 성북구 안암동",
  },
  {
    dongCode: 11290610,
    dongName: "서울특별시 성북구 보문동",
  },
  {
    dongCode: 11290620,
    dongName: "서울특별시 성북구 정릉1동",
  },
  {
    dongCode: 11290630,
    dongName: "서울특별시 성북구 정릉2동",
  },
  {
    dongCode: 11290640,
    dongName: "서울특별시 성북구 정릉3동",
  },
  {
    dongCode: 11290650,
    dongName: "서울특별시 성북구 정릉4동",
  },
  {
    dongCode: 11290660,
    dongName: "서울특별시 성북구 길음1동",
  },
  {
    dongCode: 11290685,
    dongName: "서울특별시 성북구 길음2동",
  },
  {
    dongCode: 11290705,
    dongName: "서울특별시 성북구 종암동",
  },
  {
    dongCode: 11290715,
    dongName: "서울특별시 성북구 월곡1동",
  },
  {
    dongCode: 11290725,
    dongName: "서울특별시 성북구 월곡2동",
  },
  {
    dongCode: 11290760,
    dongName: "서울특별시 성북구 장위1동",
  },
  {
    dongCode: 11290770,
    dongName: "서울특별시 성북구 장위2동",
  },
  {
    dongCode: 11290780,
    dongName: "서울특별시 성북구 장위3동",
  },
  {
    dongCode: 11290810,
    dongName: "서울특별시 성북구 석관동",
  },
  {
    dongCode: 11305534,
    dongName: "서울특별시 강북구 삼양동",
  },
  {
    dongCode: 11305535,
    dongName: "서울특별시 강북구 미아동",
  },
  {
    dongCode: 11305545,
    dongName: "서울특별시 강북구 송중동",
  },
  {
    dongCode: 11305555,
    dongName: "서울특별시 강북구 송천동",
  },
  {
    dongCode: 11305575,
    dongName: "서울특별시 강북구 삼각산동",
  },
  {
    dongCode: 11305595,
    dongName: "서울특별시 강북구 번1동",
  },
  {
    dongCode: 11305603,
    dongName: "서울특별시 강북구 번2동",
  },
  {
    dongCode: 11305608,
    dongName: "서울특별시 강북구 번3동",
  },
  {
    dongCode: 11305615,
    dongName: "서울특별시 강북구 수유1동",
  },
  {
    dongCode: 11305625,
    dongName: "서울특별시 강북구 수유2동",
  },
  {
    dongCode: 11305635,
    dongName: "서울특별시 강북구 수유3동",
  },
  {
    dongCode: 11305645,
    dongName: "서울특별시 강북구 우이동",
  },
  {
    dongCode: 11305660,
    dongName: "서울특별시 강북구 인수동",
  },
  {
    dongCode: 11320511,
    dongName: "서울특별시 도봉구 창1동",
  },
  {
    dongCode: 11320512,
    dongName: "서울특별시 도봉구 창2동",
  },
  {
    dongCode: 11320513,
    dongName: "서울특별시 도봉구 창3동",
  },
  {
    dongCode: 11320514,
    dongName: "서울특별시 도봉구 창4동",
  },
  {
    dongCode: 11320515,
    dongName: "서울특별시 도봉구 창5동",
  },
  {
    dongCode: 11320521,
    dongName: "서울특별시 도봉구 도봉1동",
  },
  {
    dongCode: 11320522,
    dongName: "서울특별시 도봉구 도봉2동",
  },
  {
    dongCode: 11320660,
    dongName: "서울특별시 도봉구 쌍문1동",
  },
  {
    dongCode: 11320670,
    dongName: "서울특별시 도봉구 쌍문2동",
  },
  {
    dongCode: 11320680,
    dongName: "서울특별시 도봉구 쌍문3동",
  },
  {
    dongCode: 11320681,
    dongName: "서울특별시 도봉구 쌍문4동",
  },
  {
    dongCode: 11320690,
    dongName: "서울특별시 도봉구 방학1동",
  },
  {
    dongCode: 11320700,
    dongName: "서울특별시 도봉구 방학2동",
  },
  {
    dongCode: 11320710,
    dongName: "서울특별시 도봉구 방학3동",
  },
  {
    dongCode: 11350560,
    dongName: "서울특별시 노원구 월계1동",
  },
  {
    dongCode: 11350570,
    dongName: "서울특별시 노원구 월계2동",
  },
  {
    dongCode: 11350580,
    dongName: "서울특별시 노원구 월계3동",
  },
  {
    dongCode: 11350595,
    dongName: "서울특별시 노원구 공릉1동",
  },
  {
    dongCode: 11350600,
    dongName: "서울특별시 노원구 공릉2동",
  },
  {
    dongCode: 11350611,
    dongName: "서울특별시 노원구 하계1동",
  },
  {
    dongCode: 11350612,
    dongName: "서울특별시 노원구 하계2동",
  },
  {
    dongCode: 11350619,
    dongName: "서울특별시 노원구 중계본동",
  },
  {
    dongCode: 11350621,
    dongName: "서울특별시 노원구 중계1동",
  },
  {
    dongCode: 11350624,
    dongName: "서울특별시 노원구 중계4동",
  },
  {
    dongCode: 11350625,
    dongName: "서울특별시 노원구 중계2.3동",
  },
  {
    dongCode: 11350630,
    dongName: "서울특별시 노원구 상계1동",
  },
  {
    dongCode: 11350640,
    dongName: "서울특별시 노원구 상계2동",
  },
  {
    dongCode: 11350665,
    dongName: "서울특별시 노원구 상계3.4동",
  },
  {
    dongCode: 11350670,
    dongName: "서울특별시 노원구 상계5동",
  },
  {
    dongCode: 11350695,
    dongName: "서울특별시 노원구 상계6.7동",
  },
  {
    dongCode: 11350700,
    dongName: "서울특별시 노원구 상계8동",
  },
  {
    dongCode: 11350710,
    dongName: "서울특별시 노원구 상계9동",
  },
  {
    dongCode: 11350720,
    dongName: "서울특별시 노원구 상계10동",
  },
  {
    dongCode: 11380510,
    dongName: "서울특별시 은평구 녹번동",
  },
  {
    dongCode: 11380520,
    dongName: "서울특별시 은평구 불광1동",
  },
  {
    dongCode: 11380530,
    dongName: "서울특별시 은평구 불광2동",
  },
  {
    dongCode: 11380551,
    dongName: "서울특별시 은평구 갈현1동",
  },
  {
    dongCode: 11380552,
    dongName: "서울특별시 은평구 갈현2동",
  },
  {
    dongCode: 11380560,
    dongName: "서울특별시 은평구 구산동",
  },
  {
    dongCode: 11380570,
    dongName: "서울특별시 은평구 대조동",
  },
  {
    dongCode: 11380580,
    dongName: "서울특별시 은평구 응암1동",
  },
  {
    dongCode: 11380590,
    dongName: "서울특별시 은평구 응암2동",
  },
  {
    dongCode: 11380600,
    dongName: "서울특별시 은평구 응암3동",
  },
  {
    dongCode: 11380625,
    dongName: "서울특별시 은평구 역촌동",
  },
  {
    dongCode: 11380631,
    dongName: "서울특별시 은평구 신사1동",
  },
  {
    dongCode: 11380632,
    dongName: "서울특별시 은평구 신사2동",
  },
  {
    dongCode: 11380640,
    dongName: "서울특별시 은평구 증산동",
  },
  {
    dongCode: 11380650,
    dongName: "서울특별시 은평구 수색동",
  },
  {
    dongCode: 11380690,
    dongName: "서울특별시 은평구 진관동",
  },
  {
    dongCode: 11410520,
    dongName: "서울특별시 서대문구 천연동",
  },
  {
    dongCode: 11410555,
    dongName: "서울특별시 서대문구 북아현동",
  },
  {
    dongCode: 11410565,
    dongName: "서울특별시 서대문구 충현동",
  },
  {
    dongCode: 11410585,
    dongName: "서울특별시 서대문구 신촌동",
  },
  {
    dongCode: 11410615,
    dongName: "서울특별시 서대문구 연희동",
  },
  {
    dongCode: 11410620,
    dongName: "서울특별시 서대문구 홍제1동",
  },
  {
    dongCode: 11410640,
    dongName: "서울특별시 서대문구 홍제3동",
  },
  {
    dongCode: 11410655,
    dongName: "서울특별시 서대문구 홍제2동",
  },
  {
    dongCode: 11410660,
    dongName: "서울특별시 서대문구 홍은1동",
  },
  {
    dongCode: 11410685,
    dongName: "서울특별시 서대문구 홍은2동",
  },
  {
    dongCode: 11410690,
    dongName: "서울특별시 서대문구 남가좌1동",
  },
  {
    dongCode: 11410700,
    dongName: "서울특별시 서대문구 남가좌2동",
  },
  {
    dongCode: 11410710,
    dongName: "서울특별시 서대문구 북가좌1동",
  },
  {
    dongCode: 11410720,
    dongName: "서울특별시 서대문구 북가좌2동",
  },
  {
    dongCode: 11440555,
    dongName: "서울특별시 마포구 아현동",
  },
  {
    dongCode: 11440565,
    dongName: "서울특별시 마포구 공덕동",
  },
  {
    dongCode: 11440585,
    dongName: "서울특별시 마포구 도화동",
  },
  {
    dongCode: 11440590,
    dongName: "서울특별시 마포구 용강동",
  },
  {
    dongCode: 11440600,
    dongName: "서울특별시 마포구 대흥동",
  },
  {
    dongCode: 11440610,
    dongName: "서울특별시 마포구 염리동",
  },
  {
    dongCode: 11440630,
    dongName: "서울특별시 마포구 신수동",
  },
  {
    dongCode: 11440655,
    dongName: "서울특별시 마포구 서강동",
  },
  {
    dongCode: 11440660,
    dongName: "서울특별시 마포구 서교동",
  },
  {
    dongCode: 11440680,
    dongName: "서울특별시 마포구 합정동",
  },
  {
    dongCode: 11440690,
    dongName: "서울특별시 마포구 망원1동",
  },
  {
    dongCode: 11440700,
    dongName: "서울특별시 마포구 망원2동",
  },
  {
    dongCode: 11440710,
    dongName: "서울특별시 마포구 연남동",
  },
  {
    dongCode: 11440720,
    dongName: "서울특별시 마포구 성산1동",
  },
  {
    dongCode: 11440730,
    dongName: "서울특별시 마포구 성산2동",
  },
  {
    dongCode: 11440740,
    dongName: "서울특별시 마포구 상암동",
  },
  {
    dongCode: 11470510,
    dongName: "서울특별시 양천구 목1동",
  },
  {
    dongCode: 11470520,
    dongName: "서울특별시 양천구 목2동",
  },
  {
    dongCode: 11470530,
    dongName: "서울특별시 양천구 목3동",
  },
  {
    dongCode: 11470540,
    dongName: "서울특별시 양천구 목4동",
  },
  {
    dongCode: 11470550,
    dongName: "서울특별시 양천구 목5동",
  },
  {
    dongCode: 11470560,
    dongName: "서울특별시 양천구 신월1동",
  },
  {
    dongCode: 11470570,
    dongName: "서울특별시 양천구 신월2동",
  },
  {
    dongCode: 11470580,
    dongName: "서울특별시 양천구 신월3동",
  },
  {
    dongCode: 11470590,
    dongName: "서울특별시 양천구 신월4동",
  },
  {
    dongCode: 11470600,
    dongName: "서울특별시 양천구 신월5동",
  },
  {
    dongCode: 11470610,
    dongName: "서울특별시 양천구 신월6동",
  },
  {
    dongCode: 11470611,
    dongName: "서울특별시 양천구 신월7동",
  },
  {
    dongCode: 11470620,
    dongName: "서울특별시 양천구 신정1동",
  },
  {
    dongCode: 11470630,
    dongName: "서울특별시 양천구 신정2동",
  },
  {
    dongCode: 11470640,
    dongName: "서울특별시 양천구 신정3동",
  },
  {
    dongCode: 11470650,
    dongName: "서울특별시 양천구 신정4동",
  },
  {
    dongCode: 11470670,
    dongName: "서울특별시 양천구 신정6동",
  },
  {
    dongCode: 11470680,
    dongName: "서울특별시 양천구 신정7동",
  },
  {
    dongCode: 11500510,
    dongName: "서울특별시 강서구 염창동",
  },
  {
    dongCode: 11500520,
    dongName: "서울특별시 강서구 등촌1동",
  },
  {
    dongCode: 11500530,
    dongName: "서울특별시 강서구 등촌2동",
  },
  {
    dongCode: 11500535,
    dongName: "서울특별시 강서구 등촌3동",
  },
  {
    dongCode: 11500540,
    dongName: "서울특별시 강서구 화곡1동",
  },
  {
    dongCode: 11500550,
    dongName: "서울특별시 강서구 화곡2동",
  },
  {
    dongCode: 11500560,
    dongName: "서울특별시 강서구 화곡3동",
  },
  {
    dongCode: 11500570,
    dongName: "서울특별시 강서구 화곡4동",
  },
  {
    dongCode: 11500590,
    dongName: "서울특별시 강서구 화곡본동",
  },
  {
    dongCode: 11500591,
    dongName: "서울특별시 강서구 화곡6동",
  },
  {
    dongCode: 11500593,
    dongName: "서울특별시 강서구 화곡8동",
  },
  {
    dongCode: 11500603,
    dongName: "서울특별시 강서구 가양1동",
  },
  {
    dongCode: 11500604,
    dongName: "서울특별시 강서구 가양2동",
  },
  {
    dongCode: 11500605,
    dongName: "서울특별시 강서구 가양3동",
  },
  {
    dongCode: 11500611,
    dongName: "서울특별시 강서구 발산1동",
  },
  {
    dongCode: 11500615,
    dongName: "서울특별시 강서구 우장산동",
  },
  {
    dongCode: 11500620,
    dongName: "서울특별시 강서구 공항동",
  },
  {
    dongCode: 11500630,
    dongName: "서울특별시 강서구 방화1동",
  },
  {
    dongCode: 11500640,
    dongName: "서울특별시 강서구 방화2동",
  },
  {
    dongCode: 11500641,
    dongName: "서울특별시 강서구 방화3동",
  },
  {
    dongCode: 11530510,
    dongName: "서울특별시 구로구 신도림동",
  },
  {
    dongCode: 11530520,
    dongName: "서울특별시 구로구 구로1동",
  },
  {
    dongCode: 11530530,
    dongName: "서울특별시 구로구 구로2동",
  },
  {
    dongCode: 11530540,
    dongName: "서울특별시 구로구 구로3동",
  },
  {
    dongCode: 11530550,
    dongName: "서울특별시 구로구 구로4동",
  },
  {
    dongCode: 11530560,
    dongName: "서울특별시 구로구 구로5동",
  },
  {
    dongCode: 11530595,
    dongName: "서울특별시 구로구 가리봉동",
  },
  {
    dongCode: 11530720,
    dongName: "서울특별시 구로구 고척1동",
  },
  {
    dongCode: 11530730,
    dongName: "서울특별시 구로구 고척2동",
  },
  {
    dongCode: 11530740,
    dongName: "서울특별시 구로구 개봉1동",
  },
  {
    dongCode: 11530750,
    dongName: "서울특별시 구로구 개봉2동",
  },
  {
    dongCode: 11530760,
    dongName: "서울특별시 구로구 개봉3동",
  },
  {
    dongCode: 11530770,
    dongName: "서울특별시 구로구 오류1동",
  },
  {
    dongCode: 11530780,
    dongName: "서울특별시 구로구 오류2동",
  },
  {
    dongCode: 11530790,
    dongName: "서울특별시 구로구 수궁동",
  },
  {
    dongCode: 11530800,
    dongName: "서울특별시 구로구 항동",
  },
  {
    dongCode: 11545510,
    dongName: "서울특별시 금천구 가산동",
  },
  {
    dongCode: 11545610,
    dongName: "서울특별시 금천구 독산1동",
  },
  {
    dongCode: 11545620,
    dongName: "서울특별시 금천구 독산2동",
  },
  {
    dongCode: 11545630,
    dongName: "서울특별시 금천구 독산3동",
  },
  {
    dongCode: 11545640,
    dongName: "서울특별시 금천구 독산4동",
  },
  {
    dongCode: 11545670,
    dongName: "서울특별시 금천구 시흥1동",
  },
  {
    dongCode: 11545680,
    dongName: "서울특별시 금천구 시흥2동",
  },
  {
    dongCode: 11545690,
    dongName: "서울특별시 금천구 시흥3동",
  },
  {
    dongCode: 11545700,
    dongName: "서울특별시 금천구 시흥4동",
  },
  {
    dongCode: 11545710,
    dongName: "서울특별시 금천구 시흥5동",
  },
  {
    dongCode: 11710632,
    dongName: "서울특별시 송파구 가락2동",
  },
  {
    dongCode: 11710641,
    dongName: "서울특별시 송파구 문정1동",
  },
  {
    dongCode: 11710642,
    dongName: "서울특별시 송파구 문정2동",
  },
  {
    dongCode: 11710646,
    dongName: "서울특별시 송파구 장지동",
  },
  {
    dongCode: 11710647,
    dongName: "서울특별시 송파구 위례동",
  },
  {
    dongCode: 11710650,
    dongName: "서울특별시 송파구 잠실본동",
  },
  {
    dongCode: 11710670,
    dongName: "서울특별시 송파구 잠실2동",
  },
  {
    dongCode: 11710680,
    dongName: "서울특별시 송파구 잠실3동",
  },
  {
    dongCode: 11710690,
    dongName: "서울특별시 송파구 잠실4동",
  },
  {
    dongCode: 11710710,
    dongName: "서울특별시 송파구 잠실6동",
  },
  {
    dongCode: 11710720,
    dongName: "서울특별시 송파구 잠실7동",
  },
  {
    dongCode: 11740515,
    dongName: "서울특별시 강동구 강일동",
  },
  {
    dongCode: 11740525,
    dongName: "서울특별시 강동구 상일1동",
  },
  {
    dongCode: 11740526,
    dongName: "서울특별시 강동구 상일2동",
  },
  {
    dongCode: 11740530,
    dongName: "서울특별시 강동구 명일1동",
  },
  {
    dongCode: 11740540,
    dongName: "서울특별시 강동구 명일2동",
  },
  {
    dongCode: 11740550,
    dongName: "서울특별시 강동구 고덕1동",
  },
  {
    dongCode: 11740560,
    dongName: "서울특별시 강동구 고덕2동",
  },
  {
    dongCode: 11740570,
    dongName: "서울특별시 강동구 암사1동",
  },
  {
    dongCode: 11740580,
    dongName: "서울특별시 강동구 암사2동",
  },
  {
    dongCode: 11740590,
    dongName: "서울특별시 강동구 암사3동",
  },
  {
    dongCode: 11740600,
    dongName: "서울특별시 강동구 천호1동",
  },
  {
    dongCode: 11740610,
    dongName: "서울특별시 강동구 천호2동",
  },
  {
    dongCode: 11740620,
    dongName: "서울특별시 강동구 천호3동",
  },
  {
    dongCode: 11740640,
    dongName: "서울특별시 강동구 성내1동",
  },
  {
    dongCode: 11740650,
    dongName: "서울특별시 강동구 성내2동",
  },
  {
    dongCode: 11740660,
    dongName: "서울특별시 강동구 성내3동",
  },
  {
    dongCode: 11740685,
    dongName: "서울특별시 강동구 길동",
  },
  {
    dongCode: 11740690,
    dongName: "서울특별시 강동구 둔촌1동",
  },
  {
    dongCode: 11740700,
    dongName: "서울특별시 강동구 둔촌2동",
  },
  {
    dongCode: 11560515,
    dongName: "서울특별시 영등포구 영등포본동",
  },
  {
    dongCode: 11560535,
    dongName: "서울특별시 영등포구 영등포동",
  },
  {
    dongCode: 11560540,
    dongName: "서울특별시 영등포구 여의동",
  },
  {
    dongCode: 11560550,
    dongName: "서울특별시 영등포구 당산1동",
  },
  {
    dongCode: 11560560,
    dongName: "서울특별시 영등포구 당산2동",
  },
  {
    dongCode: 11560585,
    dongName: "서울특별시 영등포구 도림동",
  },
  {
    dongCode: 11560605,
    dongName: "서울특별시 영등포구 문래동",
  },
  {
    dongCode: 11560610,
    dongName: "서울특별시 영등포구 양평1동",
  },
  {
    dongCode: 11560620,
    dongName: "서울특별시 영등포구 양평2동",
  },
  {
    dongCode: 11560630,
    dongName: "서울특별시 영등포구 신길1동",
  },
  {
    dongCode: 11560650,
    dongName: "서울특별시 영등포구 신길3동",
  },
  {
    dongCode: 11560660,
    dongName: "서울특별시 영등포구 신길4동",
  },
  {
    dongCode: 11560670,
    dongName: "서울특별시 영등포구 신길5동",
  },
  {
    dongCode: 11560680,
    dongName: "서울특별시 영등포구 신길6동",
  },
  {
    dongCode: 11560690,
    dongName: "서울특별시 영등포구 신길7동",
  },
  {
    dongCode: 11560700,
    dongName: "서울특별시 영등포구 대림1동",
  },
  {
    dongCode: 11560710,
    dongName: "서울특별시 영등포구 대림2동",
  },
  {
    dongCode: 11560720,
    dongName: "서울특별시 영등포구 대림3동",
  },
  {
    dongCode: 11590510,
    dongName: "서울특별시 동작구 노량진1동",
  },
  {
    dongCode: 11590520,
    dongName: "서울특별시 동작구 노량진2동",
  },
  {
    dongCode: 11590530,
    dongName: "서울특별시 동작구 상도1동",
  },
  {
    dongCode: 11590540,
    dongName: "서울특별시 동작구 상도2동",
  },
  {
    dongCode: 11590550,
    dongName: "서울특별시 동작구 상도3동",
  },
  {
    dongCode: 11590560,
    dongName: "서울특별시 동작구 상도4동",
  },
  {
    dongCode: 11590605,
    dongName: "서울특별시 동작구 흑석동",
  },
  {
    dongCode: 11590620,
    dongName: "서울특별시 동작구 사당1동",
  },
  {
    dongCode: 11590630,
    dongName: "서울특별시 동작구 사당2동",
  },
  {
    dongCode: 11590640,
    dongName: "서울특별시 동작구 사당3동",
  },
  {
    dongCode: 11590650,
    dongName: "서울특별시 동작구 사당4동",
  },
  {
    dongCode: 11590651,
    dongName: "서울특별시 동작구 사당5동",
  },
  {
    dongCode: 11590660,
    dongName: "서울특별시 동작구 대방동",
  },
  {
    dongCode: 11590670,
    dongName: "서울특별시 동작구 신대방1동",
  },
  {
    dongCode: 11590680,
    dongName: "서울특별시 동작구 신대방2동",
  },
  {
    dongCode: 11620525,
    dongName: "서울특별시 관악구 보라매동",
  },
  {
    dongCode: 11620545,
    dongName: "서울특별시 관악구 청림동",
  },
  {
    dongCode: 11620565,
    dongName: "서울특별시 관악구 성현동",
  },
  {
    dongCode: 11620575,
    dongName: "서울특별시 관악구 행운동",
  },
  {
    dongCode: 11620585,
    dongName: "서울특별시 관악구 낙성대동",
  },
  {
    dongCode: 11620595,
    dongName: "서울특별시 관악구 청룡동",
  },
  {
    dongCode: 11620605,
    dongName: "서울특별시 관악구 은천동",
  },
  {
    dongCode: 11620615,
    dongName: "서울특별시 관악구 중앙동",
  },
  {
    dongCode: 11620625,
    dongName: "서울특별시 관악구 인헌동",
  },
  {
    dongCode: 11620630,
    dongName: "서울특별시 관악구 남현동",
  },
  {
    dongCode: 11620645,
    dongName: "서울특별시 관악구 서원동",
  },
  {
    dongCode: 11620655,
    dongName: "서울특별시 관악구 신원동",
  },
  {
    dongCode: 11620665,
    dongName: "서울특별시 관악구 서림동",
  },
  {
    dongCode: 11620685,
    dongName: "서울특별시 관악구 신사동",
  },
  {
    dongCode: 11620695,
    dongName: "서울특별시 관악구 신림동",
  },
  {
    dongCode: 11620715,
    dongName: "서울특별시 관악구 난향동",
  },
  {
    dongCode: 11620725,
    dongName: "서울특별시 관악구 조원동",
  },
  {
    dongCode: 11620735,
    dongName: "서울특별시 관악구 대학동",
  },
  {
    dongCode: 11620745,
    dongName: "서울특별시 관악구 삼성동",
  },
  {
    dongCode: 11620765,
    dongName: "서울특별시 관악구 미성동",
  },
  {
    dongCode: 11620775,
    dongName: "서울특별시 관악구 난곡동",
  },
  {
    dongCode: 11650510,
    dongName: "서울특별시 서초구 서초1동",
  },
  {
    dongCode: 11650520,
    dongName: "서울특별시 서초구 서초2동",
  },
  {
    dongCode: 11650530,
    dongName: "서울특별시 서초구 서초3동",
  },
  {
    dongCode: 11650531,
    dongName: "서울특별시 서초구 서초4동",
  },
  {
    dongCode: 11650540,
    dongName: "서울특별시 서초구 잠원동",
  },
  {
    dongCode: 11650550,
    dongName: "서울특별시 서초구 반포본동",
  },
  {
    dongCode: 11650560,
    dongName: "서울특별시 서초구 반포1동",
  },
  {
    dongCode: 11650570,
    dongName: "서울특별시 서초구 반포2동",
  },
  {
    dongCode: 11650580,
    dongName: "서울특별시 서초구 반포3동",
  },
  {
    dongCode: 11650581,
    dongName: "서울특별시 서초구 반포4동",
  },
  {
    dongCode: 11650590,
    dongName: "서울특별시 서초구 방배본동",
  },
  {
    dongCode: 11650600,
    dongName: "서울특별시 서초구 방배1동",
  },
  {
    dongCode: 11650610,
    dongName: "서울특별시 서초구 방배2동",
  },
  {
    dongCode: 11650620,
    dongName: "서울특별시 서초구 방배3동",
  },
  {
    dongCode: 11650621,
    dongName: "서울특별시 서초구 방배4동",
  },
  {
    dongCode: 11650651,
    dongName: "서울특별시 서초구 양재1동",
  },
  {
    dongCode: 11650652,
    dongName: "서울특별시 서초구 양재2동",
  },
  {
    dongCode: 11650660,
    dongName: "서울특별시 서초구 내곡동",
  },
  {
    dongCode: 11680510,
    dongName: "서울특별시 강남구 신사동",
  },
  {
    dongCode: 11680521,
    dongName: "서울특별시 강남구 논현1동",
  },
  {
    dongCode: 11680531,
    dongName: "서울특별시 강남구 논현2동",
  },
  {
    dongCode: 11680545,
    dongName: "서울특별시 강남구 압구정동",
  },
  {
    dongCode: 11680565,
    dongName: "서울특별시 강남구 청담동",
  },
  {
    dongCode: 11680580,
    dongName: "서울특별시 강남구 삼성1동",
  },
  {
    dongCode: 11680590,
    dongName: "서울특별시 강남구 삼성2동",
  },
  {
    dongCode: 11680600,
    dongName: "서울특별시 강남구 대치1동",
  },
  {
    dongCode: 11680610,
    dongName: "서울특별시 강남구 대치2동",
  },
  {
    dongCode: 11680630,
    dongName: "서울특별시 강남구 대치4동",
  },
  {
    dongCode: 11680640,
    dongName: "서울특별시 강남구 역삼1동",
  },
  {
    dongCode: 11680650,
    dongName: "서울특별시 강남구 역삼2동",
  },
  {
    dongCode: 11680655,
    dongName: "서울특별시 강남구 도곡1동",
  },
  {
    dongCode: 11680656,
    dongName: "서울특별시 강남구 도곡2동",
  },
  {
    dongCode: 11680660,
    dongName: "서울특별시 강남구 개포1동",
  },
  {
    dongCode: 11680670,
    dongName: "서울특별시 강남구 개포2동",
  },
  {
    dongCode: 11680690,
    dongName: "서울특별시 강남구 개포4동",
  },
  {
    dongCode: 11680700,
    dongName: "서울특별시 강남구 세곡동",
  },
  {
    dongCode: 11680720,
    dongName: "서울특별시 강남구 일원본동",
  },
  {
    dongCode: 11680730,
    dongName: "서울특별시 강남구 일원1동",
  },
  {
    dongCode: 11680740,
    dongName: "서울특별시 강남구 일원2동",
  },
  {
    dongCode: 11680750,
    dongName: "서울특별시 강남구 수서동",
  },
  {
    dongCode: 11710510,
    dongName: "서울특별시 송파구 풍납1동",
  },
  {
    dongCode: 11710520,
    dongName: "서울특별시 송파구 풍납2동",
  },
  {
    dongCode: 11710531,
    dongName: "서울특별시 송파구 거여1동",
  },
  {
    dongCode: 11710532,
    dongName: "서울특별시 송파구 거여2동",
  },
  {
    dongCode: 11710540,
    dongName: "서울특별시 송파구 마천1동",
  },
  {
    dongCode: 11710550,
    dongName: "서울특별시 송파구 마천2동",
  },
  {
    dongCode: 11710561,
    dongName: "서울특별시 송파구 방이1동",
  },
  {
    dongCode: 11710562,
    dongName: "서울특별시 송파구 방이2동",
  },
  {
    dongCode: 11710566,
    dongName: "서울특별시 송파구 오륜동",
  },
  {
    dongCode: 11710570,
    dongName: "서울특별시 송파구 오금동",
  },
  {
    dongCode: 11710580,
    dongName: "서울특별시 송파구 송파1동",
  },
  {
    dongCode: 11710590,
    dongName: "서울특별시 송파구 송파2동",
  },
  {
    dongCode: 11710600,
    dongName: "서울특별시 송파구 석촌동",
  },
  {
    dongCode: 11710610,
    dongName: "서울특별시 송파구 삼전동",
  },
  {
    dongCode: 11710620,
    dongName: "서울특별시 송파구 가락본동",
  },
  {
    dongCode: 11710631,
    dongName: "서울특별시 송파구 가락1동",
  },
  {
    dongCode: 26110510,
    dongName: "부산광역시 중구 중앙동",
  },
  {
    dongCode: 26110520,
    dongName: "부산광역시 중구 동광동",
  },
  {
    dongCode: 26110530,
    dongName: "부산광역시 중구 대청동",
  },
  {
    dongCode: 26110545,
    dongName: "부산광역시 중구 보수동",
  },
  {
    dongCode: 26110560,
    dongName: "부산광역시 중구 부평동",
  },
  {
    dongCode: 26110570,
    dongName: "부산광역시 중구 광복동",
  },
  {
    dongCode: 26110580,
    dongName: "부산광역시 중구 남포동",
  },
  {
    dongCode: 26110590,
    dongName: "부산광역시 중구 영주1동",
  },
  {
    dongCode: 26110600,
    dongName: "부산광역시 중구 영주2동",
  },
  {
    dongCode: 26140510,
    dongName: "부산광역시 서구 동대신1동",
  },
  {
    dongCode: 26140520,
    dongName: "부산광역시 서구 동대신2동",
  },
  {
    dongCode: 26140530,
    dongName: "부산광역시 서구 동대신3동",
  },
  {
    dongCode: 26140540,
    dongName: "부산광역시 서구 서대신1동",
  },
  {
    dongCode: 26140560,
    dongName: "부산광역시 서구 서대신3동",
  },
  {
    dongCode: 26140570,
    dongName: "부산광역시 서구 서대신4동",
  },
  {
    dongCode: 26140590,
    dongName: "부산광역시 서구 부민동",
  },
  {
    dongCode: 26140615,
    dongName: "부산광역시 서구 아미동",
  },
  {
    dongCode: 26140630,
    dongName: "부산광역시 서구 초장동",
  },
  {
    dongCode: 26140640,
    dongName: "부산광역시 서구 충무동",
  },
  {
    dongCode: 26140650,
    dongName: "부산광역시 서구 남부민1동",
  },
  {
    dongCode: 26140660,
    dongName: "부산광역시 서구 남부민2동",
  },
  {
    dongCode: 26140680,
    dongName: "부산광역시 서구 암남동",
  },
  {
    dongCode: 26170510,
    dongName: "부산광역시 동구 초량1동",
  },
  {
    dongCode: 26170520,
    dongName: "부산광역시 동구 초량2동",
  },
  {
    dongCode: 26170530,
    dongName: "부산광역시 동구 초량3동",
  },
  {
    dongCode: 26170550,
    dongName: "부산광역시 동구 초량6동",
  },
  {
    dongCode: 26170560,
    dongName: "부산광역시 동구 수정1동",
  },
  {
    dongCode: 26170570,
    dongName: "부산광역시 동구 수정2동",
  },
  {
    dongCode: 26170590,
    dongName: "부산광역시 동구 수정4동",
  },
  {
    dongCode: 26170600,
    dongName: "부산광역시 동구 수정5동",
  },
  {
    dongCode: 26170645,
    dongName: "부산광역시 동구 좌천동",
  },
  {
    dongCode: 26170650,
    dongName: "부산광역시 동구 범일1동",
  },
  {
    dongCode: 26170660,
    dongName: "부산광역시 동구 범일2동",
  },
  {
    dongCode: 26170680,
    dongName: "부산광역시 동구 범일5동",
  },
  {
    dongCode: 26200530,
    dongName: "부산광역시 영도구 남항동",
  },
  {
    dongCode: 26200540,
    dongName: "부산광역시 영도구 영선1동",
  },
  {
    dongCode: 26200550,
    dongName: "부산광역시 영도구 영선2동",
  },
  {
    dongCode: 26200585,
    dongName: "부산광역시 영도구 신선동",
  },
  {
    dongCode: 26200590,
    dongName: "부산광역시 영도구 봉래1동",
  },
  {
    dongCode: 26200605,
    dongName: "부산광역시 영도구 봉래2동",
  },
  {
    dongCode: 26200630,
    dongName: "부산광역시 영도구 청학1동",
  },
  {
    dongCode: 26200640,
    dongName: "부산광역시 영도구 청학2동",
  },
  {
    dongCode: 26200650,
    dongName: "부산광역시 영도구 동삼1동",
  },
  {
    dongCode: 26200660,
    dongName: "부산광역시 영도구 동삼2동",
  },
  {
    dongCode: 26200670,
    dongName: "부산광역시 영도구 동삼3동",
  },
  {
    dongCode: 26230510,
    dongName: "부산광역시 부산진구 부전1동",
  },
  {
    dongCode: 26230520,
    dongName: "부산광역시 부산진구 부전2동",
  },
  {
    dongCode: 26230540,
    dongName: "부산광역시 부산진구 연지동",
  },
  {
    dongCode: 26230550,
    dongName: "부산광역시 부산진구 초읍동",
  },
  {
    dongCode: 26230560,
    dongName: "부산광역시 부산진구 양정1동",
  },
  {
    dongCode: 26230570,
    dongName: "부산광역시 부산진구 양정2동",
  },
  {
    dongCode: 26230600,
    dongName: "부산광역시 부산진구 전포1동",
  },
  {
    dongCode: 26230610,
    dongName: "부산광역시 부산진구 전포2동",
  },
  {
    dongCode: 26230640,
    dongName: "부산광역시 부산진구 부암1동",
  },
  {
    dongCode: 26230660,
    dongName: "부산광역시 부산진구 부암3동",
  },
  {
    dongCode: 26230670,
    dongName: "부산광역시 부산진구 당감1동",
  },
  {
    dongCode: 26230680,
    dongName: "부산광역시 부산진구 당감2동",
  },
  {
    dongCode: 26230700,
    dongName: "부산광역시 부산진구 당감4동",
  },
  {
    dongCode: 26230710,
    dongName: "부산광역시 부산진구 가야1동",
  },
  {
    dongCode: 26230720,
    dongName: "부산광역시 부산진구 가야2동",
  },
  {
    dongCode: 26230740,
    dongName: "부산광역시 부산진구 개금1동",
  },
  {
    dongCode: 26230750,
    dongName: "부산광역시 부산진구 개금2동",
  },
  {
    dongCode: 26230760,
    dongName: "부산광역시 부산진구 개금3동",
  },
  {
    dongCode: 26230770,
    dongName: "부산광역시 부산진구 범천1동",
  },
  {
    dongCode: 26230780,
    dongName: "부산광역시 부산진구 범천2동",
  },
  {
    dongCode: 26260510,
    dongName: "부산광역시 동래구 수민동",
  },
  {
    dongCode: 26260520,
    dongName: "부산광역시 동래구 복산동",
  },
  {
    dongCode: 26260545,
    dongName: "부산광역시 동래구 명륜동",
  },
  {
    dongCode: 26260550,
    dongName: "부산광역시 동래구 온천1동",
  },
  {
    dongCode: 26260560,
    dongName: "부산광역시 동래구 온천2동",
  },
  {
    dongCode: 26260570,
    dongName: "부산광역시 동래구 온천3동",
  },
  {
    dongCode: 26260580,
    dongName: "부산광역시 동래구 사직1동",
  },
  {
    dongCode: 26260590,
    dongName: "부산광역시 동래구 사직2동",
  },
  {
    dongCode: 26260600,
    dongName: "부산광역시 동래구 사직3동",
  },
  {
    dongCode: 26260740,
    dongName: "부산광역시 동래구 안락1동",
  },
  {
    dongCode: 26260750,
    dongName: "부산광역시 동래구 안락2동",
  },
  {
    dongCode: 26260761,
    dongName: "부산광역시 동래구 명장1동",
  },
  {
    dongCode: 26260762,
    dongName: "부산광역시 동래구 명장2동",
  },
  {
    dongCode: 26290510,
    dongName: "부산광역시 남구 대연1동",
  },
  {
    dongCode: 26290530,
    dongName: "부산광역시 남구 대연3동",
  },
  {
    dongCode: 26290540,
    dongName: "부산광역시 남구 대연4동",
  },
  {
    dongCode: 26290550,
    dongName: "부산광역시 남구 대연5동",
  },
  {
    dongCode: 26290560,
    dongName: "부산광역시 남구 대연6동",
  },
  {
    dongCode: 26290570,
    dongName: "부산광역시 남구 용호1동",
  },
  {
    dongCode: 26290580,
    dongName: "부산광역시 남구 용호2동",
  },
  {
    dongCode: 26290590,
    dongName: "부산광역시 남구 용호3동",
  },
  {
    dongCode: 26290600,
    dongName: "부산광역시 남구 용호4동",
  },
  {
    dongCode: 26290610,
    dongName: "부산광역시 남구 용당동",
  },
  {
    dongCode: 26290620,
    dongName: "부산광역시 남구 감만1동",
  },
  {
    dongCode: 26290630,
    dongName: "부산광역시 남구 감만2동",
  },
  {
    dongCode: 26290645,
    dongName: "부산광역시 남구 우암동",
  },
  {
    dongCode: 26290680,
    dongName: "부산광역시 남구 문현1동",
  },
  {
    dongCode: 26290690,
    dongName: "부산광역시 남구 문현2동",
  },
  {
    dongCode: 26290700,
    dongName: "부산광역시 남구 문현3동",
  },
  {
    dongCode: 26290710,
    dongName: "부산광역시 남구 문현4동",
  },
  {
    dongCode: 26320510,
    dongName: "부산광역시 북구 구포1동",
  },
  {
    dongCode: 26320520,
    dongName: "부산광역시 북구 구포2동",
  },
  {
    dongCode: 26320521,
    dongName: "부산광역시 북구 구포3동",
  },
  {
    dongCode: 26320530,
    dongName: "부산광역시 북구 금곡동",
  },
  {
    dongCode: 26320541,
    dongName: "부산광역시 북구 화명1동",
  },
  {
    dongCode: 26320542,
    dongName: "부산광역시 북구 화명2동",
  },
  {
    dongCode: 26320543,
    dongName: "부산광역시 북구 화명3동",
  },
  {
    dongCode: 26320550,
    dongName: "부산광역시 북구 덕천1동",
  },
  {
    dongCode: 26320560,
    dongName: "부산광역시 북구 덕천2동",
  },
  {
    dongCode: 26320561,
    dongName: "부산광역시 북구 덕천3동",
  },
  {
    dongCode: 26320571,
    dongName: "부산광역시 북구 만덕1동",
  },
  {
    dongCode: 26320572,
    dongName: "부산광역시 북구 만덕2동",
  },
  {
    dongCode: 26320573,
    dongName: "부산광역시 북구 만덕3동",
  },
  {
    dongCode: 26350510,
    dongName: "부산광역시 해운대구 우1동",
  },
  {
    dongCode: 26350520,
    dongName: "부산광역시 해운대구 우2동",
  },
  {
    dongCode: 26350525,
    dongName: "부산광역시 해운대구 우3동",
  },
  {
    dongCode: 26350530,
    dongName: "부산광역시 해운대구 중1동",
  },
  {
    dongCode: 26350540,
    dongName: "부산광역시 해운대구 중2동",
  },
  {
    dongCode: 26350551,
    dongName: "부산광역시 해운대구 좌1동",
  },
  {
    dongCode: 26350552,
    dongName: "부산광역시 해운대구 좌2동",
  },
  {
    dongCode: 26350553,
    dongName: "부산광역시 해운대구 좌3동",
  },
  {
    dongCode: 26350554,
    dongName: "부산광역시 해운대구 좌4동",
  },
  {
    dongCode: 26350560,
    dongName: "부산광역시 해운대구 송정동",
  },
  {
    dongCode: 26350570,
    dongName: "부산광역시 해운대구 반여1동",
  },
  {
    dongCode: 26350580,
    dongName: "부산광역시 해운대구 반여2동",
  },
  {
    dongCode: 26350590,
    dongName: "부산광역시 해운대구 반여3동",
  },
  {
    dongCode: 26350595,
    dongName: "부산광역시 해운대구 반여4동",
  },
  {
    dongCode: 26350610,
    dongName: "부산광역시 해운대구 반송1동",
  },
  {
    dongCode: 26350620,
    dongName: "부산광역시 해운대구 반송2동",
  },
  {
    dongCode: 26350650,
    dongName: "부산광역시 해운대구 재송1동",
  },
  {
    dongCode: 26350660,
    dongName: "부산광역시 해운대구 재송2동",
  },
  {
    dongCode: 26380510,
    dongName: "부산광역시 사하구 괴정1동",
  },
  {
    dongCode: 26380520,
    dongName: "부산광역시 사하구 괴정2동",
  },
  {
    dongCode: 26380530,
    dongName: "부산광역시 사하구 괴정3동",
  },
  {
    dongCode: 26380540,
    dongName: "부산광역시 사하구 괴정4동",
  },
  {
    dongCode: 26380550,
    dongName: "부산광역시 사하구 당리동",
  },
  {
    dongCode: 26380561,
    dongName: "부산광역시 사하구 하단1동",
  },
  {
    dongCode: 26380562,
    dongName: "부산광역시 사하구 하단2동",
  },
  {
    dongCode: 26380571,
    dongName: "부산광역시 사하구 신평1동",
  },
  {
    dongCode: 26380572,
    dongName: "부산광역시 사하구 신평2동",
  },
  {
    dongCode: 26380580,
    dongName: "부산광역시 사하구 장림1동",
  },
  {
    dongCode: 26380590,
    dongName: "부산광역시 사하구 장림2동",
  },
  {
    dongCode: 26380601,
    dongName: "부산광역시 사하구 다대1동",
  },
  {
    dongCode: 26380602,
    dongName: "부산광역시 사하구 다대2동",
  },
  {
    dongCode: 26380610,
    dongName: "부산광역시 사하구 구평동",
  },
  {
    dongCode: 26380620,
    dongName: "부산광역시 사하구 감천1동",
  },
  {
    dongCode: 26380630,
    dongName: "부산광역시 사하구 감천2동",
  },
  {
    dongCode: 26410510,
    dongName: "부산광역시 금정구 서1동",
  },
  {
    dongCode: 26410520,
    dongName: "부산광역시 금정구 서2동",
  },
  {
    dongCode: 26410530,
    dongName: "부산광역시 금정구 서3동",
  },
  {
    dongCode: 26410555,
    dongName: "부산광역시 금정구 금사회동동",
  },
  {
    dongCode: 26410570,
    dongName: "부산광역시 금정구 부곡1동",
  },
  {
    dongCode: 26410580,
    dongName: "부산광역시 금정구 부곡2동",
  },
  {
    dongCode: 26410590,
    dongName: "부산광역시 금정구 부곡3동",
  },
  {
    dongCode: 26410591,
    dongName: "부산광역시 금정구 부곡4동",
  },
  {
    dongCode: 26410600,
    dongName: "부산광역시 금정구 장전1동",
  },
  {
    dongCode: 26410610,
    dongName: "부산광역시 금정구 장전2동",
  },
  {
    dongCode: 26410635,
    dongName: "부산광역시 금정구 선두구동",
  },
  {
    dongCode: 26410665,
    dongName: "부산광역시 금정구 청룡노포동",
  },
  {
    dongCode: 26410670,
    dongName: "부산광역시 금정구 남산동",
  },
  {
    dongCode: 26410680,
    dongName: "부산광역시 금정구 구서1동",
  },
  {
    dongCode: 26410690,
    dongName: "부산광역시 금정구 구서2동",
  },
  {
    dongCode: 26410700,
    dongName: "부산광역시 금정구 금성동",
  },
  {
    dongCode: 26440510,
    dongName: "부산광역시 강서구 대저1동",
  },
  {
    dongCode: 26440520,
    dongName: "부산광역시 강서구 대저2동",
  },
  {
    dongCode: 26440530,
    dongName: "부산광역시 강서구 강동동",
  },
  {
    dongCode: 26440535,
    dongName: "부산광역시 강서구 명지1동",
  },
  {
    dongCode: 26440545,
    dongName: "부산광역시 강서구 명지2동",
  },
  {
    dongCode: 26440550,
    dongName: "부산광역시 강서구 가락동",
  },
  {
    dongCode: 26440560,
    dongName: "부산광역시 강서구 녹산동",
  },
  {
    dongCode: 26440580,
    dongName: "부산광역시 강서구 가덕도동",
  },
  {
    dongCode: 26470610,
    dongName: "부산광역시 연제구 거제1동",
  },
  {
    dongCode: 26470620,
    dongName: "부산광역시 연제구 거제2동",
  },
  {
    dongCode: 26470630,
    dongName: "부산광역시 연제구 거제3동",
  },
  {
    dongCode: 26470640,
    dongName: "부산광역시 연제구 거제4동",
  },
  {
    dongCode: 26470650,
    dongName: "부산광역시 연제구 연산1동",
  },
  {
    dongCode: 26470660,
    dongName: "부산광역시 연제구 연산2동",
  },
  {
    dongCode: 26470670,
    dongName: "부산광역시 연제구 연산3동",
  },
  {
    dongCode: 26470680,
    dongName: "부산광역시 연제구 연산4동",
  },
  {
    dongCode: 26470690,
    dongName: "부산광역시 연제구 연산5동",
  },
  {
    dongCode: 26470700,
    dongName: "부산광역시 연제구 연산6동",
  },
  {
    dongCode: 26470720,
    dongName: "부산광역시 연제구 연산8동",
  },
  {
    dongCode: 26470730,
    dongName: "부산광역시 연제구 연산9동",
  },
  {
    dongCode: 26500660,
    dongName: "부산광역시 수영구 남천1동",
  },
  {
    dongCode: 26500670,
    dongName: "부산광역시 수영구 남천2동",
  },
  {
    dongCode: 26500730,
    dongName: "부산광역시 수영구 수영동",
  },
  {
    dongCode: 26500740,
    dongName: "부산광역시 수영구 망미1동",
  },
  {
    dongCode: 26500750,
    dongName: "부산광역시 수영구 망미2동",
  },
  {
    dongCode: 26500760,
    dongName: "부산광역시 수영구 광안1동",
  },
  {
    dongCode: 26500770,
    dongName: "부산광역시 수영구 광안2동",
  },
  {
    dongCode: 26500780,
    dongName: "부산광역시 수영구 광안3동",
  },
  {
    dongCode: 26500790,
    dongName: "부산광역시 수영구 광안4동",
  },
  {
    dongCode: 26500800,
    dongName: "부산광역시 수영구 민락동",
  },
  {
    dongCode: 26530580,
    dongName: "부산광역시 사상구 삼락동",
  },
  {
    dongCode: 26530591,
    dongName: "부산광역시 사상구 모라1동",
  },
  {
    dongCode: 26530593,
    dongName: "부산광역시 사상구 모라3동",
  },
  {
    dongCode: 26530600,
    dongName: "부산광역시 사상구 덕포1동",
  },
  {
    dongCode: 26530610,
    dongName: "부산광역시 사상구 덕포2동",
  },
  {
    dongCode: 26530620,
    dongName: "부산광역시 사상구 괘법동",
  },
  {
    dongCode: 26530645,
    dongName: "부산광역시 사상구 감전동",
  },
  {
    dongCode: 26530650,
    dongName: "부산광역시 사상구 주례1동",
  },
  {
    dongCode: 26530660,
    dongName: "부산광역시 사상구 주례2동",
  },
  {
    dongCode: 26530661,
    dongName: "부산광역시 사상구 주례3동",
  },
  {
    dongCode: 26530670,
    dongName: "부산광역시 사상구 학장동",
  },
  {
    dongCode: 26530680,
    dongName: "부산광역시 사상구 엄궁동",
  },
  {
    dongCode: 26710250,
    dongName: "부산광역시 기장군 기장읍",
  },
  {
    dongCode: 26710253,
    dongName: "부산광역시 기장군 장안읍",
  },
  {
    dongCode: 26710256,
    dongName: "부산광역시 기장군 정관읍",
  },
  {
    dongCode: 26710259,
    dongName: "부산광역시 기장군 일광읍",
  },
  {
    dongCode: 26710330,
    dongName: "부산광역시 기장군 철마면",
  },
  {
    dongCode: 27110517,
    dongName: "대구광역시 중구 동인동",
  },
  {
    dongCode: 27110545,
    dongName: "대구광역시 중구 삼덕동",
  },
  {
    dongCode: 27110565,
    dongName: "대구광역시 중구 성내1동",
  },
  {
    dongCode: 27110575,
    dongName: "대구광역시 중구 성내2동",
  },
  {
    dongCode: 27110585,
    dongName: "대구광역시 중구 성내3동",
  },
  {
    dongCode: 27110595,
    dongName: "대구광역시 중구 대신동",
  },
  {
    dongCode: 27110640,
    dongName: "대구광역시 중구 남산1동",
  },
  {
    dongCode: 27110650,
    dongName: "대구광역시 중구 남산2동",
  },
  {
    dongCode: 27110660,
    dongName: "대구광역시 중구 남산3동",
  },
  {
    dongCode: 27110670,
    dongName: "대구광역시 중구 남산4동",
  },
  {
    dongCode: 27110680,
    dongName: "대구광역시 중구 대봉1동",
  },
  {
    dongCode: 27110690,
    dongName: "대구광역시 중구 대봉2동",
  },
  {
    dongCode: 27140510,
    dongName: "대구광역시 동구 신암1동",
  },
  {
    dongCode: 27140520,
    dongName: "대구광역시 동구 신암2동",
  },
  {
    dongCode: 27140530,
    dongName: "대구광역시 동구 신암3동",
  },
  {
    dongCode: 27140540,
    dongName: "대구광역시 동구 신암4동",
  },
  {
    dongCode: 27140541,
    dongName: "대구광역시 동구 신암5동",
  },
  {
    dongCode: 27140555,
    dongName: "대구광역시 동구 신천1.2동",
  },
  {
    dongCode: 27140570,
    dongName: "대구광역시 동구 신천3동",
  },
  {
    dongCode: 27140580,
    dongName: "대구광역시 동구 신천4동",
  },
  {
    dongCode: 27140590,
    dongName: "대구광역시 동구 효목1동",
  },
  {
    dongCode: 27140600,
    dongName: "대구광역시 동구 효목2동",
  },
  {
    dongCode: 27140615,
    dongName: "대구광역시 동구 도평동",
  },
  {
    dongCode: 27140620,
    dongName: "대구광역시 동구 불로.봉무동",
  },
  {
    dongCode: 27140640,
    dongName: "대구광역시 동구 지저동",
  },
  {
    dongCode: 27140655,
    dongName: "대구광역시 동구 동촌동",
  },
  {
    dongCode: 27140670,
    dongName: "대구광역시 동구 방촌동",
  },
  {
    dongCode: 27140685,
    dongName: "대구광역시 동구 해안동",
  },
  {
    dongCode: 27140720,
    dongName: "대구광역시 동구 안심1동",
  },
  {
    dongCode: 27140730,
    dongName: "대구광역시 동구 안심2동",
  },
  {
    dongCode: 27140742,
    dongName: "대구광역시 동구 안심3동",
  },
  {
    dongCode: 27140747,
    dongName: "대구광역시 동구 안심4동",
  },
  {
    dongCode: 27140755,
    dongName: "대구광역시 동구 혁신동",
  },
  {
    dongCode: 27140760,
    dongName: "대구광역시 동구 공산동",
  },
  {
    dongCode: 27170510,
    dongName: "대구광역시 서구 내당1동",
  },
  {
    dongCode: 27170525,
    dongName: "대구광역시 서구 내당2.3동",
  },
  {
    dongCode: 27170540,
    dongName: "대구광역시 서구 내당4동",
  },
  {
    dongCode: 27170550,
    dongName: "대구광역시 서구 비산1동",
  },
  {
    dongCode: 27170565,
    dongName: "대구광역시 서구 비산2.3동",
  },
  {
    dongCode: 27170580,
    dongName: "대구광역시 서구 비산4동",
  },
  {
    dongCode: 27170590,
    dongName: "대구광역시 서구 비산5동",
  },
  {
    dongCode: 27170600,
    dongName: "대구광역시 서구 비산6동",
  },
  {
    dongCode: 27170610,
    dongName: "대구광역시 서구 비산7동",
  },
  {
    dongCode: 27170620,
    dongName: "대구광역시 서구 평리1동",
  },
  {
    dongCode: 27170630,
    dongName: "대구광역시 서구 평리2동",
  },
  {
    dongCode: 27170640,
    dongName: "대구광역시 서구 평리3동",
  },
  {
    dongCode: 27170650,
    dongName: "대구광역시 서구 평리4동",
  },
  {
    dongCode: 27170660,
    dongName: "대구광역시 서구 평리5동",
  },
  {
    dongCode: 27170661,
    dongName: "대구광역시 서구 평리6동",
  },
  {
    dongCode: 27170675,
    dongName: "대구광역시 서구 상중이동",
  },
  {
    dongCode: 27170695,
    dongName: "대구광역시 서구 원대동",
  },
  {
    dongCode: 27200515,
    dongName: "대구광역시 남구 이천동",
  },
  {
    dongCode: 27200530,
    dongName: "대구광역시 남구 봉덕1동",
  },
  {
    dongCode: 27200540,
    dongName: "대구광역시 남구 봉덕2동",
  },
  {
    dongCode: 27200550,
    dongName: "대구광역시 남구 봉덕3동",
  },
  {
    dongCode: 27200560,
    dongName: "대구광역시 남구 대명1동",
  },
  {
    dongCode: 27200571,
    dongName: "대구광역시 남구 대명2동",
  },
  {
    dongCode: 27200586,
    dongName: "대구광역시 남구 대명3동",
  },
  {
    dongCode: 27200590,
    dongName: "대구광역시 남구 대명4동",
  },
  {
    dongCode: 27200600,
    dongName: "대구광역시 남구 대명5동",
  },
  {
    dongCode: 27200610,
    dongName: "대구광역시 남구 대명6동",
  },
  {
    dongCode: 27200640,
    dongName: "대구광역시 남구 대명9동",
  },
  {
    dongCode: 27200650,
    dongName: "대구광역시 남구 대명10동",
  },
  {
    dongCode: 27200660,
    dongName: "대구광역시 남구 대명11동",
  },
  {
    dongCode: 27230510,
    dongName: "대구광역시 북구 고성동",
  },
  {
    dongCode: 27230526,
    dongName: "대구광역시 북구 칠성동",
  },
  {
    dongCode: 27230550,
    dongName: "대구광역시 북구 침산1동",
  },
  {
    dongCode: 27230560,
    dongName: "대구광역시 북구 침산2동",
  },
  {
    dongCode: 27230570,
    dongName: "대구광역시 북구 침산3동",
  },
  {
    dongCode: 27230610,
    dongName: "대구광역시 북구 산격1동",
  },
  {
    dongCode: 27230620,
    dongName: "대구광역시 북구 산격2동",
  },
  {
    dongCode: 27230630,
    dongName: "대구광역시 북구 산격3동",
  },
  {
    dongCode: 27230631,
    dongName: "대구광역시 북구 산격4동",
  },
  {
    dongCode: 27230645,
    dongName: "대구광역시 북구 대현동",
  },
  {
    dongCode: 27230671,
    dongName: "대구광역시 북구 복현1동",
  },
  {
    dongCode: 27230672,
    dongName: "대구광역시 북구 복현2동",
  },
  {
    dongCode: 27230680,
    dongName: "대구광역시 북구 검단동",
  },
  {
    dongCode: 27230695,
    dongName: "대구광역시 북구 무태조야동",
  },
  {
    dongCode: 27230715,
    dongName: "대구광역시 북구 관문동",
  },
  {
    dongCode: 27230725,
    dongName: "대구광역시 북구 태전1동",
  },
  {
    dongCode: 27230735,
    dongName: "대구광역시 북구 태전2동",
  },
  {
    dongCode: 27230745,
    dongName: "대구광역시 북구 구암동",
  },
  {
    dongCode: 27230750,
    dongName: "대구광역시 북구 관음동",
  },
  {
    dongCode: 27230770,
    dongName: "대구광역시 북구 읍내동",
  },
  {
    dongCode: 27230780,
    dongName: "대구광역시 북구 동천동",
  },
  {
    dongCode: 27230790,
    dongName: "대구광역시 북구 노원동",
  },
  {
    dongCode: 27230800,
    dongName: "대구광역시 북구 국우동",
  },
  {
    dongCode: 27260510,
    dongName: "대구광역시 수성구 범어1동",
  },
  {
    dongCode: 27260520,
    dongName: "대구광역시 수성구 범어2동",
  },
  {
    dongCode: 27260530,
    dongName: "대구광역시 수성구 범어3동",
  },
  {
    dongCode: 27260540,
    dongName: "대구광역시 수성구 범어4동",
  },
  {
    dongCode: 27260550,
    dongName: "대구광역시 수성구 만촌1동",
  },
  {
    dongCode: 27260560,
    dongName: "대구광역시 수성구 만촌2동",
  },
  {
    dongCode: 27260561,
    dongName: "대구광역시 수성구 만촌3동",
  },
  {
    dongCode: 27260570,
    dongName: "대구광역시 수성구 수성1가동",
  },
  {
    dongCode: 27260580,
    dongName: "대구광역시 수성구 수성2.3가동",
  },
  {
    dongCode: 27260590,
    dongName: "대구광역시 수성구 수성4가동",
  },
  {
    dongCode: 27260601,
    dongName: "대구광역시 수성구 황금1동",
  },
  {
    dongCode: 27260602,
    dongName: "대구광역시 수성구 황금2동",
  },
  {
    dongCode: 27260610,
    dongName: "대구광역시 수성구 중동",
  },
  {
    dongCode: 27260620,
    dongName: "대구광역시 수성구 상동",
  },
  {
    dongCode: 27260630,
    dongName: "대구광역시 수성구 파동",
  },
  {
    dongCode: 27260640,
    dongName: "대구광역시 수성구 두산동",
  },
  {
    dongCode: 27260651,
    dongName: "대구광역시 수성구 지산1동",
  },
  {
    dongCode: 27260652,
    dongName: "대구광역시 수성구 지산2동",
  },
  {
    dongCode: 27260661,
    dongName: "대구광역시 수성구 범물1동",
  },
  {
    dongCode: 27260662,
    dongName: "대구광역시 수성구 범물2동",
  },
  {
    dongCode: 27260670,
    dongName: "대구광역시 수성구 고산1동",
  },
  {
    dongCode: 27260680,
    dongName: "대구광역시 수성구 고산2동",
  },
  {
    dongCode: 27260690,
    dongName: "대구광역시 수성구 고산3동",
  },
  {
    dongCode: 27290515,
    dongName: "대구광역시 달서구 성당동",
  },
  {
    dongCode: 27290535,
    dongName: "대구광역시 달서구 두류1.2동",
  },
  {
    dongCode: 27290550,
    dongName: "대구광역시 달서구 두류3동",
  },
  {
    dongCode: 27290555,
    dongName: "대구광역시 달서구 감삼동",
  },
  {
    dongCode: 27290563,
    dongName: "대구광역시 달서구 죽전동",
  },
  {
    dongCode: 27290568,
    dongName: "대구광역시 달서구 장기동",
  },
  {
    dongCode: 27290571,
    dongName: "대구광역시 달서구 용산1동",
  },
  {
    dongCode: 27290572,
    dongName: "대구광역시 달서구 용산2동",
  },
  {
    dongCode: 27290576,
    dongName: "대구광역시 달서구 이곡1동",
  },
  {
    dongCode: 27290577,
    dongName: "대구광역시 달서구 이곡2동",
  },
  {
    dongCode: 27290585,
    dongName: "대구광역시 달서구 신당동",
  },
  {
    dongCode: 27290590,
    dongName: "대구광역시 달서구 본리동",
  },
  {
    dongCode: 27290601,
    dongName: "대구광역시 달서구 월성1동",
  },
  {
    dongCode: 27290602,
    dongName: "대구광역시 달서구 월성2동",
  },
  {
    dongCode: 27290615,
    dongName: "대구광역시 달서구 진천동",
  },
  {
    dongCode: 27290617,
    dongName: "대구광역시 달서구 유천동",
  },
  {
    dongCode: 27290624,
    dongName: "대구광역시 달서구 상인1동",
  },
  {
    dongCode: 27290625,
    dongName: "대구광역시 달서구 상인2동",
  },
  {
    dongCode: 27290626,
    dongName: "대구광역시 달서구 상인3동",
  },
  {
    dongCode: 27290628,
    dongName: "대구광역시 달서구 도원동",
  },
  {
    dongCode: 27290630,
    dongName: "대구광역시 달서구 송현1동",
  },
  {
    dongCode: 27290640,
    dongName: "대구광역시 달서구 송현2동",
  },
  {
    dongCode: 27290650,
    dongName: "대구광역시 달서구 본동",
  },
  {
    dongCode: 27710250,
    dongName: "대구광역시 달성군 화원읍",
  },
  {
    dongCode: 27710253,
    dongName: "대구광역시 달성군 논공읍",
  },
  {
    dongCode: 27710256,
    dongName: "대구광역시 달성군 다사읍",
  },
  {
    dongCode: 27710259,
    dongName: "대구광역시 달성군 유가읍",
  },
  {
    dongCode: 27710262,
    dongName: "대구광역시 달성군 옥포읍",
  },
  {
    dongCode: 27710265,
    dongName: "대구광역시 달성군 현풍읍",
  },
  {
    dongCode: 27710310,
    dongName: "대구광역시 달성군 가창면",
  },
  {
    dongCode: 27710330,
    dongName: "대구광역시 달성군 하빈면",
  },
  {
    dongCode: 27710380,
    dongName: "대구광역시 달성군 구지면",
  },
  {
    dongCode: 28110520,
    dongName: "인천광역시 중구 연안동",
  },
  {
    dongCode: 28110530,
    dongName: "인천광역시 중구 신포동",
  },
  {
    dongCode: 28110540,
    dongName: "인천광역시 중구 신흥동",
  },
  {
    dongCode: 28110560,
    dongName: "인천광역시 중구 도원동",
  },
  {
    dongCode: 28110570,
    dongName: "인천광역시 중구 율목동",
  },
  {
    dongCode: 28110585,
    dongName: "인천광역시 중구 동인천동",
  },
  {
    dongCode: 28110615,
    dongName: "인천광역시 중구 개항동",
  },
  {
    dongCode: 28110620,
    dongName: "인천광역시 중구 영종동",
  },
  {
    dongCode: 28110622,
    dongName: "인천광역시 중구 영종1동",
  },
  {
    dongCode: 28110628,
    dongName: "인천광역시 중구 운서동",
  },
  {
    dongCode: 28110630,
    dongName: "인천광역시 중구 용유동",
  },
  {
    dongCode: 28140510,
    dongName: "인천광역시 동구 만석동",
  },
  {
    dongCode: 28140525,
    dongName: "인천광역시 동구 화수1.화평동",
  },
  {
    dongCode: 28140530,
    dongName: "인천광역시 동구 화수2동",
  },
  {
    dongCode: 28140555,
    dongName: "인천광역시 동구 송현1.2동",
  },
  {
    dongCode: 28140570,
    dongName: "인천광역시 동구 송현3동",
  },
  {
    dongCode: 28140580,
    dongName: "인천광역시 동구 송림1동",
  },
  {
    dongCode: 28140590,
    dongName: "인천광역시 동구 송림2동",
  },
  {
    dongCode: 28140605,
    dongName: "인천광역시 동구 송림3.5동",
  },
  {
    dongCode: 28140610,
    dongName: "인천광역시 동구 송림4동",
  },
  {
    dongCode: 28140630,
    dongName: "인천광역시 동구 송림6동",
  },
  {
    dongCode: 28140640,
    dongName: "인천광역시 동구 금창동",
  },
  {
    dongCode: 28177510,
    dongName: "인천광역시 미추홀구 숭의2동",
  },
  {
    dongCode: 28177520,
    dongName: "인천광역시 미추홀구 숭의1.3동",
  },
  {
    dongCode: 28177530,
    dongName: "인천광역시 미추홀구 숭의4동",
  },
  {
    dongCode: 28177540,
    dongName: "인천광역시 미추홀구 용현1.4동",
  },
  {
    dongCode: 28177550,
    dongName: "인천광역시 미추홀구 용현2동",
  },
  {
    dongCode: 28177560,
    dongName: "인천광역시 미추홀구 용현3동",
  },
  {
    dongCode: 28177570,
    dongName: "인천광역시 미추홀구 용현5동",
  },
  {
    dongCode: 28177580,
    dongName: "인천광역시 미추홀구 학익1동",
  },
  {
    dongCode: 28177590,
    dongName: "인천광역시 미추홀구 학익2동",
  },
  {
    dongCode: 28177600,
    dongName: "인천광역시 미추홀구 도화1동",
  },
  {
    dongCode: 28177610,
    dongName: "인천광역시 미추홀구 도화2.3동",
  },
  {
    dongCode: 28177620,
    dongName: "인천광역시 미추홀구 주안1동",
  },
  {
    dongCode: 28177630,
    dongName: "인천광역시 미추홀구 주안2동",
  },
  {
    dongCode: 28177640,
    dongName: "인천광역시 미추홀구 주안3동",
  },
  {
    dongCode: 28177650,
    dongName: "인천광역시 미추홀구 주안4동",
  },
  {
    dongCode: 28177660,
    dongName: "인천광역시 미추홀구 주안5동",
  },
  {
    dongCode: 28177670,
    dongName: "인천광역시 미추홀구 주안6동",
  },
  {
    dongCode: 28177680,
    dongName: "인천광역시 미추홀구 주안7동",
  },
  {
    dongCode: 28177690,
    dongName: "인천광역시 미추홀구 주안8동",
  },
  {
    dongCode: 28177700,
    dongName: "인천광역시 미추홀구 관교동",
  },
  {
    dongCode: 28177710,
    dongName: "인천광역시 미추홀구 문학동",
  },
  {
    dongCode: 28185630,
    dongName: "인천광역시 연수구 옥련1동",
  },
  {
    dongCode: 28185640,
    dongName: "인천광역시 연수구 옥련2동",
  },
  {
    dongCode: 28185750,
    dongName: "인천광역시 연수구 선학동",
  },
  {
    dongCode: 28185761,
    dongName: "인천광역시 연수구 연수1동",
  },
  {
    dongCode: 28185762,
    dongName: "인천광역시 연수구 연수2동",
  },
  {
    dongCode: 28185763,
    dongName: "인천광역시 연수구 연수3동",
  },
  {
    dongCode: 28185766,
    dongName: "인천광역시 연수구 청학동",
  },
  {
    dongCode: 28185780,
    dongName: "인천광역시 연수구 동춘1동",
  },
  {
    dongCode: 28185790,
    dongName: "인천광역시 연수구 동춘2동",
  },
  {
    dongCode: 28185795,
    dongName: "인천광역시 연수구 동춘3동",
  },
  {
    dongCode: 28185820,
    dongName: "인천광역시 연수구 송도1동",
  },
  {
    dongCode: 28185830,
    dongName: "인천광역시 연수구 송도2동",
  },
  {
    dongCode: 28185840,
    dongName: "인천광역시 연수구 송도3동",
  },
  {
    dongCode: 28185850,
    dongName: "인천광역시 연수구 송도4동",
  },
  {
    dongCode: 28185860,
    dongName: "인천광역시 연수구 송도5동",
  },
  {
    dongCode: 28200510,
    dongName: "인천광역시 남동구 구월1동",
  },
  {
    dongCode: 28200520,
    dongName: "인천광역시 남동구 구월2동",
  },
  {
    dongCode: 28200521,
    dongName: "인천광역시 남동구 구월3동",
  },
  {
    dongCode: 28200522,
    dongName: "인천광역시 남동구 구월4동",
  },
  {
    dongCode: 28200530,
    dongName: "인천광역시 남동구 간석1동",
  },
  {
    dongCode: 28200540,
    dongName: "인천광역시 남동구 간석2동",
  },
  {
    dongCode: 28200550,
    dongName: "인천광역시 남동구 간석3동",
  },
  {
    dongCode: 28200551,
    dongName: "인천광역시 남동구 간석4동",
  },
  {
    dongCode: 28200560,
    dongName: "인천광역시 남동구 만수1동",
  },
  {
    dongCode: 28200570,
    dongName: "인천광역시 남동구 만수2동",
  },
  {
    dongCode: 28200580,
    dongName: "인천광역시 남동구 만수3동",
  },
  {
    dongCode: 28200581,
    dongName: "인천광역시 남동구 만수4동",
  },
  {
    dongCode: 28200582,
    dongName: "인천광역시 남동구 만수5동",
  },
  {
    dongCode: 29110710,
    dongName: "광주광역시 동구 학운동",
  },
  {
    dongCode: 29110730,
    dongName: "광주광역시 동구 지원1동",
  },
  {
    dongCode: 29110740,
    dongName: "광주광역시 동구 지원2동",
  },
  {
    dongCode: 29140575,
    dongName: "광주광역시 서구 양동",
  },
  {
    dongCode: 29140590,
    dongName: "광주광역시 서구 양3동",
  },
  {
    dongCode: 29140650,
    dongName: "광주광역시 서구 농성1동",
  },
  {
    dongCode: 29140660,
    dongName: "광주광역시 서구 농성2동",
  },
  {
    dongCode: 29140730,
    dongName: "광주광역시 서구 광천동",
  },
  {
    dongCode: 29140740,
    dongName: "광주광역시 서구 유덕동",
  },
  {
    dongCode: 29140745,
    dongName: "광주광역시 서구 치평동",
  },
  {
    dongCode: 29140751,
    dongName: "광주광역시 서구 상무1동",
  },
  {
    dongCode: 29140752,
    dongName: "광주광역시 서구 상무2동",
  },
  {
    dongCode: 29140760,
    dongName: "광주광역시 서구 화정1동",
  },
  {
    dongCode: 29140770,
    dongName: "광주광역시 서구 화정2동",
  },
  {
    dongCode: 29140780,
    dongName: "광주광역시 서구 화정3동",
  },
  {
    dongCode: 29140790,
    dongName: "광주광역시 서구 화정4동",
  },
  {
    dongCode: 29140800,
    dongName: "광주광역시 서구 서창동",
  },
  {
    dongCode: 29140821,
    dongName: "광주광역시 서구 금호1동",
  },
  {
    dongCode: 29140824,
    dongName: "광주광역시 서구 금호2동",
  },
  {
    dongCode: 29140830,
    dongName: "광주광역시 서구 풍암동",
  },
  {
    dongCode: 29140840,
    dongName: "광주광역시 서구 동천동",
  },
  {
    dongCode: 29155510,
    dongName: "광주광역시 남구 양림동",
  },
  {
    dongCode: 29155520,
    dongName: "광주광역시 남구 방림1동",
  },
  {
    dongCode: 29155530,
    dongName: "광주광역시 남구 방림2동",
  },
  {
    dongCode: 29155537,
    dongName: "광주광역시 남구 봉선1동",
  },
  {
    dongCode: 29155538,
    dongName: "광주광역시 남구 봉선2동",
  },
  {
    dongCode: 29155545,
    dongName: "광주광역시 남구 사직동",
  },
  {
    dongCode: 29155605,
    dongName: "광주광역시 남구 월산동",
  },
  {
    dongCode: 29155630,
    dongName: "광주광역시 남구 월산4동",
  },
  {
    dongCode: 29155640,
    dongName: "광주광역시 남구 월산5동",
  },
  {
    dongCode: 29155670,
    dongName: "광주광역시 남구 백운1동",
  },
  {
    dongCode: 29155680,
    dongName: "광주광역시 남구 백운2동",
  },
  {
    dongCode: 29155690,
    dongName: "광주광역시 남구 주월1동",
  },
  {
    dongCode: 29155700,
    dongName: "광주광역시 남구 주월2동",
  },
  {
    dongCode: 29155705,
    dongName: "광주광역시 남구 진월동",
  },
  {
    dongCode: 29155710,
    dongName: "광주광역시 남구 효덕동",
  },
  {
    dongCode: 29155720,
    dongName: "광주광역시 남구 송암동",
  },
  {
    dongCode: 29155730,
    dongName: "광주광역시 남구 대촌동",
  },
  {
    dongCode: 29170510,
    dongName: "광주광역시 북구 중흥1동",
  },
  {
    dongCode: 29170520,
    dongName: "광주광역시 북구 중흥2동",
  },
  {
    dongCode: 29170530,
    dongName: "광주광역시 북구 중흥3동",
  },
  {
    dongCode: 29170555,
    dongName: "광주광역시 북구 중앙동",
  },
  {
    dongCode: 29170570,
    dongName: "광주광역시 북구 임동",
  },
  {
    dongCode: 29170580,
    dongName: "광주광역시 북구 신안동",
  },
  {
    dongCode: 29170590,
    dongName: "광주광역시 북구 용봉동",
  },
  {
    dongCode: 29170601,
    dongName: "광주광역시 북구 운암1동",
  },
  {
    dongCode: 29170602,
    dongName: "광주광역시 북구 운암2동",
  },
  {
    dongCode: 29170603,
    dongName: "광주광역시 북구 운암3동",
  },
  {
    dongCode: 29170615,
    dongName: "광주광역시 북구 동림동",
  },
  {
    dongCode: 29170620,
    dongName: "광주광역시 북구 우산동",
  },
  {
    dongCode: 29170635,
    dongName: "광주광역시 북구 풍향동",
  },
  {
    dongCode: 29170650,
    dongName: "광주광역시 북구 문화동",
  },
  {
    dongCode: 29170656,
    dongName: "광주광역시 북구 문흥1동",
  },
  {
    dongCode: 29170657,
    dongName: "광주광역시 북구 문흥2동",
  },
  {
    dongCode: 29170661,
    dongName: "광주광역시 북구 두암1동",
  },
  {
    dongCode: 29170662,
    dongName: "광주광역시 북구 두암2동",
  },
  {
    dongCode: 29170663,
    dongName: "광주광역시 북구 두암3동",
  },
  {
    dongCode: 29170666,
    dongName: "광주광역시 북구 삼각동",
  },
  {
    dongCode: 29170669,
    dongName: "광주광역시 북구 일곡동",
  },
  {
    dongCode: 29170673,
    dongName: "광주광역시 북구 매곡동",
  },
  {
    dongCode: 29170676,
    dongName: "광주광역시 북구 오치1동",
  },
  {
    dongCode: 29170677,
    dongName: "광주광역시 북구 오치2동",
  },
  {
    dongCode: 29170685,
    dongName: "광주광역시 북구 석곡동",
  },
  {
    dongCode: 29170695,
    dongName: "광주광역시 북구 건국동",
  },
  {
    dongCode: 29170696,
    dongName: "광주광역시 북구 양산동",
  },
  {
    dongCode: 29170697,
    dongName: "광주광역시 북구 신용동",
  },
  {
    dongCode: 29200515,
    dongName: "광주광역시 광산구 송정1동",
  },
  {
    dongCode: 29200525,
    dongName: "광주광역시 광산구 송정2동",
  },
  {
    dongCode: 29200540,
    dongName: "광주광역시 광산구 도산동",
  },
  {
    dongCode: 29200550,
    dongName: "광주광역시 광산구 신흥동",
  },
  {
    dongCode: 29200565,
    dongName: "광주광역시 광산구 어룡동",
  },
  {
    dongCode: 29200580,
    dongName: "광주광역시 광산구 우산동",
  },
  {
    dongCode: 29200600,
    dongName: "광주광역시 광산구 월곡1동",
  },
  {
    dongCode: 29200610,
    dongName: "광주광역시 광산구 월곡2동",
  },
  {
    dongCode: 29200620,
    dongName: "광주광역시 광산구 비아동",
  },
  {
    dongCode: 29200624,
    dongName: "광주광역시 광산구 첨단1동",
  },
  {
    dongCode: 29200626,
    dongName: "광주광역시 광산구 첨단2동",
  },
  {
    dongCode: 29200630,
    dongName: "광주광역시 광산구 신가동",
  },
  {
    dongCode: 29200635,
    dongName: "광주광역시 광산구 운남동",
  },
  {
    dongCode: 29200637,
    dongName: "광주광역시 광산구 수완동",
  },
  {
    dongCode: 29200640,
    dongName: "광주광역시 광산구 하남동",
  },
  {
    dongCode: 29200650,
    dongName: "광주광역시 광산구 임곡동",
  },
  {
    dongCode: 29200660,
    dongName: "광주광역시 광산구 동곡동",
  },
  {
    dongCode: 29200670,
    dongName: "광주광역시 광산구 평동",
  },
  {
    dongCode: 29200680,
    dongName: "광주광역시 광산구 삼도동",
  },
  {
    dongCode: 29200690,
    dongName: "광주광역시 광산구 본량동",
  },
  {
    dongCode: 29200700,
    dongName: "광주광역시 광산구 신창동",
  },
  {
    dongCode: 30110515,
    dongName: "대전광역시 동구 중앙동",
  },
  {
    dongCode: 30110530,
    dongName: "대전광역시 동구 효동",
  },
  {
    dongCode: 30110545,
    dongName: "대전광역시 동구 신인동",
  },
  {
    dongCode: 30110551,
    dongName: "대전광역시 동구 판암1동",
  },
  {
    dongCode: 30110552,
    dongName: "대전광역시 동구 판암2동",
  },
  {
    dongCode: 30110560,
    dongName: "대전광역시 동구 용운동",
  },
  {
    dongCode: 30110585,
    dongName: "대전광역시 동구 대동",
  },
  {
    dongCode: 30110590,
    dongName: "대전광역시 동구 자양동",
  },
  {
    dongCode: 30110620,
    dongName: "대전광역시 동구 가양1동",
  },
  {
    dongCode: 30110630,
    dongName: "대전광역시 동구 가양2동",
  },
  {
    dongCode: 30110640,
    dongName: "대전광역시 동구 용전동",
  },
  {
    dongCode: 30110665,
    dongName: "대전광역시 동구 성남동",
  },
  {
    dongCode: 30110670,
    dongName: "대전광역시 동구 홍도동",
  },
  {
    dongCode: 30110695,
    dongName: "대전광역시 동구 삼성동",
  },
  {
    dongCode: 30110725,
    dongName: "대전광역시 동구 대청동",
  },
  {
    dongCode: 30110740,
    dongName: "대전광역시 동구 산내동",
  },
  {
    dongCode: 30140535,
    dongName: "대전광역시 중구 은행선화동",
  },
  {
    dongCode: 30140550,
    dongName: "대전광역시 중구 목동",
  },
  {
    dongCode: 30140560,
    dongName: "대전광역시 중구 중촌동",
  },
  {
    dongCode: 30140575,
    dongName: "대전광역시 중구 대흥동",
  },
  {
    dongCode: 30140605,
    dongName: "대전광역시 중구 문창동",
  },
  {
    dongCode: 30140620,
    dongName: "대전광역시 중구 석교동",
  },
  {
    dongCode: 30140630,
    dongName: "대전광역시 중구 대사동",
  },
  {
    dongCode: 30140640,
    dongName: "대전광역시 중구 부사동",
  },
  {
    dongCode: 30140655,
    dongName: "대전광역시 중구 용두동",
  },
  {
    dongCode: 30140670,
    dongName: "대전광역시 중구 오류동",
  },
  {
    dongCode: 30140680,
    dongName: "대전광역시 중구 태평1동",
  },
  {
    dongCode: 30140690,
    dongName: "대전광역시 중구 태평2동",
  },
  {
    dongCode: 30140700,
    dongName: "대전광역시 중구 유천1동",
  },
  {
    dongCode: 30140710,
    dongName: "대전광역시 중구 유천2동",
  },
  {
    dongCode: 30140720,
    dongName: "대전광역시 중구 문화1동",
  },
  {
    dongCode: 30140730,
    dongName: "대전광역시 중구 문화2동",
  },
  {
    dongCode: 30140740,
    dongName: "대전광역시 중구 산성동",
  },
  {
    dongCode: 30170510,
    dongName: "대전광역시 서구 복수동",
  },
  {
    dongCode: 30170520,
    dongName: "대전광역시 서구 도마1동",
  },
  {
    dongCode: 30170530,
    dongName: "대전광역시 서구 도마2동",
  },
  {
    dongCode: 30170535,
    dongName: "대전광역시 서구 정림동",
  },
  {
    dongCode: 30170540,
    dongName: "대전광역시 서구 변동",
  },
  {
    dongCode: 30170550,
    dongName: "대전광역시 서구 용문동",
  },
  {
    dongCode: 30170555,
    dongName: "대전광역시 서구 탄방동",
  },
  {
    dongCode: 30170560,
    dongName: "대전광역시 서구 괴정동",
  },
  {
    dongCode: 30170570,
    dongName: "대전광역시 서구 가장동",
  },
  {
    dongCode: 30170575,
    dongName: "대전광역시 서구 내동",
  },
  {
    dongCode: 30170581,
    dongName: "대전광역시 서구 갈마1동",
  },
  {
    dongCode: 30170582,
    dongName: "대전광역시 서구 갈마2동",
  },
  {
    dongCode: 30170586,
    dongName: "대전광역시 서구 월평1동",
  },
  {
    dongCode: 30170587,
    dongName: "대전광역시 서구 월평2동",
  },
  {
    dongCode: 30170588,
    dongName: "대전광역시 서구 월평3동",
  },
  {
    dongCode: 30170590,
    dongName: "대전광역시 서구 가수원동",
  },
  {
    dongCode: 30170593,
    dongName: "대전광역시 서구 도안동",
  },
  {
    dongCode: 30170596,
    dongName: "대전광역시 서구 관저1동",
  },
  {
    dongCode: 30170597,
    dongName: "대전광역시 서구 관저2동",
  },
  {
    dongCode: 30170600,
    dongName: "대전광역시 서구 기성동",
  },
  {
    dongCode: 30170630,
    dongName: "대전광역시 서구 둔산1동",
  },
  {
    dongCode: 30170640,
    dongName: "대전광역시 서구 둔산2동",
  },
  {
    dongCode: 30170650,
    dongName: "대전광역시 서구 만년동",
  },
  {
    dongCode: 30170660,
    dongName: "대전광역시 서구 둔산3동",
  },
  {
    dongCode: 30200520,
    dongName: "대전광역시 유성구 진잠동",
  },
  {
    dongCode: 30200526,
    dongName: "대전광역시 유성구 학하동",
  },
  {
    dongCode: 30200527,
    dongName: "대전광역시 유성구 상대동",
  },
  {
    dongCode: 30200530,
    dongName: "대전광역시 유성구 온천1동",
  },
  {
    dongCode: 30200540,
    dongName: "대전광역시 유성구 온천2동",
  },
  {
    dongCode: 30200546,
    dongName: "대전광역시 유성구 노은1동",
  },
  {
    dongCode: 30200547,
    dongName: "대전광역시 유성구 노은2동",
  },
  {
    dongCode: 30200548,
    dongName: "대전광역시 유성구 노은3동",
  },
  {
    dongCode: 30200550,
    dongName: "대전광역시 유성구 신성동",
  },
  {
    dongCode: 30200570,
    dongName: "대전광역시 유성구 전민동",
  },
  {
    dongCode: 30200580,
    dongName: "대전광역시 유성구 구즉동",
  },
  {
    dongCode: 30200600,
    dongName: "대전광역시 유성구 관평동",
  },
  {
    dongCode: 30200610,
    dongName: "대전광역시 유성구 원신흥동",
  },
  {
    dongCode: 30230510,
    dongName: "대전광역시 대덕구 오정동",
  },
  {
    dongCode: 30230520,
    dongName: "대전광역시 대덕구 대화동",
  },
  {
    dongCode: 30230525,
    dongName: "대전광역시 대덕구 회덕동",
  },
  {
    dongCode: 30230533,
    dongName: "대전광역시 대덕구 비래동",
  },
  {
    dongCode: 30230543,
    dongName: "대전광역시 대덕구 송촌동",
  },
  {
    dongCode: 30230546,
    dongName: "대전광역시 대덕구 중리동",
  },
  {
    dongCode: 30230550,
    dongName: "대전광역시 대덕구 신탄진동",
  },
  {
    dongCode: 30230560,
    dongName: "대전광역시 대덕구 석봉동",
  },
  {
    dongCode: 30230570,
    dongName: "대전광역시 대덕구 덕암동",
  },
  {
    dongCode: 30230580,
    dongName: "대전광역시 대덕구 목상동",
  },
  {
    dongCode: 30230600,
    dongName: "대전광역시 대덕구 법1동",
  },
  {
    dongCode: 30230610,
    dongName: "대전광역시 대덕구 법2동",
  },
  {
    dongCode: 31110510,
    dongName: "울산광역시 중구 학성동",
  },
  {
    dongCode: 31110520,
    dongName: "울산광역시 중구 반구1동",
  },
  {
    dongCode: 31110530,
    dongName: "울산광역시 중구 반구2동",
  },
  {
    dongCode: 31110540,
    dongName: "울산광역시 중구 복산1동",
  },
  {
    dongCode: 31110550,
    dongName: "울산광역시 중구 복산2동",
  },
  {
    dongCode: 31110585,
    dongName: "울산광역시 중구 중앙동",
  },
  {
    dongCode: 31110590,
    dongName: "울산광역시 중구 우정동",
  },
  {
    dongCode: 31110600,
    dongName: "울산광역시 중구 태화동",
  },
  {
    dongCode: 31110610,
    dongName: "울산광역시 중구 다운동",
  },
  {
    dongCode: 31110620,
    dongName: "울산광역시 중구 병영1동",
  },
  {
    dongCode: 31110630,
    dongName: "울산광역시 중구 병영2동",
  },
  {
    dongCode: 31110640,
    dongName: "울산광역시 중구 약사동",
  },
  {
    dongCode: 31110650,
    dongName: "울산광역시 중구 성안동",
  },
  {
    dongCode: 31140510,
    dongName: "울산광역시 남구 신정1동",
  },
  {
    dongCode: 31140520,
    dongName: "울산광역시 남구 신정2동",
  },
  {
    dongCode: 31140530,
    dongName: "울산광역시 남구 신정3동",
  },
  {
    dongCode: 31140540,
    dongName: "울산광역시 남구 신정4동",
  },
  {
    dongCode: 31140550,
    dongName: "울산광역시 남구 신정5동",
  },
  {
    dongCode: 31140560,
    dongName: "울산광역시 남구 달동",
  },
  {
    dongCode: 31140570,
    dongName: "울산광역시 남구 삼산동",
  },
  {
    dongCode: 31140585,
    dongName: "울산광역시 남구 삼호동",
  },
  {
    dongCode: 31140595,
    dongName: "울산광역시 남구 무거동",
  },
  {
    dongCode: 31140600,
    dongName: "울산광역시 남구 옥동",
  },
  {
    dongCode: 31140625,
    dongName: "울산광역시 남구 대현동",
  },
  {
    dongCode: 31140635,
    dongName: "울산광역시 남구 수암동",
  },
  {
    dongCode: 31140640,
    dongName: "울산광역시 남구 선암동",
  },
  {
    dongCode: 31140670,
    dongName: "울산광역시 남구 야음장생포동",
  },
  {
    dongCode: 31170510,
    dongName: "울산광역시 동구 방어동",
  },
  {
    dongCode: 31170520,
    dongName: "울산광역시 동구 일산동",
  },
  {
    dongCode: 31170530,
    dongName: "울산광역시 동구 화정동",
  },
  {
    dongCode: 31170540,
    dongName: "울산광역시 동구 대송동",
  },
  {
    dongCode: 31170550,
    dongName: "울산광역시 동구 전하1동",
  },
  {
    dongCode: 31170560,
    dongName: "울산광역시 동구 전하2동",
  },
  {
    dongCode: 31170580,
    dongName: "울산광역시 동구 남목1동",
  },
  {
    dongCode: 31170590,
    dongName: "울산광역시 동구 남목2동",
  },
  {
    dongCode: 31170600,
    dongName: "울산광역시 동구 남목3동",
  },
  {
    dongCode: 31200510,
    dongName: "울산광역시 북구 농소1동",
  },
  {
    dongCode: 31200520,
    dongName: "울산광역시 북구 농소2동",
  },
  {
    dongCode: 31200530,
    dongName: "울산광역시 북구 농소3동",
  },
  {
    dongCode: 31200540,
    dongName: "울산광역시 북구 강동동",
  },
  {
    dongCode: 31200560,
    dongName: "울산광역시 북구 효문동",
  },
  {
    dongCode: 31200570,
    dongName: "울산광역시 북구 송정동",
  },
  {
    dongCode: 31200580,
    dongName: "울산광역시 북구 양정동",
  },
  {
    dongCode: 31200590,
    dongName: "울산광역시 북구 염포동",
  },
  {
    dongCode: 31710250,
    dongName: "울산광역시 울주군 온산읍",
  },
  {
    dongCode: 31710253,
    dongName: "울산광역시 울주군 언양읍",
  },
  {
    dongCode: 31710256,
    dongName: "울산광역시 울주군 온양읍",
  },
  {
    dongCode: 31710259,
    dongName: "울산광역시 울주군 범서읍",
  },
  {
    dongCode: 31710262,
    dongName: "울산광역시 울주군 청량읍",
  },
  {
    dongCode: 31710265,
    dongName: "울산광역시 울주군 삼남읍",
  },
  {
    dongCode: 31710310,
    dongName: "울산광역시 울주군 서생면",
  },
  {
    dongCode: 31710340,
    dongName: "울산광역시 울주군 웅촌면",
  },
  {
    dongCode: 31710360,
    dongName: "울산광역시 울주군 두동면",
  },
  {
    dongCode: 31710370,
    dongName: "울산광역시 울주군 두서면",
  },
  {
    dongCode: 41210510,
    dongName: "경기도 광명시 광명1동",
  },
  {
    dongCode: 41210520,
    dongName: "경기도 광명시 광명2동",
  },
  {
    dongCode: 41210540,
    dongName: "경기도 광명시 광명3동",
  },
  {
    dongCode: 41210550,
    dongName: "경기도 광명시 광명4동",
  },
  {
    dongCode: 41210560,
    dongName: "경기도 광명시 광명5동",
  },
  {
    dongCode: 41210570,
    dongName: "경기도 광명시 광명6동",
  },
  {
    dongCode: 41210580,
    dongName: "경기도 광명시 광명7동",
  },
  {
    dongCode: 41210590,
    dongName: "경기도 광명시 철산1동",
  },
  {
    dongCode: 41210600,
    dongName: "경기도 광명시 철산2동",
  },
  {
    dongCode: 41210610,
    dongName: "경기도 광명시 철산3동",
  },
  {
    dongCode: 41210620,
    dongName: "경기도 광명시 철산4동",
  },
  {
    dongCode: 41210631,
    dongName: "경기도 광명시 하안1동",
  },
  {
    dongCode: 41210632,
    dongName: "경기도 광명시 하안2동",
  },
  {
    dongCode: 41210633,
    dongName: "경기도 광명시 하안3동",
  },
  {
    dongCode: 41210634,
    dongName: "경기도 광명시 하안4동",
  },
  {
    dongCode: 41210640,
    dongName: "경기도 광명시 소하1동",
  },
  {
    dongCode: 41210650,
    dongName: "경기도 광명시 소하2동",
  },
  {
    dongCode: 41210655,
    dongName: "경기도 광명시 일직동",
  },
  {
    dongCode: 41210660,
    dongName: "경기도 광명시 학온동",
  },
  {
    dongCode: 41220250,
    dongName: "경기도 평택시 팽성읍",
  },
  {
    dongCode: 41220253,
    dongName: "경기도 평택시 안중읍",
  },
  {
    dongCode: 41220256,
    dongName: "경기도 평택시 포승읍",
  },
  {
    dongCode: 41220259,
    dongName: "경기도 평택시 청북읍",
  },
  {
    dongCode: 41220310,
    dongName: "경기도 평택시 진위면",
  },
  {
    dongCode: 41220320,
    dongName: "경기도 평택시 서탄면",
  },
  {
    dongCode: 41220330,
    dongName: "경기도 평택시 고덕면",
  },
  {
    dongCode: 41220340,
    dongName: "경기도 평택시 오성면",
  },
  {
    dongCode: 41220370,
    dongName: "경기도 평택시 현덕면",
  },
  {
    dongCode: 41220510,
    dongName: "경기도 평택시 중앙동",
  },
  {
    dongCode: 41220520,
    dongName: "경기도 평택시 서정동",
  },
  {
    dongCode: 41220535,
    dongName: "경기도 평택시 송탄동",
  },
  {
    dongCode: 41220550,
    dongName: "경기도 평택시 지산동",
  },
  {
    dongCode: 41220560,
    dongName: "경기도 평택시 송북동",
  },
  {
    dongCode: 41220570,
    dongName: "경기도 평택시 신장1동",
  },
  {
    dongCode: 41220580,
    dongName: "경기도 평택시 신장2동",
  },
  {
    dongCode: 41220590,
    dongName: "경기도 평택시 신평동",
  },
  {
    dongCode: 41220600,
    dongName: "경기도 평택시 원평동",
  },
  {
    dongCode: 41220610,
    dongName: "경기도 평택시 통복동",
  },
  {
    dongCode: 41220620,
    dongName: "경기도 평택시 비전1동",
  },
  {
    dongCode: 41220630,
    dongName: "경기도 평택시 비전2동",
  },
  {
    dongCode: 41220635,
    dongName: "경기도 평택시 용이동",
  },
  {
    dongCode: 41220640,
    dongName: "경기도 평택시 세교동",
  },
  {
    dongCode: 41220650,
    dongName: "경기도 평택시 동삭동",
  },
  {
    dongCode: 41220660,
    dongName: "경기도 평택시 고덕동",
  },
  {
    dongCode: 41250510,
    dongName: "경기도 동두천시 생연1동",
  },
  {
    dongCode: 41250520,
    dongName: "경기도 동두천시 생연2동",
  },
  {
    dongCode: 41250535,
    dongName: "경기도 동두천시 중앙동",
  },
  {
    dongCode: 41250550,
    dongName: "경기도 동두천시 보산동",
  },
  {
    dongCode: 41250565,
    dongName: "경기도 동두천시 불현동",
  },
  {
    dongCode: 41250566,
    dongName: "경기도 동두천시 송내동",
  },
  {
    dongCode: 41250580,
    dongName: "경기도 동두천시 소요동",
  },
  {
    dongCode: 41250600,
    dongName: "경기도 동두천시 상패동",
  },
  {
    dongCode: 41271510,
    dongName: "경기도 안산시 일동",
  },
  {
    dongCode: 41271515,
    dongName: "경기도 안산시 이동",
  },
  {
    dongCode: 41271525,
    dongName: "경기도 안산시 사동",
  },
  {
    dongCode: 41271532,
    dongName: "경기도 안산시 사이동",
  },
  {
    dongCode: 41271537,
    dongName: "경기도 안산시 해양동",
  },
  {
    dongCode: 41271540,
    dongName: "경기도 안산시 본오1동",
  },
  {
    dongCode: 41271550,
    dongName: "경기도 안산시 본오2동",
  },
  {
    dongCode: 41271560,
    dongName: "경기도 안산시 본오3동",
  },
  {
    dongCode: 41271570,
    dongName: "경기도 안산시 부곡동",
  },
  {
    dongCode: 41271580,
    dongName: "경기도 안산시 월피동",
  },
  {
    dongCode: 41271590,
    dongName: "경기도 안산시 성포동",
  },
  {
    dongCode: 41271600,
    dongName: "경기도 안산시 반월동",
  },
  {
    dongCode: 41271610,
    dongName: "경기도 안산시 안산동",
  },
  {
    dongCode: 41273510,
    dongName: "경기도 안산시 와동",
  },
  {
    dongCode: 41273525,
    dongName: "경기도 안산시 고잔동",
  },
  {
    dongCode: 41273532,
    dongName: "경기도 안산시 중앙동",
  },
  {
    dongCode: 41273535,
    dongName: "경기도 안산시 호수동",
  },
  {
    dongCode: 41273545,
    dongName: "경기도 안산시 원곡동",
  },
  {
    dongCode: 41273555,
    dongName: "경기도 안산시 백운동",
  },
  {
    dongCode: 41273565,
    dongName: "경기도 안산시 신길동",
  },
  {
    dongCode: 41273570,
    dongName: "경기도 안산시 초지동",
  },
  {
    dongCode: 41273580,
    dongName: "경기도 안산시 선부1동",
  },
  {
    dongCode: 41273590,
    dongName: "경기도 안산시 선부2동",
  },
  {
    dongCode: 41273600,
    dongName: "경기도 안산시 선부3동",
  },
  {
    dongCode: 41273610,
    dongName: "경기도 안산시 대부동",
  },
  {
    dongCode: 31710380,
    dongName: "울산광역시 울주군 상북면",
  },
  {
    dongCode: 31710400,
    dongName: "울산광역시 울주군 삼동면",
  },
  {
    dongCode: 36110250,
    dongName: "세종특별자치시 세종시 조치원읍",
  },
  {
    dongCode: 36110310,
    dongName: "세종특별자치시 세종시 연기면",
  },
  {
    dongCode: 36110320,
    dongName: "세종특별자치시 세종시 연동면",
  },
  {
    dongCode: 36110330,
    dongName: "세종특별자치시 세종시 부강면",
  },
  {
    dongCode: 36110340,
    dongName: "세종특별자치시 세종시 금남면",
  },
  {
    dongCode: 36110350,
    dongName: "세종특별자치시 세종시 장군면",
  },
  {
    dongCode: 36110360,
    dongName: "세종특별자치시 세종시 연서면",
  },
  {
    dongCode: 36110370,
    dongName: "세종특별자치시 세종시 전의면",
  },
  {
    dongCode: 36110380,
    dongName: "세종특별자치시 세종시 전동면",
  },
  {
    dongCode: 36110390,
    dongName: "세종특별자치시 세종시 소정면",
  },
  {
    dongCode: 36110510,
    dongName: "세종특별자치시 세종시 한솔동",
  },
  {
    dongCode: 36110515,
    dongName: "세종특별자치시 세종시 새롬동",
  },
  {
    dongCode: 36110520,
    dongName: "세종특별자치시 세종시 도담동",
  },
  {
    dongCode: 36110525,
    dongName: "세종특별자치시 세종시 해밀동",
  },
  {
    dongCode: 36110530,
    dongName: "세종특별자치시 세종시 아름동",
  },
  {
    dongCode: 36110540,
    dongName: "세종특별자치시 세종시 종촌동",
  },
  {
    dongCode: 36110550,
    dongName: "세종특별자치시 세종시 고운동",
  },
  {
    dongCode: 36110555,
    dongName: "세종특별자치시 세종시 소담동",
  },
  {
    dongCode: 36110556,
    dongName: "세종특별자치시 세종시 반곡동",
  },
  {
    dongCode: 36110560,
    dongName: "세종특별자치시 세종시 보람동",
  },
  {
    dongCode: 36110570,
    dongName: "세종특별자치시 세종시 대평동",
  },
  {
    dongCode: 36110580,
    dongName: "세종특별자치시 세종시 다정동",
  },
  {
    dongCode: 41111560,
    dongName: "경기도 수원시 파장동",
  },
  {
    dongCode: 41111566,
    dongName: "경기도 수원시 율천동",
  },
  {
    dongCode: 41111571,
    dongName: "경기도 수원시 정자1동",
  },
  {
    dongCode: 41111572,
    dongName: "경기도 수원시 정자2동",
  },
  {
    dongCode: 41111573,
    dongName: "경기도 수원시 정자3동",
  },
  {
    dongCode: 41111580,
    dongName: "경기도 수원시 영화동",
  },
  {
    dongCode: 41111591,
    dongName: "경기도 수원시 송죽동",
  },
  {
    dongCode: 41111597,
    dongName: "경기도 수원시 조원1동",
  },
  {
    dongCode: 41111598,
    dongName: "경기도 수원시 조원2동",
  },
  {
    dongCode: 41111600,
    dongName: "경기도 수원시 연무동",
  },
  {
    dongCode: 41113520,
    dongName: "경기도 수원시 세류1동",
  },
  {
    dongCode: 41113530,
    dongName: "경기도 수원시 세류2동",
  },
  {
    dongCode: 41113540,
    dongName: "경기도 수원시 세류3동",
  },
  {
    dongCode: 41113550,
    dongName: "경기도 수원시 평동",
  },
  {
    dongCode: 41113560,
    dongName: "경기도 수원시 서둔동",
  },
  {
    dongCode: 41113650,
    dongName: "경기도 수원시 구운동",
  },
  {
    dongCode: 41113662,
    dongName: "경기도 수원시 금곡동",
  },
  {
    dongCode: 41113664,
    dongName: "경기도 수원시 호매실동",
  },
  {
    dongCode: 41113670,
    dongName: "경기도 수원시 권선1동",
  },
  {
    dongCode: 41113680,
    dongName: "경기도 수원시 권선2동",
  },
  {
    dongCode: 41113690,
    dongName: "경기도 수원시 곡선동",
  },
  {
    dongCode: 41113700,
    dongName: "경기도 수원시 입북동",
  },
  {
    dongCode: 41115650,
    dongName: "경기도 수원시 매교동",
  },
  {
    dongCode: 41115660,
    dongName: "경기도 수원시 매산동",
  },
  {
    dongCode: 41115670,
    dongName: "경기도 수원시 고등동",
  },
  {
    dongCode: 41115680,
    dongName: "경기도 수원시 화서1동",
  },
  {
    dongCode: 41115690,
    dongName: "경기도 수원시 화서2동",
  },
  {
    dongCode: 41115700,
    dongName: "경기도 수원시 지동",
  },
  {
    dongCode: 41115710,
    dongName: "경기도 수원시 우만1동",
  },
  {
    dongCode: 41115720,
    dongName: "경기도 수원시 우만2동",
  },
  {
    dongCode: 41115730,
    dongName: "경기도 수원시 인계동",
  },
  {
    dongCode: 41115740,
    dongName: "경기도 수원시 행궁동",
  },
  {
    dongCode: 41117510,
    dongName: "경기도 수원시 매탄1동",
  },
  {
    dongCode: 41117520,
    dongName: "경기도 수원시 매탄2동",
  },
  {
    dongCode: 41117530,
    dongName: "경기도 수원시 매탄3동",
  },
  {
    dongCode: 41117540,
    dongName: "경기도 수원시 매탄4동",
  },
  {
    dongCode: 41117550,
    dongName: "경기도 수원시 원천동",
  },
  {
    dongCode: 41117570,
    dongName: "경기도 수원시 영통1동",
  },
  {
    dongCode: 41117580,
    dongName: "경기도 수원시 영통2동",
  },
  {
    dongCode: 41117585,
    dongName: "경기도 수원시 영통3동",
  },
  {
    dongCode: 41117593,
    dongName: "경기도 수원시 망포1동",
  },
  {
    dongCode: 41117596,
    dongName: "경기도 수원시 망포2동",
  },
  {
    dongCode: 41117600,
    dongName: "경기도 수원시 광교1동",
  },
  {
    dongCode: 41117610,
    dongName: "경기도 수원시 광교2동",
  },
  {
    dongCode: 41131510,
    dongName: "경기도 성남시 신흥1동",
  },
  {
    dongCode: 41131520,
    dongName: "경기도 성남시 신흥2동",
  },
  {
    dongCode: 41131530,
    dongName: "경기도 성남시 신흥3동",
  },
  {
    dongCode: 41131540,
    dongName: "경기도 성남시 태평1동",
  },
  {
    dongCode: 41131550,
    dongName: "경기도 성남시 태평2동",
  },
  {
    dongCode: 41131560,
    dongName: "경기도 성남시 태평3동",
  },
  {
    dongCode: 41131561,
    dongName: "경기도 성남시 태평4동",
  },
  {
    dongCode: 41131570,
    dongName: "경기도 성남시 수진1동",
  },
  {
    dongCode: 41131580,
    dongName: "경기도 성남시 수진2동",
  },
  {
    dongCode: 41131590,
    dongName: "경기도 성남시 단대동",
  },
  {
    dongCode: 41131600,
    dongName: "경기도 성남시 산성동",
  },
  {
    dongCode: 41131610,
    dongName: "경기도 성남시 양지동",
  },
  {
    dongCode: 41131620,
    dongName: "경기도 성남시 복정동",
  },
  {
    dongCode: 41131625,
    dongName: "경기도 성남시 위례동",
  },
  {
    dongCode: 41131630,
    dongName: "경기도 성남시 신촌동",
  },
  {
    dongCode: 41131640,
    dongName: "경기도 성남시 고등동",
  },
  {
    dongCode: 41131650,
    dongName: "경기도 성남시 시흥동",
  },
  {
    dongCode: 41133510,
    dongName: "경기도 성남시 성남동",
  },
  {
    dongCode: 41133525,
    dongName: "경기도 성남시 중앙동",
  },
  {
    dongCode: 41133530,
    dongName: "경기도 성남시 금광1동",
  },
  {
    dongCode: 41133540,
    dongName: "경기도 성남시 금광2동",
  },
  {
    dongCode: 41133550,
    dongName: "경기도 성남시 은행1동",
  },
  {
    dongCode: 41133560,
    dongName: "경기도 성남시 은행2동",
  },
  {
    dongCode: 41133570,
    dongName: "경기도 성남시 상대원1동",
  },
  {
    dongCode: 41133580,
    dongName: "경기도 성남시 상대원2동",
  },
  {
    dongCode: 41133590,
    dongName: "경기도 성남시 상대원3동",
  },
  {
    dongCode: 41133660,
    dongName: "경기도 성남시 하대원동",
  },
  {
    dongCode: 41133670,
    dongName: "경기도 성남시 도촌동",
  },
  {
    dongCode: 41135510,
    dongName: "경기도 성남시 분당동",
  },
  {
    dongCode: 41135520,
    dongName: "경기도 성남시 수내1동",
  },
  {
    dongCode: 41135530,
    dongName: "경기도 성남시 수내2동",
  },
  {
    dongCode: 41135540,
    dongName: "경기도 성남시 수내3동",
  },
  {
    dongCode: 41135545,
    dongName: "경기도 성남시 정자동",
  },
  {
    dongCode: 41135550,
    dongName: "경기도 성남시 정자1동",
  },
  {
    dongCode: 41135560,
    dongName: "경기도 성남시 정자2동",
  },
  {
    dongCode: 41135570,
    dongName: "경기도 성남시 정자3동",
  },
  {
    dongCode: 41135580,
    dongName: "경기도 성남시 서현1동",
  },
  {
    dongCode: 41135590,
    dongName: "경기도 성남시 서현2동",
  },
  {
    dongCode: 41135600,
    dongName: "경기도 성남시 이매1동",
  },
  {
    dongCode: 41135610,
    dongName: "경기도 성남시 이매2동",
  },
  {
    dongCode: 41135620,
    dongName: "경기도 성남시 야탑1동",
  },
  {
    dongCode: 41135630,
    dongName: "경기도 성남시 야탑2동",
  },
  {
    dongCode: 41135640,
    dongName: "경기도 성남시 야탑3동",
  },
  {
    dongCode: 41135650,
    dongName: "경기도 성남시 판교동",
  },
  {
    dongCode: 41135655,
    dongName: "경기도 성남시 삼평동",
  },
  {
    dongCode: 41135657,
    dongName: "경기도 성남시 백현동",
  },
  {
    dongCode: 41135662,
    dongName: "경기도 성남시 금곡동",
  },
  {
    dongCode: 41135665,
    dongName: "경기도 성남시 구미1동",
  },
  {
    dongCode: 41135670,
    dongName: "경기도 성남시 구미동",
  },
  {
    dongCode: 41135680,
    dongName: "경기도 성남시 운중동",
  },
  {
    dongCode: 41150510,
    dongName: "경기도 의정부시 의정부1동",
  },
  {
    dongCode: 41150520,
    dongName: "경기도 의정부시 의정부2동",
  },
  {
    dongCode: 41150545,
    dongName: "경기도 의정부시 호원1동",
  },
  {
    dongCode: 41150555,
    dongName: "경기도 의정부시 호원2동",
  },
  {
    dongCode: 41150561,
    dongName: "경기도 의정부시 장암동",
  },
  {
    dongCode: 41150567,
    dongName: "경기도 의정부시 신곡1동",
  },
  {
    dongCode: 41150568,
    dongName: "경기도 의정부시 신곡2동",
  },
  {
    dongCode: 41150573,
    dongName: "경기도 의정부시 송산1동",
  },
  {
    dongCode: 41150576,
    dongName: "경기도 의정부시 송산2동",
  },
  {
    dongCode: 41150578,
    dongName: "경기도 의정부시 송산3동",
  },
  {
    dongCode: 41150580,
    dongName: "경기도 의정부시 자금동",
  },
  {
    dongCode: 41150595,
    dongName: "경기도 의정부시 가능동",
  },
  {
    dongCode: 41150615,
    dongName: "경기도 의정부시 흥선동",
  },
  {
    dongCode: 41150620,
    dongName: "경기도 의정부시 녹양동",
  },
  {
    dongCode: 41171510,
    dongName: "경기도 안양시 안양1동",
  },
  {
    dongCode: 41171520,
    dongName: "경기도 안양시 안양2동",
  },
  {
    dongCode: 41171530,
    dongName: "경기도 안양시 안양3동",
  },
  {
    dongCode: 41171540,
    dongName: "경기도 안양시 안양4동",
  },
  {
    dongCode: 41171550,
    dongName: "경기도 안양시 안양5동",
  },
  {
    dongCode: 41171560,
    dongName: "경기도 안양시 안양6동",
  },
  {
    dongCode: 41171570,
    dongName: "경기도 안양시 안양7동",
  },
  {
    dongCode: 41171580,
    dongName: "경기도 안양시 안양8동",
  },
  {
    dongCode: 41171581,
    dongName: "경기도 안양시 안양9동",
  },
  {
    dongCode: 41171590,
    dongName: "경기도 안양시 석수1동",
  },
  {
    dongCode: 41171600,
    dongName: "경기도 안양시 석수2동",
  },
  {
    dongCode: 41171610,
    dongName: "경기도 안양시 석수3동",
  },
  {
    dongCode: 41171621,
    dongName: "경기도 안양시 박달1동",
  },
  {
    dongCode: 41171630,
    dongName: "경기도 안양시 박달2동",
  },
  {
    dongCode: 41173510,
    dongName: "경기도 안양시 비산1동",
  },
  {
    dongCode: 41173520,
    dongName: "경기도 안양시 비산2동",
  },
  {
    dongCode: 41173530,
    dongName: "경기도 안양시 비산3동",
  },
  {
    dongCode: 41173540,
    dongName: "경기도 안양시 부흥동",
  },
  {
    dongCode: 41173546,
    dongName: "경기도 안양시 달안동",
  },
  {
    dongCode: 41173550,
    dongName: "경기도 안양시 관양1동",
  },
  {
    dongCode: 41173560,
    dongName: "경기도 안양시 관양2동",
  },
  {
    dongCode: 41173566,
    dongName: "경기도 안양시 부림동",
  },
  {
    dongCode: 41173570,
    dongName: "경기도 안양시 평촌동",
  },
  {
    dongCode: 41173576,
    dongName: "경기도 안양시 평안동",
  },
  {
    dongCode: 41173578,
    dongName: "경기도 안양시 귀인동",
  },
  {
    dongCode: 41173580,
    dongName: "경기도 안양시 호계1동",
  },
  {
    dongCode: 41173590,
    dongName: "경기도 안양시 호계2동",
  },
  {
    dongCode: 41173600,
    dongName: "경기도 안양시 호계3동",
  },
  {
    dongCode: 41173610,
    dongName: "경기도 안양시 범계동",
  },
  {
    dongCode: 41173620,
    dongName: "경기도 안양시 신촌동",
  },
  {
    dongCode: 41173630,
    dongName: "경기도 안양시 갈산동",
  },
  {
    dongCode: 41190603,
    dongName: "경기도 부천시 심곡동",
  },
  {
    dongCode: 41190606,
    dongName: "경기도 부천시 부천동",
  },
  {
    dongCode: 41190610,
    dongName: "경기도 부천시 중동",
  },
  {
    dongCode: 41190742,
    dongName: "경기도 부천시 신중동",
  },
  {
    dongCode: 41190744,
    dongName: "경기도 부천시 상동",
  },
  {
    dongCode: 41190746,
    dongName: "경기도 부천시 대산동",
  },
  {
    dongCode: 41190750,
    dongName: "경기도 부천시 소사본동",
  },
  {
    dongCode: 41190795,
    dongName: "경기도 부천시 범안동",
  },
  {
    dongCode: 41190800,
    dongName: "경기도 부천시 성곡동",
  },
  {
    dongCode: 41190830,
    dongName: "경기도 부천시 오정동",
  },
  {
    dongCode: 28200583,
    dongName: "인천광역시 남동구 만수6동",
  },
  {
    dongCode: 28200650,
    dongName: "인천광역시 남동구 장수서창동",
  },
  {
    dongCode: 28200655,
    dongName: "인천광역시 남동구 서창2동",
  },
  {
    dongCode: 28200660,
    dongName: "인천광역시 남동구 남촌도림동",
  },
  {
    dongCode: 28200690,
    dongName: "인천광역시 남동구 논현1동",
  },
  {
    dongCode: 28200700,
    dongName: "인천광역시 남동구 논현2동",
  },
  {
    dongCode: 28200710,
    dongName: "인천광역시 남동구 논현고잔동",
  },
  {
    dongCode: 28237510,
    dongName: "인천광역시 부평구 부평1동",
  },
  {
    dongCode: 28237520,
    dongName: "인천광역시 부평구 부평2동",
  },
  {
    dongCode: 28237530,
    dongName: "인천광역시 부평구 부평3동",
  },
  {
    dongCode: 28237540,
    dongName: "인천광역시 부평구 부평4동",
  },
  {
    dongCode: 28237550,
    dongName: "인천광역시 부평구 부평5동",
  },
  {
    dongCode: 28237560,
    dongName: "인천광역시 부평구 부평6동",
  },
  {
    dongCode: 28237570,
    dongName: "인천광역시 부평구 산곡1동",
  },
  {
    dongCode: 28237580,
    dongName: "인천광역시 부평구 산곡2동",
  },
  {
    dongCode: 28237581,
    dongName: "인천광역시 부평구 산곡3동",
  },
  {
    dongCode: 28237582,
    dongName: "인천광역시 부평구 산곡4동",
  },
  {
    dongCode: 28237591,
    dongName: "인천광역시 부평구 청천1동",
  },
  {
    dongCode: 28237592,
    dongName: "인천광역시 부평구 청천2동",
  },
  {
    dongCode: 28237641,
    dongName: "인천광역시 부평구 갈산1동",
  },
  {
    dongCode: 28237642,
    dongName: "인천광역시 부평구 갈산2동",
  },
  {
    dongCode: 28237646,
    dongName: "인천광역시 부평구 삼산1동",
  },
  {
    dongCode: 28237648,
    dongName: "인천광역시 부평구 삼산2동",
  },
  {
    dongCode: 28237650,
    dongName: "인천광역시 부평구 부개1동",
  },
  {
    dongCode: 28237660,
    dongName: "인천광역시 부평구 부개2동",
  },
  {
    dongCode: 28237661,
    dongName: "인천광역시 부평구 부개3동",
  },
  {
    dongCode: 28237670,
    dongName: "인천광역시 부평구 일신동",
  },
  {
    dongCode: 28237680,
    dongName: "인천광역시 부평구 십정1동",
  },
  {
    dongCode: 28237690,
    dongName: "인천광역시 부평구 십정2동",
  },
  {
    dongCode: 28245601,
    dongName: "인천광역시 계양구 효성1동",
  },
  {
    dongCode: 28245602,
    dongName: "인천광역시 계양구 효성2동",
  },
  {
    dongCode: 28245611,
    dongName: "인천광역시 계양구 계산1동",
  },
  {
    dongCode: 28245612,
    dongName: "인천광역시 계양구 계산2동",
  },
  {
    dongCode: 28245613,
    dongName: "인천광역시 계양구 계산3동",
  },
  {
    dongCode: 28245614,
    dongName: "인천광역시 계양구 계산4동",
  },
  {
    dongCode: 28245621,
    dongName: "인천광역시 계양구 작전1동",
  },
  {
    dongCode: 28245622,
    dongName: "인천광역시 계양구 작전2동",
  },
  {
    dongCode: 28245640,
    dongName: "인천광역시 계양구 작전서운동",
  },
  {
    dongCode: 28245710,
    dongName: "인천광역시 계양구 계양1동",
  },
  {
    dongCode: 28245720,
    dongName: "인천광역시 계양구 계양2동",
  },
  {
    dongCode: 28245730,
    dongName: "인천광역시 계양구 계양3동",
  },
  {
    dongCode: 28260515,
    dongName: "인천광역시 서구 검암경서동",
  },
  {
    dongCode: 28260530,
    dongName: "인천광역시 서구 연희동",
  },
  {
    dongCode: 28260536,
    dongName: "인천광역시 서구 청라1동",
  },
  {
    dongCode: 28260537,
    dongName: "인천광역시 서구 청라2동",
  },
  {
    dongCode: 28260539,
    dongName: "인천광역시 서구 청라3동",
  },
  {
    dongCode: 28260542,
    dongName: "인천광역시 서구 가정1동",
  },
  {
    dongCode: 28260543,
    dongName: "인천광역시 서구 가정2동",
  },
  {
    dongCode: 28260544,
    dongName: "인천광역시 서구 가정3동",
  },
  {
    dongCode: 28260550,
    dongName: "인천광역시 서구 석남1동",
  },
  {
    dongCode: 28260560,
    dongName: "인천광역시 서구 석남2동",
  },
  {
    dongCode: 28260561,
    dongName: "인천광역시 서구 석남3동",
  },
  {
    dongCode: 28260575,
    dongName: "인천광역시 서구 신현원창동",
  },
  {
    dongCode: 28260580,
    dongName: "인천광역시 서구 가좌1동",
  },
  {
    dongCode: 28260590,
    dongName: "인천광역시 서구 가좌2동",
  },
  {
    dongCode: 28260600,
    dongName: "인천광역시 서구 가좌3동",
  },
  {
    dongCode: 28260610,
    dongName: "인천광역시 서구 가좌4동",
  },
  {
    dongCode: 28260680,
    dongName: "인천광역시 서구 검단동",
  },
  {
    dongCode: 28260690,
    dongName: "인천광역시 서구 불로대곡동",
  },
  {
    dongCode: 28260700,
    dongName: "인천광역시 서구 원당동",
  },
  {
    dongCode: 28260710,
    dongName: "인천광역시 서구 당하동",
  },
  {
    dongCode: 28260720,
    dongName: "인천광역시 서구 오류왕길동",
  },
  {
    dongCode: 28260730,
    dongName: "인천광역시 서구 마전동",
  },
  {
    dongCode: 28260740,
    dongName: "인천광역시 서구 아라동",
  },
  {
    dongCode: 28710250,
    dongName: "인천광역시 강화군 강화읍",
  },
  {
    dongCode: 28710310,
    dongName: "인천광역시 강화군 선원면",
  },
  {
    dongCode: 28710320,
    dongName: "인천광역시 강화군 불은면",
  },
  {
    dongCode: 28710330,
    dongName: "인천광역시 강화군 길상면",
  },
  {
    dongCode: 28710340,
    dongName: "인천광역시 강화군 화도면",
  },
  {
    dongCode: 28710350,
    dongName: "인천광역시 강화군 양도면",
  },
  {
    dongCode: 28710360,
    dongName: "인천광역시 강화군 내가면",
  },
  {
    dongCode: 28710370,
    dongName: "인천광역시 강화군 하점면",
  },
  {
    dongCode: 28710380,
    dongName: "인천광역시 강화군 양사면",
  },
  {
    dongCode: 28710390,
    dongName: "인천광역시 강화군 송해면",
  },
  {
    dongCode: 28710400,
    dongName: "인천광역시 강화군 교동면",
  },
  {
    dongCode: 28710410,
    dongName: "인천광역시 강화군 삼산면",
  },
  {
    dongCode: 28710420,
    dongName: "인천광역시 강화군 서도면",
  },
  {
    dongCode: 28720310,
    dongName: "인천광역시 옹진군 북도면",
  },
  {
    dongCode: 28720330,
    dongName: "인천광역시 옹진군 백령면",
  },
  {
    dongCode: 28720340,
    dongName: "인천광역시 옹진군 대청면",
  },
  {
    dongCode: 28720350,
    dongName: "인천광역시 옹진군 덕적면",
  },
  {
    dongCode: 28720360,
    dongName: "인천광역시 옹진군 영흥면",
  },
  {
    dongCode: 28720370,
    dongName: "인천광역시 옹진군 자월면",
  },
  {
    dongCode: 28720380,
    dongName: "인천광역시 옹진군 연평면",
  },
  {
    dongCode: 29110525,
    dongName: "광주광역시 동구 충장동",
  },
  {
    dongCode: 29110545,
    dongName: "광주광역시 동구 동명동",
  },
  {
    dongCode: 29110560,
    dongName: "광주광역시 동구 계림1동",
  },
  {
    dongCode: 29110570,
    dongName: "광주광역시 동구 계림2동",
  },
  {
    dongCode: 29110590,
    dongName: "광주광역시 동구 산수1동",
  },
  {
    dongCode: 29110600,
    dongName: "광주광역시 동구 산수2동",
  },
  {
    dongCode: 29110620,
    dongName: "광주광역시 동구 지산1동",
  },
  {
    dongCode: 29110630,
    dongName: "광주광역시 동구 지산2동",
  },
  {
    dongCode: 29110655,
    dongName: "광주광역시 동구 서남동",
  },
  {
    dongCode: 29110685,
    dongName: "광주광역시 동구 학동",
  },
  {
    dongCode: 41800330,
    dongName: "경기도 연천군 백학면",
  },
  {
    dongCode: 41800340,
    dongName: "경기도 연천군 미산면",
  },
  {
    dongCode: 41800350,
    dongName: "경기도 연천군 왕징면",
  },
  {
    dongCode: 41800360,
    dongName: "경기도 연천군 신서면",
  },
  {
    dongCode: 41800370,
    dongName: "경기도 연천군 중면",
  },
  {
    dongCode: 41800380,
    dongName: "경기도 연천군 장남면",
  },
  {
    dongCode: 41820250,
    dongName: "경기도 가평군 가평읍",
  },
  {
    dongCode: 41820310,
    dongName: "경기도 가평군 설악면",
  },
  {
    dongCode: 41820325,
    dongName: "경기도 가평군 청평면",
  },
  {
    dongCode: 41820330,
    dongName: "경기도 가평군 상면",
  },
  {
    dongCode: 41820345,
    dongName: "경기도 가평군 조종면",
  },
  {
    dongCode: 41820350,
    dongName: "경기도 가평군 북면",
  },
  {
    dongCode: 41830250,
    dongName: "경기도 양평군 양평읍",
  },
  {
    dongCode: 41830310,
    dongName: "경기도 양평군 강상면",
  },
  {
    dongCode: 41830320,
    dongName: "경기도 양평군 강하면",
  },
  {
    dongCode: 41830330,
    dongName: "경기도 양평군 양서면",
  },
  {
    dongCode: 41830340,
    dongName: "경기도 양평군 옥천면",
  },
  {
    dongCode: 41830350,
    dongName: "경기도 양평군 서종면",
  },
  {
    dongCode: 41830360,
    dongName: "경기도 양평군 단월면",
  },
  {
    dongCode: 41830370,
    dongName: "경기도 양평군 청운면",
  },
  {
    dongCode: 41830380,
    dongName: "경기도 양평군 양동면",
  },
  {
    dongCode: 41830395,
    dongName: "경기도 양평군 지평면",
  },
  {
    dongCode: 41830400,
    dongName: "경기도 양평군 용문면",
  },
  {
    dongCode: 41830410,
    dongName: "경기도 양평군 개군면",
  },
  {
    dongCode: 42110250,
    dongName: "강원도 춘천시 신북읍",
  },
  {
    dongCode: 42110310,
    dongName: "강원도 춘천시 동면",
  },
  {
    dongCode: 42110320,
    dongName: "강원도 춘천시 동산면",
  },
  {
    dongCode: 42110330,
    dongName: "강원도 춘천시 신동면",
  },
  {
    dongCode: 42110340,
    dongName: "강원도 춘천시 남면",
  },
  {
    dongCode: 42110350,
    dongName: "강원도 춘천시 서면",
  },
  {
    dongCode: 42110360,
    dongName: "강원도 춘천시 사북면",
  },
  {
    dongCode: 42110380,
    dongName: "강원도 춘천시 북산면",
  },
  {
    dongCode: 42110390,
    dongName: "강원도 춘천시 동내면",
  },
  {
    dongCode: 42110400,
    dongName: "강원도 춘천시 남산면",
  },
  {
    dongCode: 42110520,
    dongName: "강원도 춘천시 교동",
  },
  {
    dongCode: 42110530,
    dongName: "강원도 춘천시 조운동",
  },
  {
    dongCode: 42110545,
    dongName: "강원도 춘천시 약사명동",
  },
  {
    dongCode: 42110570,
    dongName: "강원도 춘천시 근화동",
  },
  {
    dongCode: 42110580,
    dongName: "강원도 춘천시 소양동",
  },
  {
    dongCode: 42110600,
    dongName: "강원도 춘천시 후평1동",
  },
  {
    dongCode: 42110610,
    dongName: "강원도 춘천시 후평2동",
  },
  {
    dongCode: 42110611,
    dongName: "강원도 춘천시 후평3동",
  },
  {
    dongCode: 42110620,
    dongName: "강원도 춘천시 효자1동",
  },
  {
    dongCode: 42110630,
    dongName: "강원도 춘천시 효자2동",
  },
  {
    dongCode: 42110640,
    dongName: "강원도 춘천시 효자3동",
  },
  {
    dongCode: 42110650,
    dongName: "강원도 춘천시 석사동",
  },
  {
    dongCode: 42110660,
    dongName: "강원도 춘천시 퇴계동",
  },
  {
    dongCode: 42110675,
    dongName: "강원도 춘천시 강남동",
  },
  {
    dongCode: 42110705,
    dongName: "강원도 춘천시 신사우동",
  },
  {
    dongCode: 42130250,
    dongName: "강원도 원주시 문막읍",
  },
  {
    dongCode: 42130310,
    dongName: "강원도 원주시 소초면",
  },
  {
    dongCode: 42130320,
    dongName: "강원도 원주시 호저면",
  },
  {
    dongCode: 42130330,
    dongName: "강원도 원주시 지정면",
  },
  {
    dongCode: 42130350,
    dongName: "강원도 원주시 부론면",
  },
  {
    dongCode: 42130360,
    dongName: "강원도 원주시 귀래면",
  },
  {
    dongCode: 42130370,
    dongName: "강원도 원주시 흥업면",
  },
  {
    dongCode: 42130380,
    dongName: "강원도 원주시 판부면",
  },
  {
    dongCode: 42130390,
    dongName: "강원도 원주시 신림면",
  },
  {
    dongCode: 42130515,
    dongName: "강원도 원주시 중앙동",
  },
  {
    dongCode: 42130520,
    dongName: "강원도 원주시 원인동",
  },
  {
    dongCode: 42130530,
    dongName: "강원도 원주시 개운동",
  },
  {
    dongCode: 42130541,
    dongName: "강원도 원주시 명륜1동",
  },
  {
    dongCode: 42130542,
    dongName: "강원도 원주시 명륜2동",
  },
  {
    dongCode: 42130550,
    dongName: "강원도 원주시 단구동",
  },
  {
    dongCode: 42130560,
    dongName: "강원도 원주시 일산동",
  },
  {
    dongCode: 42130575,
    dongName: "강원도 원주시 학성동",
  },
  {
    dongCode: 42130590,
    dongName: "강원도 원주시 단계동",
  },
  {
    dongCode: 42130600,
    dongName: "강원도 원주시 우산동",
  },
  {
    dongCode: 42130610,
    dongName: "강원도 원주시 태장1동",
  },
  {
    dongCode: 42130620,
    dongName: "강원도 원주시 태장2동",
  },
  {
    dongCode: 42130635,
    dongName: "강원도 원주시 봉산동",
  },
  {
    dongCode: 42130650,
    dongName: "강원도 원주시 행구동",
  },
  {
    dongCode: 42130660,
    dongName: "강원도 원주시 무실동",
  },
  {
    dongCode: 42130675,
    dongName: "강원도 원주시 반곡관설동",
  },
  {
    dongCode: 42150250,
    dongName: "강원도 강릉시 주문진읍",
  },
  {
    dongCode: 42150310,
    dongName: "강원도 강릉시 성산면",
  },
  {
    dongCode: 42150320,
    dongName: "강원도 강릉시 왕산면",
  },
  {
    dongCode: 42150330,
    dongName: "강원도 강릉시 구정면",
  },
  {
    dongCode: 42150340,
    dongName: "강원도 강릉시 강동면",
  },
  {
    dongCode: 42150350,
    dongName: "강원도 강릉시 옥계면",
  },
  {
    dongCode: 42150360,
    dongName: "강원도 강릉시 사천면",
  },
  {
    dongCode: 42150370,
    dongName: "강원도 강릉시 연곡면",
  },
  {
    dongCode: 42150510,
    dongName: "강원도 강릉시 홍제동",
  },
  {
    dongCode: 42150520,
    dongName: "강원도 강릉시 중앙동",
  },
  {
    dongCode: 42150540,
    dongName: "강원도 강릉시 옥천동",
  },
  {
    dongCode: 42150550,
    dongName: "강원도 강릉시 교1동",
  },
  {
    dongCode: 42150560,
    dongName: "강원도 강릉시 교2동",
  },
  {
    dongCode: 42150571,
    dongName: "강원도 강릉시 포남1동",
  },
  {
    dongCode: 42150572,
    dongName: "강원도 강릉시 포남2동",
  },
  {
    dongCode: 42150580,
    dongName: "강원도 강릉시 초당동",
  },
  {
    dongCode: 42150590,
    dongName: "강원도 강릉시 송정동",
  },
  {
    dongCode: 42150600,
    dongName: "강원도 강릉시 내곡동",
  },
  {
    dongCode: 42150615,
    dongName: "강원도 강릉시 강남동",
  },
  {
    dongCode: 42150645,
    dongName: "강원도 강릉시 성덕동",
  },
  {
    dongCode: 42150665,
    dongName: "강원도 강릉시 경포동",
  },
  {
    dongCode: 42170510,
    dongName: "강원도 동해시 천곡동",
  },
  {
    dongCode: 42170520,
    dongName: "강원도 동해시 송정동",
  },
  {
    dongCode: 42170530,
    dongName: "강원도 동해시 북삼동",
  },
  {
    dongCode: 42170540,
    dongName: "강원도 동해시 부곡동",
  },
  {
    dongCode: 42170550,
    dongName: "강원도 동해시 동호동",
  },
  {
    dongCode: 42170570,
    dongName: "강원도 동해시 발한동",
  },
  {
    dongCode: 42170590,
    dongName: "강원도 동해시 묵호동",
  },
  {
    dongCode: 42170600,
    dongName: "강원도 동해시 북평동",
  },
  {
    dongCode: 42170630,
    dongName: "강원도 동해시 망상동",
  },
  {
    dongCode: 42170650,
    dongName: "강원도 동해시 삼화동",
  },
  {
    dongCode: 42190515,
    dongName: "강원도 태백시 황지동",
  },
  {
    dongCode: 42190525,
    dongName: "강원도 태백시 황연동",
  },
  {
    dongCode: 42190535,
    dongName: "강원도 태백시 삼수동",
  },
  {
    dongCode: 42190540,
    dongName: "강원도 태백시 상장동",
  },
  {
    dongCode: 42190585,
    dongName: "강원도 태백시 문곡소도동",
  },
  {
    dongCode: 42190595,
    dongName: "강원도 태백시 장성동",
  },
  {
    dongCode: 42190605,
    dongName: "강원도 태백시 구문소동",
  },
  {
    dongCode: 42190615,
    dongName: "강원도 태백시 철암동",
  },
  {
    dongCode: 42210510,
    dongName: "강원도 속초시 영랑동",
  },
  {
    dongCode: 42210520,
    dongName: "강원도 속초시 동명동",
  },
  {
    dongCode: 42210540,
    dongName: "강원도 속초시 금호동",
  },
  {
    dongCode: 42210560,
    dongName: "강원도 속초시 교동",
  },
  {
    dongCode: 42210570,
    dongName: "강원도 속초시 노학동",
  },
  {
    dongCode: 42210580,
    dongName: "강원도 속초시 조양동",
  },
  {
    dongCode: 42210590,
    dongName: "강원도 속초시 청호동",
  },
  {
    dongCode: 42210600,
    dongName: "강원도 속초시 대포동",
  },
  {
    dongCode: 42230250,
    dongName: "강원도 삼척시 도계읍",
  },
  {
    dongCode: 42230253,
    dongName: "강원도 삼척시 원덕읍",
  },
  {
    dongCode: 42230310,
    dongName: "강원도 삼척시 근덕면",
  },
  {
    dongCode: 42230320,
    dongName: "강원도 삼척시 하장면",
  },
  {
    dongCode: 42230330,
    dongName: "강원도 삼척시 노곡면",
  },
  {
    dongCode: 42230340,
    dongName: "강원도 삼척시 미로면",
  },
  {
    dongCode: 42230350,
    dongName: "강원도 삼척시 가곡면",
  },
  {
    dongCode: 42230360,
    dongName: "강원도 삼척시 신기면",
  },
  {
    dongCode: 42230510,
    dongName: "강원도 삼척시 남양동",
  },
  {
    dongCode: 42230530,
    dongName: "강원도 삼척시 교동",
  },
  {
    dongCode: 42230540,
    dongName: "강원도 삼척시 정라동",
  },
  {
    dongCode: 42230570,
    dongName: "강원도 삼척시 성내동",
  },
  {
    dongCode: 42720250,
    dongName: "강원도 홍천군 홍천읍",
  },
  {
    dongCode: 42720310,
    dongName: "강원도 홍천군 화촌면",
  },
  {
    dongCode: 42720320,
    dongName: "강원도 홍천군 두촌면",
  },
  {
    dongCode: 42720330,
    dongName: "강원도 홍천군 내촌면",
  },
  {
    dongCode: 42720340,
    dongName: "강원도 홍천군 서석면",
  },
  {
    dongCode: 42720352,
    dongName: "강원도 홍천군 영귀미면",
  },
  {
    dongCode: 42720360,
    dongName: "강원도 홍천군 남면",
  },
  {
    dongCode: 42720370,
    dongName: "강원도 홍천군 서면",
  },
  {
    dongCode: 42720380,
    dongName: "강원도 홍천군 북방면",
  },
  {
    dongCode: 42720390,
    dongName: "강원도 홍천군 내면",
  },
  {
    dongCode: 42730250,
    dongName: "강원도 횡성군 횡성읍",
  },
  {
    dongCode: 42730310,
    dongName: "강원도 횡성군 우천면",
  },
  {
    dongCode: 42730320,
    dongName: "강원도 횡성군 안흥면",
  },
  {
    dongCode: 42730330,
    dongName: "강원도 횡성군 둔내면",
  },
  {
    dongCode: 42730340,
    dongName: "강원도 횡성군 갑천면",
  },
  {
    dongCode: 42730350,
    dongName: "강원도 횡성군 청일면",
  },
  {
    dongCode: 42730360,
    dongName: "강원도 횡성군 공근면",
  },
  {
    dongCode: 42730370,
    dongName: "강원도 횡성군 서원면",
  },
  {
    dongCode: 42730380,
    dongName: "강원도 횡성군 강림면",
  },
  {
    dongCode: 42750250,
    dongName: "강원도 영월군 영월읍",
  },
  {
    dongCode: 42750253,
    dongName: "강원도 영월군 상동읍",
  },
  {
    dongCode: 42750312,
    dongName: "강원도 영월군 산솔면",
  },
  {
    dongCode: 42750325,
    dongName: "강원도 영월군 김삿갓면",
  },
  {
    dongCode: 42750330,
    dongName: "강원도 영월군 북면",
  },
  {
    dongCode: 42750340,
    dongName: "강원도 영월군 남면",
  },
  {
    dongCode: 42750355,
    dongName: "강원도 영월군 한반도면",
  },
  {
    dongCode: 42750360,
    dongName: "강원도 영월군 주천면",
  },
  {
    dongCode: 42750380,
    dongName: "강원도 영월군 무릉도원면",
  },
  {
    dongCode: 42760250,
    dongName: "강원도 평창군 평창읍",
  },
  {
    dongCode: 42760310,
    dongName: "강원도 평창군 미탄면",
  },
  {
    dongCode: 42760320,
    dongName: "강원도 평창군 방림면",
  },
  {
    dongCode: 42760330,
    dongName: "강원도 평창군 대화면",
  },
  {
    dongCode: 42760340,
    dongName: "강원도 평창군 봉평면",
  },
  {
    dongCode: 42760350,
    dongName: "강원도 평창군 용평면",
  },
  {
    dongCode: 42760360,
    dongName: "강원도 평창군 진부면",
  },
  {
    dongCode: 42760380,
    dongName: "강원도 평창군 대관령면",
  },
  {
    dongCode: 42770250,
    dongName: "강원도 정선군 정선읍",
  },
  {
    dongCode: 42770253,
    dongName: "강원도 정선군 고한읍",
  },
  {
    dongCode: 42770256,
    dongName: "강원도 정선군 사북읍",
  },
  {
    dongCode: 42770259,
    dongName: "강원도 정선군 신동읍",
  },
  {
    dongCode: 42770320,
    dongName: "강원도 정선군 남면",
  },
  {
    dongCode: 42770340,
    dongName: "강원도 정선군 북평면",
  },
  {
    dongCode: 42770350,
    dongName: "강원도 정선군 임계면",
  },
  {
    dongCode: 42770360,
    dongName: "강원도 정선군 화암면",
  },
  {
    dongCode: 42770370,
    dongName: "강원도 정선군 여량면",
  },
  {
    dongCode: 42780250,
    dongName: "강원도 철원군 철원읍",
  },
  {
    dongCode: 42780253,
    dongName: "강원도 철원군 김화읍",
  },
  {
    dongCode: 42780256,
    dongName: "강원도 철원군 갈말읍",
  },
  {
    dongCode: 42780259,
    dongName: "강원도 철원군 동송읍",
  },
  {
    dongCode: 42780310,
    dongName: "강원도 철원군 서면",
  },
  {
    dongCode: 42780320,
    dongName: "강원도 철원군 근남면",
  },
  {
    dongCode: 42780330,
    dongName: "강원도 철원군 근북면",
  },
  {
    dongCode: 42780340,
    dongName: "강원도 철원군 근동면",
  },
  {
    dongCode: 42780350,
    dongName: "강원도 철원군 원동면",
  },
  {
    dongCode: 42780360,
    dongName: "강원도 철원군 원남면",
  },
  {
    dongCode: 42780370,
    dongName: "강원도 철원군 임남면",
  },
  {
    dongCode: 42790250,
    dongName: "강원도 화천군 화천읍",
  },
  {
    dongCode: 42790310,
    dongName: "강원도 화천군 간동면",
  },
  {
    dongCode: 42790320,
    dongName: "강원도 화천군 하남면",
  },
  {
    dongCode: 42790330,
    dongName: "강원도 화천군 상서면",
  },
  {
    dongCode: 42790340,
    dongName: "강원도 화천군 사내면",
  },
  {
    dongCode: 42800250,
    dongName: "강원도 양구군 양구읍",
  },
  {
    dongCode: 42800315,
    dongName: "강원도 양구군 국토정중앙면",
  },
  {
    dongCode: 42800320,
    dongName: "강원도 양구군 동면",
  },
  {
    dongCode: 42800330,
    dongName: "강원도 양구군 방산면",
  },
  {
    dongCode: 42800340,
    dongName: "강원도 양구군 해안면",
  },
  {
    dongCode: 42810250,
    dongName: "강원도 인제군 인제읍",
  },
  {
    dongCode: 42810310,
    dongName: "강원도 인제군 남면",
  },
  {
    dongCode: 42810320,
    dongName: "강원도 인제군 북면",
  },
  {
    dongCode: 42810330,
    dongName: "강원도 인제군 기린면",
  },
  {
    dongCode: 42810340,
    dongName: "강원도 인제군 서화면",
  },
  {
    dongCode: 42810350,
    dongName: "강원도 인제군 상남면",
  },
  {
    dongCode: 42820250,
    dongName: "강원도 고성군 간성읍",
  },
  {
    dongCode: 42820253,
    dongName: "강원도 고성군 거진읍",
  },
  {
    dongCode: 42820310,
    dongName: "강원도 고성군 현내면",
  },
  {
    dongCode: 42820320,
    dongName: "강원도 고성군 죽왕면",
  },
  {
    dongCode: 42820330,
    dongName: "강원도 고성군 토성면",
  },
  {
    dongCode: 42820340,
    dongName: "강원도 고성군 수동면",
  },
  {
    dongCode: 42830250,
    dongName: "강원도 양양군 양양읍",
  },
  {
    dongCode: 42830310,
    dongName: "강원도 양양군 서면",
  },
  {
    dongCode: 42830320,
    dongName: "강원도 양양군 손양면",
  },
  {
    dongCode: 42830330,
    dongName: "강원도 양양군 현북면",
  },
  {
    dongCode: 42830340,
    dongName: "강원도 양양군 현남면",
  },
  {
    dongCode: 42830350,
    dongName: "강원도 양양군 강현면",
  },
  {
    dongCode: 43111310,
    dongName: "충청북도 청주시 낭성면",
  },
  {
    dongCode: 43111320,
    dongName: "충청북도 청주시 미원면",
  },
  {
    dongCode: 43111330,
    dongName: "충청북도 청주시 가덕면",
  },
  {
    dongCode: 43111340,
    dongName: "충청북도 청주시 남일면",
  },
  {
    dongCode: 43111350,
    dongName: "충청북도 청주시 문의면",
  },
  {
    dongCode: 43111525,
    dongName: "충청북도 청주시 중앙동",
  },
  {
    dongCode: 43111545,
    dongName: "충청북도 청주시 성안동",
  },
  {
    dongCode: 43111620,
    dongName: "충청북도 청주시 탑대성동",
  },
  {
    dongCode: 43111670,
    dongName: "충청북도 청주시 영운동",
  },
  {
    dongCode: 43111680,
    dongName: "충청북도 청주시 금천동",
  },
  {
    dongCode: 43111690,
    dongName: "충청북도 청주시 용담.명암.산성동",
  },
  {
    dongCode: 41281510,
    dongName: "경기도 고양시 주교동",
  },
  {
    dongCode: 41281520,
    dongName: "경기도 고양시 원신동",
  },
  {
    dongCode: 41281530,
    dongName: "경기도 고양시 흥도동",
  },
  {
    dongCode: 41281540,
    dongName: "경기도 고양시 성사1동",
  },
  {
    dongCode: 41281550,
    dongName: "경기도 고양시 성사2동",
  },
  {
    dongCode: 41281560,
    dongName: "경기도 고양시 효자동",
  },
  {
    dongCode: 41281576,
    dongName: "경기도 고양시 삼송1동",
  },
  {
    dongCode: 41281577,
    dongName: "경기도 고양시 삼송2동",
  },
  {
    dongCode: 41281580,
    dongName: "경기도 고양시 창릉동",
  },
  {
    dongCode: 41281590,
    dongName: "경기도 고양시 고양동",
  },
  {
    dongCode: 41281600,
    dongName: "경기도 고양시 관산동",
  },
  {
    dongCode: 41281610,
    dongName: "경기도 고양시 능곡동",
  },
  {
    dongCode: 41281621,
    dongName: "경기도 고양시 화정1동",
  },
  {
    dongCode: 41281622,
    dongName: "경기도 고양시 화정2동",
  },
  {
    dongCode: 41281630,
    dongName: "경기도 고양시 행주동",
  },
  {
    dongCode: 41281640,
    dongName: "경기도 고양시 행신1동",
  },
  {
    dongCode: 41281650,
    dongName: "경기도 고양시 행신2동",
  },
  {
    dongCode: 41281655,
    dongName: "경기도 고양시 행신3동",
  },
  {
    dongCode: 41281656,
    dongName: "경기도 고양시 행신4동",
  },
  {
    dongCode: 41281660,
    dongName: "경기도 고양시 화전동",
  },
  {
    dongCode: 41281670,
    dongName: "경기도 고양시 대덕동",
  },
  {
    dongCode: 41285510,
    dongName: "경기도 고양시 식사동",
  },
  {
    dongCode: 41285525,
    dongName: "경기도 고양시 중산1동",
  },
  {
    dongCode: 41285526,
    dongName: "경기도 고양시 중산2동",
  },
  {
    dongCode: 41285530,
    dongName: "경기도 고양시 정발산동",
  },
  {
    dongCode: 41285540,
    dongName: "경기도 고양시 풍산동",
  },
  {
    dongCode: 41285551,
    dongName: "경기도 고양시 백석1동",
  },
  {
    dongCode: 41285552,
    dongName: "경기도 고양시 백석2동",
  },
  {
    dongCode: 41285560,
    dongName: "경기도 고양시 마두1동",
  },
  {
    dongCode: 41285570,
    dongName: "경기도 고양시 마두2동",
  },
  {
    dongCode: 41285580,
    dongName: "경기도 고양시 장항1동",
  },
  {
    dongCode: 41285590,
    dongName: "경기도 고양시 장항2동",
  },
  {
    dongCode: 41285600,
    dongName: "경기도 고양시 고봉동",
  },
  {
    dongCode: 41287510,
    dongName: "경기도 고양시 일산1동",
  },
  {
    dongCode: 41287520,
    dongName: "경기도 고양시 일산2동",
  },
  {
    dongCode: 41287530,
    dongName: "경기도 고양시 일산3동",
  },
  {
    dongCode: 41287545,
    dongName: "경기도 고양시 탄현1동",
  },
  {
    dongCode: 41287546,
    dongName: "경기도 고양시 탄현2동",
  },
  {
    dongCode: 41287550,
    dongName: "경기도 고양시 주엽1동",
  },
  {
    dongCode: 41287560,
    dongName: "경기도 고양시 주엽2동",
  },
  {
    dongCode: 41287570,
    dongName: "경기도 고양시 대화동",
  },
  {
    dongCode: 41287580,
    dongName: "경기도 고양시 송포동",
  },
  {
    dongCode: 41287600,
    dongName: "경기도 고양시 덕이동",
  },
  {
    dongCode: 41287610,
    dongName: "경기도 고양시 가좌동",
  },
  {
    dongCode: 41290510,
    dongName: "경기도 과천시 중앙동",
  },
  {
    dongCode: 41290520,
    dongName: "경기도 과천시 갈현동",
  },
  {
    dongCode: 41290530,
    dongName: "경기도 과천시 별양동",
  },
  {
    dongCode: 41290540,
    dongName: "경기도 과천시 부림동",
  },
  {
    dongCode: 41290550,
    dongName: "경기도 과천시 과천동",
  },
  {
    dongCode: 41290560,
    dongName: "경기도 과천시 문원동",
  },
  {
    dongCode: 41310510,
    dongName: "경기도 구리시 갈매동",
  },
  {
    dongCode: 41310520,
    dongName: "경기도 구리시 동구동",
  },
  {
    dongCode: 41310530,
    dongName: "경기도 구리시 인창동",
  },
  {
    dongCode: 41310541,
    dongName: "경기도 구리시 교문1동",
  },
  {
    dongCode: 41310542,
    dongName: "경기도 구리시 교문2동",
  },
  {
    dongCode: 41310570,
    dongName: "경기도 구리시 수택1동",
  },
  {
    dongCode: 41310580,
    dongName: "경기도 구리시 수택2동",
  },
  {
    dongCode: 41310590,
    dongName: "경기도 구리시 수택3동",
  },
  {
    dongCode: 41360250,
    dongName: "경기도 남양주시 와부읍",
  },
  {
    dongCode: 41360253,
    dongName: "경기도 남양주시 진접읍",
  },
  {
    dongCode: 41360256,
    dongName: "경기도 남양주시 화도읍",
  },
  {
    dongCode: 41360259,
    dongName: "경기도 남양주시 진건읍",
  },
  {
    dongCode: 41360262,
    dongName: "경기도 남양주시 오남읍",
  },
  {
    dongCode: 41360265,
    dongName: "경기도 남양주시 퇴계원읍",
  },
  {
    dongCode: 41360310,
    dongName: "경기도 남양주시 별내면",
  },
  {
    dongCode: 41360340,
    dongName: "경기도 남양주시 수동면",
  },
  {
    dongCode: 41360360,
    dongName: "경기도 남양주시 조안면",
  },
  {
    dongCode: 41360510,
    dongName: "경기도 남양주시 호평동",
  },
  {
    dongCode: 41360520,
    dongName: "경기도 남양주시 평내동",
  },
  {
    dongCode: 41360530,
    dongName: "경기도 남양주시 금곡동",
  },
  {
    dongCode: 41360540,
    dongName: "경기도 남양주시 양정동",
  },
  {
    dongCode: 41360545,
    dongName: "경기도 남양주시 다산1동",
  },
  {
    dongCode: 41360565,
    dongName: "경기도 남양주시 다산2동",
  },
  {
    dongCode: 41360570,
    dongName: "경기도 남양주시 별내동",
  },
  {
    dongCode: 41370510,
    dongName: "경기도 오산시 중앙동",
  },
  {
    dongCode: 41370530,
    dongName: "경기도 오산시 남촌동",
  },
  {
    dongCode: 41370540,
    dongName: "경기도 오산시 신장동",
  },
  {
    dongCode: 41370550,
    dongName: "경기도 오산시 세마동",
  },
  {
    dongCode: 41370560,
    dongName: "경기도 오산시 초평동",
  },
  {
    dongCode: 41370570,
    dongName: "경기도 오산시 대원동",
  },
  {
    dongCode: 41390510,
    dongName: "경기도 시흥시 대야동",
  },
  {
    dongCode: 41390520,
    dongName: "경기도 시흥시 신천동",
  },
  {
    dongCode: 41390531,
    dongName: "경기도 시흥시 신현동",
  },
  {
    dongCode: 41390540,
    dongName: "경기도 시흥시 은행동",
  },
  {
    dongCode: 41390550,
    dongName: "경기도 시흥시 매화동",
  },
  {
    dongCode: 41390570,
    dongName: "경기도 시흥시 목감동",
  },
  {
    dongCode: 41390581,
    dongName: "경기도 시흥시 군자동",
  },
  {
    dongCode: 41390582,
    dongName: "경기도 시흥시 월곶동",
  },
  {
    dongCode: 41390589,
    dongName: "경기도 시흥시 정왕본동",
  },
  {
    dongCode: 41390591,
    dongName: "경기도 시흥시 정왕1동",
  },
  {
    dongCode: 41390592,
    dongName: "경기도 시흥시 정왕2동",
  },
  {
    dongCode: 41390593,
    dongName: "경기도 시흥시 정왕3동",
  },
  {
    dongCode: 41390594,
    dongName: "경기도 시흥시 정왕4동",
  },
  {
    dongCode: 41390596,
    dongName: "경기도 시흥시 배곧1동",
  },
  {
    dongCode: 41390597,
    dongName: "경기도 시흥시 배곧2동",
  },
  {
    dongCode: 41390621,
    dongName: "경기도 시흥시 과림동",
  },
  {
    dongCode: 41390630,
    dongName: "경기도 시흥시 연성동",
  },
  {
    dongCode: 41390631,
    dongName: "경기도 시흥시 장곡동",
  },
  {
    dongCode: 41390640,
    dongName: "경기도 시흥시 능곡동",
  },
  {
    dongCode: 41410510,
    dongName: "경기도 군포시 군포1동",
  },
  {
    dongCode: 41410520,
    dongName: "경기도 군포시 군포2동",
  },
  {
    dongCode: 41410540,
    dongName: "경기도 군포시 산본1동",
  },
  {
    dongCode: 41410550,
    dongName: "경기도 군포시 산본2동",
  },
  {
    dongCode: 41410560,
    dongName: "경기도 군포시 금정동",
  },
  {
    dongCode: 41410570,
    dongName: "경기도 군포시 재궁동",
  },
  {
    dongCode: 41410580,
    dongName: "경기도 군포시 오금동",
  },
  {
    dongCode: 41410590,
    dongName: "경기도 군포시 수리동",
  },
  {
    dongCode: 41410600,
    dongName: "경기도 군포시 궁내동",
  },
  {
    dongCode: 41410610,
    dongName: "경기도 군포시 대야동",
  },
  {
    dongCode: 41410620,
    dongName: "경기도 군포시 광정동",
  },
  {
    dongCode: 41410630,
    dongName: "경기도 군포시 송부동",
  },
  {
    dongCode: 41430510,
    dongName: "경기도 의왕시 고천동",
  },
  {
    dongCode: 41430520,
    dongName: "경기도 의왕시 부곡동",
  },
  {
    dongCode: 41430530,
    dongName: "경기도 의왕시 오전동",
  },
  {
    dongCode: 41430540,
    dongName: "경기도 의왕시 내손1동",
  },
  {
    dongCode: 41430550,
    dongName: "경기도 의왕시 내손2동",
  },
  {
    dongCode: 41430560,
    dongName: "경기도 의왕시 청계동",
  },
  {
    dongCode: 41450510,
    dongName: "경기도 하남시 천현동",
  },
  {
    dongCode: 41450520,
    dongName: "경기도 하남시 신장1동",
  },
  {
    dongCode: 41450530,
    dongName: "경기도 하남시 신장2동",
  },
  {
    dongCode: 41450540,
    dongName: "경기도 하남시 덕풍1동",
  },
  {
    dongCode: 41450550,
    dongName: "경기도 하남시 덕풍2동",
  },
  {
    dongCode: 41450560,
    dongName: "경기도 하남시 덕풍3동",
  },
  {
    dongCode: 41450570,
    dongName: "경기도 하남시 풍산동",
  },
  {
    dongCode: 41450580,
    dongName: "경기도 하남시 감북동",
  },
  {
    dongCode: 41450582,
    dongName: "경기도 하남시 감일동",
  },
  {
    dongCode: 41450585,
    dongName: "경기도 하남시 위례동",
  },
  {
    dongCode: 41450590,
    dongName: "경기도 하남시 춘궁동",
  },
  {
    dongCode: 41450600,
    dongName: "경기도 하남시 초이동",
  },
  {
    dongCode: 41450610,
    dongName: "경기도 하남시 미사1동",
  },
  {
    dongCode: 41450620,
    dongName: "경기도 하남시 미사2동",
  },
  {
    dongCode: 41461250,
    dongName: "경기도 용인시 포곡읍",
  },
  {
    dongCode: 41461253,
    dongName: "경기도 용인시 모현읍",
  },
  {
    dongCode: 41461256,
    dongName: "경기도 용인시 이동읍",
  },
  {
    dongCode: 41461259,
    dongName: "경기도 용인시 남사읍",
  },
  {
    dongCode: 41461340,
    dongName: "경기도 용인시 원삼면",
  },
  {
    dongCode: 41461350,
    dongName: "경기도 용인시 백암면",
  },
  {
    dongCode: 41461360,
    dongName: "경기도 용인시 양지면",
  },
  {
    dongCode: 41461510,
    dongName: "경기도 용인시 중앙동",
  },
  {
    dongCode: 41461525,
    dongName: "경기도 용인시 역북동",
  },
  {
    dongCode: 41461526,
    dongName: "경기도 용인시 삼가동",
  },
  {
    dongCode: 41461530,
    dongName: "경기도 용인시 유림동",
  },
  {
    dongCode: 41461540,
    dongName: "경기도 용인시 동부동",
  },
  {
    dongCode: 41463510,
    dongName: "경기도 용인시 신갈동",
  },
  {
    dongCode: 41463516,
    dongName: "경기도 용인시 영덕1동",
  },
  {
    dongCode: 41463517,
    dongName: "경기도 용인시 영덕2동",
  },
  {
    dongCode: 41463520,
    dongName: "경기도 용인시 구갈동",
  },
  {
    dongCode: 41463530,
    dongName: "경기도 용인시 상갈동",
  },
  {
    dongCode: 41463535,
    dongName: "경기도 용인시 보라동",
  },
  {
    dongCode: 41463540,
    dongName: "경기도 용인시 기흥동",
  },
  {
    dongCode: 41463550,
    dongName: "경기도 용인시 서농동",
  },
  {
    dongCode: 41463560,
    dongName: "경기도 용인시 구성동",
  },
  {
    dongCode: 41463570,
    dongName: "경기도 용인시 마북동",
  },
  {
    dongCode: 41463572,
    dongName: "경기도 용인시 동백1동",
  },
  {
    dongCode: 41463575,
    dongName: "경기도 용인시 동백2동",
  },
  {
    dongCode: 41463577,
    dongName: "경기도 용인시 동백3동",
  },
  {
    dongCode: 41463586,
    dongName: "경기도 용인시 상하동",
  },
  {
    dongCode: 41463590,
    dongName: "경기도 용인시 보정동",
  },
  {
    dongCode: 41465510,
    dongName: "경기도 용인시 풍덕천1동",
  },
  {
    dongCode: 41465520,
    dongName: "경기도 용인시 풍덕천2동",
  },
  {
    dongCode: 41465530,
    dongName: "경기도 용인시 신봉동",
  },
  {
    dongCode: 41465540,
    dongName: "경기도 용인시 죽전1동",
  },
  {
    dongCode: 41465550,
    dongName: "경기도 용인시 죽전2동",
  },
  {
    dongCode: 41465555,
    dongName: "경기도 용인시 죽전3동",
  },
  {
    dongCode: 41465560,
    dongName: "경기도 용인시 동천동",
  },
  {
    dongCode: 41465570,
    dongName: "경기도 용인시 상현1동",
  },
  {
    dongCode: 41465580,
    dongName: "경기도 용인시 상현2동",
  },
  {
    dongCode: 41465585,
    dongName: "경기도 용인시 상현3동",
  },
  {
    dongCode: 41465590,
    dongName: "경기도 용인시 성복동",
  },
  {
    dongCode: 41480250,
    dongName: "경기도 파주시 문산읍",
  },
  {
    dongCode: 41480253,
    dongName: "경기도 파주시 파주읍",
  },
  {
    dongCode: 41480256,
    dongName: "경기도 파주시 법원읍",
  },
  {
    dongCode: 41480262,
    dongName: "경기도 파주시 조리읍",
  },
  {
    dongCode: 41480310,
    dongName: "경기도 파주시 월롱면",
  },
  {
    dongCode: 41480320,
    dongName: "경기도 파주시 탄현면",
  },
  {
    dongCode: 41480350,
    dongName: "경기도 파주시 광탄면",
  },
  {
    dongCode: 41480360,
    dongName: "경기도 파주시 파평면",
  },
  {
    dongCode: 41480370,
    dongName: "경기도 파주시 적성면",
  },
  {
    dongCode: 41480380,
    dongName: "경기도 파주시 군내면",
  },
  {
    dongCode: 41480390,
    dongName: "경기도 파주시 장단면",
  },
  {
    dongCode: 41480400,
    dongName: "경기도 파주시 진동면",
  },
  {
    dongCode: 41480410,
    dongName: "경기도 파주시 진서면",
  },
  {
    dongCode: 41480510,
    dongName: "경기도 파주시 금촌1동",
  },
  {
    dongCode: 41480520,
    dongName: "경기도 파주시 금촌2동",
  },
  {
    dongCode: 41480530,
    dongName: "경기도 파주시 금촌3동",
  },
  {
    dongCode: 41480540,
    dongName: "경기도 파주시 교하동",
  },
  {
    dongCode: 41480550,
    dongName: "경기도 파주시 운정1동",
  },
  {
    dongCode: 41480560,
    dongName: "경기도 파주시 운정2동",
  },
  {
    dongCode: 41480570,
    dongName: "경기도 파주시 운정3동",
  },
  {
    dongCode: 41500250,
    dongName: "경기도 이천시 장호원읍",
  },
  {
    dongCode: 41500253,
    dongName: "경기도 이천시 부발읍",
  },
  {
    dongCode: 41500310,
    dongName: "경기도 이천시 신둔면",
  },
  {
    dongCode: 41500320,
    dongName: "경기도 이천시 백사면",
  },
  {
    dongCode: 41500330,
    dongName: "경기도 이천시 호법면",
  },
  {
    dongCode: 41500340,
    dongName: "경기도 이천시 마장면",
  },
  {
    dongCode: 41500350,
    dongName: "경기도 이천시 대월면",
  },
  {
    dongCode: 41500360,
    dongName: "경기도 이천시 모가면",
  },
  {
    dongCode: 41500370,
    dongName: "경기도 이천시 설성면",
  },
  {
    dongCode: 41500380,
    dongName: "경기도 이천시 율면",
  },
  {
    dongCode: 41500510,
    dongName: "경기도 이천시 창전동",
  },
  {
    dongCode: 41500515,
    dongName: "경기도 이천시 증포동",
  },
  {
    dongCode: 41500520,
    dongName: "경기도 이천시 중리동",
  },
  {
    dongCode: 41500530,
    dongName: "경기도 이천시 관고동",
  },
  {
    dongCode: 41550250,
    dongName: "경기도 안성시 공도읍",
  },
  {
    dongCode: 41550310,
    dongName: "경기도 안성시 보개면",
  },
  {
    dongCode: 41550320,
    dongName: "경기도 안성시 금광면",
  },
  {
    dongCode: 41550330,
    dongName: "경기도 안성시 서운면",
  },
  {
    dongCode: 41550340,
    dongName: "경기도 안성시 미양면",
  },
  {
    dongCode: 41550350,
    dongName: "경기도 안성시 대덕면",
  },
  {
    dongCode: 41550360,
    dongName: "경기도 안성시 양성면",
  },
  {
    dongCode: 41550380,
    dongName: "경기도 안성시 원곡면",
  },
  {
    dongCode: 41550390,
    dongName: "경기도 안성시 일죽면",
  },
  {
    dongCode: 41550400,
    dongName: "경기도 안성시 죽산면",
  },
  {
    dongCode: 41550410,
    dongName: "경기도 안성시 삼죽면",
  },
  {
    dongCode: 41550420,
    dongName: "경기도 안성시 고삼면",
  },
  {
    dongCode: 41550510,
    dongName: "경기도 안성시 안성1동",
  },
  {
    dongCode: 41550520,
    dongName: "경기도 안성시 안성2동",
  },
  {
    dongCode: 41550530,
    dongName: "경기도 안성시 안성3동",
  },
  {
    dongCode: 41570250,
    dongName: "경기도 김포시 통진읍",
  },
  {
    dongCode: 41570253,
    dongName: "경기도 김포시 고촌읍",
  },
  {
    dongCode: 41570256,
    dongName: "경기도 김포시 양촌읍",
  },
  {
    dongCode: 41570340,
    dongName: "경기도 김포시 대곶면",
  },
  {
    dongCode: 41570350,
    dongName: "경기도 김포시 월곶면",
  },
  {
    dongCode: 41570360,
    dongName: "경기도 김포시 하성면",
  },
  {
    dongCode: 41570515,
    dongName: "경기도 김포시 김포본동",
  },
  {
    dongCode: 41570525,
    dongName: "경기도 김포시 장기본동",
  },
  {
    dongCode: 41570540,
    dongName: "경기도 김포시 사우동",
  },
  {
    dongCode: 41570550,
    dongName: "경기도 김포시 풍무동",
  },
  {
    dongCode: 41570560,
    dongName: "경기도 김포시 장기동",
  },
  {
    dongCode: 41570570,
    dongName: "경기도 김포시 구래동",
  },
  {
    dongCode: 41570575,
    dongName: "경기도 김포시 마산동",
  },
  {
    dongCode: 41570580,
    dongName: "경기도 김포시 운양동",
  },
  {
    dongCode: 41590253,
    dongName: "경기도 화성시 봉담읍",
  },
  {
    dongCode: 41590256,
    dongName: "경기도 화성시 우정읍",
  },
  {
    dongCode: 41590259,
    dongName: "경기도 화성시 향남읍",
  },
  {
    dongCode: 41590262,
    dongName: "경기도 화성시 남양읍",
  },
  {
    dongCode: 41590310,
    dongName: "경기도 화성시 매송면",
  },
  {
    dongCode: 41590320,
    dongName: "경기도 화성시 비봉면",
  },
  {
    dongCode: 41590330,
    dongName: "경기도 화성시 마도면",
  },
  {
    dongCode: 41590340,
    dongName: "경기도 화성시 송산면",
  },
  {
    dongCode: 41590350,
    dongName: "경기도 화성시 서신면",
  },
  {
    dongCode: 41590360,
    dongName: "경기도 화성시 팔탄면",
  },
  {
    dongCode: 41590370,
    dongName: "경기도 화성시 장안면",
  },
  {
    dongCode: 41590400,
    dongName: "경기도 화성시 양감면",
  },
  {
    dongCode: 41590410,
    dongName: "경기도 화성시 정남면",
  },
  {
    dongCode: 41590515,
    dongName: "경기도 화성시 새솔동",
  },
  {
    dongCode: 41590520,
    dongName: "경기도 화성시 진안동",
  },
  {
    dongCode: 41590530,
    dongName: "경기도 화성시 병점1동",
  },
  {
    dongCode: 41590540,
    dongName: "경기도 화성시 병점2동",
  },
  {
    dongCode: 41590550,
    dongName: "경기도 화성시 반월동",
  },
  {
    dongCode: 41590560,
    dongName: "경기도 화성시 기배동",
  },
  {
    dongCode: 41590570,
    dongName: "경기도 화성시 화산동",
  },
  {
    dongCode: 41590585,
    dongName: "경기도 화성시 동탄1동",
  },
  {
    dongCode: 41590586,
    dongName: "경기도 화성시 동탄2동",
  },
  {
    dongCode: 41590587,
    dongName: "경기도 화성시 동탄3동",
  },
  {
    dongCode: 41590588,
    dongName: "경기도 화성시 동탄4동",
  },
  {
    dongCode: 41590590,
    dongName: "경기도 화성시 동탄5동",
  },
  {
    dongCode: 41590600,
    dongName: "경기도 화성시 동탄6동",
  },
  {
    dongCode: 41590610,
    dongName: "경기도 화성시 동탄7동",
  },
  {
    dongCode: 41590620,
    dongName: "경기도 화성시 동탄8동",
  },
  {
    dongCode: 41610250,
    dongName: "경기도 광주시 오포읍",
  },
  {
    dongCode: 41610253,
    dongName: "경기도 광주시 초월읍",
  },
  {
    dongCode: 41610259,
    dongName: "경기도 광주시 곤지암읍",
  },
  {
    dongCode: 41610330,
    dongName: "경기도 광주시 도척면",
  },
  {
    dongCode: 41610340,
    dongName: "경기도 광주시 퇴촌면",
  },
  {
    dongCode: 41610350,
    dongName: "경기도 광주시 남종면",
  },
  {
    dongCode: 41610370,
    dongName: "경기도 광주시 남한산성면",
  },
  {
    dongCode: 41610510,
    dongName: "경기도 광주시 경안동",
  },
  {
    dongCode: 41610520,
    dongName: "경기도 광주시 송정동",
  },
  {
    dongCode: 41610540,
    dongName: "경기도 광주시 쌍령동",
  },
  {
    dongCode: 41610550,
    dongName: "경기도 광주시 탄벌동",
  },
  {
    dongCode: 41610560,
    dongName: "경기도 광주시 광남1동",
  },
  {
    dongCode: 41610570,
    dongName: "경기도 광주시 광남2동",
  },
  {
    dongCode: 41630250,
    dongName: "경기도 양주시 백석읍",
  },
  {
    dongCode: 41630310,
    dongName: "경기도 양주시 은현면",
  },
  {
    dongCode: 41630320,
    dongName: "경기도 양주시 남면",
  },
  {
    dongCode: 41630330,
    dongName: "경기도 양주시 광적면",
  },
  {
    dongCode: 41630340,
    dongName: "경기도 양주시 장흥면",
  },
  {
    dongCode: 41630510,
    dongName: "경기도 양주시 양주1동",
  },
  {
    dongCode: 41630520,
    dongName: "경기도 양주시 양주2동",
  },
  {
    dongCode: 41630530,
    dongName: "경기도 양주시 회천1동",
  },
  {
    dongCode: 41630540,
    dongName: "경기도 양주시 회천2동",
  },
  {
    dongCode: 41630550,
    dongName: "경기도 양주시 회천3동",
  },
  {
    dongCode: 41630560,
    dongName: "경기도 양주시 회천4동",
  },
  {
    dongCode: 41650250,
    dongName: "경기도 포천시 소흘읍",
  },
  {
    dongCode: 41650310,
    dongName: "경기도 포천시 군내면",
  },
  {
    dongCode: 41650320,
    dongName: "경기도 포천시 내촌면",
  },
  {
    dongCode: 41650330,
    dongName: "경기도 포천시 가산면",
  },
  {
    dongCode: 41650340,
    dongName: "경기도 포천시 신북면",
  },
  {
    dongCode: 41650350,
    dongName: "경기도 포천시 창수면",
  },
  {
    dongCode: 41650360,
    dongName: "경기도 포천시 영중면",
  },
  {
    dongCode: 41650370,
    dongName: "경기도 포천시 일동면",
  },
  {
    dongCode: 41650380,
    dongName: "경기도 포천시 이동면",
  },
  {
    dongCode: 41650390,
    dongName: "경기도 포천시 영북면",
  },
  {
    dongCode: 41650400,
    dongName: "경기도 포천시 관인면",
  },
  {
    dongCode: 41650410,
    dongName: "경기도 포천시 화현면",
  },
  {
    dongCode: 41650510,
    dongName: "경기도 포천시 포천동",
  },
  {
    dongCode: 41650520,
    dongName: "경기도 포천시 선단동",
  },
  {
    dongCode: 41670250,
    dongName: "경기도 여주시 가남읍",
  },
  {
    dongCode: 41670310,
    dongName: "경기도 여주시 점동면",
  },
  {
    dongCode: 41670320,
    dongName: "경기도 여주시 흥천면",
  },
  {
    dongCode: 41670330,
    dongName: "경기도 여주시 금사면",
  },
  {
    dongCode: 41670345,
    dongName: "경기도 여주시 세종대왕면",
  },
  {
    dongCode: 41670350,
    dongName: "경기도 여주시 대신면",
  },
  {
    dongCode: 41670360,
    dongName: "경기도 여주시 북내면",
  },
  {
    dongCode: 41670370,
    dongName: "경기도 여주시 강천면",
  },
  {
    dongCode: 41670380,
    dongName: "경기도 여주시 산북면",
  },
  {
    dongCode: 41670510,
    dongName: "경기도 여주시 여흥동",
  },
  {
    dongCode: 41670520,
    dongName: "경기도 여주시 중앙동",
  },
  {
    dongCode: 41670530,
    dongName: "경기도 여주시 오학동",
  },
  {
    dongCode: 41800250,
    dongName: "경기도 연천군 연천읍",
  },
  {
    dongCode: 41800253,
    dongName: "경기도 연천군 전곡읍",
  },
  {
    dongCode: 41800310,
    dongName: "경기도 연천군 군남면",
  },
  {
    dongCode: 41800320,
    dongName: "경기도 연천군 청산면",
  },
  {
    dongCode: 43730370,
    dongName: "충청북도 옥천군 군서면",
  },
  {
    dongCode: 43730380,
    dongName: "충청북도 옥천군 군북면",
  },
  {
    dongCode: 43740250,
    dongName: "충청북도 영동군 영동읍",
  },
  {
    dongCode: 43740310,
    dongName: "충청북도 영동군 용산면",
  },
  {
    dongCode: 43740320,
    dongName: "충청북도 영동군 황간면",
  },
  {
    dongCode: 43740335,
    dongName: "충청북도 영동군 추풍령면",
  },
  {
    dongCode: 43740340,
    dongName: "충청북도 영동군 매곡면",
  },
  {
    dongCode: 43740350,
    dongName: "충청북도 영동군 상촌면",
  },
  {
    dongCode: 43740360,
    dongName: "충청북도 영동군 양강면",
  },
  {
    dongCode: 43740370,
    dongName: "충청북도 영동군 용화면",
  },
  {
    dongCode: 43740380,
    dongName: "충청북도 영동군 학산면",
  },
  {
    dongCode: 43740390,
    dongName: "충청북도 영동군 양산면",
  },
  {
    dongCode: 43740400,
    dongName: "충청북도 영동군 심천면",
  },
  {
    dongCode: 43750250,
    dongName: "충청북도 진천군 진천읍",
  },
  {
    dongCode: 43750253,
    dongName: "충청북도 진천군 덕산읍",
  },
  {
    dongCode: 43750320,
    dongName: "충청북도 진천군 초평면",
  },
  {
    dongCode: 43750330,
    dongName: "충청북도 진천군 문백면",
  },
  {
    dongCode: 43750340,
    dongName: "충청북도 진천군 백곡면",
  },
  {
    dongCode: 43750350,
    dongName: "충청북도 진천군 이월면",
  },
  {
    dongCode: 43750370,
    dongName: "충청북도 진천군 광혜원면",
  },
  {
    dongCode: 43760250,
    dongName: "충청북도 괴산군 괴산읍",
  },
  {
    dongCode: 43760310,
    dongName: "충청북도 괴산군 감물면",
  },
  {
    dongCode: 43760320,
    dongName: "충청북도 괴산군 장연면",
  },
  {
    dongCode: 43760330,
    dongName: "충청북도 괴산군 연풍면",
  },
  {
    dongCode: 43760340,
    dongName: "충청북도 괴산군 칠성면",
  },
  {
    dongCode: 43760350,
    dongName: "충청북도 괴산군 문광면",
  },
  {
    dongCode: 43760360,
    dongName: "충청북도 괴산군 청천면",
  },
  {
    dongCode: 43760370,
    dongName: "충청북도 괴산군 청안면",
  },
  {
    dongCode: 43760390,
    dongName: "충청북도 괴산군 사리면",
  },
  {
    dongCode: 43760400,
    dongName: "충청북도 괴산군 소수면",
  },
  {
    dongCode: 43760410,
    dongName: "충청북도 괴산군 불정면",
  },
  {
    dongCode: 43770250,
    dongName: "충청북도 음성군 음성읍",
  },
  {
    dongCode: 43770253,
    dongName: "충청북도 음성군 금왕읍",
  },
  {
    dongCode: 43770310,
    dongName: "충청북도 음성군 소이면",
  },
  {
    dongCode: 43770320,
    dongName: "충청북도 음성군 원남면",
  },
  {
    dongCode: 43770330,
    dongName: "충청북도 음성군 맹동면",
  },
  {
    dongCode: 43770340,
    dongName: "충청북도 음성군 대소면",
  },
  {
    dongCode: 43770350,
    dongName: "충청북도 음성군 삼성면",
  },
  {
    dongCode: 43770360,
    dongName: "충청북도 음성군 생극면",
  },
  {
    dongCode: 43770370,
    dongName: "충청북도 음성군 감곡면",
  },
  {
    dongCode: 43785250,
    dongName: "충청북도 증평군 증평읍",
  },
  {
    dongCode: 43785310,
    dongName: "충청북도 증평군 도안면",
  },
  {
    dongCode: 43800250,
    dongName: "충청북도 단양군 단양읍",
  },
  {
    dongCode: 43800253,
    dongName: "충청북도 단양군 매포읍",
  },
  {
    dongCode: 43800310,
    dongName: "충청북도 단양군 대강면",
  },
  {
    dongCode: 43800320,
    dongName: "충청북도 단양군 가곡면",
  },
  {
    dongCode: 43800330,
    dongName: "충청북도 단양군 영춘면",
  },
  {
    dongCode: 43800340,
    dongName: "충청북도 단양군 어상천면",
  },
  {
    dongCode: 43800350,
    dongName: "충청북도 단양군 적성면",
  },
  {
    dongCode: 43800360,
    dongName: "충청북도 단양군 단성면",
  },
  {
    dongCode: 45111510,
    dongName: "전라북도 전주시 중앙동",
  },
  {
    dongCode: 45111530,
    dongName: "전라북도 전주시 풍남동",
  },
  {
    dongCode: 45111605,
    dongName: "전라북도 전주시 노송동",
  },
  {
    dongCode: 45111635,
    dongName: "전라북도 전주시 완산동",
  },
  {
    dongCode: 45111650,
    dongName: "전라북도 전주시 동서학동",
  },
  {
    dongCode: 45111660,
    dongName: "전라북도 전주시 서서학동",
  },
  {
    dongCode: 45111671,
    dongName: "전라북도 전주시 중화산1동",
  },
  {
    dongCode: 45111672,
    dongName: "전라북도 전주시 중화산2동",
  },
  {
    dongCode: 45111680,
    dongName: "전라북도 전주시 서신동",
  },
  {
    dongCode: 45111691,
    dongName: "전라북도 전주시 평화1동",
  },
  {
    dongCode: 45111692,
    dongName: "전라북도 전주시 평화2동",
  },
  {
    dongCode: 45111701,
    dongName: "전라북도 전주시 삼천1동",
  },
  {
    dongCode: 45111702,
    dongName: "전라북도 전주시 삼천2동",
  },
  {
    dongCode: 45111703,
    dongName: "전라북도 전주시 삼천3동",
  },
  {
    dongCode: 45111711,
    dongName: "전라북도 전주시 효자1동",
  },
  {
    dongCode: 45111712,
    dongName: "전라북도 전주시 효자2동",
  },
  {
    dongCode: 45111713,
    dongName: "전라북도 전주시 효자3동",
  },
  {
    dongCode: 45111714,
    dongName: "전라북도 전주시 효자4동",
  },
  {
    dongCode: 45111730,
    dongName: "전라북도 전주시 효자5동",
  },
  {
    dongCode: 45113525,
    dongName: "전라북도 전주시 진북동",
  },
  {
    dongCode: 45113540,
    dongName: "전라북도 전주시 인후1동",
  },
  {
    dongCode: 45113550,
    dongName: "전라북도 전주시 인후2동",
  },
  {
    dongCode: 45113560,
    dongName: "전라북도 전주시 인후3동",
  },
  {
    dongCode: 45113570,
    dongName: "전라북도 전주시 덕진동",
  },
  {
    dongCode: 45113580,
    dongName: "전라북도 전주시 금암1동",
  },
  {
    dongCode: 45113590,
    dongName: "전라북도 전주시 금암2동",
  },
  {
    dongCode: 45113600,
    dongName: "전라북도 전주시 팔복동",
  },
  {
    dongCode: 45113611,
    dongName: "전라북도 전주시 우아1동",
  },
  {
    dongCode: 45113612,
    dongName: "전라북도 전주시 우아2동",
  },
  {
    dongCode: 45113620,
    dongName: "전라북도 전주시 호성동",
  },
  {
    dongCode: 45113641,
    dongName: "전라북도 전주시 송천1동",
  },
  {
    dongCode: 45113642,
    dongName: "전라북도 전주시 송천2동",
  },
  {
    dongCode: 45113650,
    dongName: "전라북도 전주시 조촌동",
  },
  {
    dongCode: 45113665,
    dongName: "전라북도 전주시 여의동",
  },
  {
    dongCode: 45113670,
    dongName: "전라북도 전주시 혁신동",
  },
  {
    dongCode: 45130250,
    dongName: "전라북도 군산시 옥구읍",
  },
  {
    dongCode: 45130310,
    dongName: "전라북도 군산시 옥산면",
  },
  {
    dongCode: 45130320,
    dongName: "전라북도 군산시 회현면",
  },
  {
    dongCode: 45130330,
    dongName: "전라북도 군산시 임피면",
  },
  {
    dongCode: 45130340,
    dongName: "전라북도 군산시 서수면",
  },
  {
    dongCode: 45130350,
    dongName: "전라북도 군산시 대야면",
  },
  {
    dongCode: 45130360,
    dongName: "전라북도 군산시 개정면",
  },
  {
    dongCode: 45130370,
    dongName: "전라북도 군산시 성산면",
  },
  {
    dongCode: 45130380,
    dongName: "전라북도 군산시 나포면",
  },
  {
    dongCode: 45130390,
    dongName: "전라북도 군산시 옥도면",
  },
  {
    dongCode: 45130400,
    dongName: "전라북도 군산시 옥서면",
  },
  {
    dongCode: 45130515,
    dongName: "전라북도 군산시 해신동",
  },
  {
    dongCode: 45130530,
    dongName: "전라북도 군산시 월명동",
  },
  {
    dongCode: 45130550,
    dongName: "전라북도 군산시 신풍동",
  },
  {
    dongCode: 45130560,
    dongName: "전라북도 군산시 삼학동",
  },
  {
    dongCode: 45130605,
    dongName: "전라북도 군산시 중앙동",
  },
  {
    dongCode: 45130640,
    dongName: "전라북도 군산시 흥남동",
  },
  {
    dongCode: 45130650,
    dongName: "전라북도 군산시 조촌동",
  },
  {
    dongCode: 45130660,
    dongName: "전라북도 군산시 경암동",
  },
  {
    dongCode: 45130670,
    dongName: "전라북도 군산시 구암동",
  },
  {
    dongCode: 45130680,
    dongName: "전라북도 군산시 개정동",
  },
  {
    dongCode: 45130690,
    dongName: "전라북도 군산시 수송동",
  },
  {
    dongCode: 45130701,
    dongName: "전라북도 군산시 나운1동",
  },
  {
    dongCode: 45130702,
    dongName: "전라북도 군산시 나운2동",
  },
  {
    dongCode: 45130703,
    dongName: "전라북도 군산시 나운3동",
  },
  {
    dongCode: 45130710,
    dongName: "전라북도 군산시 소룡동",
  },
  {
    dongCode: 45130720,
    dongName: "전라북도 군산시 미성동",
  },
  {
    dongCode: 45140250,
    dongName: "전라북도 익산시 함열읍",
  },
  {
    dongCode: 45140310,
    dongName: "전라북도 익산시 오산면",
  },
  {
    dongCode: 45140320,
    dongName: "전라북도 익산시 황등면",
  },
  {
    dongCode: 45140330,
    dongName: "전라북도 익산시 함라면",
  },
  {
    dongCode: 45140340,
    dongName: "전라북도 익산시 웅포면",
  },
  {
    dongCode: 45140350,
    dongName: "전라북도 익산시 성당면",
  },
  {
    dongCode: 45140360,
    dongName: "전라북도 익산시 용안면",
  },
  {
    dongCode: 45140370,
    dongName: "전라북도 익산시 낭산면",
  },
  {
    dongCode: 45140380,
    dongName: "전라북도 익산시 망성면",
  },
  {
    dongCode: 45140390,
    dongName: "전라북도 익산시 여산면",
  },
  {
    dongCode: 45140400,
    dongName: "전라북도 익산시 금마면",
  },
  {
    dongCode: 45140410,
    dongName: "전라북도 익산시 왕궁면",
  },
  {
    dongCode: 45140420,
    dongName: "전라북도 익산시 춘포면",
  },
  {
    dongCode: 45140430,
    dongName: "전라북도 익산시 삼기면",
  },
  {
    dongCode: 45140440,
    dongName: "전라북도 익산시 용동면",
  },
  {
    dongCode: 45140520,
    dongName: "전라북도 익산시 중앙동",
  },
  {
    dongCode: 45140530,
    dongName: "전라북도 익산시 평화동",
  },
  {
    dongCode: 45140560,
    dongName: "전라북도 익산시 인화동",
  },
  {
    dongCode: 45140570,
    dongName: "전라북도 익산시 동산동",
  },
  {
    dongCode: 45140580,
    dongName: "전라북도 익산시 마동",
  },
  {
    dongCode: 45140595,
    dongName: "전라북도 익산시 남중동",
  },
  {
    dongCode: 45140610,
    dongName: "전라북도 익산시 모현동",
  },
  {
    dongCode: 45140620,
    dongName: "전라북도 익산시 송학동",
  },
  {
    dongCode: 45140646,
    dongName: "전라북도 익산시 영등1동",
  },
  {
    dongCode: 45140647,
    dongName: "전라북도 익산시 영등2동",
  },
  {
    dongCode: 45140652,
    dongName: "전라북도 익산시 어양동",
  },
  {
    dongCode: 45140656,
    dongName: "전라북도 익산시 신동",
  },
  {
    dongCode: 45140670,
    dongName: "전라북도 익산시 팔봉동",
  },
  {
    dongCode: 45140690,
    dongName: "전라북도 익산시 삼성동",
  },
  {
    dongCode: 45180250,
    dongName: "전라북도 정읍시 신태인읍",
  },
  {
    dongCode: 45180310,
    dongName: "전라북도 정읍시 북면",
  },
  {
    dongCode: 45180320,
    dongName: "전라북도 정읍시 입암면",
  },
  {
    dongCode: 45180330,
    dongName: "전라북도 정읍시 소성면",
  },
  {
    dongCode: 45180340,
    dongName: "전라북도 정읍시 고부면",
  },
  {
    dongCode: 45180350,
    dongName: "전라북도 정읍시 영원면",
  },
  {
    dongCode: 45180360,
    dongName: "전라북도 정읍시 덕천면",
  },
  {
    dongCode: 45180370,
    dongName: "전라북도 정읍시 이평면",
  },
  {
    dongCode: 45180380,
    dongName: "전라북도 정읍시 정우면",
  },
  {
    dongCode: 45180390,
    dongName: "전라북도 정읍시 태인면",
  },
  {
    dongCode: 45180400,
    dongName: "전라북도 정읍시 감곡면",
  },
  {
    dongCode: 45180410,
    dongName: "전라북도 정읍시 옹동면",
  },
  {
    dongCode: 45180420,
    dongName: "전라북도 정읍시 칠보면",
  },
  {
    dongCode: 45180430,
    dongName: "전라북도 정읍시 산내면",
  },
  {
    dongCode: 45180440,
    dongName: "전라북도 정읍시 산외면",
  },
  {
    dongCode: 45180510,
    dongName: "전라북도 정읍시 수성동",
  },
  {
    dongCode: 45180520,
    dongName: "전라북도 정읍시 장명동",
  },
  {
    dongCode: 45180535,
    dongName: "전라북도 정읍시 내장상동",
  },
  {
    dongCode: 45180545,
    dongName: "전라북도 정읍시 시기동",
  },
  {
    dongCode: 45180565,
    dongName: "전라북도 정읍시 초산동",
  },
  {
    dongCode: 45180570,
    dongName: "전라북도 정읍시 연지동",
  },
  {
    dongCode: 45180580,
    dongName: "전라북도 정읍시 농소동",
  },
  {
    dongCode: 45180595,
    dongName: "전라북도 정읍시 상교동",
  },
  {
    dongCode: 45190250,
    dongName: "전라북도 남원시 운봉읍",
  },
  {
    dongCode: 45190310,
    dongName: "전라북도 남원시 주천면",
  },
  {
    dongCode: 45190320,
    dongName: "전라북도 남원시 수지면",
  },
  {
    dongCode: 45190330,
    dongName: "전라북도 남원시 송동면",
  },
  {
    dongCode: 45190340,
    dongName: "전라북도 남원시 주생면",
  },
  {
    dongCode: 45190350,
    dongName: "전라북도 남원시 금지면",
  },
  {
    dongCode: 45190360,
    dongName: "전라북도 남원시 대강면",
  },
  {
    dongCode: 45190370,
    dongName: "전라북도 남원시 대산면",
  },
  {
    dongCode: 45190380,
    dongName: "전라북도 남원시 사매면",
  },
  {
    dongCode: 45190390,
    dongName: "전라북도 남원시 덕과면",
  },
  {
    dongCode: 45190400,
    dongName: "전라북도 남원시 보절면",
  },
  {
    dongCode: 45190410,
    dongName: "전라북도 남원시 산동면",
  },
  {
    dongCode: 45190420,
    dongName: "전라북도 남원시 이백면",
  },
  {
    dongCode: 45190450,
    dongName: "전라북도 남원시 아영면",
  },
  {
    dongCode: 45190460,
    dongName: "전라북도 남원시 산내면",
  },
  {
    dongCode: 45190470,
    dongName: "전라북도 남원시 인월면",
  },
  {
    dongCode: 45190510,
    dongName: "전라북도 남원시 동충동",
  },
  {
    dongCode: 45190520,
    dongName: "전라북도 남원시 죽항동",
  },
  {
    dongCode: 45190540,
    dongName: "전라북도 남원시 노암동",
  },
  {
    dongCode: 45190550,
    dongName: "전라북도 남원시 금동",
  },
  {
    dongCode: 45190560,
    dongName: "전라북도 남원시 왕정동",
  },
  {
    dongCode: 45190570,
    dongName: "전라북도 남원시 향교동",
  },
  {
    dongCode: 45190590,
    dongName: "전라북도 남원시 도통동",
  },
  {
    dongCode: 45210250,
    dongName: "전라북도 김제시 만경읍",
  },
  {
    dongCode: 45210320,
    dongName: "전라북도 김제시 죽산면",
  },
  {
    dongCode: 45210330,
    dongName: "전라북도 김제시 백산면",
  },
  {
    dongCode: 45210340,
    dongName: "전라북도 김제시 용지면",
  },
  {
    dongCode: 45210350,
    dongName: "전라북도 김제시 백구면",
  },
  {
    dongCode: 45210360,
    dongName: "전라북도 김제시 부량면",
  },
  {
    dongCode: 45210380,
    dongName: "전라북도 김제시 공덕면",
  },
  {
    dongCode: 45210390,
    dongName: "전라북도 김제시 청하면",
  },
  {
    dongCode: 45210400,
    dongName: "전라북도 김제시 성덕면",
  },
  {
    dongCode: 45210410,
    dongName: "전라북도 김제시 진봉면",
  },
  {
    dongCode: 45210420,
    dongName: "전라북도 김제시 금구면",
  },
  {
    dongCode: 45210430,
    dongName: "전라북도 김제시 봉남면",
  },
  {
    dongCode: 45210440,
    dongName: "전라북도 김제시 황산면",
  },
  {
    dongCode: 45210450,
    dongName: "전라북도 김제시 금산면",
  },
  {
    dongCode: 45210460,
    dongName: "전라북도 김제시 광활면",
  },
  {
    dongCode: 45210510,
    dongName: "전라북도 김제시 요촌동",
  },
  {
    dongCode: 45210520,
    dongName: "전라북도 김제시 신풍동",
  },
  {
    dongCode: 45210540,
    dongName: "전라북도 김제시 검산동",
  },
  {
    dongCode: 45210580,
    dongName: "전라북도 김제시 교월동",
  },
  {
    dongCode: 45710250,
    dongName: "전라북도 완주군 삼례읍",
  },
  {
    dongCode: 45710253,
    dongName: "전라북도 완주군 봉동읍",
  },
  {
    dongCode: 45710256,
    dongName: "전라북도 완주군 용진읍",
  },
  {
    dongCode: 45710320,
    dongName: "전라북도 완주군 상관면",
  },
  {
    dongCode: 45710330,
    dongName: "전라북도 완주군 이서면",
  },
  {
    dongCode: 45710340,
    dongName: "전라북도 완주군 소양면",
  },
  {
    dongCode: 45710350,
    dongName: "전라북도 완주군 구이면",
  },
  {
    dongCode: 45710360,
    dongName: "전라북도 완주군 고산면",
  },
  {
    dongCode: 45710370,
    dongName: "전라북도 완주군 비봉면",
  },
  {
    dongCode: 45710380,
    dongName: "전라북도 완주군 운주면",
  },
  {
    dongCode: 45710390,
    dongName: "전라북도 완주군 화산면",
  },
  {
    dongCode: 45710400,
    dongName: "전라북도 완주군 동상면",
  },
  {
    dongCode: 45710410,
    dongName: "전라북도 완주군 경천면",
  },
  {
    dongCode: 45720250,
    dongName: "전라북도 진안군 진안읍",
  },
  {
    dongCode: 45720310,
    dongName: "전라북도 진안군 용담면",
  },
  {
    dongCode: 45720320,
    dongName: "전라북도 진안군 안천면",
  },
  {
    dongCode: 45720330,
    dongName: "전라북도 진안군 동향면",
  },
  {
    dongCode: 45720340,
    dongName: "전라북도 진안군 상전면",
  },
  {
    dongCode: 45720350,
    dongName: "전라북도 진안군 백운면",
  },
  {
    dongCode: 45720360,
    dongName: "전라북도 진안군 성수면",
  },
  {
    dongCode: 45720370,
    dongName: "전라북도 진안군 마령면",
  },
  {
    dongCode: 45720380,
    dongName: "전라북도 진안군 부귀면",
  },
  {
    dongCode: 45720390,
    dongName: "전라북도 진안군 정천면",
  },
  {
    dongCode: 45720400,
    dongName: "전라북도 진안군 주천면",
  },
  {
    dongCode: 45730250,
    dongName: "전라북도 무주군 무주읍",
  },
  {
    dongCode: 45730310,
    dongName: "전라북도 무주군 무풍면",
  },
  {
    dongCode: 45730320,
    dongName: "전라북도 무주군 설천면",
  },
  {
    dongCode: 45730330,
    dongName: "전라북도 무주군 적상면",
  },
  {
    dongCode: 44131250,
    dongName: "충청남도 천안시 목천읍",
  },
  {
    dongCode: 44131310,
    dongName: "충청남도 천안시 풍세면",
  },
  {
    dongCode: 44131320,
    dongName: "충청남도 천안시 광덕면",
  },
  {
    dongCode: 44131330,
    dongName: "충청남도 천안시 북면",
  },
  {
    dongCode: 44131340,
    dongName: "충청남도 천안시 성남면",
  },
  {
    dongCode: 44131350,
    dongName: "충청남도 천안시 수신면",
  },
  {
    dongCode: 44131360,
    dongName: "충청남도 천안시 병천면",
  },
  {
    dongCode: 44131370,
    dongName: "충청남도 천안시 동면",
  },
  {
    dongCode: 44131510,
    dongName: "충청남도 천안시 중앙동",
  },
  {
    dongCode: 44131520,
    dongName: "충청남도 천안시 문성동",
  },
  {
    dongCode: 44131530,
    dongName: "충청남도 천안시 원성1동",
  },
  {
    dongCode: 44131540,
    dongName: "충청남도 천안시 원성2동",
  },
  {
    dongCode: 44131550,
    dongName: "충청남도 천안시 봉명동",
  },
  {
    dongCode: 44131560,
    dongName: "충청남도 천안시 일봉동",
  },
  {
    dongCode: 44131570,
    dongName: "충청남도 천안시 신방동",
  },
  {
    dongCode: 44131580,
    dongName: "충청남도 천안시 청룡동",
  },
  {
    dongCode: 44131590,
    dongName: "충청남도 천안시 신안동",
  },
  {
    dongCode: 44133250,
    dongName: "충청남도 천안시 성환읍",
  },
  {
    dongCode: 44133253,
    dongName: "충청남도 천안시 성거읍",
  },
  {
    dongCode: 44133256,
    dongName: "충청남도 천안시 직산읍",
  },
  {
    dongCode: 44133310,
    dongName: "충청남도 천안시 입장면",
  },
  {
    dongCode: 44133510,
    dongName: "충청남도 천안시 성정1동",
  },
  {
    dongCode: 44133520,
    dongName: "충청남도 천안시 성정2동",
  },
  {
    dongCode: 44133530,
    dongName: "충청남도 천안시 쌍용1동",
  },
  {
    dongCode: 44133540,
    dongName: "충청남도 천안시 쌍용2동",
  },
  {
    dongCode: 44133550,
    dongName: "충청남도 천안시 쌍용3동",
  },
  {
    dongCode: 44133560,
    dongName: "충청남도 천안시 백석동",
  },
  {
    dongCode: 44133566,
    dongName: "충청남도 천안시 불당1동",
  },
  {
    dongCode: 44133567,
    dongName: "충청남도 천안시 불당2동",
  },
  {
    dongCode: 44133580,
    dongName: "충청남도 천안시 부성1동",
  },
  {
    dongCode: 44133590,
    dongName: "충청남도 천안시 부성2동",
  },
  {
    dongCode: 44150250,
    dongName: "충청남도 공주시 유구읍",
  },
  {
    dongCode: 44150310,
    dongName: "충청남도 공주시 이인면",
  },
  {
    dongCode: 44150320,
    dongName: "충청남도 공주시 탄천면",
  },
  {
    dongCode: 44150330,
    dongName: "충청남도 공주시 계룡면",
  },
  {
    dongCode: 44150340,
    dongName: "충청남도 공주시 반포면",
  },
  {
    dongCode: 44150360,
    dongName: "충청남도 공주시 의당면",
  },
  {
    dongCode: 44150370,
    dongName: "충청남도 공주시 정안면",
  },
  {
    dongCode: 44150380,
    dongName: "충청남도 공주시 우성면",
  },
  {
    dongCode: 44150390,
    dongName: "충청남도 공주시 사곡면",
  },
  {
    dongCode: 44150400,
    dongName: "충청남도 공주시 신풍면",
  },
  {
    dongCode: 44150510,
    dongName: "충청남도 공주시 중학동",
  },
  {
    dongCode: 44150540,
    dongName: "충청남도 공주시 웅진동",
  },
  {
    dongCode: 44150550,
    dongName: "충청남도 공주시 금학동",
  },
  {
    dongCode: 44150560,
    dongName: "충청남도 공주시 옥룡동",
  },
  {
    dongCode: 44150570,
    dongName: "충청남도 공주시 신관동",
  },
  {
    dongCode: 44150590,
    dongName: "충청남도 공주시 월송동",
  },
  {
    dongCode: 44180250,
    dongName: "충청남도 보령시 웅천읍",
  },
  {
    dongCode: 44180310,
    dongName: "충청남도 보령시 주포면",
  },
  {
    dongCode: 44180320,
    dongName: "충청남도 보령시 오천면",
  },
  {
    dongCode: 44180330,
    dongName: "충청남도 보령시 천북면",
  },
  {
    dongCode: 44180340,
    dongName: "충청남도 보령시 청소면",
  },
  {
    dongCode: 44180350,
    dongName: "충청남도 보령시 청라면",
  },
  {
    dongCode: 44180360,
    dongName: "충청남도 보령시 남포면",
  },
  {
    dongCode: 44180380,
    dongName: "충청남도 보령시 주산면",
  },
  {
    dongCode: 44180390,
    dongName: "충청남도 보령시 미산면",
  },
  {
    dongCode: 44180400,
    dongName: "충청남도 보령시 성주면",
  },
  {
    dongCode: 44180410,
    dongName: "충청남도 보령시 주교면",
  },
  {
    dongCode: 44180515,
    dongName: "충청남도 보령시 대천1동",
  },
  {
    dongCode: 44180525,
    dongName: "충청남도 보령시 대천2동",
  },
  {
    dongCode: 44180535,
    dongName: "충청남도 보령시 대천3동",
  },
  {
    dongCode: 44180545,
    dongName: "충청남도 보령시 대천4동",
  },
  {
    dongCode: 44180565,
    dongName: "충청남도 보령시 대천5동",
  },
  {
    dongCode: 44200250,
    dongName: "충청남도 아산시 염치읍",
  },
  {
    dongCode: 44200253,
    dongName: "충청남도 아산시 배방읍",
  },
  {
    dongCode: 44200310,
    dongName: "충청남도 아산시 송악면",
  },
  {
    dongCode: 44200330,
    dongName: "충청남도 아산시 탕정면",
  },
  {
    dongCode: 44200350,
    dongName: "충청남도 아산시 음봉면",
  },
  {
    dongCode: 44200360,
    dongName: "충청남도 아산시 둔포면",
  },
  {
    dongCode: 44200370,
    dongName: "충청남도 아산시 영인면",
  },
  {
    dongCode: 44200380,
    dongName: "충청남도 아산시 인주면",
  },
  {
    dongCode: 44200390,
    dongName: "충청남도 아산시 선장면",
  },
  {
    dongCode: 44200400,
    dongName: "충청남도 아산시 도고면",
  },
  {
    dongCode: 44200410,
    dongName: "충청남도 아산시 신창면",
  },
  {
    dongCode: 44200570,
    dongName: "충청남도 아산시 온양1동",
  },
  {
    dongCode: 44200580,
    dongName: "충청남도 아산시 온양2동",
  },
  {
    dongCode: 44200590,
    dongName: "충청남도 아산시 온양3동",
  },
  {
    dongCode: 44200600,
    dongName: "충청남도 아산시 온양4동",
  },
  {
    dongCode: 44200610,
    dongName: "충청남도 아산시 온양5동",
  },
  {
    dongCode: 44200620,
    dongName: "충청남도 아산시 온양6동",
  },
  {
    dongCode: 44210250,
    dongName: "충청남도 서산시 대산읍",
  },
  {
    dongCode: 44210310,
    dongName: "충청남도 서산시 인지면",
  },
  {
    dongCode: 44210320,
    dongName: "충청남도 서산시 부석면",
  },
  {
    dongCode: 44210330,
    dongName: "충청남도 서산시 팔봉면",
  },
  {
    dongCode: 44210340,
    dongName: "충청남도 서산시 지곡면",
  },
  {
    dongCode: 44210360,
    dongName: "충청남도 서산시 성연면",
  },
  {
    dongCode: 44210370,
    dongName: "충청남도 서산시 음암면",
  },
  {
    dongCode: 44210380,
    dongName: "충청남도 서산시 운산면",
  },
  {
    dongCode: 44210390,
    dongName: "충청남도 서산시 해미면",
  },
  {
    dongCode: 44210400,
    dongName: "충청남도 서산시 고북면",
  },
  {
    dongCode: 44210510,
    dongName: "충청남도 서산시 부춘동",
  },
  {
    dongCode: 44210525,
    dongName: "충청남도 서산시 동문1동",
  },
  {
    dongCode: 44210535,
    dongName: "충청남도 서산시 동문2동",
  },
  {
    dongCode: 44210540,
    dongName: "충청남도 서산시 수석동",
  },
  {
    dongCode: 44210550,
    dongName: "충청남도 서산시 석남동",
  },
  {
    dongCode: 44230250,
    dongName: "충청남도 논산시 강경읍",
  },
  {
    dongCode: 44230253,
    dongName: "충청남도 논산시 연무읍",
  },
  {
    dongCode: 44230310,
    dongName: "충청남도 논산시 성동면",
  },
  {
    dongCode: 44230320,
    dongName: "충청남도 논산시 광석면",
  },
  {
    dongCode: 44230330,
    dongName: "충청남도 논산시 노성면",
  },
  {
    dongCode: 44230340,
    dongName: "충청남도 논산시 상월면",
  },
  {
    dongCode: 44230350,
    dongName: "충청남도 논산시 부적면",
  },
  {
    dongCode: 44230360,
    dongName: "충청남도 논산시 연산면",
  },
  {
    dongCode: 44230380,
    dongName: "충청남도 논산시 벌곡면",
  },
  {
    dongCode: 44230390,
    dongName: "충청남도 논산시 양촌면",
  },
  {
    dongCode: 44230400,
    dongName: "충청남도 논산시 가야곡면",
  },
  {
    dongCode: 44230410,
    dongName: "충청남도 논산시 은진면",
  },
  {
    dongCode: 44230420,
    dongName: "충청남도 논산시 채운면",
  },
  {
    dongCode: 44230510,
    dongName: "충청남도 논산시 취암동",
  },
  {
    dongCode: 44230520,
    dongName: "충청남도 논산시 부창동",
  },
  {
    dongCode: 44250310,
    dongName: "충청남도 계룡시 두마면",
  },
  {
    dongCode: 44250315,
    dongName: "충청남도 계룡시 엄사면",
  },
  {
    dongCode: 44250330,
    dongName: "충청남도 계룡시 신도안면",
  },
  {
    dongCode: 44250510,
    dongName: "충청남도 계룡시 금암동",
  },
  {
    dongCode: 44270250,
    dongName: "충청남도 당진시 합덕읍",
  },
  {
    dongCode: 44270253,
    dongName: "충청남도 당진시 송악읍",
  },
  {
    dongCode: 44270310,
    dongName: "충청남도 당진시 고대면",
  },
  {
    dongCode: 44270320,
    dongName: "충청남도 당진시 석문면",
  },
  {
    dongCode: 44270330,
    dongName: "충청남도 당진시 대호지면",
  },
  {
    dongCode: 44270340,
    dongName: "충청남도 당진시 정미면",
  },
  {
    dongCode: 44270350,
    dongName: "충청남도 당진시 면천면",
  },
  {
    dongCode: 44270360,
    dongName: "충청남도 당진시 순성면",
  },
  {
    dongCode: 44270370,
    dongName: "충청남도 당진시 우강면",
  },
  {
    dongCode: 44270380,
    dongName: "충청남도 당진시 신평면",
  },
  {
    dongCode: 44270390,
    dongName: "충청남도 당진시 송산면",
  },
  {
    dongCode: 44270510,
    dongName: "충청남도 당진시 당진1동",
  },
  {
    dongCode: 44270520,
    dongName: "충청남도 당진시 당진2동",
  },
  {
    dongCode: 44270530,
    dongName: "충청남도 당진시 당진3동",
  },
  {
    dongCode: 44710250,
    dongName: "충청남도 금산군 금산읍",
  },
  {
    dongCode: 44710310,
    dongName: "충청남도 금산군 금성면",
  },
  {
    dongCode: 44710320,
    dongName: "충청남도 금산군 제원면",
  },
  {
    dongCode: 44710330,
    dongName: "충청남도 금산군 부리면",
  },
  {
    dongCode: 44710340,
    dongName: "충청남도 금산군 군북면",
  },
  {
    dongCode: 44710350,
    dongName: "충청남도 금산군 남일면",
  },
  {
    dongCode: 44710360,
    dongName: "충청남도 금산군 남이면",
  },
  {
    dongCode: 44710370,
    dongName: "충청남도 금산군 진산면",
  },
  {
    dongCode: 44710380,
    dongName: "충청남도 금산군 복수면",
  },
  {
    dongCode: 44710390,
    dongName: "충청남도 금산군 추부면",
  },
  {
    dongCode: 44760250,
    dongName: "충청남도 부여군 부여읍",
  },
  {
    dongCode: 44760310,
    dongName: "충청남도 부여군 규암면",
  },
  {
    dongCode: 44760320,
    dongName: "충청남도 부여군 은산면",
  },
  {
    dongCode: 44760330,
    dongName: "충청남도 부여군 외산면",
  },
  {
    dongCode: 44760340,
    dongName: "충청남도 부여군 내산면",
  },
  {
    dongCode: 44760350,
    dongName: "충청남도 부여군 구룡면",
  },
  {
    dongCode: 44760360,
    dongName: "충청남도 부여군 홍산면",
  },
  {
    dongCode: 44760370,
    dongName: "충청남도 부여군 옥산면",
  },
  {
    dongCode: 44760380,
    dongName: "충청남도 부여군 남면",
  },
  {
    dongCode: 44760390,
    dongName: "충청남도 부여군 충화면",
  },
  {
    dongCode: 44760400,
    dongName: "충청남도 부여군 양화면",
  },
  {
    dongCode: 44760410,
    dongName: "충청남도 부여군 임천면",
  },
  {
    dongCode: 44760420,
    dongName: "충청남도 부여군 장암면",
  },
  {
    dongCode: 44760430,
    dongName: "충청남도 부여군 세도면",
  },
  {
    dongCode: 44760440,
    dongName: "충청남도 부여군 석성면",
  },
  {
    dongCode: 44760450,
    dongName: "충청남도 부여군 초촌면",
  },
  {
    dongCode: 44770250,
    dongName: "충청남도 서천군 장항읍",
  },
  {
    dongCode: 44770253,
    dongName: "충청남도 서천군 서천읍",
  },
  {
    dongCode: 44770310,
    dongName: "충청남도 서천군 마서면",
  },
  {
    dongCode: 44770320,
    dongName: "충청남도 서천군 화양면",
  },
  {
    dongCode: 44770330,
    dongName: "충청남도 서천군 기산면",
  },
  {
    dongCode: 44770340,
    dongName: "충청남도 서천군 한산면",
  },
  {
    dongCode: 44770350,
    dongName: "충청남도 서천군 마산면",
  },
  {
    dongCode: 44770360,
    dongName: "충청남도 서천군 시초면",
  },
  {
    dongCode: 44770370,
    dongName: "충청남도 서천군 문산면",
  },
  {
    dongCode: 44770380,
    dongName: "충청남도 서천군 판교면",
  },
  {
    dongCode: 44770390,
    dongName: "충청남도 서천군 종천면",
  },
  {
    dongCode: 44770400,
    dongName: "충청남도 서천군 비인면",
  },
  {
    dongCode: 44770410,
    dongName: "충청남도 서천군 서면",
  },
  {
    dongCode: 44790250,
    dongName: "충청남도 청양군 청양읍",
  },
  {
    dongCode: 44790310,
    dongName: "충청남도 청양군 운곡면",
  },
  {
    dongCode: 44790320,
    dongName: "충청남도 청양군 대치면",
  },
  {
    dongCode: 44790330,
    dongName: "충청남도 청양군 정산면",
  },
  {
    dongCode: 44790340,
    dongName: "충청남도 청양군 목면",
  },
  {
    dongCode: 44790350,
    dongName: "충청남도 청양군 청남면",
  },
  {
    dongCode: 44790360,
    dongName: "충청남도 청양군 장평면",
  },
  {
    dongCode: 44790370,
    dongName: "충청남도 청양군 남양면",
  },
  {
    dongCode: 44790380,
    dongName: "충청남도 청양군 화성면",
  },
  {
    dongCode: 44790390,
    dongName: "충청남도 청양군 비봉면",
  },
  {
    dongCode: 44800250,
    dongName: "충청남도 홍성군 홍성읍",
  },
  {
    dongCode: 44800253,
    dongName: "충청남도 홍성군 광천읍",
  },
  {
    dongCode: 44800256,
    dongName: "충청남도 홍성군 홍북읍",
  },
  {
    dongCode: 44800320,
    dongName: "충청남도 홍성군 금마면",
  },
  {
    dongCode: 44800330,
    dongName: "충청남도 홍성군 홍동면",
  },
  {
    dongCode: 44800340,
    dongName: "충청남도 홍성군 장곡면",
  },
  {
    dongCode: 44800350,
    dongName: "충청남도 홍성군 은하면",
  },
  {
    dongCode: 44800360,
    dongName: "충청남도 홍성군 결성면",
  },
  {
    dongCode: 44800370,
    dongName: "충청남도 홍성군 서부면",
  },
  {
    dongCode: 44800380,
    dongName: "충청남도 홍성군 갈산면",
  },
  {
    dongCode: 44800390,
    dongName: "충청남도 홍성군 구항면",
  },
  {
    dongCode: 44810250,
    dongName: "충청남도 예산군 예산읍",
  },
  {
    dongCode: 44810253,
    dongName: "충청남도 예산군 삽교읍",
  },
  {
    dongCode: 44810310,
    dongName: "충청남도 예산군 대술면",
  },
  {
    dongCode: 44810320,
    dongName: "충청남도 예산군 신양면",
  },
  {
    dongCode: 44810330,
    dongName: "충청남도 예산군 광시면",
  },
  {
    dongCode: 44810340,
    dongName: "충청남도 예산군 대흥면",
  },
  {
    dongCode: 44810350,
    dongName: "충청남도 예산군 응봉면",
  },
  {
    dongCode: 44810360,
    dongName: "충청남도 예산군 덕산면",
  },
  {
    dongCode: 44810370,
    dongName: "충청남도 예산군 봉산면",
  },
  {
    dongCode: 44810380,
    dongName: "충청남도 예산군 고덕면",
  },
  {
    dongCode: 44810390,
    dongName: "충청남도 예산군 신암면",
  },
  {
    dongCode: 44810400,
    dongName: "충청남도 예산군 오가면",
  },
  {
    dongCode: 44825250,
    dongName: "충청남도 태안군 태안읍",
  },
  {
    dongCode: 44825253,
    dongName: "충청남도 태안군 안면읍",
  },
  {
    dongCode: 44825310,
    dongName: "충청남도 태안군 고남면",
  },
  {
    dongCode: 44825320,
    dongName: "충청남도 태안군 남면",
  },
  {
    dongCode: 44825330,
    dongName: "충청남도 태안군 근흥면",
  },
  {
    dongCode: 44825340,
    dongName: "충청남도 태안군 소원면",
  },
  {
    dongCode: 44825350,
    dongName: "충청남도 태안군 원북면",
  },
  {
    dongCode: 44825360,
    dongName: "충청남도 태안군 이원면",
  },
  {
    dongCode: 43111720,
    dongName: "충청북도 청주시 용암1동",
  },
  {
    dongCode: 43111730,
    dongName: "충청북도 청주시 용암2동",
  },
  {
    dongCode: 43112310,
    dongName: "충청북도 청주시 남이면",
  },
  {
    dongCode: 43112320,
    dongName: "충청북도 청주시 현도면",
  },
  {
    dongCode: 43112510,
    dongName: "충청북도 청주시 사직1동",
  },
  {
    dongCode: 43112520,
    dongName: "충청북도 청주시 사직2동",
  },
  {
    dongCode: 43112530,
    dongName: "충청북도 청주시 사창동",
  },
  {
    dongCode: 43112540,
    dongName: "충청북도 청주시 모충동",
  },
  {
    dongCode: 43112550,
    dongName: "충청북도 청주시 산남동",
  },
  {
    dongCode: 43112560,
    dongName: "충청북도 청주시 분평동",
  },
  {
    dongCode: 43112570,
    dongName: "충청북도 청주시 수곡1동",
  },
  {
    dongCode: 43112580,
    dongName: "충청북도 청주시 수곡2동",
  },
  {
    dongCode: 43112590,
    dongName: "충청북도 청주시 성화.개신.죽림동",
  },
  {
    dongCode: 43113250,
    dongName: "충청북도 청주시 오송읍",
  },
  {
    dongCode: 43113310,
    dongName: "충청북도 청주시 강내면",
  },
  {
    dongCode: 43113320,
    dongName: "충청북도 청주시 옥산면",
  },
  {
    dongCode: 43113700,
    dongName: "충청북도 청주시 운천.신봉동",
  },
  {
    dongCode: 43113741,
    dongName: "충청북도 청주시 복대1동",
  },
  {
    dongCode: 43113742,
    dongName: "충청북도 청주시 복대2동",
  },
  {
    dongCode: 43113747,
    dongName: "충청북도 청주시 가경동",
  },
  {
    dongCode: 43113751,
    dongName: "충청북도 청주시 봉명1동",
  },
  {
    dongCode: 43113756,
    dongName: "충청북도 청주시 봉명2.송정동",
  },
  {
    dongCode: 43113760,
    dongName: "충청북도 청주시 강서1동",
  },
  {
    dongCode: 43113770,
    dongName: "충청북도 청주시 강서2동",
  },
  {
    dongCode: 43114250,
    dongName: "충청북도 청주시 내수읍",
  },
  {
    dongCode: 43114253,
    dongName: "충청북도 청주시 오창읍",
  },
  {
    dongCode: 43114310,
    dongName: "충청북도 청주시 북이면",
  },
  {
    dongCode: 43114510,
    dongName: "충청북도 청주시 우암동",
  },
  {
    dongCode: 43114520,
    dongName: "충청북도 청주시 내덕1동",
  },
  {
    dongCode: 43114530,
    dongName: "충청북도 청주시 내덕2동",
  },
  {
    dongCode: 43114540,
    dongName: "충청북도 청주시 율량.사천동",
  },
  {
    dongCode: 43114550,
    dongName: "충청북도 청주시 오근장동",
  },
  {
    dongCode: 43130250,
    dongName: "충청북도 충주시 주덕읍",
  },
  {
    dongCode: 43130310,
    dongName: "충청북도 충주시 살미면",
  },
  {
    dongCode: 43130325,
    dongName: "충청북도 충주시 수안보면",
  },
  {
    dongCode: 43130335,
    dongName: "충청북도 충주시 대소원면",
  },
  {
    dongCode: 43130350,
    dongName: "충청북도 충주시 신니면",
  },
  {
    dongCode: 43130360,
    dongName: "충청북도 충주시 노은면",
  },
  {
    dongCode: 43130370,
    dongName: "충청북도 충주시 앙성면",
  },
  {
    dongCode: 43130385,
    dongName: "충청북도 충주시 중앙탑면",
  },
  {
    dongCode: 43130390,
    dongName: "충청북도 충주시 금가면",
  },
  {
    dongCode: 43130400,
    dongName: "충청북도 충주시 동량면",
  },
  {
    dongCode: 43130410,
    dongName: "충청북도 충주시 산척면",
  },
  {
    dongCode: 43130420,
    dongName: "충청북도 충주시 엄정면",
  },
  {
    dongCode: 43130430,
    dongName: "충청북도 충주시 소태면",
  },
  {
    dongCode: 43130515,
    dongName: "충청북도 충주시 성내.충인동",
  },
  {
    dongCode: 43130535,
    dongName: "충청북도 충주시 교현.안림동",
  },
  {
    dongCode: 43130540,
    dongName: "충청북도 충주시 교현2동",
  },
  {
    dongCode: 43130550,
    dongName: "충청북도 충주시 용산동",
  },
  {
    dongCode: 43130560,
    dongName: "충청북도 충주시 지현동",
  },
  {
    dongCode: 43130571,
    dongName: "충청북도 충주시 문화동",
  },
  {
    dongCode: 43130580,
    dongName: "충청북도 충주시 호암.직동",
  },
  {
    dongCode: 43130605,
    dongName: "충청북도 충주시 달천동",
  },
  {
    dongCode: 43130610,
    dongName: "충청북도 충주시 봉방동",
  },
  {
    dongCode: 43130625,
    dongName: "충청북도 충주시 칠금.금릉동",
  },
  {
    dongCode: 43130630,
    dongName: "충청북도 충주시 연수동",
  },
  {
    dongCode: 43130640,
    dongName: "충청북도 충주시 목행.용탄동",
  },
  {
    dongCode: 43150250,
    dongName: "충청북도 제천시 봉양읍",
  },
  {
    dongCode: 43150310,
    dongName: "충청북도 제천시 금성면",
  },
  {
    dongCode: 43150320,
    dongName: "충청북도 제천시 청풍면",
  },
  {
    dongCode: 43150330,
    dongName: "충청북도 제천시 수산면",
  },
  {
    dongCode: 43150340,
    dongName: "충청북도 제천시 덕산면",
  },
  {
    dongCode: 43150350,
    dongName: "충청북도 제천시 한수면",
  },
  {
    dongCode: 43150360,
    dongName: "충청북도 제천시 백운면",
  },
  {
    dongCode: 43150380,
    dongName: "충청북도 제천시 송학면",
  },
  {
    dongCode: 43150510,
    dongName: "충청북도 제천시 교동",
  },
  {
    dongCode: 43150518,
    dongName: "충청북도 제천시 의림지동",
  },
  {
    dongCode: 43150528,
    dongName: "충청북도 제천시 중앙동",
  },
  {
    dongCode: 43150537,
    dongName: "충청북도 제천시 남현동",
  },
  {
    dongCode: 43150547,
    dongName: "충청북도 제천시 영서동",
  },
  {
    dongCode: 43150560,
    dongName: "충청북도 제천시 용두동",
  },
  {
    dongCode: 43150577,
    dongName: "충청북도 제천시 신백동",
  },
  {
    dongCode: 43150590,
    dongName: "충청북도 제천시 청전동",
  },
  {
    dongCode: 43150605,
    dongName: "충청북도 제천시 화산동",
  },
  {
    dongCode: 43720250,
    dongName: "충청북도 보은군 보은읍",
  },
  {
    dongCode: 43720315,
    dongName: "충청북도 보은군 속리산면",
  },
  {
    dongCode: 43720325,
    dongName: "충청북도 보은군 장안면",
  },
  {
    dongCode: 43720330,
    dongName: "충청북도 보은군 마로면",
  },
  {
    dongCode: 43720340,
    dongName: "충청북도 보은군 탄부면",
  },
  {
    dongCode: 43720350,
    dongName: "충청북도 보은군 삼승면",
  },
  {
    dongCode: 43720360,
    dongName: "충청북도 보은군 수한면",
  },
  {
    dongCode: 43720370,
    dongName: "충청북도 보은군 회남면",
  },
  {
    dongCode: 43720385,
    dongName: "충청북도 보은군 회인면",
  },
  {
    dongCode: 43720390,
    dongName: "충청북도 보은군 내북면",
  },
  {
    dongCode: 43720400,
    dongName: "충청북도 보은군 산외면",
  },
  {
    dongCode: 43730250,
    dongName: "충청북도 옥천군 옥천읍",
  },
  {
    dongCode: 43730310,
    dongName: "충청북도 옥천군 동이면",
  },
  {
    dongCode: 43730320,
    dongName: "충청북도 옥천군 안남면",
  },
  {
    dongCode: 43730330,
    dongName: "충청북도 옥천군 안내면",
  },
  {
    dongCode: 43730340,
    dongName: "충청북도 옥천군 청성면",
  },
  {
    dongCode: 43730350,
    dongName: "충청북도 옥천군 청산면",
  },
  {
    dongCode: 43730360,
    dongName: "충청북도 옥천군 이원면",
  },
  {
    dongCode: 46900250,
    dongName: "전라남도 진도군 진도읍",
  },
  {
    dongCode: 46900310,
    dongName: "전라남도 진도군 군내면",
  },
  {
    dongCode: 46900320,
    dongName: "전라남도 진도군 고군면",
  },
  {
    dongCode: 46900330,
    dongName: "전라남도 진도군 의신면",
  },
  {
    dongCode: 46900340,
    dongName: "전라남도 진도군 임회면",
  },
  {
    dongCode: 46900350,
    dongName: "전라남도 진도군 지산면",
  },
  {
    dongCode: 46900360,
    dongName: "전라남도 진도군 조도면",
  },
  {
    dongCode: 46910250,
    dongName: "전라남도 신안군 지도읍",
  },
  {
    dongCode: 46910253,
    dongName: "전라남도 신안군 압해읍",
  },
  {
    dongCode: 46910310,
    dongName: "전라남도 신안군 증도면",
  },
  {
    dongCode: 46910320,
    dongName: "전라남도 신안군 임자면",
  },
  {
    dongCode: 46910330,
    dongName: "전라남도 신안군 자은면",
  },
  {
    dongCode: 46910340,
    dongName: "전라남도 신안군 비금면",
  },
  {
    dongCode: 46910350,
    dongName: "전라남도 신안군 도초면",
  },
  {
    dongCode: 46910360,
    dongName: "전라남도 신안군 흑산면",
  },
  {
    dongCode: 46910370,
    dongName: "전라남도 신안군 하의면",
  },
  {
    dongCode: 46910380,
    dongName: "전라남도 신안군 신의면",
  },
  {
    dongCode: 46910390,
    dongName: "전라남도 신안군 장산면",
  },
  {
    dongCode: 46910400,
    dongName: "전라남도 신안군 안좌면",
  },
  {
    dongCode: 46910410,
    dongName: "전라남도 신안군 팔금면",
  },
  {
    dongCode: 46910420,
    dongName: "전라남도 신안군 암태면",
  },
  {
    dongCode: 47111250,
    dongName: "경상북도 포항시 구룡포읍",
  },
  {
    dongCode: 47111253,
    dongName: "경상북도 포항시 연일읍",
  },
  {
    dongCode: 47111256,
    dongName: "경상북도 포항시 오천읍",
  },
  {
    dongCode: 47111310,
    dongName: "경상북도 포항시 대송면",
  },
  {
    dongCode: 47111320,
    dongName: "경상북도 포항시 동해면",
  },
  {
    dongCode: 47111330,
    dongName: "경상북도 포항시 장기면",
  },
  {
    dongCode: 47111350,
    dongName: "경상북도 포항시 호미곶면",
  },
  {
    dongCode: 47111525,
    dongName: "경상북도 포항시 상대동",
  },
  {
    dongCode: 47111545,
    dongName: "경상북도 포항시 해도동",
  },
  {
    dongCode: 47111550,
    dongName: "경상북도 포항시 송도동",
  },
  {
    dongCode: 47111560,
    dongName: "경상북도 포항시 청림동",
  },
  {
    dongCode: 47111570,
    dongName: "경상북도 포항시 제철동",
  },
  {
    dongCode: 47111580,
    dongName: "경상북도 포항시 효곡동",
  },
  {
    dongCode: 47111590,
    dongName: "경상북도 포항시 대이동",
  },
  {
    dongCode: 47113250,
    dongName: "경상북도 포항시 흥해읍",
  },
  {
    dongCode: 47113310,
    dongName: "경상북도 포항시 신광면",
  },
  {
    dongCode: 47113320,
    dongName: "경상북도 포항시 청하면",
  },
  {
    dongCode: 47113330,
    dongName: "경상북도 포항시 송라면",
  },
  {
    dongCode: 47113340,
    dongName: "경상북도 포항시 기계면",
  },
  {
    dongCode: 47113350,
    dongName: "경상북도 포항시 죽장면",
  },
  {
    dongCode: 47113360,
    dongName: "경상북도 포항시 기북면",
  },
  {
    dongCode: 47113520,
    dongName: "경상북도 포항시 중앙동",
  },
  {
    dongCode: 47113630,
    dongName: "경상북도 포항시 양학동",
  },
  {
    dongCode: 47113655,
    dongName: "경상북도 포항시 죽도동",
  },
  {
    dongCode: 47113665,
    dongName: "경상북도 포항시 용흥동",
  },
  {
    dongCode: 47113680,
    dongName: "경상북도 포항시 우창동",
  },
  {
    dongCode: 47113690,
    dongName: "경상북도 포항시 두호동",
  },
  {
    dongCode: 47113700,
    dongName: "경상북도 포항시 장량동",
  },
  {
    dongCode: 47113710,
    dongName: "경상북도 포항시 환여동",
  },
  {
    dongCode: 47130250,
    dongName: "경상북도 경주시 감포읍",
  },
  {
    dongCode: 47130253,
    dongName: "경상북도 경주시 안강읍",
  },
  {
    dongCode: 47130256,
    dongName: "경상북도 경주시 건천읍",
  },
  {
    dongCode: 47130259,
    dongName: "경상북도 경주시 외동읍",
  },
  {
    dongCode: 47130315,
    dongName: "경상북도 경주시 문무대왕면",
  },
  {
    dongCode: 47130320,
    dongName: "경상북도 경주시 양남면",
  },
  {
    dongCode: 47130330,
    dongName: "경상북도 경주시 내남면",
  },
  {
    dongCode: 47130340,
    dongName: "경상북도 경주시 산내면",
  },
  {
    dongCode: 47130350,
    dongName: "경상북도 경주시 서면",
  },
  {
    dongCode: 47130360,
    dongName: "경상북도 경주시 현곡면",
  },
  {
    dongCode: 47130370,
    dongName: "경상북도 경주시 강동면",
  },
  {
    dongCode: 47130380,
    dongName: "경상북도 경주시 천북면",
  },
  {
    dongCode: 47130515,
    dongName: "경상북도 경주시 중부동",
  },
  {
    dongCode: 47130530,
    dongName: "경상북도 경주시 황오동",
  },
  {
    dongCode: 47130550,
    dongName: "경상북도 경주시 성건동",
  },
  {
    dongCode: 47130570,
    dongName: "경상북도 경주시 황남동",
  },
  {
    dongCode: 47130590,
    dongName: "경상북도 경주시 선도동",
  },
  {
    dongCode: 47130605,
    dongName: "경상북도 경주시 월성동",
  },
  {
    dongCode: 47130615,
    dongName: "경상북도 경주시 용강동",
  },
  {
    dongCode: 47130621,
    dongName: "경상북도 경주시 황성동",
  },
  {
    dongCode: 47130630,
    dongName: "경상북도 경주시 동천동",
  },
  {
    dongCode: 47130650,
    dongName: "경상북도 경주시 불국동",
  },
  {
    dongCode: 47130660,
    dongName: "경상북도 경주시 보덕동",
  },
  {
    dongCode: 47150250,
    dongName: "경상북도 김천시 아포읍",
  },
  {
    dongCode: 47150310,
    dongName: "경상북도 김천시 농소면",
  },
  {
    dongCode: 47150320,
    dongName: "경상북도 김천시 남면",
  },
  {
    dongCode: 47150340,
    dongName: "경상북도 김천시 개령면",
  },
  {
    dongCode: 47150350,
    dongName: "경상북도 김천시 감문면",
  },
  {
    dongCode: 47150360,
    dongName: "경상북도 김천시 어모면",
  },
  {
    dongCode: 47150370,
    dongName: "경상북도 김천시 봉산면",
  },
  {
    dongCode: 47150380,
    dongName: "경상북도 김천시 대항면",
  },
  {
    dongCode: 47150390,
    dongName: "경상북도 김천시 감천면",
  },
  {
    dongCode: 47150400,
    dongName: "경상북도 김천시 조마면",
  },
  {
    dongCode: 47150410,
    dongName: "경상북도 김천시 구성면",
  },
  {
    dongCode: 47150420,
    dongName: "경상북도 김천시 지례면",
  },
  {
    dongCode: 47150430,
    dongName: "경상북도 김천시 부항면",
  },
  {
    dongCode: 47150440,
    dongName: "경상북도 김천시 대덕면",
  },
  {
    dongCode: 47150450,
    dongName: "경상북도 김천시 증산면",
  },
  {
    dongCode: 47150516,
    dongName: "경상북도 김천시 자산동",
  },
  {
    dongCode: 47150536,
    dongName: "경상북도 김천시 평화남산동",
  },
  {
    dongCode: 47150565,
    dongName: "경상북도 김천시 양금동",
  },
  {
    dongCode: 47150575,
    dongName: "경상북도 김천시 대신동",
  },
  {
    dongCode: 47150595,
    dongName: "경상북도 김천시 대곡동",
  },
  {
    dongCode: 47150610,
    dongName: "경상북도 김천시 지좌동",
  },
  {
    dongCode: 47150640,
    dongName: "경상북도 김천시 율곡동",
  },
  {
    dongCode: 47170250,
    dongName: "경상북도 안동시 풍산읍",
  },
  {
    dongCode: 47170310,
    dongName: "경상북도 안동시 와룡면",
  },
  {
    dongCode: 47170320,
    dongName: "경상북도 안동시 북후면",
  },
  {
    dongCode: 47170330,
    dongName: "경상북도 안동시 서후면",
  },
  {
    dongCode: 47170340,
    dongName: "경상북도 안동시 풍천면",
  },
  {
    dongCode: 47170350,
    dongName: "경상북도 안동시 일직면",
  },
  {
    dongCode: 47170360,
    dongName: "경상북도 안동시 남후면",
  },
  {
    dongCode: 47170370,
    dongName: "경상북도 안동시 남선면",
  },
  {
    dongCode: 47170380,
    dongName: "경상북도 안동시 임하면",
  },
  {
    dongCode: 47170390,
    dongName: "경상북도 안동시 길안면",
  },
  {
    dongCode: 47170400,
    dongName: "경상북도 안동시 임동면",
  },
  {
    dongCode: 47170410,
    dongName: "경상북도 안동시 예안면",
  },
  {
    dongCode: 47170420,
    dongName: "경상북도 안동시 도산면",
  },
  {
    dongCode: 47170430,
    dongName: "경상북도 안동시 녹전면",
  },
  {
    dongCode: 47170510,
    dongName: "경상북도 안동시 중구동",
  },
  {
    dongCode: 47170520,
    dongName: "경상북도 안동시 명륜동",
  },
  {
    dongCode: 47170555,
    dongName: "경상북도 안동시 용상동",
  },
  {
    dongCode: 47170585,
    dongName: "경상북도 안동시 서구동",
  },
  {
    dongCode: 47170600,
    dongName: "경상북도 안동시 태화동",
  },
  {
    dongCode: 47170620,
    dongName: "경상북도 안동시 평화동",
  },
  {
    dongCode: 47170630,
    dongName: "경상북도 안동시 안기동",
  },
  {
    dongCode: 47170650,
    dongName: "경상북도 안동시 옥동",
  },
  {
    dongCode: 47170660,
    dongName: "경상북도 안동시 송하동",
  },
  {
    dongCode: 47170690,
    dongName: "경상북도 안동시 강남동",
  },
  {
    dongCode: 47190250,
    dongName: "경상북도 구미시 선산읍",
  },
  {
    dongCode: 47190253,
    dongName: "경상북도 구미시 고아읍",
  },
  {
    dongCode: 47190256,
    dongName: "경상북도 구미시 산동읍",
  },
  {
    dongCode: 47190310,
    dongName: "경상북도 구미시 무을면",
  },
  {
    dongCode: 47190320,
    dongName: "경상북도 구미시 옥성면",
  },
  {
    dongCode: 47190330,
    dongName: "경상북도 구미시 도개면",
  },
  {
    dongCode: 47190340,
    dongName: "경상북도 구미시 해평면",
  },
  {
    dongCode: 47190360,
    dongName: "경상북도 구미시 장천면",
  },
  {
    dongCode: 47190510,
    dongName: "경상북도 구미시 송정동",
  },
  {
    dongCode: 47190535,
    dongName: "경상북도 구미시 원평동",
  },
  {
    dongCode: 47190551,
    dongName: "경상북도 구미시 도량동",
  },
  {
    dongCode: 47190555,
    dongName: "경상북도 구미시 지산동",
  },
  {
    dongCode: 47190565,
    dongName: "경상북도 구미시 선주원남동",
  },
  {
    dongCode: 47190582,
    dongName: "경상북도 구미시 형곡1동",
  },
  {
    dongCode: 47190583,
    dongName: "경상북도 구미시 형곡2동",
  },
  {
    dongCode: 47190590,
    dongName: "경상북도 구미시 신평1동",
  },
  {
    dongCode: 47190600,
    dongName: "경상북도 구미시 신평2동",
  },
  {
    dongCode: 47190610,
    dongName: "경상북도 구미시 비산동",
  },
  {
    dongCode: 47190630,
    dongName: "경상북도 구미시 광평동",
  },
  {
    dongCode: 47190645,
    dongName: "경상북도 구미시 상모사곡동",
  },
  {
    dongCode: 47190660,
    dongName: "경상북도 구미시 임오동",
  },
  {
    dongCode: 47190670,
    dongName: "경상북도 구미시 인동동",
  },
  {
    dongCode: 47190680,
    dongName: "경상북도 구미시 진미동",
  },
  {
    dongCode: 47190690,
    dongName: "경상북도 구미시 양포동",
  },
  {
    dongCode: 47190700,
    dongName: "경상북도 구미시 공단동",
  },
  {
    dongCode: 47210250,
    dongName: "경상북도 영주시 풍기읍",
  },
  {
    dongCode: 47210310,
    dongName: "경상북도 영주시 이산면",
  },
  {
    dongCode: 47210320,
    dongName: "경상북도 영주시 평은면",
  },
  {
    dongCode: 47210330,
    dongName: "경상북도 영주시 문수면",
  },
  {
    dongCode: 47210340,
    dongName: "경상북도 영주시 장수면",
  },
  {
    dongCode: 47210350,
    dongName: "경상북도 영주시 안정면",
  },
  {
    dongCode: 47210360,
    dongName: "경상북도 영주시 봉현면",
  },
  {
    dongCode: 47210370,
    dongName: "경상북도 영주시 순흥면",
  },
  {
    dongCode: 47210380,
    dongName: "경상북도 영주시 단산면",
  },
  {
    dongCode: 47210390,
    dongName: "경상북도 영주시 부석면",
  },
  {
    dongCode: 47210510,
    dongName: "경상북도 영주시 상망동",
  },
  {
    dongCode: 47210525,
    dongName: "경상북도 영주시 하망동",
  },
  {
    dongCode: 47210550,
    dongName: "경상북도 영주시 영주1동",
  },
  {
    dongCode: 47210560,
    dongName: "경상북도 영주시 영주2동",
  },
  {
    dongCode: 47210590,
    dongName: "경상북도 영주시 휴천1동",
  },
  {
    dongCode: 47210600,
    dongName: "경상북도 영주시 휴천2동",
  },
  {
    dongCode: 47210610,
    dongName: "경상북도 영주시 휴천3동",
  },
  {
    dongCode: 47210620,
    dongName: "경상북도 영주시 가흥1동",
  },
  {
    dongCode: 47210630,
    dongName: "경상북도 영주시 가흥2동",
  },
  {
    dongCode: 47230250,
    dongName: "경상북도 영천시 금호읍",
  },
  {
    dongCode: 47230310,
    dongName: "경상북도 영천시 청통면",
  },
  {
    dongCode: 47230320,
    dongName: "경상북도 영천시 신녕면",
  },
  {
    dongCode: 47230330,
    dongName: "경상북도 영천시 화산면",
  },
  {
    dongCode: 47230340,
    dongName: "경상북도 영천시 화북면",
  },
  {
    dongCode: 47230350,
    dongName: "경상북도 영천시 화남면",
  },
  {
    dongCode: 47230360,
    dongName: "경상북도 영천시 자양면",
  },
  {
    dongCode: 47230370,
    dongName: "경상북도 영천시 임고면",
  },
  {
    dongCode: 47230380,
    dongName: "경상북도 영천시 고경면",
  },
  {
    dongCode: 47230390,
    dongName: "경상북도 영천시 북안면",
  },
  {
    dongCode: 47230400,
    dongName: "경상북도 영천시 대창면",
  },
  {
    dongCode: 47230510,
    dongName: "경상북도 영천시 동부동",
  },
  {
    dongCode: 47230520,
    dongName: "경상북도 영천시 중앙동",
  },
  {
    dongCode: 47230535,
    dongName: "경상북도 영천시 서부동",
  },
  {
    dongCode: 47230540,
    dongName: "경상북도 영천시 완산동",
  },
  {
    dongCode: 47230555,
    dongName: "경상북도 영천시 남부동",
  },
  {
    dongCode: 47250250,
    dongName: "경상북도 상주시 함창읍",
  },
  {
    dongCode: 47250310,
    dongName: "경상북도 상주시 중동면",
  },
  {
    dongCode: 47250325,
    dongName: "경상북도 상주시 사벌국면",
  },
  {
    dongCode: 47250330,
    dongName: "경상북도 상주시 낙동면",
  },
  {
    dongCode: 47250340,
    dongName: "경상북도 상주시 청리면",
  },
  {
    dongCode: 47250350,
    dongName: "경상북도 상주시 공성면",
  },
  {
    dongCode: 47250360,
    dongName: "경상북도 상주시 외남면",
  },
  {
    dongCode: 47250370,
    dongName: "경상북도 상주시 내서면",
  },
  {
    dongCode: 47250380,
    dongName: "경상북도 상주시 모동면",
  },
  {
    dongCode: 47250390,
    dongName: "경상북도 상주시 모서면",
  },
  {
    dongCode: 47250400,
    dongName: "경상북도 상주시 화동면",
  },
  {
    dongCode: 47250410,
    dongName: "경상북도 상주시 화서면",
  },
  {
    dongCode: 47250420,
    dongName: "경상북도 상주시 화북면",
  },
  {
    dongCode: 47250430,
    dongName: "경상북도 상주시 외서면",
  },
  {
    dongCode: 47250440,
    dongName: "경상북도 상주시 은척면",
  },
  {
    dongCode: 47250450,
    dongName: "경상북도 상주시 공검면",
  },
  {
    dongCode: 47250460,
    dongName: "경상북도 상주시 이안면",
  },
  {
    dongCode: 47250470,
    dongName: "경상북도 상주시 화남면",
  },
  {
    dongCode: 47250520,
    dongName: "경상북도 상주시 남원동",
  },
  {
    dongCode: 47250530,
    dongName: "경상북도 상주시 북문동",
  },
  {
    dongCode: 47250540,
    dongName: "경상북도 상주시 계림동",
  },
  {
    dongCode: 47250550,
    dongName: "경상북도 상주시 동문동",
  },
  {
    dongCode: 47250560,
    dongName: "경상북도 상주시 동성동",
  },
  {
    dongCode: 47250570,
    dongName: "경상북도 상주시 신흥동",
  },
  {
    dongCode: 47280250,
    dongName: "경상북도 문경시 문경읍",
  },
  {
    dongCode: 47280253,
    dongName: "경상북도 문경시 가은읍",
  },
  {
    dongCode: 47280310,
    dongName: "경상북도 문경시 영순면",
  },
  {
    dongCode: 47280320,
    dongName: "경상북도 문경시 산양면",
  },
  {
    dongCode: 47280330,
    dongName: "경상북도 문경시 호계면",
  },
  {
    dongCode: 47280340,
    dongName: "경상북도 문경시 산북면",
  },
  {
    dongCode: 47280350,
    dongName: "경상북도 문경시 동로면",
  },
  {
    dongCode: 47280360,
    dongName: "경상북도 문경시 마성면",
  },
  {
    dongCode: 47280370,
    dongName: "경상북도 문경시 농암면",
  },
  {
    dongCode: 47280570,
    dongName: "경상북도 문경시 점촌1동",
  },
  {
    dongCode: 47280580,
    dongName: "경상북도 문경시 점촌2동",
  },
  {
    dongCode: 47280590,
    dongName: "경상북도 문경시 점촌3동",
  },
  {
    dongCode: 47280600,
    dongName: "경상북도 문경시 점촌4동",
  },
  {
    dongCode: 47280610,
    dongName: "경상북도 문경시 점촌5동",
  },
  {
    dongCode: 47290250,
    dongName: "경상북도 경산시 하양읍",
  },
  {
    dongCode: 47290253,
    dongName: "경상북도 경산시 진량읍",
  },
  {
    dongCode: 47290256,
    dongName: "경상북도 경산시 압량읍",
  },
  {
    dongCode: 47290310,
    dongName: "경상북도 경산시 와촌면",
  },
  {
    dongCode: 47290330,
    dongName: "경상북도 경산시 자인면",
  },
  {
    dongCode: 47290340,
    dongName: "경상북도 경산시 용성면",
  },
  {
    dongCode: 47290350,
    dongName: "경상북도 경산시 남산면",
  },
  {
    dongCode: 47290370,
    dongName: "경상북도 경산시 남천면",
  },
  {
    dongCode: 47290510,
    dongName: "경상북도 경산시 중방동",
  },
  {
    dongCode: 47290520,
    dongName: "경상북도 경산시 중앙동",
  },
  {
    dongCode: 47290530,
    dongName: "경상북도 경산시 남부동",
  },
  {
    dongCode: 47290541,
    dongName: "경상북도 경산시 서부1동",
  },
  {
    dongCode: 47290542,
    dongName: "경상북도 경산시 서부2동",
  },
  {
    dongCode: 47290550,
    dongName: "경상북도 경산시 북부동",
  },
  {
    dongCode: 47290560,
    dongName: "경상북도 경산시 동부동",
  },
  {
    dongCode: 47720250,
    dongName: "경상북도 군위군 군위읍",
  },
  {
    dongCode: 47720310,
    dongName: "경상북도 군위군 소보면",
  },
  {
    dongCode: 47720320,
    dongName: "경상북도 군위군 효령면",
  },
  {
    dongCode: 47720330,
    dongName: "경상북도 군위군 부계면",
  },
  {
    dongCode: 47720340,
    dongName: "경상북도 군위군 우보면",
  },
  {
    dongCode: 47720350,
    dongName: "경상북도 군위군 의흥면",
  },
  {
    dongCode: 47720360,
    dongName: "경상북도 군위군 산성면",
  },
  {
    dongCode: 47720380,
    dongName: "경상북도 군위군 삼국유사면",
  },
  {
    dongCode: 47730250,
    dongName: "경상북도 의성군 의성읍",
  },
  {
    dongCode: 47730310,
    dongName: "경상북도 의성군 단촌면",
  },
  {
    dongCode: 47730320,
    dongName: "경상북도 의성군 점곡면",
  },
  {
    dongCode: 47730330,
    dongName: "경상북도 의성군 옥산면",
  },
  {
    dongCode: 47730340,
    dongName: "경상북도 의성군 사곡면",
  },
  {
    dongCode: 47730350,
    dongName: "경상북도 의성군 춘산면",
  },
  {
    dongCode: 47730360,
    dongName: "경상북도 의성군 가음면",
  },
  {
    dongCode: 47730370,
    dongName: "경상북도 의성군 금성면",
  },
  {
    dongCode: 47730380,
    dongName: "경상북도 의성군 봉양면",
  },
  {
    dongCode: 47730390,
    dongName: "경상북도 의성군 비안면",
  },
  {
    dongCode: 47730400,
    dongName: "경상북도 의성군 구천면",
  },
  {
    dongCode: 47730410,
    dongName: "경상북도 의성군 단밀면",
  },
  {
    dongCode: 47730420,
    dongName: "경상북도 의성군 단북면",
  },
  {
    dongCode: 47730430,
    dongName: "경상북도 의성군 안계면",
  },
  {
    dongCode: 47730440,
    dongName: "경상북도 의성군 다인면",
  },
  {
    dongCode: 47730450,
    dongName: "경상북도 의성군 신평면",
  },
  {
    dongCode: 47730460,
    dongName: "경상북도 의성군 안평면",
  },
  {
    dongCode: 47730470,
    dongName: "경상북도 의성군 안사면",
  },
  {
    dongCode: 47750250,
    dongName: "경상북도 청송군 청송읍",
  },
  {
    dongCode: 47750315,
    dongName: "경상북도 청송군 주왕산면",
  },
  {
    dongCode: 47750320,
    dongName: "경상북도 청송군 부남면",
  },
  {
    dongCode: 47750330,
    dongName: "경상북도 청송군 현동면",
  },
  {
    dongCode: 47750340,
    dongName: "경상북도 청송군 현서면",
  },
  {
    dongCode: 47750350,
    dongName: "경상북도 청송군 안덕면",
  },
  {
    dongCode: 47750360,
    dongName: "경상북도 청송군 파천면",
  },
  {
    dongCode: 47750370,
    dongName: "경상북도 청송군 진보면",
  },
  {
    dongCode: 47760250,
    dongName: "경상북도 영양군 영양읍",
  },
  {
    dongCode: 47760310,
    dongName: "경상북도 영양군 입암면",
  },
  {
    dongCode: 47760320,
    dongName: "경상북도 영양군 청기면",
  },
  {
    dongCode: 47760330,
    dongName: "경상북도 영양군 일월면",
  },
  {
    dongCode: 47760340,
    dongName: "경상북도 영양군 수비면",
  },
  {
    dongCode: 47760350,
    dongName: "경상북도 영양군 석보면",
  },
  {
    dongCode: 47770250,
    dongName: "경상북도 영덕군 영덕읍",
  },
  {
    dongCode: 47770310,
    dongName: "경상북도 영덕군 강구면",
  },
  {
    dongCode: 47770320,
    dongName: "경상북도 영덕군 남정면",
  },
  {
    dongCode: 47770330,
    dongName: "경상북도 영덕군 달산면",
  },
  {
    dongCode: 47770340,
    dongName: "경상북도 영덕군 지품면",
  },
  {
    dongCode: 47770350,
    dongName: "경상북도 영덕군 축산면",
  },
  {
    dongCode: 47770360,
    dongName: "경상북도 영덕군 영해면",
  },
  {
    dongCode: 47770370,
    dongName: "경상북도 영덕군 병곡면",
  },
  {
    dongCode: 47770380,
    dongName: "경상북도 영덕군 창수면",
  },
  {
    dongCode: 47820250,
    dongName: "경상북도 청도군 화양읍",
  },
  {
    dongCode: 47820253,
    dongName: "경상북도 청도군 청도읍",
  },
  {
    dongCode: 47820310,
    dongName: "경상북도 청도군 각남면",
  },
  {
    dongCode: 47820320,
    dongName: "경상북도 청도군 풍각면",
  },
  {
    dongCode: 47820330,
    dongName: "경상북도 청도군 각북면",
  },
  {
    dongCode: 47820340,
    dongName: "경상북도 청도군 이서면",
  },
  {
    dongCode: 47820350,
    dongName: "경상북도 청도군 운문면",
  },
  {
    dongCode: 47820360,
    dongName: "경상북도 청도군 금천면",
  },
  {
    dongCode: 47820370,
    dongName: "경상북도 청도군 매전면",
  },
  {
    dongCode: 47830253,
    dongName: "경상북도 고령군 대가야읍",
  },
  {
    dongCode: 47830310,
    dongName: "경상북도 고령군 덕곡면",
  },
  {
    dongCode: 47830320,
    dongName: "경상북도 고령군 운수면",
  },
  {
    dongCode: 47830330,
    dongName: "경상북도 고령군 성산면",
  },
  {
    dongCode: 47830340,
    dongName: "경상북도 고령군 다산면",
  },
  {
    dongCode: 47830350,
    dongName: "경상북도 고령군 개진면",
  },
  {
    dongCode: 47830360,
    dongName: "경상북도 고령군 우곡면",
  },
  {
    dongCode: 47830370,
    dongName: "경상북도 고령군 쌍림면",
  },
  {
    dongCode: 47840250,
    dongName: "경상북도 성주군 성주읍",
  },
  {
    dongCode: 47840310,
    dongName: "경상북도 성주군 선남면",
  },
  {
    dongCode: 47840320,
    dongName: "경상북도 성주군 용암면",
  },
  {
    dongCode: 47840330,
    dongName: "경상북도 성주군 수륜면",
  },
  {
    dongCode: 47840340,
    dongName: "경상북도 성주군 가천면",
  },
  {
    dongCode: 47840350,
    dongName: "경상북도 성주군 금수면",
  },
  {
    dongCode: 47840360,
    dongName: "경상북도 성주군 대가면",
  },
  {
    dongCode: 47840370,
    dongName: "경상북도 성주군 벽진면",
  },
  {
    dongCode: 47840380,
    dongName: "경상북도 성주군 초전면",
  },
  {
    dongCode: 47840390,
    dongName: "경상북도 성주군 월항면",
  },
  {
    dongCode: 47850250,
    dongName: "경상북도 칠곡군 왜관읍",
  },
  {
    dongCode: 47850253,
    dongName: "경상북도 칠곡군 북삼읍",
  },
  {
    dongCode: 47850256,
    dongName: "경상북도 칠곡군 석적읍",
  },
  {
    dongCode: 47850310,
    dongName: "경상북도 칠곡군 지천면",
  },
  {
    dongCode: 47850320,
    dongName: "경상북도 칠곡군 동명면",
  },
  {
    dongCode: 47850330,
    dongName: "경상북도 칠곡군 가산면",
  },
  {
    dongCode: 47850360,
    dongName: "경상북도 칠곡군 약목면",
  },
  {
    dongCode: 47850370,
    dongName: "경상북도 칠곡군 기산면",
  },
  {
    dongCode: 45730340,
    dongName: "전라북도 무주군 안성면",
  },
  {
    dongCode: 45730350,
    dongName: "전라북도 무주군 부남면",
  },
  {
    dongCode: 45740250,
    dongName: "전라북도 장수군 장수읍",
  },
  {
    dongCode: 45740310,
    dongName: "전라북도 장수군 산서면",
  },
  {
    dongCode: 45740320,
    dongName: "전라북도 장수군 번암면",
  },
  {
    dongCode: 45740335,
    dongName: "전라북도 장수군 장계면",
  },
  {
    dongCode: 45740340,
    dongName: "전라북도 장수군 천천면",
  },
  {
    dongCode: 45740350,
    dongName: "전라북도 장수군 계남면",
  },
  {
    dongCode: 45740360,
    dongName: "전라북도 장수군 계북면",
  },
  {
    dongCode: 45750250,
    dongName: "전라북도 임실군 임실읍",
  },
  {
    dongCode: 45750310,
    dongName: "전라북도 임실군 청웅면",
  },
  {
    dongCode: 45750320,
    dongName: "전라북도 임실군 운암면",
  },
  {
    dongCode: 45750330,
    dongName: "전라북도 임실군 신평면",
  },
  {
    dongCode: 45750340,
    dongName: "전라북도 임실군 성수면",
  },
  {
    dongCode: 45750355,
    dongName: "전라북도 임실군 오수면",
  },
  {
    dongCode: 45750360,
    dongName: "전라북도 임실군 신덕면",
  },
  {
    dongCode: 45750370,
    dongName: "전라북도 임실군 삼계면",
  },
  {
    dongCode: 45750380,
    dongName: "전라북도 임실군 관촌면",
  },
  {
    dongCode: 45750390,
    dongName: "전라북도 임실군 강진면",
  },
  {
    dongCode: 45750400,
    dongName: "전라북도 임실군 덕치면",
  },
  {
    dongCode: 45750410,
    dongName: "전라북도 임실군 지사면",
  },
  {
    dongCode: 45770250,
    dongName: "전라북도 순창군 순창읍",
  },
  {
    dongCode: 45770310,
    dongName: "전라북도 순창군 인계면",
  },
  {
    dongCode: 45770320,
    dongName: "전라북도 순창군 동계면",
  },
  {
    dongCode: 45770330,
    dongName: "전라북도 순창군 풍산면",
  },
  {
    dongCode: 45770340,
    dongName: "전라북도 순창군 금과면",
  },
  {
    dongCode: 45770350,
    dongName: "전라북도 순창군 팔덕면",
  },
  {
    dongCode: 45770360,
    dongName: "전라북도 순창군 쌍치면",
  },
  {
    dongCode: 45770370,
    dongName: "전라북도 순창군 복흥면",
  },
  {
    dongCode: 45770380,
    dongName: "전라북도 순창군 적성면",
  },
  {
    dongCode: 45770390,
    dongName: "전라북도 순창군 유등면",
  },
  {
    dongCode: 45770400,
    dongName: "전라북도 순창군 구림면",
  },
  {
    dongCode: 45790250,
    dongName: "전라북도 고창군 고창읍",
  },
  {
    dongCode: 45790310,
    dongName: "전라북도 고창군 고수면",
  },
  {
    dongCode: 45790320,
    dongName: "전라북도 고창군 아산면",
  },
  {
    dongCode: 45790330,
    dongName: "전라북도 고창군 무장면",
  },
  {
    dongCode: 45790340,
    dongName: "전라북도 고창군 공음면",
  },
  {
    dongCode: 45790350,
    dongName: "전라북도 고창군 상하면",
  },
  {
    dongCode: 45790360,
    dongName: "전라북도 고창군 해리면",
  },
  {
    dongCode: 45790370,
    dongName: "전라북도 고창군 성송면",
  },
  {
    dongCode: 45790380,
    dongName: "전라북도 고창군 대산면",
  },
  {
    dongCode: 45790390,
    dongName: "전라북도 고창군 심원면",
  },
  {
    dongCode: 45790400,
    dongName: "전라북도 고창군 흥덕면",
  },
  {
    dongCode: 45790410,
    dongName: "전라북도 고창군 성내면",
  },
  {
    dongCode: 45790420,
    dongName: "전라북도 고창군 신림면",
  },
  {
    dongCode: 45790430,
    dongName: "전라북도 고창군 부안면",
  },
  {
    dongCode: 45800250,
    dongName: "전라북도 부안군 부안읍",
  },
  {
    dongCode: 45800310,
    dongName: "전라북도 부안군 주산면",
  },
  {
    dongCode: 45800320,
    dongName: "전라북도 부안군 동진면",
  },
  {
    dongCode: 45800330,
    dongName: "전라북도 부안군 행안면",
  },
  {
    dongCode: 45800340,
    dongName: "전라북도 부안군 계화면",
  },
  {
    dongCode: 45800350,
    dongName: "전라북도 부안군 보안면",
  },
  {
    dongCode: 45800360,
    dongName: "전라북도 부안군 변산면",
  },
  {
    dongCode: 45800370,
    dongName: "전라북도 부안군 진서면",
  },
  {
    dongCode: 45800380,
    dongName: "전라북도 부안군 백산면",
  },
  {
    dongCode: 45800390,
    dongName: "전라북도 부안군 상서면",
  },
  {
    dongCode: 45800400,
    dongName: "전라북도 부안군 하서면",
  },
  {
    dongCode: 45800410,
    dongName: "전라북도 부안군 줄포면",
  },
  {
    dongCode: 45800420,
    dongName: "전라북도 부안군 위도면",
  },
  {
    dongCode: 46110510,
    dongName: "전라남도 목포시 용당1동",
  },
  {
    dongCode: 46110520,
    dongName: "전라남도 목포시 용당2동",
  },
  {
    dongCode: 46110535,
    dongName: "전라남도 목포시 연동",
  },
  {
    dongCode: 46110545,
    dongName: "전라남도 목포시 산정동",
  },
  {
    dongCode: 46110554,
    dongName: "전라남도 목포시 연산동",
  },
  {
    dongCode: 46110558,
    dongName: "전라남도 목포시 원산동",
  },
  {
    dongCode: 46110565,
    dongName: "전라남도 목포시 대성동",
  },
  {
    dongCode: 46110595,
    dongName: "전라남도 목포시 목원동",
  },
  {
    dongCode: 46110640,
    dongName: "전라남도 목포시 동명동",
  },
  {
    dongCode: 46110645,
    dongName: "전라남도 목포시 삼학동",
  },
  {
    dongCode: 46110655,
    dongName: "전라남도 목포시 만호동",
  },
  {
    dongCode: 46110660,
    dongName: "전라남도 목포시 유달동",
  },
  {
    dongCode: 46110695,
    dongName: "전라남도 목포시 죽교동",
  },
  {
    dongCode: 46110705,
    dongName: "전라남도 목포시 북항동",
  },
  {
    dongCode: 46110745,
    dongName: "전라남도 목포시 용해동",
  },
  {
    dongCode: 46110750,
    dongName: "전라남도 목포시 이로동",
  },
  {
    dongCode: 46110756,
    dongName: "전라남도 목포시 상동",
  },
  {
    dongCode: 46110757,
    dongName: "전라남도 목포시 하당동",
  },
  {
    dongCode: 46110758,
    dongName: "전라남도 목포시 신흥동",
  },
  {
    dongCode: 46110780,
    dongName: "전라남도 목포시 삼향동",
  },
  {
    dongCode: 46110790,
    dongName: "전라남도 목포시 옥암동",
  },
  {
    dongCode: 46110800,
    dongName: "전라남도 목포시 부흥동",
  },
  {
    dongCode: 46110810,
    dongName: "전라남도 목포시 부주동",
  },
  {
    dongCode: 46130250,
    dongName: "전라남도 여수시 돌산읍",
  },
  {
    dongCode: 46130310,
    dongName: "전라남도 여수시 소라면",
  },
  {
    dongCode: 46130320,
    dongName: "전라남도 여수시 율촌면",
  },
  {
    dongCode: 46130330,
    dongName: "전라남도 여수시 화양면",
  },
  {
    dongCode: 46130340,
    dongName: "전라남도 여수시 남면",
  },
  {
    dongCode: 46130350,
    dongName: "전라남도 여수시 화정면",
  },
  {
    dongCode: 46130360,
    dongName: "전라남도 여수시 삼산면",
  },
  {
    dongCode: 46130515,
    dongName: "전라남도 여수시 동문동",
  },
  {
    dongCode: 46130535,
    dongName: "전라남도 여수시 한려동",
  },
  {
    dongCode: 46130570,
    dongName: "전라남도 여수시 중앙동",
  },
  {
    dongCode: 46130600,
    dongName: "전라남도 여수시 충무동",
  },
  {
    dongCode: 46130625,
    dongName: "전라남도 여수시 광림동",
  },
  {
    dongCode: 46130635,
    dongName: "전라남도 여수시 서강동",
  },
  {
    dongCode: 46130655,
    dongName: "전라남도 여수시 대교동",
  },
  {
    dongCode: 46130670,
    dongName: "전라남도 여수시 국동",
  },
  {
    dongCode: 46130685,
    dongName: "전라남도 여수시 월호동",
  },
  {
    dongCode: 46130700,
    dongName: "전라남도 여수시 여서동",
  },
  {
    dongCode: 46130710,
    dongName: "전라남도 여수시 문수동",
  },
  {
    dongCode: 46130730,
    dongName: "전라남도 여수시 미평동",
  },
  {
    dongCode: 46130740,
    dongName: "전라남도 여수시 둔덕동",
  },
  {
    dongCode: 46130765,
    dongName: "전라남도 여수시 만덕동",
  },
  {
    dongCode: 46130780,
    dongName: "전라남도 여수시 쌍봉동",
  },
  {
    dongCode: 46130790,
    dongName: "전라남도 여수시 시전동",
  },
  {
    dongCode: 46130800,
    dongName: "전라남도 여수시 여천동",
  },
  {
    dongCode: 46130810,
    dongName: "전라남도 여수시 주삼동",
  },
  {
    dongCode: 46130820,
    dongName: "전라남도 여수시 삼일동",
  },
  {
    dongCode: 46130830,
    dongName: "전라남도 여수시 묘도동",
  },
  {
    dongCode: 46150250,
    dongName: "전라남도 순천시 승주읍",
  },
  {
    dongCode: 46150310,
    dongName: "전라남도 순천시 해룡면",
  },
  {
    dongCode: 46150320,
    dongName: "전라남도 순천시 서면",
  },
  {
    dongCode: 46150330,
    dongName: "전라남도 순천시 황전면",
  },
  {
    dongCode: 46150340,
    dongName: "전라남도 순천시 월등면",
  },
  {
    dongCode: 46150350,
    dongName: "전라남도 순천시 주암면",
  },
  {
    dongCode: 46150360,
    dongName: "전라남도 순천시 송광면",
  },
  {
    dongCode: 46150370,
    dongName: "전라남도 순천시 외서면",
  },
  {
    dongCode: 46150380,
    dongName: "전라남도 순천시 낙안면",
  },
  {
    dongCode: 46150390,
    dongName: "전라남도 순천시 별량면",
  },
  {
    dongCode: 46150400,
    dongName: "전라남도 순천시 상사면",
  },
  {
    dongCode: 46150515,
    dongName: "전라남도 순천시 향동",
  },
  {
    dongCode: 46150540,
    dongName: "전라남도 순천시 매곡동",
  },
  {
    dongCode: 46150550,
    dongName: "전라남도 순천시 삼산동",
  },
  {
    dongCode: 46150560,
    dongName: "전라남도 순천시 조곡동",
  },
  {
    dongCode: 46150570,
    dongName: "전라남도 순천시 덕연동",
  },
  {
    dongCode: 46150580,
    dongName: "전라남도 순천시 풍덕동",
  },
  {
    dongCode: 46150590,
    dongName: "전라남도 순천시 남제동",
  },
  {
    dongCode: 46150600,
    dongName: "전라남도 순천시 저전동",
  },
  {
    dongCode: 46150610,
    dongName: "전라남도 순천시 장천동",
  },
  {
    dongCode: 46150620,
    dongName: "전라남도 순천시 중앙동",
  },
  {
    dongCode: 46150635,
    dongName: "전라남도 순천시 도사동",
  },
  {
    dongCode: 46150661,
    dongName: "전라남도 순천시 왕조1동",
  },
  {
    dongCode: 46150665,
    dongName: "전라남도 순천시 왕조2동",
  },
  {
    dongCode: 46170250,
    dongName: "전라남도 나주시 남평읍",
  },
  {
    dongCode: 46170310,
    dongName: "전라남도 나주시 세지면",
  },
  {
    dongCode: 46170320,
    dongName: "전라남도 나주시 왕곡면",
  },
  {
    dongCode: 46170330,
    dongName: "전라남도 나주시 반남면",
  },
  {
    dongCode: 46170340,
    dongName: "전라남도 나주시 공산면",
  },
  {
    dongCode: 46170350,
    dongName: "전라남도 나주시 동강면",
  },
  {
    dongCode: 46170360,
    dongName: "전라남도 나주시 다시면",
  },
  {
    dongCode: 46170370,
    dongName: "전라남도 나주시 문평면",
  },
  {
    dongCode: 46170380,
    dongName: "전라남도 나주시 노안면",
  },
  {
    dongCode: 46170390,
    dongName: "전라남도 나주시 금천면",
  },
  {
    dongCode: 46170400,
    dongName: "전라남도 나주시 산포면",
  },
  {
    dongCode: 46170420,
    dongName: "전라남도 나주시 다도면",
  },
  {
    dongCode: 46170430,
    dongName: "전라남도 나주시 봉황면",
  },
  {
    dongCode: 46170510,
    dongName: "전라남도 나주시 송월동",
  },
  {
    dongCode: 46170520,
    dongName: "전라남도 나주시 영강동",
  },
  {
    dongCode: 46170540,
    dongName: "전라남도 나주시 금남동",
  },
  {
    dongCode: 46170550,
    dongName: "전라남도 나주시 성북동",
  },
  {
    dongCode: 46170580,
    dongName: "전라남도 나주시 영산동",
  },
  {
    dongCode: 46170600,
    dongName: "전라남도 나주시 이창동",
  },
  {
    dongCode: 46170620,
    dongName: "전라남도 나주시 빛가람동",
  },
  {
    dongCode: 46230250,
    dongName: "전라남도 광양시 광양읍",
  },
  {
    dongCode: 46230310,
    dongName: "전라남도 광양시 봉강면",
  },
  {
    dongCode: 46230320,
    dongName: "전라남도 광양시 옥룡면",
  },
  {
    dongCode: 46230330,
    dongName: "전라남도 광양시 옥곡면",
  },
  {
    dongCode: 46230340,
    dongName: "전라남도 광양시 진상면",
  },
  {
    dongCode: 46230350,
    dongName: "전라남도 광양시 진월면",
  },
  {
    dongCode: 46230360,
    dongName: "전라남도 광양시 다압면",
  },
  {
    dongCode: 46230515,
    dongName: "전라남도 광양시 골약동",
  },
  {
    dongCode: 46230530,
    dongName: "전라남도 광양시 중마동",
  },
  {
    dongCode: 46230540,
    dongName: "전라남도 광양시 광영동",
  },
  {
    dongCode: 46230550,
    dongName: "전라남도 광양시 금호동",
  },
  {
    dongCode: 46230570,
    dongName: "전라남도 광양시 태인동",
  },
  {
    dongCode: 46710250,
    dongName: "전라남도 담양군 담양읍",
  },
  {
    dongCode: 46710310,
    dongName: "전라남도 담양군 봉산면",
  },
  {
    dongCode: 46710320,
    dongName: "전라남도 담양군 고서면",
  },
  {
    dongCode: 46710335,
    dongName: "전라남도 담양군 가사문학면",
  },
  {
    dongCode: 46710340,
    dongName: "전라남도 담양군 창평면",
  },
  {
    dongCode: 46710350,
    dongName: "전라남도 담양군 대덕면",
  },
  {
    dongCode: 46710360,
    dongName: "전라남도 담양군 무정면",
  },
  {
    dongCode: 46710370,
    dongName: "전라남도 담양군 금성면",
  },
  {
    dongCode: 46710380,
    dongName: "전라남도 담양군 용면",
  },
  {
    dongCode: 46710390,
    dongName: "전라남도 담양군 월산면",
  },
  {
    dongCode: 46710400,
    dongName: "전라남도 담양군 수북면",
  },
  {
    dongCode: 46710410,
    dongName: "전라남도 담양군 대전면",
  },
  {
    dongCode: 46720250,
    dongName: "전라남도 곡성군 곡성읍",
  },
  {
    dongCode: 46720310,
    dongName: "전라남도 곡성군 오곡면",
  },
  {
    dongCode: 46720320,
    dongName: "전라남도 곡성군 삼기면",
  },
  {
    dongCode: 46720330,
    dongName: "전라남도 곡성군 석곡면",
  },
  {
    dongCode: 46720340,
    dongName: "전라남도 곡성군 목사동면",
  },
  {
    dongCode: 46720350,
    dongName: "전라남도 곡성군 죽곡면",
  },
  {
    dongCode: 46720360,
    dongName: "전라남도 곡성군 고달면",
  },
  {
    dongCode: 46720370,
    dongName: "전라남도 곡성군 옥과면",
  },
  {
    dongCode: 46720380,
    dongName: "전라남도 곡성군 입면",
  },
  {
    dongCode: 46720390,
    dongName: "전라남도 곡성군 겸면",
  },
  {
    dongCode: 46720400,
    dongName: "전라남도 곡성군 오산면",
  },
  {
    dongCode: 46730250,
    dongName: "전라남도 구례군 구례읍",
  },
  {
    dongCode: 46730310,
    dongName: "전라남도 구례군 문척면",
  },
  {
    dongCode: 46730320,
    dongName: "전라남도 구례군 간전면",
  },
  {
    dongCode: 46730330,
    dongName: "전라남도 구례군 토지면",
  },
  {
    dongCode: 46730340,
    dongName: "전라남도 구례군 마산면",
  },
  {
    dongCode: 46730350,
    dongName: "전라남도 구례군 광의면",
  },
  {
    dongCode: 46730360,
    dongName: "전라남도 구례군 용방면",
  },
  {
    dongCode: 46730370,
    dongName: "전라남도 구례군 산동면",
  },
  {
    dongCode: 46770250,
    dongName: "전라남도 고흥군 고흥읍",
  },
  {
    dongCode: 46770253,
    dongName: "전라남도 고흥군 도양읍",
  },
  {
    dongCode: 46770310,
    dongName: "전라남도 고흥군 풍양면",
  },
  {
    dongCode: 46770320,
    dongName: "전라남도 고흥군 도덕면",
  },
  {
    dongCode: 46770330,
    dongName: "전라남도 고흥군 금산면",
  },
  {
    dongCode: 46770340,
    dongName: "전라남도 고흥군 도화면",
  },
  {
    dongCode: 46770350,
    dongName: "전라남도 고흥군 포두면",
  },
  {
    dongCode: 46770360,
    dongName: "전라남도 고흥군 봉래면",
  },
  {
    dongCode: 46770370,
    dongName: "전라남도 고흥군 점암면",
  },
  {
    dongCode: 46770380,
    dongName: "전라남도 고흥군 과역면",
  },
  {
    dongCode: 46770390,
    dongName: "전라남도 고흥군 남양면",
  },
  {
    dongCode: 46770400,
    dongName: "전라남도 고흥군 동강면",
  },
  {
    dongCode: 46770410,
    dongName: "전라남도 고흥군 대서면",
  },
  {
    dongCode: 46770420,
    dongName: "전라남도 고흥군 두원면",
  },
  {
    dongCode: 46770440,
    dongName: "전라남도 고흥군 영남면",
  },
  {
    dongCode: 46770450,
    dongName: "전라남도 고흥군 동일면",
  },
  {
    dongCode: 46780250,
    dongName: "전라남도 보성군 보성읍",
  },
  {
    dongCode: 46780253,
    dongName: "전라남도 보성군 벌교읍",
  },
  {
    dongCode: 46780310,
    dongName: "전라남도 보성군 노동면",
  },
  {
    dongCode: 46780320,
    dongName: "전라남도 보성군 미력면",
  },
  {
    dongCode: 46780330,
    dongName: "전라남도 보성군 겸백면",
  },
  {
    dongCode: 46780340,
    dongName: "전라남도 보성군 율어면",
  },
  {
    dongCode: 46780350,
    dongName: "전라남도 보성군 복내면",
  },
  {
    dongCode: 46780360,
    dongName: "전라남도 보성군 문덕면",
  },
  {
    dongCode: 46780370,
    dongName: "전라남도 보성군 조성면",
  },
  {
    dongCode: 46780380,
    dongName: "전라남도 보성군 득량면",
  },
  {
    dongCode: 46780390,
    dongName: "전라남도 보성군 회천면",
  },
  {
    dongCode: 46780400,
    dongName: "전라남도 보성군 웅치면",
  },
  {
    dongCode: 46790250,
    dongName: "전라남도 화순군 화순읍",
  },
  {
    dongCode: 46790310,
    dongName: "전라남도 화순군 한천면",
  },
  {
    dongCode: 46790320,
    dongName: "전라남도 화순군 춘양면",
  },
  {
    dongCode: 46790330,
    dongName: "전라남도 화순군 청풍면",
  },
  {
    dongCode: 46790340,
    dongName: "전라남도 화순군 이양면",
  },
  {
    dongCode: 46790350,
    dongName: "전라남도 화순군 능주면",
  },
  {
    dongCode: 46790360,
    dongName: "전라남도 화순군 도곡면",
  },
  {
    dongCode: 46790370,
    dongName: "전라남도 화순군 도암면",
  },
  {
    dongCode: 46790380,
    dongName: "전라남도 화순군 이서면",
  },
  {
    dongCode: 46790395,
    dongName: "전라남도 화순군 백아면",
  },
  {
    dongCode: 46790400,
    dongName: "전라남도 화순군 동복면",
  },
  {
    dongCode: 46790415,
    dongName: "전라남도 화순군 사평면",
  },
  {
    dongCode: 46790420,
    dongName: "전라남도 화순군 동면",
  },
  {
    dongCode: 46800250,
    dongName: "전라남도 장흥군 장흥읍",
  },
  {
    dongCode: 46800253,
    dongName: "전라남도 장흥군 관산읍",
  },
  {
    dongCode: 46800256,
    dongName: "전라남도 장흥군 대덕읍",
  },
  {
    dongCode: 46800310,
    dongName: "전라남도 장흥군 용산면",
  },
  {
    dongCode: 46800320,
    dongName: "전라남도 장흥군 안양면",
  },
  {
    dongCode: 46800330,
    dongName: "전라남도 장흥군 장동면",
  },
  {
    dongCode: 46800340,
    dongName: "전라남도 장흥군 장평면",
  },
  {
    dongCode: 46800350,
    dongName: "전라남도 장흥군 유치면",
  },
  {
    dongCode: 46800360,
    dongName: "전라남도 장흥군 부산면",
  },
  {
    dongCode: 46800370,
    dongName: "전라남도 장흥군 회진면",
  },
  {
    dongCode: 46810250,
    dongName: "전라남도 강진군 강진읍",
  },
  {
    dongCode: 46810310,
    dongName: "전라남도 강진군 군동면",
  },
  {
    dongCode: 46810320,
    dongName: "전라남도 강진군 칠량면",
  },
  {
    dongCode: 46810330,
    dongName: "전라남도 강진군 대구면",
  },
  {
    dongCode: 46810340,
    dongName: "전라남도 강진군 도암면",
  },
  {
    dongCode: 46810350,
    dongName: "전라남도 강진군 신전면",
  },
  {
    dongCode: 46810360,
    dongName: "전라남도 강진군 성전면",
  },
  {
    dongCode: 46810370,
    dongName: "전라남도 강진군 작천면",
  },
  {
    dongCode: 46810380,
    dongName: "전라남도 강진군 병영면",
  },
  {
    dongCode: 46810390,
    dongName: "전라남도 강진군 옴천면",
  },
  {
    dongCode: 46810400,
    dongName: "전라남도 강진군 마량면",
  },
  {
    dongCode: 46820250,
    dongName: "전라남도 해남군 해남읍",
  },
  {
    dongCode: 46820310,
    dongName: "전라남도 해남군 삼산면",
  },
  {
    dongCode: 46820320,
    dongName: "전라남도 해남군 화산면",
  },
  {
    dongCode: 46820330,
    dongName: "전라남도 해남군 현산면",
  },
  {
    dongCode: 46820340,
    dongName: "전라남도 해남군 송지면",
  },
  {
    dongCode: 46820350,
    dongName: "전라남도 해남군 북평면",
  },
  {
    dongCode: 46820360,
    dongName: "전라남도 해남군 북일면",
  },
  {
    dongCode: 46820370,
    dongName: "전라남도 해남군 옥천면",
  },
  {
    dongCode: 46820380,
    dongName: "전라남도 해남군 계곡면",
  },
  {
    dongCode: 46820390,
    dongName: "전라남도 해남군 마산면",
  },
  {
    dongCode: 46820400,
    dongName: "전라남도 해남군 황산면",
  },
  {
    dongCode: 46820410,
    dongName: "전라남도 해남군 산이면",
  },
  {
    dongCode: 46820420,
    dongName: "전라남도 해남군 문내면",
  },
  {
    dongCode: 46820430,
    dongName: "전라남도 해남군 화원면",
  },
  {
    dongCode: 46830250,
    dongName: "전라남도 영암군 영암읍",
  },
  {
    dongCode: 46830253,
    dongName: "전라남도 영암군 삼호읍",
  },
  {
    dongCode: 46830310,
    dongName: "전라남도 영암군 덕진면",
  },
  {
    dongCode: 46830320,
    dongName: "전라남도 영암군 금정면",
  },
  {
    dongCode: 46830330,
    dongName: "전라남도 영암군 신북면",
  },
  {
    dongCode: 46830340,
    dongName: "전라남도 영암군 시종면",
  },
  {
    dongCode: 46830350,
    dongName: "전라남도 영암군 도포면",
  },
  {
    dongCode: 46830360,
    dongName: "전라남도 영암군 군서면",
  },
  {
    dongCode: 46830370,
    dongName: "전라남도 영암군 서호면",
  },
  {
    dongCode: 46830380,
    dongName: "전라남도 영암군 학산면",
  },
  {
    dongCode: 46830390,
    dongName: "전라남도 영암군 미암면",
  },
  {
    dongCode: 46840250,
    dongName: "전라남도 무안군 무안읍",
  },
  {
    dongCode: 46840253,
    dongName: "전라남도 무안군 일로읍",
  },
  {
    dongCode: 46840256,
    dongName: "전라남도 무안군 삼향읍",
  },
  {
    dongCode: 46840320,
    dongName: "전라남도 무안군 몽탄면",
  },
  {
    dongCode: 46840330,
    dongName: "전라남도 무안군 청계면",
  },
  {
    dongCode: 46840340,
    dongName: "전라남도 무안군 현경면",
  },
  {
    dongCode: 46840350,
    dongName: "전라남도 무안군 망운면",
  },
  {
    dongCode: 46840360,
    dongName: "전라남도 무안군 해제면",
  },
  {
    dongCode: 46840370,
    dongName: "전라남도 무안군 운남면",
  },
  {
    dongCode: 46860250,
    dongName: "전라남도 함평군 함평읍",
  },
  {
    dongCode: 46860310,
    dongName: "전라남도 함평군 손불면",
  },
  {
    dongCode: 46860320,
    dongName: "전라남도 함평군 신광면",
  },
  {
    dongCode: 46860330,
    dongName: "전라남도 함평군 학교면",
  },
  {
    dongCode: 46860340,
    dongName: "전라남도 함평군 엄다면",
  },
  {
    dongCode: 46860350,
    dongName: "전라남도 함평군 대동면",
  },
  {
    dongCode: 46860360,
    dongName: "전라남도 함평군 나산면",
  },
  {
    dongCode: 46860370,
    dongName: "전라남도 함평군 해보면",
  },
  {
    dongCode: 46860380,
    dongName: "전라남도 함평군 월야면",
  },
  {
    dongCode: 46870250,
    dongName: "전라남도 영광군 영광읍",
  },
  {
    dongCode: 46870253,
    dongName: "전라남도 영광군 백수읍",
  },
  {
    dongCode: 46870256,
    dongName: "전라남도 영광군 홍농읍",
  },
  {
    dongCode: 46870310,
    dongName: "전라남도 영광군 대마면",
  },
  {
    dongCode: 46870320,
    dongName: "전라남도 영광군 묘량면",
  },
  {
    dongCode: 46870330,
    dongName: "전라남도 영광군 불갑면",
  },
  {
    dongCode: 46870340,
    dongName: "전라남도 영광군 군서면",
  },
  {
    dongCode: 46870350,
    dongName: "전라남도 영광군 군남면",
  },
  {
    dongCode: 46870360,
    dongName: "전라남도 영광군 염산면",
  },
  {
    dongCode: 46870370,
    dongName: "전라남도 영광군 법성면",
  },
  {
    dongCode: 46870380,
    dongName: "전라남도 영광군 낙월면",
  },
  {
    dongCode: 46880250,
    dongName: "전라남도 장성군 장성읍",
  },
  {
    dongCode: 46880310,
    dongName: "전라남도 장성군 진원면",
  },
  {
    dongCode: 46880320,
    dongName: "전라남도 장성군 남면",
  },
  {
    dongCode: 46880330,
    dongName: "전라남도 장성군 동화면",
  },
  {
    dongCode: 46880340,
    dongName: "전라남도 장성군 삼서면",
  },
  {
    dongCode: 46880350,
    dongName: "전라남도 장성군 삼계면",
  },
  {
    dongCode: 46880360,
    dongName: "전라남도 장성군 황룡면",
  },
  {
    dongCode: 46880370,
    dongName: "전라남도 장성군 서삼면",
  },
  {
    dongCode: 46880380,
    dongName: "전라남도 장성군 북일면",
  },
  {
    dongCode: 46880390,
    dongName: "전라남도 장성군 북이면",
  },
  {
    dongCode: 46880400,
    dongName: "전라남도 장성군 북하면",
  },
  {
    dongCode: 46890250,
    dongName: "전라남도 완도군 완도읍",
  },
  {
    dongCode: 46890253,
    dongName: "전라남도 완도군 금일읍",
  },
  {
    dongCode: 46890256,
    dongName: "전라남도 완도군 노화읍",
  },
  {
    dongCode: 46890310,
    dongName: "전라남도 완도군 군외면",
  },
  {
    dongCode: 46890320,
    dongName: "전라남도 완도군 신지면",
  },
  {
    dongCode: 46890330,
    dongName: "전라남도 완도군 고금면",
  },
  {
    dongCode: 46890340,
    dongName: "전라남도 완도군 약산면",
  },
  {
    dongCode: 46890350,
    dongName: "전라남도 완도군 청산면",
  },
  {
    dongCode: 46890360,
    dongName: "전라남도 완도군 소안면",
  },
  {
    dongCode: 46890370,
    dongName: "전라남도 완도군 금당면",
  },
  {
    dongCode: 46890380,
    dongName: "전라남도 완도군 보길면",
  },
  {
    dongCode: 46890390,
    dongName: "전라남도 완도군 생일면",
  },
  {
    dongCode: 48121250,
    dongName: "경상남도 창원시 동읍",
  },
  {
    dongCode: 48121310,
    dongName: "경상남도 창원시 북면",
  },
  {
    dongCode: 48121320,
    dongName: "경상남도 창원시 대산면",
  },
  {
    dongCode: 48121510,
    dongName: "경상남도 창원시 의창동",
  },
  {
    dongCode: 48121520,
    dongName: "경상남도 창원시 팔룡동",
  },
  {
    dongCode: 48121530,
    dongName: "경상남도 창원시 명곡동",
  },
  {
    dongCode: 48121540,
    dongName: "경상남도 창원시 봉림동",
  },
  {
    dongCode: 48123510,
    dongName: "경상남도 창원시 반송동",
  },
  {
    dongCode: 48123515,
    dongName: "경상남도 창원시 용지동",
  },
  {
    dongCode: 48123520,
    dongName: "경상남도 창원시 중앙동",
  },
  {
    dongCode: 48123530,
    dongName: "경상남도 창원시 상남동",
  },
  {
    dongCode: 48123540,
    dongName: "경상남도 창원시 사파동",
  },
  {
    dongCode: 48123550,
    dongName: "경상남도 창원시 가음정동",
  },
  {
    dongCode: 48123560,
    dongName: "경상남도 창원시 성주동",
  },
  {
    dongCode: 48123570,
    dongName: "경상남도 창원시 웅남동",
  },
  {
    dongCode: 48125310,
    dongName: "경상남도 창원시 구산면",
  },
  {
    dongCode: 48125320,
    dongName: "경상남도 창원시 진동면",
  },
  {
    dongCode: 48125330,
    dongName: "경상남도 창원시 진북면",
  },
  {
    dongCode: 48125340,
    dongName: "경상남도 창원시 진전면",
  },
  {
    dongCode: 48125510,
    dongName: "경상남도 창원시 현동",
  },
  {
    dongCode: 48125520,
    dongName: "경상남도 창원시 가포동",
  },
  {
    dongCode: 48125530,
    dongName: "경상남도 창원시 월영동",
  },
  {
    dongCode: 48125540,
    dongName: "경상남도 창원시 문화동",
  },
  {
    dongCode: 48125565,
    dongName: "경상남도 창원시 반월중앙동",
  },
  {
    dongCode: 48125570,
    dongName: "경상남도 창원시 완월동",
  },
  {
    dongCode: 48125580,
    dongName: "경상남도 창원시 자산동",
  },
  {
    dongCode: 48125610,
    dongName: "경상남도 창원시 교방동",
  },
  {
    dongCode: 48125630,
    dongName: "경상남도 창원시 오동동",
  },
  {
    dongCode: 48125640,
    dongName: "경상남도 창원시 합포동",
  },
  {
    dongCode: 48125650,
    dongName: "경상남도 창원시 산호동",
  },
  {
    dongCode: 48127250,
    dongName: "경상남도 창원시 내서읍",
  },
  {
    dongCode: 48127510,
    dongName: "경상남도 창원시 회원1동",
  },
  {
    dongCode: 48127520,
    dongName: "경상남도 창원시 회원2동",
  },
  {
    dongCode: 48127545,
    dongName: "경상남도 창원시 석전동",
  },
  {
    dongCode: 48127550,
    dongName: "경상남도 창원시 회성동",
  },
  {
    dongCode: 48127560,
    dongName: "경상남도 창원시 양덕1동",
  },
  {
    dongCode: 48127570,
    dongName: "경상남도 창원시 양덕2동",
  },
  {
    dongCode: 48127580,
    dongName: "경상남도 창원시 합성1동",
  },
  {
    dongCode: 48127590,
    dongName: "경상남도 창원시 합성2동",
  },
  {
    dongCode: 48127600,
    dongName: "경상남도 창원시 구암1동",
  },
  {
    dongCode: 48127610,
    dongName: "경상남도 창원시 구암2동",
  },
  {
    dongCode: 48127620,
    dongName: "경상남도 창원시 봉암동",
  },
  {
    dongCode: 48129530,
    dongName: "경상남도 창원시 충무동",
  },
  {
    dongCode: 48129540,
    dongName: "경상남도 창원시 여좌동",
  },
  {
    dongCode: 48129550,
    dongName: "경상남도 창원시 태백동",
  },
  {
    dongCode: 48129560,
    dongName: "경상남도 창원시 경화동",
  },
  {
    dongCode: 48129570,
    dongName: "경상남도 창원시 병암동",
  },
  {
    dongCode: 48129580,
    dongName: "경상남도 창원시 석동",
  },
  {
    dongCode: 48129590,
    dongName: "경상남도 창원시 이동",
  },
  {
    dongCode: 48129600,
    dongName: "경상남도 창원시 자은동",
  },
  {
    dongCode: 48129610,
    dongName: "경상남도 창원시 덕산동",
  },
  {
    dongCode: 48129620,
    dongName: "경상남도 창원시 풍호동",
  },
  {
    dongCode: 48129630,
    dongName: "경상남도 창원시 웅천동",
  },
  {
    dongCode: 48129640,
    dongName: "경상남도 창원시 웅동1동",
  },
  {
    dongCode: 48129650,
    dongName: "경상남도 창원시 웅동2동",
  },
  {
    dongCode: 48170250,
    dongName: "경상남도 진주시 문산읍",
  },
  {
    dongCode: 48170310,
    dongName: "경상남도 진주시 내동면",
  },
  {
    dongCode: 48170320,
    dongName: "경상남도 진주시 정촌면",
  },
  {
    dongCode: 48170330,
    dongName: "경상남도 진주시 금곡면",
  },
  {
    dongCode: 48170350,
    dongName: "경상남도 진주시 진성면",
  },
  {
    dongCode: 48170360,
    dongName: "경상남도 진주시 일반성면",
  },
  {
    dongCode: 48170370,
    dongName: "경상남도 진주시 이반성면",
  },
  {
    dongCode: 48170380,
    dongName: "경상남도 진주시 사봉면",
  },
  {
    dongCode: 48840340,
    dongName: "경상남도 남해군 미조면",
  },
  {
    dongCode: 48840350,
    dongName: "경상남도 남해군 남면",
  },
  {
    dongCode: 48840360,
    dongName: "경상남도 남해군 서면",
  },
  {
    dongCode: 48840370,
    dongName: "경상남도 남해군 고현면",
  },
  {
    dongCode: 48840380,
    dongName: "경상남도 남해군 설천면",
  },
  {
    dongCode: 48840390,
    dongName: "경상남도 남해군 창선면",
  },
  {
    dongCode: 48850250,
    dongName: "경상남도 하동군 하동읍",
  },
  {
    dongCode: 48850310,
    dongName: "경상남도 하동군 화개면",
  },
  {
    dongCode: 48850320,
    dongName: "경상남도 하동군 악양면",
  },
  {
    dongCode: 48850330,
    dongName: "경상남도 하동군 적량면",
  },
  {
    dongCode: 48850340,
    dongName: "경상남도 하동군 횡천면",
  },
  {
    dongCode: 48850350,
    dongName: "경상남도 하동군 고전면",
  },
  {
    dongCode: 48850360,
    dongName: "경상남도 하동군 금남면",
  },
  {
    dongCode: 48850370,
    dongName: "경상남도 하동군 진교면",
  },
  {
    dongCode: 48850380,
    dongName: "경상남도 하동군 양보면",
  },
  {
    dongCode: 48850390,
    dongName: "경상남도 하동군 북천면",
  },
  {
    dongCode: 48850400,
    dongName: "경상남도 하동군 청암면",
  },
  {
    dongCode: 48850410,
    dongName: "경상남도 하동군 옥종면",
  },
  {
    dongCode: 48850420,
    dongName: "경상남도 하동군 금성면",
  },
  {
    dongCode: 48860250,
    dongName: "경상남도 산청군 산청읍",
  },
  {
    dongCode: 48860310,
    dongName: "경상남도 산청군 차황면",
  },
  {
    dongCode: 48860320,
    dongName: "경상남도 산청군 오부면",
  },
  {
    dongCode: 48860330,
    dongName: "경상남도 산청군 생초면",
  },
  {
    dongCode: 48860340,
    dongName: "경상남도 산청군 금서면",
  },
  {
    dongCode: 48860350,
    dongName: "경상남도 산청군 삼장면",
  },
  {
    dongCode: 48860360,
    dongName: "경상남도 산청군 시천면",
  },
  {
    dongCode: 48860370,
    dongName: "경상남도 산청군 단성면",
  },
  {
    dongCode: 48860380,
    dongName: "경상남도 산청군 신안면",
  },
  {
    dongCode: 48860390,
    dongName: "경상남도 산청군 생비량면",
  },
  {
    dongCode: 48860400,
    dongName: "경상남도 산청군 신등면",
  },
  {
    dongCode: 48870250,
    dongName: "경상남도 함양군 함양읍",
  },
  {
    dongCode: 48870310,
    dongName: "경상남도 함양군 마천면",
  },
  {
    dongCode: 48870320,
    dongName: "경상남도 함양군 휴천면",
  },
  {
    dongCode: 48870330,
    dongName: "경상남도 함양군 유림면",
  },
  {
    dongCode: 48870340,
    dongName: "경상남도 함양군 수동면",
  },
  {
    dongCode: 48870350,
    dongName: "경상남도 함양군 지곡면",
  },
  {
    dongCode: 48870360,
    dongName: "경상남도 함양군 안의면",
  },
  {
    dongCode: 48870370,
    dongName: "경상남도 함양군 서하면",
  },
  {
    dongCode: 48870380,
    dongName: "경상남도 함양군 서상면",
  },
  {
    dongCode: 48870390,
    dongName: "경상남도 함양군 백전면",
  },
  {
    dongCode: 48870400,
    dongName: "경상남도 함양군 병곡면",
  },
  {
    dongCode: 48880250,
    dongName: "경상남도 거창군 거창읍",
  },
  {
    dongCode: 48880310,
    dongName: "경상남도 거창군 주상면",
  },
  {
    dongCode: 48880320,
    dongName: "경상남도 거창군 웅양면",
  },
  {
    dongCode: 48880330,
    dongName: "경상남도 거창군 고제면",
  },
  {
    dongCode: 48880340,
    dongName: "경상남도 거창군 북상면",
  },
  {
    dongCode: 48880350,
    dongName: "경상남도 거창군 위천면",
  },
  {
    dongCode: 48880360,
    dongName: "경상남도 거창군 마리면",
  },
  {
    dongCode: 48880370,
    dongName: "경상남도 거창군 남상면",
  },
  {
    dongCode: 48880380,
    dongName: "경상남도 거창군 남하면",
  },
  {
    dongCode: 48880390,
    dongName: "경상남도 거창군 신원면",
  },
  {
    dongCode: 48880400,
    dongName: "경상남도 거창군 가조면",
  },
  {
    dongCode: 48880410,
    dongName: "경상남도 거창군 가북면",
  },
  {
    dongCode: 48890250,
    dongName: "경상남도 합천군 합천읍",
  },
  {
    dongCode: 48890310,
    dongName: "경상남도 합천군 봉산면",
  },
  {
    dongCode: 48890320,
    dongName: "경상남도 합천군 묘산면",
  },
  {
    dongCode: 48890330,
    dongName: "경상남도 합천군 가야면",
  },
  {
    dongCode: 48890340,
    dongName: "경상남도 합천군 야로면",
  },
  {
    dongCode: 48890350,
    dongName: "경상남도 합천군 율곡면",
  },
  {
    dongCode: 48890360,
    dongName: "경상남도 합천군 초계면",
  },
  {
    dongCode: 48890370,
    dongName: "경상남도 합천군 쌍책면",
  },
  {
    dongCode: 48890380,
    dongName: "경상남도 합천군 덕곡면",
  },
  {
    dongCode: 48890390,
    dongName: "경상남도 합천군 청덕면",
  },
  {
    dongCode: 48890400,
    dongName: "경상남도 합천군 적중면",
  },
  {
    dongCode: 48890410,
    dongName: "경상남도 합천군 대양면",
  },
  {
    dongCode: 48890420,
    dongName: "경상남도 합천군 쌍백면",
  },
  {
    dongCode: 48890430,
    dongName: "경상남도 합천군 삼가면",
  },
  {
    dongCode: 48890440,
    dongName: "경상남도 합천군 가회면",
  },
  {
    dongCode: 48890450,
    dongName: "경상남도 합천군 대병면",
  },
  {
    dongCode: 48890460,
    dongName: "경상남도 합천군 용주면",
  },
  {
    dongCode: 50110250,
    dongName: "제주특별자치도 제주시 한림읍",
  },
  {
    dongCode: 50110253,
    dongName: "제주특별자치도 제주시 애월읍",
  },
  {
    dongCode: 50110256,
    dongName: "제주특별자치도 제주시 구좌읍",
  },
  {
    dongCode: 50110259,
    dongName: "제주특별자치도 제주시 조천읍",
  },
  {
    dongCode: 50110310,
    dongName: "제주특별자치도 제주시 한경면",
  },
  {
    dongCode: 50110320,
    dongName: "제주특별자치도 제주시 추자면",
  },
  {
    dongCode: 50110330,
    dongName: "제주특별자치도 제주시 우도면",
  },
  {
    dongCode: 50110510,
    dongName: "제주특별자치도 제주시 일도1동",
  },
  {
    dongCode: 50110520,
    dongName: "제주특별자치도 제주시 일도2동",
  },
  {
    dongCode: 50110530,
    dongName: "제주특별자치도 제주시 이도1동",
  },
  {
    dongCode: 50110540,
    dongName: "제주특별자치도 제주시 이도2동",
  },
  {
    dongCode: 50110550,
    dongName: "제주특별자치도 제주시 삼도1동",
  },
  {
    dongCode: 50110560,
    dongName: "제주특별자치도 제주시 삼도2동",
  },
  {
    dongCode: 50110570,
    dongName: "제주특별자치도 제주시 용담1동",
  },
  {
    dongCode: 50110580,
    dongName: "제주특별자치도 제주시 용담2동",
  },
  {
    dongCode: 50110590,
    dongName: "제주특별자치도 제주시 건입동",
  },
  {
    dongCode: 50110600,
    dongName: "제주특별자치도 제주시 화북동",
  },
  {
    dongCode: 48170390,
    dongName: "경상남도 진주시 지수면",
  },
  {
    dongCode: 48170400,
    dongName: "경상남도 진주시 대곡면",
  },
  {
    dongCode: 48170410,
    dongName: "경상남도 진주시 금산면",
  },
  {
    dongCode: 48170420,
    dongName: "경상남도 진주시 집현면",
  },
  {
    dongCode: 48170430,
    dongName: "경상남도 진주시 미천면",
  },
  {
    dongCode: 48170440,
    dongName: "경상남도 진주시 명석면",
  },
  {
    dongCode: 48170450,
    dongName: "경상남도 진주시 대평면",
  },
  {
    dongCode: 48170460,
    dongName: "경상남도 진주시 수곡면",
  },
  {
    dongCode: 48170515,
    dongName: "경상남도 진주시 천전동",
  },
  {
    dongCode: 48170555,
    dongName: "경상남도 진주시 성북동",
  },
  {
    dongCode: 48170565,
    dongName: "경상남도 진주시 중앙동",
  },
  {
    dongCode: 48170595,
    dongName: "경상남도 진주시 상봉동",
  },
  {
    dongCode: 48170673,
    dongName: "경상남도 진주시 상대동",
  },
  {
    dongCode: 48170678,
    dongName: "경상남도 진주시 하대동",
  },
  {
    dongCode: 48170680,
    dongName: "경상남도 진주시 상평동",
  },
  {
    dongCode: 48170695,
    dongName: "경상남도 진주시 초장동",
  },
  {
    dongCode: 48170710,
    dongName: "경상남도 진주시 평거동",
  },
  {
    dongCode: 48170715,
    dongName: "경상남도 진주시 신안동",
  },
  {
    dongCode: 48170720,
    dongName: "경상남도 진주시 이현동",
  },
  {
    dongCode: 48170730,
    dongName: "경상남도 진주시 판문동",
  },
  {
    dongCode: 48170740,
    dongName: "경상남도 진주시 가호동",
  },
  {
    dongCode: 48170750,
    dongName: "경상남도 진주시 충무공동",
  },
  {
    dongCode: 48220250,
    dongName: "경상남도 통영시 산양읍",
  },
  {
    dongCode: 48220310,
    dongName: "경상남도 통영시 용남면",
  },
  {
    dongCode: 48220330,
    dongName: "경상남도 통영시 도산면",
  },
  {
    dongCode: 48220340,
    dongName: "경상남도 통영시 광도면",
  },
  {
    dongCode: 48220350,
    dongName: "경상남도 통영시 욕지면",
  },
  {
    dongCode: 48220360,
    dongName: "경상남도 통영시 한산면",
  },
  {
    dongCode: 48220370,
    dongName: "경상남도 통영시 사량면",
  },
  {
    dongCode: 48220510,
    dongName: "경상남도 통영시 도천동",
  },
  {
    dongCode: 48220530,
    dongName: "경상남도 통영시 명정동",
  },
  {
    dongCode: 48220550,
    dongName: "경상남도 통영시 중앙동",
  },
  {
    dongCode: 48220590,
    dongName: "경상남도 통영시 정량동",
  },
  {
    dongCode: 48220600,
    dongName: "경상남도 통영시 북신동",
  },
  {
    dongCode: 48220665,
    dongName: "경상남도 통영시 미수동",
  },
  {
    dongCode: 48220670,
    dongName: "경상남도 통영시 봉평동",
  },
  {
    dongCode: 48220700,
    dongName: "경상남도 통영시 무전동",
  },
  {
    dongCode: 48240250,
    dongName: "경상남도 사천시 사천읍",
  },
  {
    dongCode: 48240310,
    dongName: "경상남도 사천시 정동면",
  },
  {
    dongCode: 48240320,
    dongName: "경상남도 사천시 사남면",
  },
  {
    dongCode: 48240330,
    dongName: "경상남도 사천시 용현면",
  },
  {
    dongCode: 48240340,
    dongName: "경상남도 사천시 축동면",
  },
  {
    dongCode: 48240350,
    dongName: "경상남도 사천시 곤양면",
  },
  {
    dongCode: 48240360,
    dongName: "경상남도 사천시 곤명면",
  },
  {
    dongCode: 48240370,
    dongName: "경상남도 사천시 서포면",
  },
  {
    dongCode: 48240510,
    dongName: "경상남도 사천시 동서동",
  },
  {
    dongCode: 48240520,
    dongName: "경상남도 사천시 선구동",
  },
  {
    dongCode: 48240530,
    dongName: "경상남도 사천시 동서금동",
  },
  {
    dongCode: 48240550,
    dongName: "경상남도 사천시 벌용동",
  },
  {
    dongCode: 48240570,
    dongName: "경상남도 사천시 향촌동",
  },
  {
    dongCode: 48240595,
    dongName: "경상남도 사천시 남양동",
  },
  {
    dongCode: 48250250,
    dongName: "경상남도 김해시 진영읍",
  },
  {
    dongCode: 48250320,
    dongName: "경상남도 김해시 주촌면",
  },
  {
    dongCode: 48250330,
    dongName: "경상남도 김해시 진례면",
  },
  {
    dongCode: 48250340,
    dongName: "경상남도 김해시 한림면",
  },
  {
    dongCode: 48250350,
    dongName: "경상남도 김해시 생림면",
  },
  {
    dongCode: 48250360,
    dongName: "경상남도 김해시 상동면",
  },
  {
    dongCode: 48250370,
    dongName: "경상남도 김해시 대동면",
  },
  {
    dongCode: 48250510,
    dongName: "경상남도 김해시 동상동",
  },
  {
    dongCode: 48250520,
    dongName: "경상남도 김해시 회현동",
  },
  {
    dongCode: 48250530,
    dongName: "경상남도 김해시 부원동",
  },
  {
    dongCode: 48250540,
    dongName: "경상남도 김해시 내외동",
  },
  {
    dongCode: 48250550,
    dongName: "경상남도 김해시 북부동",
  },
  {
    dongCode: 48250565,
    dongName: "경상남도 김해시 칠산서부동",
  },
  {
    dongCode: 48250580,
    dongName: "경상남도 김해시 활천동",
  },
  {
    dongCode: 48250590,
    dongName: "경상남도 김해시 삼안동",
  },
  {
    dongCode: 48250600,
    dongName: "경상남도 김해시 불암동",
  },
  {
    dongCode: 48250610,
    dongName: "경상남도 김해시 장유1동",
  },
  {
    dongCode: 48250620,
    dongName: "경상남도 김해시 장유2동",
  },
  {
    dongCode: 48250630,
    dongName: "경상남도 김해시 장유3동",
  },
  {
    dongCode: 48270250,
    dongName: "경상남도 밀양시 삼랑진읍",
  },
  {
    dongCode: 48270253,
    dongName: "경상남도 밀양시 하남읍",
  },
  {
    dongCode: 48270310,
    dongName: "경상남도 밀양시 부북면",
  },
  {
    dongCode: 48270320,
    dongName: "경상남도 밀양시 상동면",
  },
  {
    dongCode: 48270330,
    dongName: "경상남도 밀양시 산외면",
  },
  {
    dongCode: 48270340,
    dongName: "경상남도 밀양시 산내면",
  },
  {
    dongCode: 48270350,
    dongName: "경상남도 밀양시 단장면",
  },
  {
    dongCode: 48270360,
    dongName: "경상남도 밀양시 상남면",
  },
  {
    dongCode: 48270370,
    dongName: "경상남도 밀양시 초동면",
  },
  {
    dongCode: 48270380,
    dongName: "경상남도 밀양시 무안면",
  },
  {
    dongCode: 48270390,
    dongName: "경상남도 밀양시 청도면",
  },
  {
    dongCode: 48270510,
    dongName: "경상남도 밀양시 내일동",
  },
  {
    dongCode: 48270520,
    dongName: "경상남도 밀양시 내이동",
  },
  {
    dongCode: 48270530,
    dongName: "경상남도 밀양시 삼문동",
  },
  {
    dongCode: 48270540,
    dongName: "경상남도 밀양시 가곡동",
  },
  {
    dongCode: 48270550,
    dongName: "경상남도 밀양시 교동",
  },
  {
    dongCode: 48310310,
    dongName: "경상남도 거제시 일운면",
  },
  {
    dongCode: 48310320,
    dongName: "경상남도 거제시 동부면",
  },
  {
    dongCode: 48310330,
    dongName: "경상남도 거제시 남부면",
  },
  {
    dongCode: 48310340,
    dongName: "경상남도 거제시 거제면",
  },
  {
    dongCode: 48310350,
    dongName: "경상남도 거제시 둔덕면",
  },
  {
    dongCode: 48310360,
    dongName: "경상남도 거제시 사등면",
  },
  {
    dongCode: 48310370,
    dongName: "경상남도 거제시 연초면",
  },
  {
    dongCode: 48310380,
    dongName: "경상남도 거제시 하청면",
  },
  {
    dongCode: 48310390,
    dongName: "경상남도 거제시 장목면",
  },
  {
    dongCode: 48310510,
    dongName: "경상남도 거제시 장승포동",
  },
  {
    dongCode: 48310530,
    dongName: "경상남도 거제시 능포동",
  },
  {
    dongCode: 48310540,
    dongName: "경상남도 거제시 아주동",
  },
  {
    dongCode: 48310550,
    dongName: "경상남도 거제시 옥포1동",
  },
  {
    dongCode: 48310560,
    dongName: "경상남도 거제시 옥포2동",
  },
  {
    dongCode: 48310570,
    dongName: "경상남도 거제시 장평동",
  },
  {
    dongCode: 48310580,
    dongName: "경상남도 거제시 고현동",
  },
  {
    dongCode: 48310590,
    dongName: "경상남도 거제시 상문동",
  },
  {
    dongCode: 48310600,
    dongName: "경상남도 거제시 수양동",
  },
  {
    dongCode: 48330253,
    dongName: "경상남도 양산시 물금읍",
  },
  {
    dongCode: 48330310,
    dongName: "경상남도 양산시 동면",
  },
  {
    dongCode: 48330320,
    dongName: "경상남도 양산시 원동면",
  },
  {
    dongCode: 48330330,
    dongName: "경상남도 양산시 상북면",
  },
  {
    dongCode: 48330340,
    dongName: "경상남도 양산시 하북면",
  },
  {
    dongCode: 48330510,
    dongName: "경상남도 양산시 중앙동",
  },
  {
    dongCode: 48330515,
    dongName: "경상남도 양산시 양주동",
  },
  {
    dongCode: 48330520,
    dongName: "경상남도 양산시 삼성동",
  },
  {
    dongCode: 48330530,
    dongName: "경상남도 양산시 강서동",
  },
  {
    dongCode: 48330540,
    dongName: "경상남도 양산시 서창동",
  },
  {
    dongCode: 48330550,
    dongName: "경상남도 양산시 소주동",
  },
  {
    dongCode: 48330560,
    dongName: "경상남도 양산시 평산동",
  },
  {
    dongCode: 48330570,
    dongName: "경상남도 양산시 덕계동",
  },
  {
    dongCode: 48720250,
    dongName: "경상남도 의령군 의령읍",
  },
  {
    dongCode: 48720310,
    dongName: "경상남도 의령군 가례면",
  },
  {
    dongCode: 48720320,
    dongName: "경상남도 의령군 칠곡면",
  },
  {
    dongCode: 48720330,
    dongName: "경상남도 의령군 대의면",
  },
  {
    dongCode: 48720340,
    dongName: "경상남도 의령군 화정면",
  },
  {
    dongCode: 48720350,
    dongName: "경상남도 의령군 용덕면",
  },
  {
    dongCode: 48720360,
    dongName: "경상남도 의령군 정곡면",
  },
  {
    dongCode: 48720370,
    dongName: "경상남도 의령군 지정면",
  },
  {
    dongCode: 48720380,
    dongName: "경상남도 의령군 낙서면",
  },
  {
    dongCode: 48720390,
    dongName: "경상남도 의령군 부림면",
  },
  {
    dongCode: 48720400,
    dongName: "경상남도 의령군 봉수면",
  },
  {
    dongCode: 48720415,
    dongName: "경상남도 의령군 궁류면",
  },
  {
    dongCode: 48720420,
    dongName: "경상남도 의령군 유곡면",
  },
  {
    dongCode: 48730250,
    dongName: "경상남도 함안군 가야읍",
  },
  {
    dongCode: 48730253,
    dongName: "경상남도 함안군 칠원읍",
  },
  {
    dongCode: 48730310,
    dongName: "경상남도 함안군 함안면",
  },
  {
    dongCode: 48730320,
    dongName: "경상남도 함안군 군북면",
  },
  {
    dongCode: 48730330,
    dongName: "경상남도 함안군 법수면",
  },
  {
    dongCode: 48730340,
    dongName: "경상남도 함안군 대산면",
  },
  {
    dongCode: 48730350,
    dongName: "경상남도 함안군 칠서면",
  },
  {
    dongCode: 48730360,
    dongName: "경상남도 함안군 칠북면",
  },
  {
    dongCode: 48730380,
    dongName: "경상남도 함안군 산인면",
  },
  {
    dongCode: 48730390,
    dongName: "경상남도 함안군 여항면",
  },
  {
    dongCode: 48740250,
    dongName: "경상남도 창녕군 창녕읍",
  },
  {
    dongCode: 48740253,
    dongName: "경상남도 창녕군 남지읍",
  },
  {
    dongCode: 48740310,
    dongName: "경상남도 창녕군 고암면",
  },
  {
    dongCode: 48740320,
    dongName: "경상남도 창녕군 성산면",
  },
  {
    dongCode: 48740330,
    dongName: "경상남도 창녕군 대합면",
  },
  {
    dongCode: 48740340,
    dongName: "경상남도 창녕군 이방면",
  },
  {
    dongCode: 48740350,
    dongName: "경상남도 창녕군 유어면",
  },
  {
    dongCode: 48740360,
    dongName: "경상남도 창녕군 대지면",
  },
  {
    dongCode: 48740370,
    dongName: "경상남도 창녕군 계성면",
  },
  {
    dongCode: 48740380,
    dongName: "경상남도 창녕군 영산면",
  },
  {
    dongCode: 48740390,
    dongName: "경상남도 창녕군 장마면",
  },
  {
    dongCode: 48740400,
    dongName: "경상남도 창녕군 도천면",
  },
  {
    dongCode: 48740410,
    dongName: "경상남도 창녕군 길곡면",
  },
  {
    dongCode: 48740420,
    dongName: "경상남도 창녕군 부곡면",
  },
  {
    dongCode: 48820250,
    dongName: "경상남도 고성군 고성읍",
  },
  {
    dongCode: 48820310,
    dongName: "경상남도 고성군 삼산면",
  },
  {
    dongCode: 48820320,
    dongName: "경상남도 고성군 하일면",
  },
  {
    dongCode: 48820330,
    dongName: "경상남도 고성군 하이면",
  },
  {
    dongCode: 48820340,
    dongName: "경상남도 고성군 상리면",
  },
  {
    dongCode: 48820350,
    dongName: "경상남도 고성군 대가면",
  },
  {
    dongCode: 48820360,
    dongName: "경상남도 고성군 영현면",
  },
  {
    dongCode: 48820370,
    dongName: "경상남도 고성군 영오면",
  },
  {
    dongCode: 48820380,
    dongName: "경상남도 고성군 개천면",
  },
  {
    dongCode: 48820390,
    dongName: "경상남도 고성군 구만면",
  },
  {
    dongCode: 48820400,
    dongName: "경상남도 고성군 회화면",
  },
  {
    dongCode: 48820410,
    dongName: "경상남도 고성군 마암면",
  },
  {
    dongCode: 48820420,
    dongName: "경상남도 고성군 동해면",
  },
  {
    dongCode: 48820430,
    dongName: "경상남도 고성군 거류면",
  },
  {
    dongCode: 48840250,
    dongName: "경상남도 남해군 남해읍",
  },
  {
    dongCode: 48840310,
    dongName: "경상남도 남해군 이동면",
  },
  {
    dongCode: 48840320,
    dongName: "경상남도 남해군 상주면",
  },
  {
    dongCode: 48840330,
    dongName: "경상남도 남해군 삼동면",
  },
  {
    dongCode: 47900250,
    dongName: "경상북도 예천군 예천읍",
  },
  {
    dongCode: 47900310,
    dongName: "경상북도 예천군 용문면",
  },
  {
    dongCode: 47900340,
    dongName: "경상북도 예천군 감천면",
  },
  {
    dongCode: 47900350,
    dongName: "경상북도 예천군 보문면",
  },
  {
    dongCode: 47900360,
    dongName: "경상북도 예천군 호명면",
  },
  {
    dongCode: 47900370,
    dongName: "경상북도 예천군 유천면",
  },
  {
    dongCode: 47900380,
    dongName: "경상북도 예천군 용궁면",
  },
  {
    dongCode: 47900390,
    dongName: "경상북도 예천군 개포면",
  },
  {
    dongCode: 47900400,
    dongName: "경상북도 예천군 지보면",
  },
  {
    dongCode: 47900410,
    dongName: "경상북도 예천군 풍양면",
  },
  {
    dongCode: 47900420,
    dongName: "경상북도 예천군 효자면",
  },
  {
    dongCode: 47900430,
    dongName: "경상북도 예천군 은풍면",
  },
  {
    dongCode: 47920250,
    dongName: "경상북도 봉화군 봉화읍",
  },
  {
    dongCode: 47920310,
    dongName: "경상북도 봉화군 물야면",
  },
  {
    dongCode: 47920320,
    dongName: "경상북도 봉화군 봉성면",
  },
  {
    dongCode: 47920330,
    dongName: "경상북도 봉화군 법전면",
  },
  {
    dongCode: 47920340,
    dongName: "경상북도 봉화군 춘양면",
  },
  {
    dongCode: 47920350,
    dongName: "경상북도 봉화군 소천면",
  },
  {
    dongCode: 47920360,
    dongName: "경상북도 봉화군 재산면",
  },
  {
    dongCode: 47920370,
    dongName: "경상북도 봉화군 명호면",
  },
  {
    dongCode: 47920380,
    dongName: "경상북도 봉화군 상운면",
  },
  {
    dongCode: 47920390,
    dongName: "경상북도 봉화군 석포면",
  },
  {
    dongCode: 47930250,
    dongName: "경상북도 울진군 울진읍",
  },
  {
    dongCode: 47930253,
    dongName: "경상북도 울진군 평해읍",
  },
  {
    dongCode: 47930310,
    dongName: "경상북도 울진군 북면",
  },
  {
    dongCode: 47930330,
    dongName: "경상북도 울진군 근남면",
  },
  {
    dongCode: 47930350,
    dongName: "경상북도 울진군 기성면",
  },
  {
    dongCode: 47930360,
    dongName: "경상북도 울진군 온정면",
  },
  {
    dongCode: 47930370,
    dongName: "경상북도 울진군 죽변면",
  },
  {
    dongCode: 47930380,
    dongName: "경상북도 울진군 후포면",
  },
  {
    dongCode: 47930390,
    dongName: "경상북도 울진군 금강송면",
  },
  {
    dongCode: 47930400,
    dongName: "경상북도 울진군 매화면",
  },
  {
    dongCode: 47940250,
    dongName: "경상북도 울릉군 울릉읍",
  },
  {
    dongCode: 47940310,
    dongName: "경상북도 울릉군 서면",
  },
  {
    dongCode: 47940320,
    dongName: "경상북도 울릉군 북면",
  },
  {
    dongCode: 50110610,
    dongName: "제주특별자치도 제주시 삼양동",
  },
  {
    dongCode: 50110620,
    dongName: "제주특별자치도 제주시 봉개동",
  },
  {
    dongCode: 50110630,
    dongName: "제주특별자치도 제주시 아라동",
  },
  {
    dongCode: 50110640,
    dongName: "제주특별자치도 제주시 오라동",
  },
  {
    dongCode: 50110650,
    dongName: "제주특별자치도 제주시 연동",
  },
  {
    dongCode: 50110660,
    dongName: "제주특별자치도 제주시 노형동",
  },
  {
    dongCode: 50110670,
    dongName: "제주특별자치도 제주시 외도동",
  },
  {
    dongCode: 50110680,
    dongName: "제주특별자치도 제주시 이호동",
  },
  {
    dongCode: 50110690,
    dongName: "제주특별자치도 제주시 도두동",
  },
  {
    dongCode: 50130250,
    dongName: "제주특별자치도 서귀포시 대정읍",
  },
  {
    dongCode: 50130253,
    dongName: "제주특별자치도 서귀포시 남원읍",
  },
  {
    dongCode: 50130259,
    dongName: "제주특별자치도 서귀포시 성산읍",
  },
  {
    dongCode: 50130310,
    dongName: "제주특별자치도 서귀포시 안덕면",
  },
  {
    dongCode: 50130320,
    dongName: "제주특별자치도 서귀포시 표선면",
  },
  {
    dongCode: 50130510,
    dongName: "제주특별자치도 서귀포시 송산동",
  },
  {
    dongCode: 50130520,
    dongName: "제주특별자치도 서귀포시 정방동",
  },
  {
    dongCode: 50130530,
    dongName: "제주특별자치도 서귀포시 중앙동",
  },
  {
    dongCode: 50130540,
    dongName: "제주특별자치도 서귀포시 천지동",
  },
  {
    dongCode: 50130550,
    dongName: "제주특별자치도 서귀포시 효돈동",
  },
  {
    dongCode: 50130560,
    dongName: "제주특별자치도 서귀포시 영천동",
  },
  {
    dongCode: 50130570,
    dongName: "제주특별자치도 서귀포시 동홍동",
  },
  {
    dongCode: 50130580,
    dongName: "제주특별자치도 서귀포시 서홍동",
  },
  {
    dongCode: 50130590,
    dongName: "제주특별자치도 서귀포시 대륜동",
  },
  {
    dongCode: 50130600,
    dongName: "제주특별자치도 서귀포시 대천동",
  },
  {
    dongCode: 50130610,
    dongName: "제주특별자치도 서귀포시 중문동",
  },
  {
    dongCode: 50130620,
    dongName: "제주특별자치도 서귀포시 예래동",
  },
];

export { dongData };
