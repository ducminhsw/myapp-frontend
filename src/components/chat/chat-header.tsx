import styled from "styled-components";
import {
    BsPinFill, BsThreadsFill, BsBellFill, BsPeopleFill,
    BsSearch, BsImageFill, BsQuestionCircleFill,
} from "react-icons/bs";

const StyleHeader = styled.div`
    &{
        display:flex;
        justify-content: space-between;
        padding:10px 20px
    }
    .content_right {
        display:flex;
        align-items: center;
        gap:15px;
        font-size: 20px;
    }

    .search{
        display:flex;
        border-radius: 5px;
        background-color: #1e1f22;
    }

    .lookup,input{
        padding:0px 5px;
        font-size: 24px;
    }
    
    input{
        outline:none;
        font-size: 14px;
        background-color: #1e1f22;
        width: 100px;
        transition: width 0.2s;
    }

    input:focus{
        width: 200px;
    }
`
// fas fa-bell

const ChatHeader = () => {
    return (
        <StyleHeader>
            <div># Name Channel</div>
            <div className="content_right">
                <BsThreadsFill />
                <BsBellFill />
                <BsPinFill />
                <BsPeopleFill style={{ fontSize: "24px" }} />
                <div className="search">
                    <input placeholder="Search" />
                    <BsSearch className="lookup" />
                </div>
                <BsImageFill />
                <BsQuestionCircleFill />
            </div>
        </StyleHeader>
    );
}

export default ChatHeader