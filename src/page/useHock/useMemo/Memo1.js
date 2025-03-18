import { useState, useMemo } from 'react'

export default function UseMemo1() {
      //child이 있음 useC
      // 
      // 
      // allBack. 건네줄 자식없음 useMemo를 쓴다. 

      const [math, setMath] = useState(0);
      const getMath = useMemo(() => {
            console.log('math🚀');
            return math;
      }, [math]);

      const [eng, setEng] = useState(0);
      const getEng = useMemo(() => {
            console.log('eng🌟');
            //여기 무슨 식이 있었음 확인하기 ㅎㅎ

            return eng;
      }, [eng]);

      //



      return (
            <div>
                  <h1> useMemo Exam</h1>
                  <input type="text" value={math} onChange={e => setMath(e.target.value)} />
                  {getMath}
                  <br />
                  <input type="text" value={eng} onChange={e => setEng(e.target.value)} />
                  {getEng}
            </div>
      )
}