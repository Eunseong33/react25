import Child from './Child';
import { useState, useCallback, useRef, useEffect } from 'react'

export default function Parent() {
      //부모와 자식을 같은 파일위치에 두면 안된다.

      console.log('부모호출  😀😃 😄 😁');

      const [count, setCount] = useState(0);

      //부모에서 자식 컴포넌트를 사용할 때에는 왠만하면  useCallBack 사용해줘야함.
      const handlerRandom = useCallback(() => {
            console.log('핸들러 랜덤 실행');
      }, []);

      return (
            <div>
                  <div style={{ border: '3px solid tomato' }}>
                        <h1>Parent</h1>

                        <input type="button"
                              value="값 증가"
                              onClick={
                                    () => setCount(count + 1)} />

                        <span> {count}</span>

                        <Child onHandlerEvent={handlerRandom} />

                  </div>
            </div>
      )
}