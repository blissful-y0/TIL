{
  // Union

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);

    move("left");
    move("right");
    // move("go!"); => compile Error!!

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    type SuccessState = {
      response: {
        body: string;
      };
    };

    type FailState = {
      reason: string;
    };

    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState {
      return {
        response: {
          body: "logged in",
        },
      };
    }

    // printLoginState(state)
    // success -> return body
    // fail => return sad

    function printLoginState(state: LoginState): void {
      if ("response" in state) {
        console.log(`grats! ${state.response.body}`);
      } else {
        console.log(`failed! ${state.reason}`); // not good!
      }
    }
  }
}
