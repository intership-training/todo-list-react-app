import {Button, Input} from "antd";
import {ChangeEvent, FC, useEffect, useState} from "react";

type props = {
    name: string[]
    onUpdate?: (data: string | null) => void
}
export const Update: FC<props> = ({
                                      name,
                                      onUpdate
                                  }) => {

    const [input, setInput] = useState<string>()

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }
    const onClickUpdate = () => {
        const n = input && input.length > 0 ? input : null
        if (n){
            onUpdate?.(n)
        }
        setInput("")
    }

    useEffect(() => {
        console.log('nameArr', name)
    }, [name])

    return (
        <div className="update-style">
            <Input style={{width: "max"}} value={input} onChange={onChange}/>
            <Button style={{marginTop: 20}} type="default" onClick={onClickUpdate}>
                Add
            </Button>
        </div>
    )
}
