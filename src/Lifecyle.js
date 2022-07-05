import { useEffect, useState } from "react";

const Lifecyle = () => {

/*
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    //Mount 된 순간인 처음 랜더링 됐을 때만 실행
    useEffect(() => {
        console.log('Mount!');
    }, [])
    //두 번째 인자 배열은 dependency array라고 함

    //update될 때마다 실행
    useEffect(() => {
        console.log('Update!');
    })

    //count가 업데이트 될 때마다 실행
    useEffect(() => {
        console.log(`count is update : ${count}`);
        if(count > 5) {
            alert('count가 5를 넘었습니다. 1로 초기화됩니다.');
            setCount(1);
        }
    }, [count])

    //text 업데이트 될 때마다 실행
    useEffect(() => {
        console.log(`text is update : ${text}`);
    }, [text])


    return (
        <div style={{ padding: 20 }}>
            <div>
                {count}
                <button onClick={() => setCount(count+1)}>+</button>
            </div>
            <div>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
                
            </div>
        </div>
    );
*/

    const UnmountTest = () => {
        useEffect(() => {
            console.log('Mount!');

            return () => {
                //Unmount 시점에 실행
                console.log('Unmount!');
            };

        }, []);

        return (
            <div>Unmout Testing Component</div>
        );
    }

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest/>}
        </div>
    );

}

export default Lifecyle;