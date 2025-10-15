# 테이블 오더 시스탬 Qbit 서비스 기획서

## 01. 기획의도, 브리프, 목표, 타겟

📍 기획의도<br />
QBIT은 오프라인 매장에서 발생하는 대기 시간, 불편한 메뉴 접근성, 주문 병목 현상을 해결하고자 기획되었습니다.<br />
QR코드를 활용해 누구나 빠르고 쉽게 주문할 수 있는 시스템을 통해, 고객의 편의성과 점주의 운영 효율성을 동시에 향상시키는 것을 목표로 합니다.<br />

🎯 목표
- 테이블에서 바로 주문이 가능한 비대면 서비스 제공<br />
- 여러 사용자가 동시에 메뉴를 보고 주문할 수 있는 환경 구현<br />
- 키오스크 및 메뉴판의 한계를 보완하여 사용자 경험 향상<br />
<br />
👥 타겟 

- 소규모 음식점 및 카페 운영자<br />
- QR 기반 비대면 주문 시스템을 도입하고자 하는 점주<br />
- 모바일을 통한 간편한 주문을 선호하는 20~40대 소비자층<br />

QR 테이블 오더를 구현한 시스템 포트폴리오 입니다.

## 프로젝트 개요

프로젝트 큐빗은 기존의 불편했던 메뉴판과 키오스크를 대체할 QR주문을 제시합니다. 멀리 붙어있는 메뉴판, 테이블당 한두개 있는 메뉴판, 줄서서 주문해야하는 키오스크, 이제 큐빗을 이용해 기다림과 불편함 없이 QR스캔으로 여러명이 같이 메뉴판을 보며 주문합니다. 큐빗은 동시에 메뉴판을 보며 서로의 메뉴를 확인하며 주문이 가능합니다.

## 사이트 QR
<img width="300" height="290" alt="Image" src="https://github.com/user-attachments/assets/f5caacc7-eebc-403f-a1cd-08223d26184f" />
<br /><br />
- QR 코드를 스캔하면 바로 메뉴에 접속하고 주문할 수 있는 웹 서비스입니다.<br />
- 모바일 화면 기준으로 UI가 최적화되어 있어 스마트폰에서 확인하는 것을 추천드립니다.<br />
- 본 QR코드는 데모용으로 실제 테스트 영상은 아래를 봐주시길 바랍니다.

## 실제 테스트 영상

![Image](https://github.com/user-attachments/assets/c7c92cf6-e350-41d5-ac70-7ad0c32a7e0d)
![Image](https://github.com/user-attachments/assets/9195fb47-8e7a-4218-8f03-df4815376565)

## 사용 스택

프론트엔드 - Next.js
백엔드 - node.js express
데이터베이스 - mongodb

## 설치 라이브러리

작업시 필요한 라이브러리를 정리했습니다.

```
npx create-next-app@latest
npm i sass
npm i gsap
npm i swiper
npm install react-slick
npm install slick-carousel

sudo npm install socket.io socket.io-client
npm install --save react-lottie-player
npm install react-lottie
```
# project_qbit
