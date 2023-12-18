import styled from "styled-components";
import { MutableRefObject, useEffect, useRef } from 'react';
import { BsPlusCircleFill, BsGiftFill, BsEmojiDizzyFill } from "react-icons/bs";
import { FaTh } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";

const StyleChatInput = styled.div`
&{
    display:flex;
    padding:10px 0px;
    margin: 0px 20px 20px 20px;
    background-color:#3B3B3B;
    border-radius:8px;
}

& > .icon:first-child{
    margin:0px 10px;
}

textarea {
    flex:1;
    outline: none;
    overflow:hidden;
    resize:none;
}
.right_content{
    display:flex;
    padding:0px 10px;
    gap:10px;
}

.icon{
    font-size:24px;
}

`

const ChatInput = () => {

    const textHeight: MutableRefObject<HTMLTextAreaElement | null> = useRef(null)

    function handleResize() {
        if (textHeight.current) {
            textHeight.current.style.height = 'auto';
            textHeight.current.style.height = textHeight.current.scrollHeight + 'px';
        }
    }

    useEffect(() => {
        if (textHeight.current) {
            textHeight.current.addEventListener('input', handleResize);
        }
        return () => textHeight.current?.removeEventListener('input', handleResize)
    }, [])

    return (
        <StyleChatInput >
            <BsPlusCircleFill className="icon" />
            <textarea ref={textHeight} rows={1} placeholder={`Message Channel Name`} />
            <section className="right_content">
                <BsGiftFill className="icon" />
                <FaArrowsToDot className="icon" />
                <FaTh className="icon" />
                <BsEmojiDizzyFill className="icon" />
            </section>
        </StyleChatInput>
    )
}

export default ChatInput