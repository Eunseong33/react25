import React from 'react';

function Child() {
      console.log('자식호출');
      return (
            <div style={{ border: '3px solid dodgerblue' }}>
                  <div>
                        <h1>Child, 자식 컴포넌트</h1>
                  </div>
            </div>
      )
}
//부모가 렌더링이 일어나면 자식이 렌더링이 안되게 하는 함수
export default React.memo(Child);