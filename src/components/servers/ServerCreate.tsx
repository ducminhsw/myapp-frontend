import { Modal, Select } from "antd";
import { SampleIC } from "../../assets/images";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { createServer } from "../../services/serverService";
interface IServerProp {
  url?: string;
  onClick?: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (param: boolean) => void;
}
const ServerCreate = (props: IServerProp) => {
  let user = useSelector((state: RootState) => state.user);
  const [typeServer, setTypeServer] = useState(1);
  const handleOk = () => {
    console.log(user.verified);

    createServer({
      userId: user.userId,
      email: user.email,
      verified: user.verified,
      typeServer: typeServer,
      token: user.token,
    });
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };
  const handleChange = (param: { value: number; label: React.ReactNode }) => {
    console.log(param.value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    setTypeServer(param.value);
  };
  return (
    <>
      <div className="mb-3 " onClick={props.onClick}>
        <div className="flex flex-col items-center">
          <i className="fa-solid bg-[#33353a] fa-plus rounded-full w-12 h-12 overflow-hidden hover:opacity-50 cursor-pointer  text-center flex items-center justify-center"></i>
        </div>
      </div>
      <Modal
        title="Create New Server"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>UserId</p>
        <div>{user && user.userId}</div>
        <p>Email</p>
        <div>{user && user.email}</div>
        <p>Trạng thái verified của bạn</p>
        <p>Type Server</p>
        <Select
          labelInValue
          defaultValue={{ value: 1, label: "Public" }}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: 1,
              label: "Public",
            },
            {
              value: 2,
              label: "Private",
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default ServerCreate;
