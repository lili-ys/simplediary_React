import { useContext } from 'react';
import { DiaryStateContext } from './App';
import DiaryItem from './DiaryItem';

const DiaryList = () => {
    const diaryList = useContext(DiaryStateContext);
    
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    );
}

//Props가 undefined일 때 디폴트값으로 넣어줄 props객체
DiaryList.defaultProps = {
    diaryList: []
}

export default DiaryList;