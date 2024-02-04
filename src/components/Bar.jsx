
import './Bar.css';

function Bar({answer, activeBars, onClick}){
    return (
        <div className={activeBars.includes(answer.id) ? "bar open" : "bar"} onClick={onClick}>
            <div className='container'>
                <div className='container1'>
                    <h3 className={activeBars.includes(answer.id) ? 'num colored' : 'num'}>{'0'+answer.id}</h3>
                    <h3 className={activeBars.includes(answer.id) ? 'title colored' : 'title'}>{answer.title}</h3>
                </div>
                <div className='container2'>
                    <h5 className='symbol'>{activeBars.includes(answer.id) ? '-' : '+'}</h5>
                </div>
            </div>
            {activeBars.includes(answer.id)  && <p className='text'>{answer.text}</p>}
        </div>
    )

}

export default Bar