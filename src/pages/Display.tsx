import {useState} from "react";
import {Update} from "./Update";
import { Button } from "antd";
export const Display = () => {
    const [nameArr, setNameArr] = useState<string[]>([])
    const [history, setHistory] = useState<string[]>([])
    const [showHistory, setShowHistory] = useState<boolean>(false);

    const onUpdate = (data: string | null) => {
        if (data) {
            setNameArr(prevState => [...prevState, data])
         }
         setHistory(preArr => [...preArr, `Intern Profile: add intern name = ${data}`])
         setShowHistory(true)
    }
    
    const deleteItem = (index: number) => {
        const name = nameArr[index];
        setNameArr(prevArr => prevArr.filter((_, i) => i !== index));
        setHistory(prevArr => [...prevArr, `Intern Profile: delete intern name = ${name}`])
    }
    return (
        <>
            <div style={{marginBottom : 20}}>My Company</div>
            <div>Intern name:</div>
            <Update name={nameArr} onUpdate={onUpdate}/>
            <div style={{marginTop: 20}}>
                
                    {nameArr.map((name, index) => (
                        <div className="name-list" key={index}>{name} 
                            <Button style={{border: 'none', borderRadius: 4, fontSize: 14, margin: 4}} className="del-btn" onClick={() => deleteItem(index)}>X</Button>
                        </div>
                    ))}
                
            </div>
            {showHistory && (
                <div>
                    <h3 style={{color: "crimson"}}>History</h3>
                    <Button danger onClick={() => {
                                                    setHistory([]); 
                                                    setShowHistory(false)}}
                        >Clear History
                    </Button>
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>{item}</li>
                        )).reverse()}
                    </ul>
                </div>
            )}
        </>
    )
}
