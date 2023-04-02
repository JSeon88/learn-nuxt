# learn-nuxt

## 백엔드 Mock 서버

- [json-server](https://github.com/typicode/json-server)

## package.json

- axios
  - 버전 : 0.21.1
  - 1.x 버전 이슈 : require() of ES Module 이슈 있음
    [참고](https://github.com/axios/axios/issues/5091)

## nuxt.config.js

### 서버 포트 설정

```
  server: {
    port: 5000,
  },
```

### 전역 스타일시트 설정

```
  css: ['@/assets/css/reset.css'],
```

## nuxt

### asyncData

- pages 폴더 안에서만 사용 가능
- this를 사용한 데이터나 메소드 접근 불가
  - vue 인스턴스가 아닌 Nuxt.js의 컨텍스트 객체이기 때문
- asyncData에서 반환한 객체가 Vue 인스턴스의 data에 병합

#### context 속성

- asyncData 속성의 파라미터
  - 넉스트 프레임워크 전반에 걸쳐 공용으로 사용되는 속성
  - [context](https://nuxtjs.org/docs/internals-glossary/context/)
    ```
    const {
        app,
        store,
        route,
        params,
        query,
        env,
        isDev,
        isHMR,
        redirect,
        error,
        $config
      } = context
    ```

### 동적 라우팅

[동적 라우팅](https://develop365.gitlab.io/nuxtjs-0.10.7-doc/ko/guide/routing/#%EB%8F%99%EC%A0%81-%EB%9D%BC%EC%9A%B0%ED%8A%B8)

```
this.$router.push(`detail/${id}`)
```

- 동적으로 id를 받아와야 할 경우 폴더 구조는 다음과 같음

  ```
   pages
    L detail
      L _id.vue
  ```

  - \_{id}.vue 라는 이름으로 하게 되면 동적으로 id를 받아올 수 있게 됨

  ### Vuex

  [Vuex](https://v3.vuex.vuejs.org/kr/)

  [Vuex in Nuxt](https://nuxtjs.org/docs/directory-structure/store/)

  - 넉스트에서 뷰엑스를 사용하려면 `store` 폴더를 생성하고 그 밑에 index 파일을 생성하면 됨
  - 기본적으로 store 폴더가 없다면 뷰엑스 라이브러리는 자동으로 비활성화
    - 빌드 파일에 포함되지 않음

  #### nuxtServerInit(storeContext, nuxtContext)

  - 서버 사이드 렌더링 시점에 실행되기 때문에 스토어에 미리 데이터를 설정해 놓거나 서버에서만 접근할 수 있는 데이터를 다룰 때 유용
  - 첫 번째 파라미터는 [스토어의 컨텍스트](https://vuex.vuejs.org/guide/actions.html) 정보를 접근할 수 있는 객체
  - 두 번째 파라미터는 [넉스트의 컨텍스트](https://nuxtjs.org/docs/concepts/context-helpers/)정보가 담긴 객체
