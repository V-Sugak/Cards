import React, {useState} from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import s from "./TestsPage.module.css"

export const TestsPage = () => {
    const [value, setValue] = useState<string>("enter your text...")
    const [checked, setChecked] = useState<boolean>(false)
    const [text, setText] = useState<string>("")
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    return <div>
        <div className={s.inputBlock}>
            <div>
                <SuperInputText
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                />
            </div>
            <div>
                <SuperInputText value={text}
                                onChangeText={setText}
                                error={error}
                                onEnter={showAlert}/>
            </div>
        </div>
        <div>
            <SuperButton>default</SuperButton>
            <SuperButton
                red // пропсу с булевым значением не обязательно указывать true
                onClick={showAlert}
            >
                delete {/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton disabled>
                disabled
            </SuperButton>
        </div>
        <div>
            <SuperCheckbox
                id={'1'}
                children={'some text'}
                checked={checked}
                onChangeChecked={setChecked}

            />
        </div>
        <div className={s.editableBlock}>
            <SuperEditableSpan value={value} onChangeText={setValue}/>
        </div>
    </div>
}