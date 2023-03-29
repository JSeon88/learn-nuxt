# learn-nuxt

## 백엔드 Mock 서버

- [json-server](https://github.com/typicode/json-server)

## package.json

- axios
  - 버전 : 0.21.1
  - 1.x 버전 이슈 : require() of ES Module 이슈 있음
    [참고](https://github.com/axios/axios/issues/5091)

## nuxt

### asyncData

- pages 폴더 안에서만 사용 가능
- this를 사용한 데이터나 메소드 접근 불가
  - vue 인스턴스가 아닌 Nuxt.js의 컨텍스트 객체이기 때문
- asyncData에서 반환한 객체가 Vue 인스턴스의 data에 병합
