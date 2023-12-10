import FriendItem from "./components/FriendItem";

export default function Friends() {
  return (
    <div className="p-8 w-full">
      <h3 className="mb-5">All Friends - 5</h3>
      <FriendItem userName="dat.nguyenkim" onlineStatus={true} />
      <FriendItem userName="duy.vuduc" onlineStatus={true} />
      <FriendItem userName="trung.doquang" onlineStatus={false} />
      <FriendItem userName="minh.nguyenduc" onlineStatus={false} />
    </div>
  );
}
