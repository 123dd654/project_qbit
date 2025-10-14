export const tabs = ["추천메뉴","면류","밥류","요리부","사이드","음료"];

export const menuItems = [
  {
    id: 1,
    label: "BEST",
    name: "짜장면",
    price: 8000,
    imageUrl: "/img/menu01.jpg",
    desc: "달콤짭짤한 춘장 소스를 얹은 대표적인 중화면 요리",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },
    
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 10,
    label: "BEST",
    name: "잡채밥",
    price: 9000,
    imageUrl: "/img/menu10.png",
    desc: "쫄깃한 당면과 다양한 야채, 고기를 밥과 함께 즐기는 건강식",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },

    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
    {
    id: 13,
    label: "BEST",
    cate: "사이드",
    name: "군만두",
    price: 6000,
    imageUrl: "/img/menu13.png",
    desc: "겉은 바삭, 속은 촉촉! 손이 자꾸 가는 인기 만두",
    
    
  },
  {
    id: 2,
    label: "NEW",
    name: "깐쇼 새우",
    price: 35000,
    imageUrl: "/img/menu02.png",
    desc: "바삭하게 튀긴 새우에 새콤달콤 소스를 입힌 중화 요리의 대표 메뉴",
    optionFix: {
       type: "사이즈",
      label: "필수",
      text: [
        { name: "소", price: 0 },
        { name: "중", price: 5000 },
        { name: "대", price: 10000 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },

];

export const noodles = [
  {
    id: 1,
    label: "BEST",
    name: "짜장면",
    price: 8000,
    imageUrl: "/img/menu01.jpg",
    desc: "달콤짭짤한 춘장 소스를 얹은 대표적인 중화면 요리",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },
    
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 3,
    name: "짬뽕",
    price: 10000,
    imageUrl: "/img/menu03.png",
    desc: "얼큰하고 진한 국물에 각종 해물과 야채가 듬뿍 들어간 매콤한 면 요리",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 4,
    name: "울면",
    price: 10000,
    imageUrl: "/img/menu04.png",
    desc: "쫄깃한 면발과 매콤한 국물이 조화를 이루는 별미 중화면",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
    // option: {
    //   type: "양념",
    //   maxSelect: "0",
    //   label: "선택",
    //   text: [
    //     { name: "양념 추가", price: 500 },
    //     { name: "양념 빼기", price: 0 },
    //   ],
    // },
  },
  {
    id: 5,
    name: "우동",
    price: 9000,
    imageUrl: "/img/menu05.png",
    desc: "부드러운 면과 깊은 국물 맛이 일품인 따끈한 일본식 면 요리",
     optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },
    
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 6,
    name: "굴짬뽕",
    price: 13000,
    imageUrl: "/img/menu06.png",
    desc: "신선한 굴과 해물이 듬뿍, 얼큰한 국물로 속까지 따뜻해지는 맛",
     optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },

    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },

];

export const Rice = [
    {
    id: 7,
    name: "볶음밥",
    price: 9000,
    imageUrl: "/img/menu07.png",
    desc: "야채와 고기를 함께 볶아 풍미 가득, 한 그릇으로 든든한 메뉴",
     optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },
    
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 8,
    name: "짜장밥",
    price: 9000,
    imageUrl: "/img/menu08.png",
    desc: "달콤한 춘장 소스와 밥이 만나 누구나 좋아하는 정통 중화요리",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },

    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 9,
    name: "짬뽕밥",
    price: 9000,
    imageUrl: "/img/menu09.png",
    desc: "얼큰한 짬뽕 국물에 밥을 비벼 먹는 색다른 맛의 조합",
     optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },

    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 10,
    label: "BEST",
    name: "잡채밥",
    price: 9000,
    imageUrl: "/img/menu10.png",
    desc: "쫄깃한 당면과 다양한 야채, 고기를 밥과 함께 즐기는 건강식",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },

    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 11,
    name: "새우볶음밥",
    price: 12000,
    imageUrl: "/img/menu11.png",
    desc: "통통한 새우와 고슬고슬 볶은 밥이 만난 인기 메뉴",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기 변경", price: 1000 },
      ],
    },

    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
];

export const prepare_dish = [
  {
    id: 12,
    name: "탕수육",
    price: 23000,
    imageUrl: "/img/menu12.png",
    desc: "바삭한 튀김과 새콤달콤 소스가 어우러진 누구나 좋아하는 중화요리",
    optionFix: {
       type: "사이즈",
      label: "필수",
      text: [
        { name: "소", price: 0 },
        { name: "중", price: 5000 },
        { name: "대", price: 10000 },
      ],
    },
    
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 2,
    label: "NEW",
    name: "깐쇼 새우",
    price: 35000,
    imageUrl: "/img/menu02.png",
    desc: "바삭하게 튀긴 새우에 새콤달콤 소스를 입힌 중화 요리의 대표 메뉴",
    optionFix: {
       type: "사이즈",
      label: "필수",
      text: [
        { name: "소", price: 0 },
        { name: "중", price: 5000 },
        { name: "대", price: 10000 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  
  {
    id: 21,
    name: "깐풍기",
    price: 35000,
    imageUrl: "/img/menu21.png",
    desc: "바삭하게 튀긴 닭고기에 매콤달콤한 소스와 마늘 향을 더한 인기 요리",
    optionFix: {
       type: "사이즈",
      label: "필수",
      text: [
        { name: "소", price: 0 },
        { name: "중", price: 5000 },
        { name: "대", price: 10000 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  
  {
    id: 22,
    name: "팔보채",
    price: 35000,
    imageUrl: "/img/menu22.png",
    desc: "해산물과 채소를 푸짐하게 볶아낸 고급 중화요리",
    optionFix: {
       type: "사이즈",
      label: "필수",
      text: [
        { name: "소", price: 0 },
        { name: "중", price: 5000 },
        { name: "대", price: 10000 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  
  {
    id: 23,
    name: "고추잡채",
    price: 35000,
    imageUrl: "/img/menu23.png",
    desc: "아삭한 피망과 부드러운 돼지고기를 간장 소스로 볶아 꽃빵과 곁들이는 별미",
    optionFix: {
       type: "사이즈",
      label: "필수",
      text: [
        { name: "소", price: 0 },
        { name: "중", price: 5000 },
        { name: "대", price: 10000 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },

];


export const sideMenus = [
  {
    id: 13,
    label: "BEST",
    cate: "사이드",
    name: "군만두",
    price: 6000,
    imageUrl: "/img/menu13.png",
    desc: "겉은 바삭, 속은 촉촉! 손이 자꾸 가는 인기 만두",
    
    
  },
  {
    id: 14,
    cate: "사이드",
    name: "물만두",
    price: 6000,
    imageUrl: "/img/menu14.png",
    desc: "부드럽고 촉촉한 속이 일품, 담백하게 즐기는 만두 요리",
    
  },
  {
    id: 24,
    cate: "사이드",
    name: "멘보샤",
    price: 4000,
    imageUrl: "/img/menu24.png",
    desc: "겉은 바삭, 속은 탱글한 새우살이 가득! 고소하고 풍미 가득한 한 입 요리",
    
  },
  {
    id: 25,
    cate: "사이드",
    name: "튀김 꽃빵",
    price: 4000,
    imageUrl: "/img/menu25.png",
    desc: "겹겹이 살아있는 부드러운 식감, 달콤한 연유와 함께 즐기는 담백한 별미",
    
  },
  {
    id: 15,
    cate: "사이드",
    name: "밥 추가",
    price: 1000,
    imageUrl: "/img/menu15.png",
    desc: "밥 한공기 추가",
    
  },
  {
    id: 16,
    label: "soldout",
    name: "꽃빵 5개",
    price: 6000,
    imageUrl: "/img/menu16.png",
    
  },
];

export const drinkMenus = [
  {
    id: 17,
    cate: "음료",
    name: "코카콜라",
    price: 2000,
    imageUrl: "/img/menu17.jpg", 
    
  },
  {
    id: 18,
    cate: "음료",
    name: "스프라이트",
    price: 6000,
    imageUrl: "/img/menu18.jpg",
    
  },
  {
    id: 19,
    cate: "음료",
    name: "환타",
    price: 1000,
    imageUrl: "/img/menu19.jpg",
    
  },
  {
    id: 20,
    cate: "음료",
    name: "닥터페퍼",
    price: 1000,
    imageUrl: "/img/menu20.jpg",
    
  },
];

