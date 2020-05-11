React

1.  기본개념[project-ex07]: 개발환경설정(Webpack, Babel)
    2가지 개념: 속성(property), 상태(state)

2.  virtual DOM: ReactDom API

3.  JSX

4.  Component

    4-1) Component Styling

    - inline[project-08]
    - hybirid(외부 css(SASS, LESS), Loader를 사용하여 전처리)
      (1)css 번들링(project-ex09)
      (2)css module(project-ex10)
      (3)css processor(SASS, LESS)

    4-2) Working With Form(Controller & Uncontrolled)(제어 컴포넌트 & 비제어 컴포넌트)(project-ex11)
    제어 컴포넌트
    (1) 컴포넌트 UI 인터페이스 외부에서는 직접 값(속성)을 변경할 수 없다.
    (2) 컴포넌트 UI 인터페이스 외부에서는 직접 값(상태)을 변경할 수 있다.
    (3) 외부에서 값(상태)을 변경할 수 있는 컴포넌트를 제어컴포넌트라고 한다.

    비제어 컴포넌트
    (1) 외부에서 값(상태)을 변경할 수 없는 컴포넌트를 비제어 컴포넌트라고 한다.
    (2) 비제어 컴포넌트도 사용처가 있다.(project-ex12)

    4-3) 속성 Validation(project-ex13)
    4-4) 상태(stateful) 컴포넌트 VS 순수(Pure) Component : 컴포넌트 작성/ 중첩의 원리
    4-5) 데이터 흐름 & Component간의 통신
    4-6) Component Life circle & Data Fetching(API 서버 사용)
    4-7) Immutablity(불변성)

5.  Routing
6.  Flux(Reactive Programming) : Redux(React.js), WebFlux(Spring), Nuxt(vue.js)
7.  Testing
8.  Performance Tuning
