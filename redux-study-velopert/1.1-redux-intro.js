// 1. 액션 타입 정의
// 상태에 어떠한 변화가 필요하면 액션이라는 것이 발생한다.
// 이는 하나의 객체로 표현되며 아래와 같은 형식으로 이루어져 있다.

const EXAMPLE = {
  type: "SWITCH_VALUE",
};

// 액션 객체는 반드시 type 필드를 가지고 있어야 하며, 이것은 액션의 이름이다.
// 그 외의 값들은 상태 업데이트 시 참고해야 할 값이며, 어떤 값이든 넣을 수 있다.

const EXAMPLE2 = {
  type: "INCREMENT_VALUE",
  data: {
    count: 1,
    text: "카운터를 증가합니다.",
  },
};

// 2. 액션 생성 함수
// 액션 생성 함수는 액션 객체를 만들어 주는 함수이다.

const addTodd = (data) => {
  return {
    type: "ADD_TODO",
    data,
  };
};

function changeInput(text) {
  return {
    type: "CHANGE_INPUT",
    text,
  };
}

// 변화를 일으켜야 할 때마다, 액션 객체를 만들어야 하는데, 매번 액션 객체를 직접 작성하기 번거로울 수도 있고, 만드는 과정에서 정보를 놓칠 수도 있다.
// 이러한 일을 방지하기 위해 함수로 만들어 관리한다.

// 3. 리듀서
// 리듀서는 변화를 일으키는 함수이다. 액션을 만들어 발생시키면, 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 온다. 그리고 두 값을 참고하여 새로운 상태를 만든다.

const initialState = {
  counter: 1,
};

function reducer(state = initialState, action) {
  // 이니셜 스테이트에 저장된 값이 파라미터, 위에 정의한 액션이 두 번째 파라미터
  switch (action.type) {
    // 어떤 타입의 액션인지 스위치 문으로 판독
    case INCREMENT: {
      //  INCREMENT일 경우 카운터 스테이트를 증가시킨다
      return {
        counter: state.counter + 1,
      };
    }
    default:
      // 아무것도 해당되지 않는 경우 스테이트를 그대로 반환
      return state;
  }
}

// 4. 스토어
// 프로젝트에 리덕스를 적용하기 위해 스토어를 만든다. 한 개의 프로젝트는 한 개의 스토어만 가지는 것이 권장된다.
// 스토어 내부에는 어플리케이션 상태와 리듀서가 들어있고, 내장 함수도 포함되어 있다.

// 5. 디스패치
// 디스패치는 스토어의 내장 함수 중 하나로, '액션을 발생시키는 것'이라고 이해하면 편하다. 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출한다.
// 이 함수가 호출되면 스토어는 리듀서 함수를 실행해서 새로운 상태를 만들어 준다.

// 6. 구독
// 스토어 내장 함수 중 하나로, subscribe 함수 안에 리스너 함수를 파라미터로 넣어 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트 될 때마다 호출된다.

const listener = () => {
  console.log("상태가 업데이트 됨");
};

const unsubscribe = store.subscribe(listner);

unsubscribe();
