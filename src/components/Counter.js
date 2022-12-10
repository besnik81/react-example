import { useMemo, useRef, useState } from "react";

export function Counter({ max }) {
  let [count, setCount] = useState(0);

  const isDisabled = useMemo(() => count >= max, [count, max]);

  // const myObj = {
  //   x: 7,
  //   a: 4,
  //   b: 8,
  // };
  //
  // // const mySecondObj = {
  // //   a: 4,
  // //   x: 5,
  // // };
  //
  // Object.keys(myObj); // ['a', 'b']  ['b', 'a']
  // Object.values(myObj); // [4, 8]    [8, 4]
  // Object.entries(myObj); // [['a', 4], ['b', 8]]
  // const lst = Object.entries(myObj).map(([key, value]) => {
  //   return (
  //     <div key={key}>
  //       <span>{key} = </span>
  //       <span>{value}</span>
  //     </div>
  //   );
  // });

  // const onSave = useCallback(() => {}, []);

  const ref = useRef();

  return (
    <div ref={ref}>
      <hr />
      <span
        style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {count}
      </span>
      <button disabled={isDisabled} onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}
